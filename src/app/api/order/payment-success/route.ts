import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
  typescript: true,
});

export async function POST(request: Request) {


  const signature = request.headers.get('stripe-signature');

  const text = await request.text();

  if (!signature || !text) {
    return NextResponse.json('Invalid request', { status: 400 });
  }


  const event = stripe.webhooks.constructEvent(
    text,
    signature,
    process.env.STRIPE_WEBHOOK_SECRET_KEY!,
  );

 
  if (event.type === 'checkout.session.completed') {
    const sessionWithLine = await stripe.checkout.sessions.retrieve(
      event.data.object.id,
      {
        expand: ['line_items'],
      }
    )

    const lineItems = sessionWithLine.line_items;
    console.log("🚀 ~ file: route.ts:41 ~ POST ~ lineItems:", lineItems)


  }

  return NextResponse.json({ received: true });

}
