import { Banners } from '@/components/banners';
import { SectionTitle } from '@/components/section-title';
import { prismaClient } from '@/lib/prisma';
import { Categories } from './components/categories';
import { ProductListHorizontal } from '@/components/product-list-horizontal';
import Image from 'next/image';
import { Container } from '@/components/container';


export default async function HomePage({ params }: { params: { tenant_slug: string } }) {


    const tenant = await prismaClient.tenant.findFirst({
        where: {
            slug: params.tenant_slug
        }
    })


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


    if (!tenant) {
        return null
    }


    return (
        <Container>

            <div className='flex justify-center w-full'>
                <Image src={tenant.logoUrl} alt={tenant.name} width={200} height={200} className='rounded-full p-2 m-2' />
            </div>
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

        </Container>
    );
}
