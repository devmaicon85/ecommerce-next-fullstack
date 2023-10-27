import { FormatCurrency } from "@/helpers/formatCurrency";
import { Product } from "@prisma/client";
import { ArrowDownIcon, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { BadgeDiscount } from "../badge-discount";
import { ButtonMinusPlus } from "../button-minus-plus";
import { CartProduct, useCartContext } from "@/providers/cart-context";
import { Button } from "../ui/button";
import { ProductHelper } from "@/helpers/productHelper";

interface Props {

    product: CartProduct
}

export function CartItem({ product }: Props) {

    const { onPlusQuantity, onMinusQuantity, onRemoveCart } = useCartContext();

    return (

        <div className="flex  gap-2  ">

            <div className="relative bg-accent rounded-lg h-24 w-24 min-h-[6rem] min-w-[6rem] flex justify-center items-center p-4 mb-4">

                <Image src={product.imageUrls[0]} alt={product.name} width={0} height={0} sizes="300px" className="w-auto h-auto " />
            </div>
            <div className="flex flex-col">
                <div className="text-xs text-ellipsis w-full overflow-hidden whitespace-nowrap">{product.name}</div>
                <div className="gap-2 flex items-center ">
                    {product.discountPercentage > 0 && <>
                        <span className="text-base font-bold ">{FormatCurrency(ProductHelper.calculate(product).totalPrice)}</span>
                        <span className="text-xs opacity-50 font-extralight line-through">{FormatCurrency(+product.basePrice)}</span></>
                    }
                    {product.discountPercentage === 0 && <>
                        <span className="text-base font-bold ">{FormatCurrency(+product.basePrice)}</span></>
                    }
                </div>

                <hr className="my-2 border-0" />

                <div className="flex">
                    <ButtonMinusPlus quantity={product.quantity}
                        onPlusQuantity={() => onPlusQuantity(product)}
                        onMinusQuantity={() => onMinusQuantity(product)}
                    />
                </div>

            </div>

            <div className="w-full  justify-end flex">
                <Button onClick={() => onRemoveCart(product)} variant={"outline"} className="hover:bg-destructive" size="icon">
                    <Trash size={16} />
                </Button>
            </div>



        </div>
    )
}