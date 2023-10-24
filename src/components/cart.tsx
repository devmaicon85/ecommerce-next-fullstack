import { Loader2, ShoppingCart, ShoppingCartIcon } from "lucide-react";
import { BadgeTitlePage } from "./badge-title-page";
import { useCartContext } from "@/providers/cart";
import { CartItem } from "./cart-item";
import { SectionTitle } from "./section-title";
import { FormatCurrency } from "@/helpers/formatCurrency";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { createCheckout } from "@/actions/checkout";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import createOrder from "@/actions/order";
import { signIn, useSession } from "next-auth/react";

export function Cart() {

    const { products, cartBasePrice, cartShoppingValue, cartTotalDiscount, cartTotalPrice } = useCartContext();

    const [loading, setLoading] = useState(false);

    const { push } = useRouter();

    const { data } = useSession();


    async function handleFinishPurchaseClick() {

        setLoading(true);

        if (!data || !data?.user) {
            return signIn();
        }

        await createOrder(products, data.user.id);

        const checkout = await createCheckout(products);

        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

        stripe?.redirectToCheckout({
            sessionId: checkout.id
        })


        setLoading(false);

    }


    return (
        <div className="flex flex-col h-full">


            <div>
                <BadgeTitlePage>
                    <ShoppingCartIcon /> Carrinho
                </BadgeTitlePage>
            </div>

            <hr className="my-5 border-0" />

            <div className="flex flex-col overflow-hidden max-h-full h-full ">
                <ScrollArea className="h-full pr-4">
                    <div className="flex h-full flex-col">
                        {products.map((product) => (
                            <div key={product.id}>
                                <CartItem product={product} />

                            </div>
                        ))}
                        {products.length === 0 &&
                            <div className="flex flex-col w-full items-center gap-4 my-10">
                                <ShoppingCart size={50} className="opacity-30 text-primary" />
                                <SectionTitle>Nenhum item no carrinho</SectionTitle>
                            </div>
                        }

                    </div>
                </ScrollArea>
            </div>


            <hr className="my-5 border-1" />


            {products.length > 0 &&
                <div className="">
                    <div className="flex flex-col space-y-3 text-sm opacity-75 justify-between">
                        <div className="flex justify-between">
                            <span>SubTotal</span><span>{FormatCurrency(cartBasePrice)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Entrega</span><span>{cartShoppingValue === 0 ? "Grátis" : FormatCurrency(cartShoppingValue)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Descontos</span><span>{FormatCurrency(cartTotalDiscount)}</span>
                        </div>
                    </div>

                    <hr className="my-2 border-1" />

                    <div className="flex text-base font-bold justify-between">
                        <span>Total Geral</span>
                        <span>{FormatCurrency(cartTotalPrice)}</span>
                    </div>


                    <hr className="my-2 border-1" />


                    <Button disabled={loading} onClick={handleFinishPurchaseClick} className="uppercase w-full gap-2">
                        {loading && <Loader2 className="animate-spin mr-2" />}
                        Finalizar Compra
                    </Button>
                </div>
            }
        </div>
    )
}