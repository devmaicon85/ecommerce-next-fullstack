import { PrismaAdapter } from '@auth/prisma-adapter';
import { AuthOptions } from 'next-auth';
import { prismaClient } from './prisma';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { env } from '@/env';

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prismaClient),
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID!,
      clientSecret: env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        domain: {
          label: 'Dominio',
          type: 'text',
          placeholder: 'ex: @gmail.com',
        },
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
  debug: process.env.NODE_ENV === 'development',
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // jwt({ token, account, user }) {
    //   if (account) {
    //     token.accessToken = account.access_token
    //     token.id = user?.id
    //   }
    //   return token
    // },
    session({ session, token, user }) {
      // I skipped the line below coz it gave me a TypeError
      // session.accessToken = token.accessToken;
      // session.user.id = token.id;
      session.user = { ...session.user, id: user.id } as {
        id: string;
        name: string;
        email: string;
      };

      return session;
    },
  },
};
