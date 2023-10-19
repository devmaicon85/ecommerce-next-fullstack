import Image from 'next/image';
import { Categories } from './components/categories';
import { prismaClient } from '@/lib/prisma';
import { SectionTitle } from '@/components/section-title';
import { BannerCard } from '@/components/banner-card';
import { Footer } from '@/components/footer';
import { Banners } from '@/components/banners';
import { ProductListHorizontal } from '../../components/product-list-horizontal';


export default async function HomePage() {



    const delasProducts = await prismaClient.product.findMany({
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
        <div className="container">

            <hr className="my-5 border-0" />


            <Banners />

            <hr className="my-5 border-0" />

            <div className="grid grid-cols-2 md:grid-cols-6 gap-y-3 gap-x-4">
                <Categories />
            </div>

            <hr className="my-5 border-0" />

            <SectionTitle>OFERTAS</SectionTitle>
            <ProductListHorizontal products={delasProducts} />
            



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
