declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;

      NEXT_PUBLIC_URL: string;
      NEXT_PUBLIC_URL_API: string;

      NEXTAUTH_URL: string;
      NEXTAUTH_SECRET: string;

      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;

      STRIPE_SECRET_KEY: string;
      NEXT_PUBLIC_STRIPE_PUBLIC_KEY: string;
      STRIPE_WEBHOOK_SECRET_KEY: string;
    }
  }
}
