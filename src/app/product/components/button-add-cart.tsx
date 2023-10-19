"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";


interface Props {
    productId: string;
}
export function ButtonAddCart({ productId }: Props) {

    const [quantity, setQuantity] = useState(1);

    function handleQuantityMinus() {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    function handleQuantityPlus() {
        setQuantity(quantity + 1)
    }

    return (
        <div className="flex gap-4 justify-center flex-wrap sm:flex-nowrap">
            <Button className="w-10 p-0" variant={"outline"} onClick={handleQuantityMinus}><Minus size={14} /></Button>

            <span className="w-10 flex justify-center items-center">{quantity}</span>

            <Button className="w-10 p-0" variant={"outline"} onClick={handleQuantityPlus}><Plus size={14} /></Button>

            <Button className="flex-1 p-5 text-sm font-bold uppercase overflow-hidden whitespace-nowrap text-ellipsis max-w-xs min-w-[200px]">Adicionar ao carrinho</Button>
        </div>
    )
}