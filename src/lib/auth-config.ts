import { PrismaAdapter } from '@auth/prisma-adapter';
import { AuthOptions } from 'next-auth';
import { prismaClient } from './prisma';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prismaClient),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        domain: { label: 'Dominio', type: 'text', placeholder: 'ex: @gmail.com' },
        email: { label: 'E-mail', type: 'text' },
        password: { label: 'Senha', type: 'password' },
      },
      async authorize(credentials, req) {
        const user = await prismaClient.user.findUnique({
          where: {
            email: credentials?.email,
          },
        });
        if (user) {
          return user;
        }
        throw new Error('User not found');
      },
    }),
  ],
};
