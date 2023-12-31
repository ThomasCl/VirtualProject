import loginService from "@/lib/loginService";
import { Roles, TRole } from "@/types/role.type";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 8 * 60 * 60,
  },
  pages: {
    signIn: "/",
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials, req) {
        const { usernameOrEmail, password } = credentials as {
          usernameOrEmail: string;
          password: string;
        };
        const user = await loginService.login(usernameOrEmail, password);

        if (!user) {
          return null;
        } else {
          /*
          {
            "id": 5,
            "email": "r0803370@ucll.be",
            "password": "t",
            "first_name": "Thomas",
            "last_name": "Claessens",
            "has_voted": false
          }
          */
          return {
            id: user.id,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            has_voted: user.has_voted,
            role:
              user.role ?? user.email === "john.doe@ucll.be"
                ? Roles.ADMIN
                : Roles.EMPLOYEE,
          };
        }
      },
    }),
  ],
  callbacks: {
    session: async ({ token, session }) => {
      if (token) {
        session.user.id = token.sub!;
        session.user.email = token.email;
        session.user.first_name = token.first_name;
        session.user.last_name = token.last_name;
        session.user.has_voted = token.has_voted;
        session.user.role = token.role as TRole;
      }
      return session;
    },
    // very weird that id gets converted to sub field took me hours to find :/
    async jwt({ token, user }) {
      return { ...token, ...user }; // add user information to token
    },
  },
};
export default NextAuth(authOptions);
