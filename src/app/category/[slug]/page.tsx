import { BadgeTitlePage } from "@/components/badge-title-page"
import { ProductCard } from "@/components/product-card"
import { ProductListHorizontal } from "@/components/product-list-horizontal"
import { categoryIcon } from "@/constants/category-icons"
import { prismaClient } from "@/lib/prisma"

export default async function CategoryProducts({ params }: { params: { slug: string } }) {



    const categoryProducts = await prismaClient.category.findFirstOrThrow({
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

            <BadgeTitlePage>{categoryIcon[categoryProducts.slug as keyof typeof categoryIcon]}{categoryProducts.name}</BadgeTitlePage>

            <hr className="my-5 border-0" />


            <div className="flex w-full gap-4 justify-center px-5 flex-wrap">

                {categoryProducts.products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>

        </div>
    )
}