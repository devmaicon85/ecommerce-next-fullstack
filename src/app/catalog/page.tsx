import { BadgeTitlePage } from "@/components/badge-title-page";
import { CategoryCard } from "@/components/category-card";
import { Badge } from "@/components/ui/badge";
import { prismaClient } from "@/lib/prisma";
import { ShapesIcon } from "lucide-react";

export default async function CatalogPage() {

    const categories = await prismaClient.category.findMany();

    return (

        <div className="container">
            <hr className="my-5 border-0" />

            <BadgeTitlePage>
                <ShapesIcon />
                Catálogo
            </BadgeTitlePage>


            <hr className="my-5 border-0" />


            {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-3 gap-x-4"> */}
            <div className="flex flex-wrap gap-4 justify-center">
                {categories.map((category) => (
                    <CategoryCard key={category.id} category={category} />
                ))}
            </div>
        </div>
    )
}