import { Button } from "../ui/button";
import { Card } from "../ui/card";

import { HomeIcon, ListOrdered, MenuIcon, PackageSearchIcon, PercentCircleIcon, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Separator } from "../ui/separator";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "../ui/sheet";
import { Cart } from "./cart";
import { Badge } from "../ui/badge";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-config";
import { CartQuantity } from "@/providers/cart-context";
import { Logo } from "../logo";
import { ButtonLogin, ButtonLogoff } from "./button-login-logoff";
import { Input } from "../ui/input";
import { SearchProducts } from "./search-form-products";



export async function Header() {


    const session = await getServerSession(authOptions);


    return (
        <header className="fixed z-50 w-full">
            <Card className="flex justify-between items-center gap-4 rounded-none p-6">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button size="icon" variant="outline">
                            <MenuIcon />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="gap-4 flex flex-col">
                        <SheetHeader className="text-left text-lg font-semibold">Menu</SheetHeader>
                        <MenuButton href="/"><HomeIcon />Página Inicial</MenuButton>
                        <MenuButton href="/deals"><PercentCircleIcon />Ofertas</MenuButton>
                        <MenuButton href="/categories/home"><ListOrdered />Catálogo</MenuButton>
                    </SheetContent>
                </Sheet>

                <div className="w-full flex gap-4 items-center">
                    <Logo />
                    <span className="hidden xs:block"><SearchProducts /></span>
                </div>


                <div className="flex items-center gap-4">


                    <SheetTrigger asChild id="cart" className="flex w-16 relative" >
                        <Button size="icon" variant="outline" className="">
                            <ShoppingCart size={20} />
                            <Badge className=" absolute -top-3 -right-3 text-xs">
                                <CartQuantity />
                            </Badge>
                        </Button>
                    </SheetTrigger>

                    <SheetContent side="right" className="gap-4 w-full flex flex-col">
                        <Cart />
                    </SheetContent>


                    {(!session) && <ButtonLogin />}

                    {session &&
                        <Sheet>
                            <SheetTrigger asChild>
                                <Avatar className="cursor-pointer">

                                    <AvatarFallback>{session?.user?.name && session.user.name[0].toLocaleUpperCase()}</AvatarFallback>
                                    {session?.user?.image && <AvatarImage src={session?.user?.image} alt={session?.user?.name ?? ""} />}

                                </Avatar>
                            </SheetTrigger>
                            <SheetContent side="right" className="gap-2 flex flex-col ">
                                <SheetHeader className="text-left text-lg font-semibold">

                                    <div className="flex gap-4 items-center">
                                        <Avatar>
                                            {session?.user?.image && <AvatarImage src={session?.user?.image} alt={session?.user?.name ?? ""} />}
                                        </Avatar>


                                        <div className="flex flex-col">
                                            <SheetHeader className="text-left text-lg font-semibold">{session?.user?.name}</SheetHeader>
                                            <SheetHeader className="text-left text-sm opacity-75">{session?.user?.email}</SheetHeader>
                                        </div>
                                    </div>
                                </SheetHeader>


                                <ButtonLogoff />

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