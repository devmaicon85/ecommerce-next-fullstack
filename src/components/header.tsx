"use client"

import { Button, buttonVariants } from "./ui/button";
import { Card, CardContent } from "./ui/card";

import { Home, HomeIcon, ListOrdered, LogInIcon, LogOut, Menu, MenuIcon, PercentCircleIcon, PercentIcon, ShoppingCart, User2Icon } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { Categories } from "@/app/(home)/components/categories";
import { Logo } from "./logo";
import Link from "next/link";



export function Header() {

    const { data, status } = useSession();

    return (
        <header>
            <Card className="flex justify-between rounded-none p-6">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="outline">
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="gap-4 flex flex-col">
                        <SheetHeader className="text-left text-lg font-semibold">Menu</SheetHeader>
                        {status === 'unauthenticated' && <Button variant="outline" className="w-full h-12 gap-2" onClick={() => signIn()}><LogInIcon /> Fazer Login</Button>}
                        <Link href={"/"} className={`${buttonVariants({ variant: "outline" })} py-5 gap-2`}><HomeIcon /> Página Inicial</Link>

                        <Link href={"/catalog"} className={`${buttonVariants({ variant: "outline" })} py-5 gap-2`}><PercentIcon /> Ofertas</Link>
                        <Link href={"/catalog"} className={`${buttonVariants({ variant: "outline" })} py-5 gap-2`}><ListOrdered /> Catálogo</Link>


                    </SheetContent>
                </Sheet>

                <Logo />


                <div className="flex items-center gap-4">
                    <Button size="icon" variant="outline">
                        <ShoppingCart />
                    </Button>


                    {status === "unauthenticated" && <Button className="flex gap-1" onClick={() => signIn()} title="Fazer login"><User2Icon /> Login</Button>}

                    {status === 'authenticated' &&
                        <Sheet>
                            <SheetTrigger asChild>
                                <Avatar className="cursor-pointer">

                                    <AvatarFallback>{data?.user?.name && data.user.name[0].toLocaleUpperCase()}</AvatarFallback>
                                    {data?.user?.image && <AvatarImage src={data?.user?.image} alt={data?.user?.name ?? ""} />}

                                </Avatar>
                            </SheetTrigger>
                            <SheetContent side="right" className="gap-2 flex flex-col">
                                <SheetHeader className="text-left text-lg font-semibold">

                                    <div className="flex gap-4 items-center">
                                        <Avatar>
                                            {data?.user?.image && <AvatarImage src={data?.user?.image} alt={data?.user?.name ?? ""} />}
                                        </Avatar>


                                        <div className="flex flex-col">
                                            <SheetHeader className="text-left text-lg font-semibold">{data?.user?.name}</SheetHeader>
                                            <SheetHeader className="text-left text-sm opacity-75">{data?.user?.email}</SheetHeader>
                                        </div>
                                    </div>
                                </SheetHeader>


                                <Button variant="outline" className="w-full h-12 gap-2" onClick={() => signOut()}><LogOut /> Sair</Button>
                            </SheetContent>
                        </Sheet>

                    }


                </div>
            </Card>

            <Separator></Separator>
        </header>
    );
}
