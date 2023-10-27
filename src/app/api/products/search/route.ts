import { prismaClient } from '@/lib/prisma';
import { NextRequest } from 'next/server';
import z from 'zod';

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const query = z.string().parse(searchParams.get('q') ?? '');


  // busca por nome nos produtos
  const productByName = await prismaClient.product.findMany({
    where: {
      name: {
        contains: query,
        mode: 'insensitive',
      },
    },
    select: {
      name: true,
      slug: true,
      description: true,
      categoryId: true,
      imageUrls: true,
      tenantId: true,
      basePrice: true,
      discountPercentage: true,
      id: true,
      Category: {
        select: {
          name: true,
        },
      },
    },
  });

  // busca por nome nas categorias
  const productByCategory = await prismaClient.product.findMany({
    where: {
      Category: {
        name: {
          contains: query,
          mode: 'insensitive',
        },
      },
    },
    select: {
      name: true,
      slug: true,
      description: true,
      categoryId: true,
      imageUrls: true,
      tenantId: true,
      basePrice: true,
      discountPercentage: true,
      id: true,
      Category: {
        select: {
          name: true,
        },
      },
    },
  });


  const products = [...productByName, ...productByCategory];

  return Response.json(products);
}
