import { BadgeTitlePage } from "@/components/badge-title-page"
import { Container } from "@/components/container"
import { ProductCard } from "@/components/product-card"
import { prismaClient } from "@/lib/prisma"
import { Home } from "lucide-react"
import Link from "next/link"

export default async function DealsPage() {



    const dealsProducts = await prismaClient.product.findMany({
        where: {
            discountPercentage: {
                gt: 0
            }
        }
    })

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