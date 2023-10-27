"use client"

import { LoaderIcon, Search } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Dialog, DialogClose, DialogContent, DialogTrigger } from "../ui/dialog";
import { Label } from "../ui/label";

export function SearchProducts() {



    const router = useRouter();
    const searchParams = useSearchParams();
    const [isOpen, setIsOpen] = useState(false);

    const query = searchParams.get('q') ?? "";

    const [search, setSearch] = useState(query);
    const [loadingSearch, setLoadingSearch] = useState(false);


    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (!search) {
            return alert('Digite algo para buscar...')
        }
        setLoadingSearch(true);

        router.push(`/search?q=${search}`);

    }
    useEffect(() => {
        setLoadingSearch(false);
        setIsOpen(false);
    }, [searchParams])


    return (
        <div className="relative flex items-center">
            <Dialog open={isOpen} onOpenChange={setIsOpen} >
                <DialogTrigger asChild>
                    <Search className="w-5 h-5 opacity-50 absolute left-2 cursor-pointer" onClick={() => setIsOpen(true)} />
                </DialogTrigger>
                <DialogContent>
                    <form onSubmit={handleSubmit} className="relative flex flex-col gap-2" >
                        <div className="flex gap-2 items-center my-5">
                            <Search className="w-5 h-5 opacity-50 absolute left-2 cursor-pointer" />
                            <Input
                                defaultValue={search}
                                placeholder="Buscar produtos..."
                                required
                                className="pl-9 h-10 bg-accent"
                                onChange={(e) => setSearch(e.target.value)}

                            />
                            <Button disabled={loadingSearch} type="submit" className="h-10">
                                {loadingSearch ? <LoaderIcon className="w-5 h-5 animate-spin" /> : 'Buscar'}
                            </Button>
                        </div>
                    </form>

                </DialogContent>
            </Dialog>
            <form onSubmit={handleSubmit} className="relative items-center gap-2 hidden sm:flex" >
                <Search className="w-5 h-5 opacity-50 absolute left-2 " />
                <Input
                    defaultValue={search ?? ""}
                    placeholder="Buscar produtos..."
                    required
                    className="pl-9 bg-accent "
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Button disabled={loadingSearch} type="submit" className="">
                    {loadingSearch ? <LoaderIcon className="w-5 h-5 animate-spin  " /> : 'Buscar'}
                </Button>
            </form>
        </div>
    );
}