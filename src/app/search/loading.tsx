"use client"

import { Container } from "@/components/container";
import { Skeleton } from "@/components/ui/skeleton";
import { useSearchParams } from "next/navigation";

export default function SearchLoading() {

    const searchParams = useSearchParams();
    const query = searchParams.get('q') ?? '';



    return (
        <Container>
            <p className="text-sm">
                Resultados para: <span className="font-bold">{query}</span>
            </p>

            <hr className="my-5 border-0" />


            <div className="flex flex-wrap gap-6">
                
                {Array.from({length:14}).map((_, index) => (
                    <Skeleton key={index} className="rounded-lg h-44 w-40"/>
                ))}
                
            </div>
        </Container>
    )
} 