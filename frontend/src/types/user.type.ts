import { TRole } from "@/types/role.type";

export type TUser = {
  first_name: string;
  last_name:string;
  email: string;
  password: string;
  // role: TRole;
  has_voted:boolean;
};
