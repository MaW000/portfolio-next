import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/google";
import prisma from "@/lib/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
};

export default NextAuth(authOptions);
