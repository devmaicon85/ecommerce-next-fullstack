import { BadgeTitlePage } from "@/components/badge-title-page"
import { ProductCard } from "@/components/product-card"
import { categoryIcon } from "@/constants/category-icons"
import { prismaClient } from "@/lib/prisma"
import { CatalogCategories } from "../components/catalogCategories"
import Link from "next/link"
import { SectionTitle } from "@/components/section-title"
import { Home } from "lucide-react"
import { Container } from "@/components/container"
import { fetchAuthenticated } from "@/lib/fetch-authenticate"
import { Category, Product } from "@prisma/client"


type CategoryProductsProps = Category & {
    products: Product[]
}
async function GetCategoryProducts(slug: string):Promise<CategoryProductsProps> {
    const response = await fetchAuthenticated(`/categories/${slug}`);

    const categoriesProducts = await response.json();
    return categoriesProducts;
}

export default async function CategoryProducts({ params }: { params: { slug: string } }) {

    const categoryProducts = await GetCategoryProducts(params.slug);

    return (
        <Container>

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
                    <div className="grid grid-cols-1 xxs:grid-cols-2 xs:flex w-full gap-4 justify-center px-5 flex-wrap">
                        {categoryProducts.products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <hr className="my-14 border-0" />
                </>
            )}


        </Container>
    )
}