"use client"

import { Sheet } from "@/components/ui/sheet";
import { ProductHelper, ProductWithTotalPrice } from "@/helpers/productHelper";
import { Product } from "@prisma/client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

export interface CartProduct extends Product {
    quantity: number;
}

interface ICartContext {
    products: CartProduct[];
    cartTotalPrice: number;
    cartBasePrice: number;
    cartTotalDiscount: number;
    cartShoppingValue: number;
    onAddCart: (product: CartProduct) => void;
    onMinusQuantity: (product: CartProduct) => void;
    onPlusQuantity: (product: CartProduct) => void;
    onRemoveCart: (product: CartProduct) => void;
}


const CartContext = createContext<ICartContext>({
    products: [],
    cartTotalPrice: 0,
    cartBasePrice: 0,
    cartShoppingValue: 0,
    cartTotalDiscount: 0,
    onAddCart: () => { },
    onMinusQuantity: () => { },
    onPlusQuantity: () => { },
    onRemoveCart: () => { },
})



export const CartProvider = ({ children }: { children: React.ReactNode }) => {

    const nameCartStorage = "@fullstack:cart"



    const [products, setProducts] = useState<CartProduct[]>([]);


    useEffect(() => {
        const getCartStorage = localStorage.getItem(nameCartStorage);
        const initialCart = getCartStorage ? JSON.parse(getCartStorage) : [];

        if(initialCart.length > 0) {
            setProducts(initialCart);
        }
    }, [])


    useEffect(() => {
        localStorage.setItem(nameCartStorage, JSON.stringify(products));

    }, [products])

    function handleMinusQuantity(product: CartProduct) {
        const productIndex = products.findIndex((p) => p.id === product.id);

        if (productIndex >= 0) {
            const newProducts = [...products];
            newProducts[productIndex].quantity -= 1;

            if (newProducts[productIndex].quantity === 0) {
                newProducts.splice(productIndex, 1);
            }

            setProducts(newProducts);
        }
    }

    function handlePlusQuantity(product: CartProduct) {
        const productIndex = products.findIndex((p) => p.id === product.id);

        if (productIndex >= 0) {
            const newProducts = [...products];
            newProducts[productIndex].quantity += 1;
            setProducts(newProducts);
        }
    }

    function handleAddCart(product: CartProduct) {
        const productIndex = products.findIndex((p) => p.id === product.id);

        if (productIndex >= 0) {
            const newProducts = [...products];
            newProducts[productIndex].quantity += product.quantity;
            setProducts(newProducts);
        } else {
            setProducts([...products, product]);
        }
    }

    function handleRemoveCart(product: CartProduct) {
        const productIndex = products.findIndex((p) => p.id === product.id);

        if (productIndex >= 0) {
            const newProducts = [...products];
            newProducts.splice(productIndex, 1);
            setProducts(newProducts);
        }
    }




    const subTotal = useMemo(() => {
        return products.reduce((acc, product) => acc + (+product.basePrice * product.quantity), 0)
    }, [products])


    const totalGeral = useMemo(() => {

        return products.reduce((acc, product) => acc + (ProductHelper.calculate(product).totalPrice * product.quantity), 0)
    }, [products])


    const totalDiscount = subTotal - totalGeral;

    return (
        <CartContext.Provider value={{
            products,
            cartTotalPrice: totalGeral,
            cartBasePrice: subTotal,
            cartShoppingValue: 0,
            cartTotalDiscount: totalDiscount,
            onAddCart: (product: CartProduct) => handleAddCart(product),
            onMinusQuantity: (product: CartProduct) => handleMinusQuantity(product),
            onPlusQuantity: (product: CartProduct) => handlePlusQuantity(product),
            onRemoveCart: (product: CartProduct) => handleRemoveCart(product),
        }}>
            <Sheet key={"cart"} >
                {children}
            </Sheet>
        </CartContext.Provider>
    )
}

export const useCartContext = () => useContext(CartContext);