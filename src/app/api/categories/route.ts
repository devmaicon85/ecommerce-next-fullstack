import { prismaClient } from '@/lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export async function GET() {
  const categories = await prismaClient.category.findMany();


  return Response.json(categories);
}
