"use client";

import { Card } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Suggestion, suggestions } from "./data/suggestions";
import { SuggestionArtwork } from "./components/suggestion-artwork";
import { useEffect, useState } from "react";

export default function SuggestionReview() {
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
      <div className="flex w-full border-spacing-y-2 items-center justify-center space-y-5 px-4 pt-12 sm:px-6 lg:px-8 ">
        <div className="flex max-w-2xl flex-col space-y-2">
          <Card className="p-3">
            <h3 className="text-xl">Accept or decline suggestions </h3>
            <p>Choose your favorite idea.</p>
          </Card>
          <Separator className="my-4" />
          <div className="space-y-1">
            <p className="text-sm text-foreground">Pending suggestions</p>
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
