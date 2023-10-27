"use client"

import { LoaderIcon, Search } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function SearchProducts() {



    const refSearch = useRef<HTMLInputElement>(null);
    const router = useRouter();
    const searchParams = useSearchParams();

    const query = searchParams.get('q');

    const [loadingSearch, setLoadingSearch] = useState(false);


    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!refSearch.current) {
            return alert('Digite algo para buscar...')
        }
        setLoadingSearch(true);

        router.push(`/search?q=${refSearch.current.value}`);

    }
    useEffect(()=>{
        setLoadingSearch(false);
    },[searchParams])


    return (
        <form onSubmit={handleSubmit} >
            <div className="flex relative items-center gap-2">
                <Search className="w-5 h-5 opacity-50 absolute left-2 " />
                <Input ref={refSearch} defaultValue={query ?? ""} placeholder="Buscar produtos..." required className="pl-9 bg-accent" />
                <Button disabled={loadingSearch} type="submit" className="hidden sm:block">
                    {loadingSearch ? <LoaderIcon className="w-5 h-5 animate-spin" /> : 'Buscar'}
                </Button>
            </div>
        </form>
    );
}