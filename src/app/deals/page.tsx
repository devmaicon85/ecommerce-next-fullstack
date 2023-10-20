import { BadgeTitlePage } from "@/components/badge-title-page"
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
        <div className="md:container  px-5 ">

            <hr className="my-5 border-0" />

            {dealsProducts.length > 0 && (
                <>

                    <BadgeTitlePage>
                            <Link href={"/"}><Home size={14} /></Link>/
                            <span>OFERTAS</span>
                        </BadgeTitlePage>
                    
                    <hr className="my-5 border-0" />

                    <div className="flex flex-wrap w-full gap-4 justify-center">
                        {dealsProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <hr className="my-14 border-0" />
                </>
            )}

        </div>


    )
}