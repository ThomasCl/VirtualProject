import { Keys } from "@/types/keys.type";

const keys: Keys = {
  NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL ?? "nil",
};

if (Object.values(keys).includes("nil")) {
  throw new Error(`Not all ENV variables are defined!`);
}

export default keys;
