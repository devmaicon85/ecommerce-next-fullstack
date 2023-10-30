import { BadgeTitlePage } from "@/components/badge-title-page"
import { Container } from "@/components/container"
import { ProductCard } from "@/components/product-card"
import { fetchAuthenticated } from "@/lib/fetch-authenticate"
import { prismaClient } from "@/lib/prisma"
import { Product } from "@prisma/client"
import { Home } from "lucide-react"
import Link from "next/link"



async function GetDealsProducts(): Promise<Product[]> {
    const response = await fetchAuthenticated(`/products/deals`);
    const products = await response.json()
    return products
}

export default async function DealsPage() {

    const dealsProducts = await GetDealsProducts();

    return (
        <Container>

            {dealsProducts.length > 0 && (
                <>

                    <BadgeTitlePage>
                        <Link href={"/"}><Home size={14} /></Link>/
                        <span>OFERTAS</span>
                    </BadgeTitlePage>

                    <hr className="my-5 border-0" />

                    <div className="grid grid-cols-1  xxs:grid-cols-2 xs:flex flex-wrap w-full gap-4 justify-center items-center">
                        {dealsProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <hr className="my-14 border-0" />
                </>
            )}

        </Container>


    )
}