import { Badge } from "@/components/ui/badge"
import { CalculatePriceDiscount } from "@/helpers/calculatePriceDiscount"
import { FormatCurrency } from "@/helpers/formatCurrency"
import { prismaClient } from "@/lib/prisma"
import { cn } from "@/lib/utils"
import { ArrowDownIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default async function ProductPage({ params }: { params: { slug: string, image: number } }) {



    const product = await prismaClient.product.findFirst({
        where: {
            slug: params.slug
        },

    })


    if (!product) {
        return <div>Produto não encontrado</div>
    }

    return (
        <div className="relative">
            <div className="flex flex-col  sticky top-0">
                <hr className="my-5 border-0" />
                <div className="flex flex-col ">
                    <div className=" p-5 bg-accent min-w-[300px] min-h-[300px] w-full flex justify-center items-center">
                        <Image src={product.imageUrls[params.image]} alt={product.name} width={0} height={0} sizes="300px" className="w-auto h-auto" />
                    </div>
                </div>
            </div >

            <div className="bg-background opacity-95 rounded-t-3xl left-0 right-0 py-10 flex flex-col justify-center items-center w-full ">


                {/* IMAGES ADICIONAIS */}
                <div className="flex gap-4 sm:justify-center  w-full overflow-x-auto px-6 [&::-webkit-scrollbar]:hidden">
                    {product.imageUrls.map((image, index) => (
                        // shallow={true} -> Atualize o caminho da página atual sem executar novamente getStaticProps, getServerSideProps ou getInitialProps.
                        // scroll={false} -> Não da Scroll na página ao clicar no link
                        // replace={true} -> Substitui a ultima página do histórico de navegação para que ao clicar em voltar, volte para a página anterior e não imagem anterior
                        <Link shallow={true} scroll={false} replace={true} href={`/product/${product.slug}/${index}`} key={index}>
                            <div className={cn(`border cursor-pointer bg-accent rounded-lg min-h-[100px] min-w-[100px] w-full flex max-w-[100px] justify-center items-center p-4 mb-4`,
                                +params.image === +index ? "border-primary" : ""
                            )}>
                                <Image src={image} alt={product.name} width={0} height={0} sizes="100px" className="w-auto h-auto " />
                            </div>
                        </Link>
                    ))}
                </div>


                <div className="container flex-1">

                    <hr className="my-5 border-0" />

                    <div className="text-lg text-ellipsis w-full overflow-hidden whitespace-nowrap">{product.name}</div>
                    <div className="text-primary brightness-200 text-base">Disponível em estoque</div>

                    <hr className="my-5 border-0" />

                    <div className="gap-2 flex flex-col">
                        {product.discountPercentage > 0 &&
                            <>
                                <div className="text-2xl relative font-bold flex flex-col gap-2  ">
                                    <div className="flex gap-2">
                                        {FormatCurrency(CalculatePriceDiscount(+product.basePrice, product.discountPercentage))}

                                        {product.discountPercentage > 0 &&
                                            <Badge className="text-sm bg-primary rounded-full px-3 h-7 flex gap-1 items-center">
                                                <ArrowDownIcon size={10} /> {product.discountPercentage}%
                                            </Badge>
                                        }
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


                    <hr className="my-5 border-0" />



                    <div className="opacity-50 text-sm  text-justify leading-6">
                        {product.description}
                    </div>


                </div>
            </div>
        </div>
    )
}