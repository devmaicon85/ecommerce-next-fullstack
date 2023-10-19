import { Truck } from "lucide-react";

export function BannerFreeShopping() {

    return (
        <div className="flex w-full bg-accent items-center px-5 py-2 mx-auto justify-between gap-1  rounded-lg">
            <div className=" mr-4 items-center hidden sm:flex ">
                <Truck size={28} />
            </div>
            <div className="flex flex-1 flex-col text-sm whitespace-nowrap">
                <p className="">Entrega via <span className="text-font-bold">FSPacket</span></p>
                <p className="text-primary brightness-200 ">Envio para <span className="font-bold">todo Brasil</span></p>
            </div>
            <p className="text-base font-bold whitespace-nowrap px-4">Frete Grátis</p>

        </div>
    )
}