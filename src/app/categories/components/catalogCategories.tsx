import { BadgeTitlePage } from "@/components/badge-title-page";
import { CategoryCard } from "@/components/category-card";
import { SectionTitle } from "@/components/section-title";
import { prismaClient } from "@/lib/prisma";
import { Home, ShapesIcon } from "lucide-react";
import Link from "next/link";

export async function CatalogCategories() {

    const categories = await prismaClient.category.findMany();

    return (

        <div>

            <BadgeTitlePage>
                <Link href={"/"}><Home size={14}/></Link>/
                <span>Catálogo</span>
            </BadgeTitlePage>


            <hr className="my-5 border-0" />


            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-3 gap-x-4"> */}
            <div className="grid grid-cols-1 xxs:grid-cols-2 xs:flex flex-wrap gap-4 justify-center">
                {categories.map((category) => (
                    <Link key={category.id} href={`/categories/${category.slug}`}>
                        <CategoryCard category={category} />
                    </Link>
                ))}
            </div>
        </div>
    )
}