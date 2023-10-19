import { Category } from "@prisma/client";
import { Badge } from "@/components/ui/badge";
import { Headphones, HeadphonesIcon, KeyboardIcon, Monitor, MonitorIcon, MouseIcon, SpeakerIcon, SquareIcon } from "lucide-react";
import Link from "next/link";
import { categoryIcon } from "@/constants/category-icons";



export async function Categories() {

    const res = await fetch('http://localhost:3000/api/categories', { cache: 'no-cache' })

    const categories: Category[] = await res.json()
    console.log("🚀 ~ file: categories.tsx:18 ~ Categories ~ categories:", categories)

   

    return (

        <>
            {categories.map((category) => (
                <Link href={`/category/${category.slug}`} key={category.id}>
                    <Badge key={category.id} variant={"outline"} className="py-3 flex justify-center gap-2 cursor-pointer hover:bg-primary" >
                        {categoryIcon[category.slug as keyof typeof categoryIcon]}
                        <span className="text-xs font-bold">{category.name}</span>
                    </Badge>
                </Link>
            ))}
        </>
    )
}