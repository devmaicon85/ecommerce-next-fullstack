import { Badge } from "@/components/ui/badge";
import { categoryIcon } from "@/constants/category-icons";
import { Category } from "@prisma/client";
import Link from "next/link";



export async function Categories() {

    const res = await fetch('http://localhost:3000/api/categories', { cache: 'no-cache' })

    const categories: Category[] = await res.json()
    console.log("🚀 ~ file: categories.tsx:18 ~ Categories ~ categories:", categories)

   

    return (

        <>
            {categories.map((category) => (
                <Link href={`/categories/${category.slug}`} key={category.id}>
                    <Badge key={category.id} variant={"outline"} className="py-3 flex justify-center gap-2 cursor-pointer hover:bg-primary" >
                        {categoryIcon[category.slug as keyof typeof categoryIcon]}
                        <span className="text-xs font-bold">{category.name}</span>
                    </Badge>
                </Link>
            ))}
        </>
    )
}