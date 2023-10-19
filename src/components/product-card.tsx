import { CalculatePriceDiscount } from "@/helpers/calculatePriceDiscount";
import { FormatCurrency } from "@/helpers/formatCurrency";
import { Product } from "@prisma/client";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { BadgeDiscount } from "./badge-discount";

interface Props {

    product: Product
}

export function ProductCard({ product }: Props) {


    return (

        <div className="flex flex-col cursor-pointer hover:scale-105 transition-all duration-150 ">

            <Link href={`/product/${product.slug}/0`}>
                <div className="relative bg-accent rounded-lg h-44 w-40 flex justify-center items-center p-4 mb-4">
                    <BadgeDiscount className="absolute top-2 left-2">
                        {product.discountPercentage}
                    </BadgeDiscount>
                    <Image src={product.imageUrls[0]} alt={product.name} width={0} height={0} sizes="300px" className="w-auto h-auto " />
                </div>
                <div className="text-xs text-ellipsis w-40 overflow-hidden whitespace-nowrap">{product.name}</div>
                <div className="gap-2 flex items-center ">
                    {product.discountPercentage > 0 && <>
                        <span className="text-base font-bold ">{FormatCurrency(CalculatePriceDiscount(+product.basePrice, product.discountPercentage))}</span>
                        <span className="text-xs opacity-50 font-extralight line-through">{FormatCurrency(+product.basePrice)}</span></>
                    }
                    {product.discountPercentage === 0 && <>
                        <span className="text-base font-bold ">{FormatCurrency(+product.basePrice)}</span></>
                    }
                </div>
            </Link>

        </div>
    )
}