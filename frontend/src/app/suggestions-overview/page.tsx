"use client";

import { Card } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Suggestion, suggestions } from "./data/suggestions";
import { SuggestionArtwork } from "./components/suggestion-artwork";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export default function OverviewPage() {
  const { data: session, status } = useSession();
  const [suggestionList, setSuggestionList] = useState<Suggestion[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await suggestions();
        setSuggestionList(data);
      } catch (error) {
        console.error("Error fetching suggestions:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="flex w-full border-spacing-y-2 items-center justify-center space-y-5 px-4 py-12 sm:px-6 lg:px-8 ">
        <div className="flex max-w-2xl flex-col space-y-2">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Hi, {session?.user?.first_name || "User"}! 👋
            </h2>
            <p className="text-sm text-muted-foreground">
              {session?.user?.email}
            </p>
          </div>

          <Card className="p-3">
            {!session?.user.has_voted ? (
              <>
                <h3 className="text-xl">
                  The voting for this month is now open!
                </h3>
                <p>Choose your favorite idea.</p>
              </>
            ) : (
              <>
                <h3 className="text-xl">
                  You have made a vote for this month! Thank you!
                </h3>
              </>
            )}
          </Card>
          <Separator className="my-4" />
          <div className="space-y-1">
            <p className="text-sm text-foreground">Active ideas</p>
          </div>
          <div className="relative">
            <ScrollArea>
              <div className="flex space-x-4 pb-4">
                {suggestionList.map((suggestion) => (
                  <SuggestionArtwork
                    key={suggestion.name}
                    suggestion={suggestion}
                    className="w-[250px]"
                    aspectRatio="portrait"
                    width={250}
                    height={330}
                  />
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>
        </div>
      </div>
    </>
  );
}
