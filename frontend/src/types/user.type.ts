import { TRole } from "@/types/role.type";

export type TUser = {
  name: string; // Felix
  email: string;
  password: string;
  role: TRole;
};