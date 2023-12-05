"use client";
import Loading from "@/components/ui/Loading";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEventHandler, useEffect, useRef, useState } from "react";
import Errors from "@/components/ui/Errors";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import pic1 from "../../public/logo-vote.png";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export default function LoginPage() {
  const usernameOrEmail = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<string[]>([]);
  const router = useRouter();
  const { resolvedTheme } = useTheme();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (usernameOrEmail.current === null) return;
    if (password.current === null) return;
    const res = await signIn("credentials", {
      usernameOrEmail: usernameOrEmail.current.value,
      password: password.current.value,
      redirect: false,
      callbackUrl: "/suggestions-overview",
    });

    if (res !== undefined && res.ok) {
      router.push("/suggestions-overview");
    } else {
      setIsLoading(false);
      usernameOrEmail.current.value = "";
      password.current.value = "";
      setErrors(["Invalid credentials"]);
      router.push("/suggestions-overview");
    }
  };
  useEffect(() => {
    //object can be null
    if (usernameOrEmail.current !== null) {
      usernameOrEmail.current.focus();
    }
  });

  return (
    <>
      <div className="mt-10 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 rounded-lg border-1 border-gray-300 border-opacity-20 bg-card p-10 shadow-lg">
          <div className="flex w-full justify-center">
            <Image
              src={pic1}
              width={300}
              alt="Picture of the logo"
              className={cn([{ "brightness-0 filter": resolvedTheme == "light" }])}
            />
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-card-foreground">
            Log in je account
          </h2>
          {errors?.length > 0 && (
            <Errors errors={errors} clear={() => setErrors([])} />
          )}
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" value="true" />
            <div className="space-y-2 rounded-md shadow-sm">
              <Input type="email" placeholder="Email" ref={usernameOrEmail} />
              <Input type="password" placeholder="Password" ref={password} />
            </div>
            <Button variant="default" size="default" type="submit">
              {!isLoading ? <p>Log in</p> : <Loading />}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}