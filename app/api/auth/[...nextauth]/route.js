import prisma from "@/lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import NextAuth from "next-auth/next";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "your@email.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      authorize: async (credentials) => {
        if (!credentials) {
          return null;
        }
        const { email, password } = credentials;

        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });
        if (!user) return null;

        const userPassword = user.passwordHash;

        const isVaildPassword = bcrypt.compareSync(password, userPassword);

        if (!isVaildPassword) return null;

        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
  },
  secret: process.env.NEXTAUTH_SECRET,
  jwt: {
    async encode({ secret, token }) {
      if (!token) {
        return undefined;
      }
      return jwt.sign(token, secret);
    },
    async decode({ secret, token }) {
      if (!token) throw new Error("no token to decode");
      const decodedToken = jwt.verify(token, secret);
      if (typeof decodedToken === "string") {
        return JSON.parse(decodedToken);
      } else {
        return decodedToken;
      }
    },
    session: {
      strategy: "jwt",
      maxAge: 30 * 24 * 60 * 60,
      updateAge: 24 * 60 * 60,
    },
    callbacks: {
      async session(params) {
        if (params.session.user) {
          params.session.user.email = params.token.email;
        }
        return params.session;
      },
      async jwt(params) {
        if (params.user) {
          params.token.email = params.user.email;
        }

        return params.token;
      },
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
