import { Banners } from '@/components/banners';
import { SectionTitle } from '@/components/section-title';
import { prismaClient } from '@/lib/prisma';
import { ProductListHorizontal } from '../../components/product-list-horizontal';
import { Categories } from './components/categories';


export default async function HomePage() {



    const dealsProducts = await prismaClient.product.findMany({
        where: {
            discountPercentage: {
                gt: 0
            }
        }
    })

    const keyboardsProducts = await prismaClient.product.findMany({
        where: {
            Category: {
                slug: "keyboards"
            }
        }
    })

    const mousesProducts = await prismaClient.product.findMany({
        where: {
            Category: {
                slug: "mouses"
            }
        }
    })



    return (
        <div className="xs:container mx-4 xs:mx-0">

            <hr className="my-5 border-0" />


            <Banners />

            <hr className="my-5 border-0" />

            <div className="grid grid-cols-2 md:grid-cols-6 gap-y-3 gap-x-4">
                <Categories />
            </div>

            <hr className="my-5 border-0" />

            <SectionTitle>OFERTAS</SectionTitle>
            <ProductListHorizontal products={dealsProducts} />
            



            <hr className="my-5 border-0" />


            {/* SECTION */}

            <Banners />


            <SectionTitle>TECLADOS</SectionTitle>
            <ProductListHorizontal products={keyboardsProducts} />


            <hr className="my-5 border-0" />


            {/* SECTION */}

            <Banners />


            <SectionTitle>MOUSES</SectionTitle>
            <ProductListHorizontal products={mousesProducts} />

        </div>
    );
}
