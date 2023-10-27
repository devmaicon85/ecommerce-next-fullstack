import { BadgeTitlePage } from "@/components/badge-title-page";
import { Container } from "@/components/container";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FormatCurrency } from "@/helpers/formatCurrency";
import { ProductHelper } from "@/helpers/productHelper";
import { authOptions } from "@/lib/auth-config";
import { prismaClient } from "@/lib/prisma";
import { OrderItems, Prisma } from "@prisma/client";
import { Home } from "lucide-react";
import { getServerSession } from "next-auth"
import Image from "next/image";
import Link from "next/link";
import { getOrderStatus } from "./helpers/status";
import format from "date-fns/format/index.js";
import { redirect } from "next/navigation";

export default async function MyOrders() {

    const session = await getServerSession(authOptions);


    if (!session || !session.user) {
        redirect('/api/auth/signin');
    }




    const orders = await prismaClient.order.findMany({
        include: {
            OrderItems: {
                include: {
                    product: true
                }
            },

        },
        where: {
            userId: session.user.id
        },
        orderBy:{
            createdAt: 'desc'
        }
    })


    function subTotal(orderItems: OrderItems[]) {
        return orderItems.reduce((acc, order) => acc + (+order.basePrice * +order.quantity), 0)
    }

    function totalDescontos(orderItems: OrderItems[]) {
        return orderItems.reduce((acc, order) => acc + ((+order.basePrice * (order.discountPercentage / 100)) * +order.quantity), 0)
    }


    function totaGeral(orderItems: OrderItems[]) {
        return subTotal(orderItems) - totalDescontos(orderItems)
    }


    return <Container>

        <BadgeTitlePage>
            <Link href={"/"}><Home size={14} /></Link>/
            <span>Meus Pedidos</span>
        </BadgeTitlePage>

        <hr className="my-5 border-0" />

        <div>
            <div>


                {orders.map(order => (
                    <Accordion type="single"  collapsible key={order.id} className="max-w-xl mx-auto p-2 m-2" >
                        <AccordionItem value={order.id}>
                            <AccordionTrigger>

                                <div className="flex text-sm  max-w-lg gap-10 ">
                                    <div className="flex flex-col">
                                        <div className="font-bold  text-left ">DATA PEDIDO:</div>
                                        <div className="">
                                            <span>{format(order.createdAt, 'dd/MM/yyyy HH:mm')}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="font-bold text-left">STATUS</p>
                                        <span className="text-primary text-left brightness-150 font-bold">
                                            {getOrderStatus(order.status)}
                                        </span>
                                    </div>
                                </div>

                            </AccordionTrigger>

                            <AccordionContent>

                                {order.OrderItems.map((item) => (
                                    <div key={item.id} className="flex gap-2 my-2">
                                        <div className="relative bg-accent rounded-lg h-24 w-24 min-h-[6rem] min-w-[6rem] flex justify-center items-center p-4 mb-4">

                                            <Image src={item.product.imageUrls[0]} alt={item.product.name} width={0} height={0} sizes="300px" className="w-auto h-auto " />
                                        </div>

                                        <div>
                                            <div className="text-xs text-ellipsis w-full overflow-hidden whitespace-nowrap">{item.product.name}</div>
                                            <div className="gap-2 flex items-center ">
                                                {item.product.discountPercentage > 0 && <>
                                                    <span className="text-base font-bold ">{FormatCurrency(ProductHelper.calculate(item.product).totalPrice)}</span>
                                                    <span className="text-xs opacity-50 font-extralight line-through">{FormatCurrency(+item.product.basePrice)}</span></>
                                                }
                                                {item.product.discountPercentage === 0 && <>
                                                    <span className="text-base font-bold ">{FormatCurrency(+item.product.basePrice)}</span></>
                                                }
                                            </div>
                                            <span className="text-xs opacity-50">Qtd: {item.quantity.toFixed(0)}</span>
                                        </div>

                                        <hr className="my-5 border-1" />


                                    </div>
                                ))}

                                <div className="">
                                    <div className="flex flex-col space-y-3 text-sm opacity-75 justify-between">
                                        <div className="flex justify-between">
                                            <span>SubTotal</span><span>{FormatCurrency(subTotal(order.OrderItems))}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Entrega</span><span>GRÁTIS</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Descontos</span><span>{FormatCurrency(totalDescontos(order.OrderItems))}</span>
                                        </div>
                                    </div>

                                    <hr className="my-2 border-1" />

                                    <div className="flex text-base font-bold justify-between">
                                        <span>Total Geral</span>
                                        <span>{FormatCurrency(totaGeral(order.OrderItems))}</span>
                                    </div>

                                </div>

                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ))}
            </div>
        </div>
    </Container >
} 