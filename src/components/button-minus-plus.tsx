import { Minus, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { useCartContext } from "@/providers/cart-context";


interface Props {
    quantity: number;
    onMinusQuantity: () => void;
    onPlusQuantity: () => void;
}
export function ButtonMinusPlus({ onPlusQuantity, onMinusQuantity, quantity }: Props) {
   
    return (

        <>
            <Button className="w-10 p-0" variant={"outline"} onClick={onMinusQuantity}>
                <Minus size={14} />
            </Button>
            <span className="w-10 flex justify-center items-center">{quantity}</span>
            <Button className="w-10 p-0" variant={"outline"} onClick={onPlusQuantity}>
                <Plus size={14} />
            </Button>

        </>
    )
}