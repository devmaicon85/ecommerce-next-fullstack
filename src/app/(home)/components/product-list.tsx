import { ProductCard } from "@/components/product-card"
import { Product } from "@prisma/client"

interface Props {

    products: Product[]
}

export function ProductList({ products }: Props) {


    return (

        <div className="flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">

            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}