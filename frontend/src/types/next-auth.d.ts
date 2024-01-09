/* eslint-disable no-unused-vars */
import type { User } from "next-auth";
import "next-auth/jwt";
import { TRole } from "./role.type";

// extending the default user type

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    has_voted: boolean;
    role: TRole;
  }
}

declare module "next-auth" {
  interface Session {
    user: User;
  }
}
declare module "next-auth" {
  interface User {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    has_voted: boolean;
    role: TRole;
  }
}
