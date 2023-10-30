import { prismaClient } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';
import z from 'zod';

interface Params {
  params: {
    slug: string;
  };
}
export async function GET(request: Request, { params }: Params) {
  const slug = z.string().parse(params.slug);

  const categories = await prismaClient.category.findFirst({
    select: {
      id: true,
      name: true,
      imageUrl: true,
      slug: true,
      products: true,
    },
    where: {
      slug,
    },
  });

  return Response.json(categories);
}
