import { FormatCurrency } from "@/helpers/formatCurrency"
import { prismaClient } from "@/lib/prisma"
import { cn } from "@/lib/utils"
import { ArrowDownIcon, Home, Truck, TruckIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ButtonAddCart } from "../../components/button-add-cart"
import { Category, Product } from "@prisma/client"
import { BadgeTitlePage } from "@/components/badge-title-page"
import { ProductCard } from "@/components/product-card"
import { SectionTitle } from "@/components/section-title"
import { ProductListHorizontal } from "@/components/product-list-horizontal"
import { CatalogCategories } from "@/app/categories/components/catalogCategories"
import { BannerFreeShopping } from "@/components/banner-free-shopping"
import { BadgeDiscount } from "@/components/badge-discount"
import { ProductHelper } from "@/helpers/productHelper"
import { Container } from "@/components/container"
import { Metadata } from "next"
import { fetchAPI } from "@/lib/fetch-api"

type ProductItem = Product & {
    Category: Category & {
        products: Product[];
    }
}
async function getProduct(slug: string): Promise<ProductItem> {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const response = await fetchAPI(`/product/${slug}`, { next: { tags: ["product"] } });
    return await response.json();
}


export async function generateMetadata({ params }: { params: { slug: string, image: number } }): Promise<Metadata> {

    const product = await getProduct(params.slug);
    return {
        title: product.name,
    }

};


export default async function ProductPage({ params }: { params: { slug: string, image: number } }) {

    const product = await getProduct(params.slug)
    const imageIndex = params.image || 0;



    if (!product) {
        return <div>Produto não encontrado</div>
    }


    return (
        <div>

            <div className="flex flex-col  sticky top-0 -z-10">
                <hr className="my-5 border-0" />
                <div className="flex flex-col bg-accent w-full items-center justify-center">
                    <div className=" p-5 flex justify-center items-center min-w-[300px] min-h-[300px] max-w-[300px] max-h-[300px] ">
                        <Image src={product.imageUrls[imageIndex]} alt={product.name} width={0} height={0} sizes="300px" className="w-auto h-auto" />
                    </div>
                </div>
            </div >

            <div className="bg-background opacity-[0.98] rounded-t-3xl left-0 right-0 py-10 flex flex-col justify-center items-center w-full ">


                {/* IMAGES ADICIONAIS */}
                <div className="flex gap-4 sm:justify-center  w-full overflow-x-auto px-6 [&::-webkit-scrollbar]:hidden">
                    {product.imageUrls.map((image, index) => (
                        // shallow={true} -> Atualize o caminho da página atual sem executar novamente getStaticProps, getServerSideProps ou getInitialProps.
                        // scroll={false} -> Não da Scroll na página ao clicar no link
                        // replace={true} -> Substitui a ultima página do histórico de navegação para que ao clicar em voltar, volte para a página anterior e não imagem anterior
                        <Link shallow={true} scroll={false} replace={true} href={`/product/${product.slug}/${index}`} key={index}>
                            <div className={cn(`border cursor-pointer bg-accent rounded-lg w-[100px] h-[100px] overflow-hidden  flex justify-center items-center p-2`,
                                +params.image === +index ? "border-primary" : ""
                            )}>
                                <Image src={image} alt={product.name} width={0} height={0} sizes="100px" style={{ objectFit: "contain" }} className="w-auto h-auto" />
                            </div>
                        </Link>
                    ))}
                </div>


                <div className="container flex-1">

                    <hr className="my-5 border-0" />

                    <div className="text-lg text-ellipsis w-full overflow-hidden whitespace-nowrap">{product.name}</div>
                    <div className="text-primary brightness-200 text-base">Disponível em estoque</div>

                    <hr className="my-5 border-0" />

                    {/* <ProductPrice product={product} /> */}


                    <div className="opacity-50 text-sm  text-justify leading-6">
                        {product.description}
                    </div>

                    <hr className="my-5 border-0" />

                    <ProductPrice product={product} />

                    <hr className="my-10 border-0" />


                    <div className="flex flex-wrap gap-8 items-center justify-center ">
                        <div className="flex-1">
                            <BannerFreeShopping />
                        </div>
                        <div className="flex-1 flex justify-center lg:justify-end">
                            <ButtonAddCart product={product} />
                        </div>
                    </div>

                </div>





            </div>




            <div className="bg-background w-full flex flex-col">



                <hr className="my-10 border-0" />


                {/* PRODUTOS RECOMENDADOS */}
                <div className="flex flex-col bg-background md:container">
                    <SectionTitle>PRODUTOS RECOMENDADOS</SectionTitle>
                    <ProductListHorizontal products={product.Category.products} />
                </div>


                <hr className="my-10 border-0" />

            </div>


        </div>
    )
}



interface ProductPriceProps {

    product: Product

}

function ProductPrice({ product }: ProductPriceProps) {

    return (

        <div className="gap-2 flex flex-col">
            {product.discountPercentage > 0 &&
                <>
                    <div className="text-2xl relative font-bold flex flex-col gap-2  ">
                        <div className="flex gap-2">
                            {FormatCurrency(ProductHelper.calculate(product).totalPrice)}
                            <BadgeDiscount>{product.discountPercentage}</BadgeDiscount>
                        </div>

                        <div className="text-base opacity-50 flex top-8 absolute font-extralight line-through">
                            De: {FormatCurrency(+product.basePrice)}
                        </div>
                    </div>

                </>
            }
            {product.discountPercentage === 0 && <>
                <span className="text-2xl font-bold ">{FormatCurrency(+product.basePrice)}</span></>
            }
        </div>

    )
}


