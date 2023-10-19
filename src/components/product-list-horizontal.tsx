import { ProductCard } from "@/components/product-card"
import { Product } from "@prisma/client"

interface Props {

    products: Product[]
}

export function ProductListHorizontal({ products }: Props) {


    return (

        <div className="flex w-full gap-4  px-5 overflow-x-auto [&::-webkit-scrollbar]:hidden">

            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}