import { BadgeTitlePage } from "@/components/badge-title-page"
import { Container } from "@/components/container"
import { ProductCard } from "@/components/product-card"
import { fetchAPI } from "@/lib/fetch-api"
import { Product } from "@prisma/client"
import { Home } from "lucide-react"
import Link from "next/link"
import type { NextRequest } from "next/server"
import DealsPage from "../deals/page"
import { redirect } from "next/navigation"
import { SectionTitle } from "@/components/section-title"


async function getProducts(query: string): Promise<Product[]> {

    // aguarda 3 segundos para demorar a consulta
    await new Promise(resolve => setTimeout(resolve, 3000))
    const response = await fetchAPI(`/products/search?q=${query}`, { next: { tags: ["search"] } });
    return await response.json();
}

interface Props {
    searchParams: {
        q: string;
    }
}

export default async function SearchPage({ searchParams }: Props) {

    const query = searchParams.q;

    if (!query) {
        redirect('/');
    }

    const products = await getProducts(query)

    return (
        <Container>
            {products.length === 0 && (
                <div className="flex flex-col items-center my-10 justify-center gap-4">
                    Nenhum resultado encontrado
                </div>
            )}

            {products.length > 0 && (
                <>

                    <p className="text-sm">
                        Resultados para: <span className="font-bold">{query}</span>
                    </p>


                    <hr className="my-5 border-0" />

                    <div className="grid grid-cols-1  xxs:grid-cols-2 xs:flex flex-wrap w-full gap-4 justify-center items-center">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                    <hr className="my-14 border-0" />
                </>
            )}


            <DealsPage />

        </Container>

    )
}