import { TRole } from "@/types/role.type";

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
export type TUser = {
  id: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  has_voted: boolean;
  role: TRole;
};