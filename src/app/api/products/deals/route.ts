import { prismaClient } from '@/lib/prisma';
import { NextRequest } from 'next/server';

export async function GET() {
  const products = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

 
  return Response.json(products);
}
