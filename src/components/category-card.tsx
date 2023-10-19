import Image from "next/image";
import { Category } from "@prisma/client";

interface Props {

    category: Category
}

export function CategoryCard({ category }: Props) {


    return (
        <div className="flex flex-col justify-center items-center ">
            <div className="cursor-pointer hover:scale-105 transition-all duration-150  rounded-t-xl rounded-b-lg  overflow-hidden">
                <div className="relative bg-gradient-to-tl to-primary from-background h-44 w-48 sm:w-44 xl:w-48 md:w-44 flex justify-center items-center p-4">
                    <Image src={category.imageUrl} alt={category.name} width={0} height={0} sizes="300px" className="w-auto h-auto " />
                </div>
                <div className="text-sm font-bold text-center py-2 w-full opacity-75 bg-accent text-ellipsis  overflow-hidden whitespace-nowrap">{category.name}</div>
            </div>
        </div>
    )
}