import prisma from "@/lib/prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import NextAuth from "next-auth/next";

export const authOptions = {
  pages: {
    signIn: "/login",
    signUp: "/register",
  },
  session: {
    strategy: "jwt",
    maxAge: 60 * 60, // 60 Minutes
  },
  secret: process.env.NEXTAUTH_SECRET,

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
      async authorize(credentials) {
        console.log(credentials);
        if (!credentials) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) return null;
        const isVaildPassword = bcrypt.compareSync(
          credentials.password,
          user.password
        );
        if (!isVaildPassword) return null;

        //TODO: 권한DB추가
        if (user.email == "jshs20231403@h.jne.go.kr") {
          user.role = "ADMIN";
        } else {
          user.role = "STUDENT";
        }
        return user;
      },
    }),
  ],
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
  },

  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.email = token.email;
        session.user.role = token.role;
      }

      return { session, token };
    },
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.role = user.role;
      }

      return token;
    },
    async signOut({ session, token }) {
      session = {};
      token = {};
      return { session, token };
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
