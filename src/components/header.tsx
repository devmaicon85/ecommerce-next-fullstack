"use client"

import { Button } from "./ui/button";
import { Card } from "./ui/card";

import { HomeIcon, ListOrdered, ListOrderedIcon, LogInIcon, LogOut, MenuIcon, PackageSearchIcon, PercentCircleIcon, ShoppingCart, User2Icon } from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Logo } from "./logo";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Separator } from "./ui/separator";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";
import { Cart } from "./cart";
import { Badge } from "./ui/badge";
import { useCartContext } from "@/providers/cart-context";



export function Header() {

    const { data, status } = useSession();

    const { cartTotalQuantity } = useCartContext();

    return (
        <header className="fixed z-50 w-full">
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

                        <MenuButton href="/"><HomeIcon />Página Inicial</MenuButton>
                        <MenuButton href="/deals"><PercentCircleIcon />Ofertas</MenuButton>
                        <MenuButton href="/categories/home"><ListOrdered />Catálogo</MenuButton>

                    </SheetContent>
                </Sheet>

                {/* <Logo /> */}


                <div className="flex items-center gap-4">


                    <SheetTrigger asChild id="cart" className="flex w-16 relative" >
                        <Button size="icon" variant="outline" className="">
                            <ShoppingCart size={20} />
                            <Badge className=" absolute -top-2 -right-1 text-xs">
                                {cartTotalQuantity}
                            </Badge>
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="right" className="gap-4 w-full flex flex-col">
                        <Cart />
                    </SheetContent>


                    {(status === "unauthenticated" || status === "loading") &&
                        <Button className="flex gap-1  rounded-full" variant={"outline"} onClick={() => signIn()} title="Fazer login"><User2Icon /></Button>}

                    {status === 'authenticated' &&
                        <Sheet>
                            <SheetTrigger asChild>
                                <Avatar className="cursor-pointer">

                                    <AvatarFallback>{data?.user?.name && data.user.name[0].toLocaleUpperCase()}</AvatarFallback>
                                    {data?.user?.image && <AvatarImage src={data?.user?.image} alt={data?.user?.name ?? ""} />}

                                </Avatar>
                            </SheetTrigger>
                            <SheetContent side="right" className="gap-2 flex flex-col ">
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

                                <MenuButton href="/myorders"><PackageSearchIcon />Meus Pedidos</MenuButton>

                            </SheetContent>
                        </Sheet>

                    }


                </div>
            </Card>

            <Separator></Separator>

        </header >
    );
}

function MenuButton({ children, href }: { children: React.ReactNode, href: string }) {
    return (
        <SheetClose asChild>

            <Link href={href} >
                <Button variant="outline" className="flex py-6 w-full justify-start gap-2">
                    {children}
                </Button>
            </Link>
        </SheetClose>
    );
}