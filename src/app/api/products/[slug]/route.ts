import { prismaClient } from '@/lib/prisma';
import z from 'zod';

interface Params {
  params: {
    slug: string;
  };
}
export async function GET(request: Request, { params }: Params) {


  const slug = z.string().parse(params.slug);

  const product = await prismaClient.product.findFirst({
    where: {
      slug,
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
        include: {
          products: {
            where: {
              slug: {
                not: slug,
              },
            },
          },
        },
      },
    },
  });

  if(!product){
    return Response.json({ error: 'Product not found' }, {status: 400});
  }

  return Response.json(product );
}
