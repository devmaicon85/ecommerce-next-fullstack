import { BadgeTitlePage } from "@/components/badge-title-page"
import { ProductCard } from "@/components/product-card"
import { categoryIcon } from "@/constants/category-icons"
import { prismaClient } from "@/lib/prisma"
import { CatalogCategories } from "../components/catalogCategories"
import Link from "next/link"
import { SectionTitle } from "@/components/section-title"
import { Home } from "lucide-react"

export default async function CategoryProducts({ params }: { params: { slug: string } }) {



    const categoryProducts = await prismaClient.category.findFirst({
        where: {
            slug: params.slug
        },
        select: {
            name: true,
            slug: true,
            products: true
        }
    })

    return (
        <div className="container">
            <hr className="my-5 border-0" />


            {!categoryProducts && <CatalogCategories />}


            {categoryProducts && (
                <>
                    <div className="flex items-center gap-2">
                        <BadgeTitlePage>
                            <Link href={"/"}><Home size={14} /></Link>/
                            <Link href={"/categories/home"}>Catálogo</Link>/
                            <span>{categoryProducts.name}</span>
                        </BadgeTitlePage>
                    </div>
                    <hr className="my-5 border-0" />
                    <div className="flex w-full gap-4 justify-center px-5 flex-wrap">
                        {categoryProducts.products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <hr className="my-14 border-0" />
                </>
            )}


        </div>
    )
}