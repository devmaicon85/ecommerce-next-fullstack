'use server';

import { ProductHelper } from '@/helpers/productHelper';
import { CartProduct } from '@/providers/cart';
import Stripe from 'stripe';

export async function createCheckout(product: CartProduct[]) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2023-10-16',
    typescript: true,
  });

  const checkout = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_URL}`,
    cancel_url: `${process.env.NEXT_PUBLIC_URL}`,
    // metadata: {  },
    line_items: product.map((item) => ({
      price_data: {
        currency: 'brl',
        product_data: {
          name: item.name,
          description: item.description,
          images: item.imageUrls,
        },
        unit_amount: ProductHelper.calculate(item).totalPrice * 100,
      },
      quantity: item.quantity,
    })),
  });

  return checkout;
}
