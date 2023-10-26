"use client"

import { ButtonMinusPlus } from "@/components/button-minus-plus";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SheetTrigger } from "@/components/ui/sheet";
import { ProductHelper } from "@/helpers/productHelper";
import { useCartContext } from "@/providers/cart-context";
import { Product } from "@prisma/client";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";


interface Props {
    product: Product;
}
export function ButtonAddCart({ product }: Props) {

    const { onAddCart } = useCartContext();


    const [quantity, setQuantity] = useState(1);

    return (
        <div className="flex gap-4 justify-center flex-wrap sm:flex-nowrap">
            <ButtonMinusPlus quantity={quantity}
                onMinusQuantity={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}
                onPlusQuantity={() => setQuantity(quantity + 1)}
            />
            <SheetTrigger asChild id="cart">
                <Button onClick={() => onAddCart({ ...product, quantity })} className="flex-1 p-5 text-sm font-bold uppercase overflow-hidden whitespace-nowrap text-ellipsis max-w-xs min-w-[200px]">Adicionar ao carrinho</Button>
            </SheetTrigger>

        </div>
    )
}