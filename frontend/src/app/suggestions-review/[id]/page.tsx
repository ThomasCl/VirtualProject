"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { cn } from "@/lib/utils";
export default function SuggestionPage({ params }: any) {
  const searchParams = useSearchParams();
  return (
    <>
      <div className="flex w-full border-spacing-y-2 items-center justify-center space-y-5 px-4 pt-12 sm:px-6 lg:px-8 ">
        <div className="flex max-w-2xl flex-col space-y-2">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              {searchParams?.get("name")}
            </h2>
            <div className="w-[300px] overflow-hidden rounded-md">
              {searchParams?.get("cover") !== undefined &&
                searchParams?.get("cover") !== "" && (
                  <Image
                    src={searchParams.get("cover") as string}
                    alt={searchParams.get("name") as string}
                    width={300}
                    height={400}
                    className={cn(
                      "h-auto w-auto object-cover transition-all hover:scale-105",
                    )}
                  />
                )}
            </div>
            <p className="text-md text-muted-foreground">About this idea</p>
            <p className="text-sm text-muted-foreground">
              {searchParams?.get("description")}
            </p>
            <div className="flex gap-2">
              <Button className="w-full" variant={"default"} asChild>
                <Link href={`/suggestions-review`}>Accept</Link>
              </Button>
              <Button className="w-full" variant={"outline"} asChild>
                <Link href={`/suggestions-review`}>Decline</Link>
              </Button>
            </div>
            <Button className="w-full" variant={"secondary"} asChild>
              <Link href={`/suggestions-review`}>Go Back</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
