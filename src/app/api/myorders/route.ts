import { authOptions } from '@/lib/auth-config';
import { prismaClient } from '@/lib/prisma';
import { getServerSession } from 'next-auth';

export async function GET() {
  const session = await getServerSession( authOptions)


  if (!session || !session.user.id) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const orders = await prismaClient.order.findMany({
    include: {
      OrderItems: {
        include: {
          product: true,
        },
      },
    },
    where: {
      userId: session.user.id,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return Response.json(orders);
}
