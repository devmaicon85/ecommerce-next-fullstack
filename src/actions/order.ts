'use server';

import { prismaClient } from '@/lib/prisma';
import { CartProduct } from '@/providers/cart-context';
import { OrderItems, Prisma, User } from '@prisma/client';

export default async function createOrder(
  cartProducts: CartProduct[],
  userId: string,
) {
  const orderItems: Omit<OrderItems, 'id' | 'orderId'>[] = cartProducts.map(
    (product) => {
      return {
        basePrice: product.basePrice,
        discountPercentage: product.discountPercentage,
        productId: product.id,
        quantity: new Prisma.Decimal(product.quantity),
      };
    },
  );

  const order = await prismaClient.order.create({
    data: {
      userId,
      status: 'WAITING_FOR_PAYMENT',
      OrderItems: {
        createMany: {
          data: orderItems,
        },
      },
    },
  });

  return order;
}
