"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function FinishPage() {
  const router = useRouter();
  const signOutHandler = async () => {
    const data = await signOut({
      redirect: false,
      callbackUrl: "/",
    });
    router.push(data.url);
  };
  return (
    <>
      <div className="flex w-full border-spacing-y-2 items-center justify-center space-y-5 px-4 py-12 sm:px-6 lg:px-8 ">
        <div className="flex max-w-2xl flex-col space-y-2">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              Thank you for your collaboration!
            </h2>
            <p className="text-sm text-muted-foreground">
              Together, we can improve our workspace.
            </p>
            <Button asChild>
              <Link href="/suggestions">Submit your own idea</Link>
            </Button>
            <p>or</p>
            <Button variant={"outline"} name="Log out" onClick={signOutHandler}>
              Log out
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
