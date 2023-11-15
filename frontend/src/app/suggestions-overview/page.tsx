"use client";

import { Card } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { listenNowAlbums, madeForYouAlbums } from "./data/suggestions";
import { AlbumArtwork } from "./components/albums-artwork";

export default function OverviewPage() {
  return (
    <>
      <div className="mt-10 flex w-full border-spacing-y-2 items-center justify-center space-y-5 px-4 py-12 sm:px-6 lg:px-8 ">
        <div className="flex max-w-2xl flex-col space-y-2">
          <div className="space-y-1">
            <h2 className="text-2xl font-semibold tracking-tight">
              Hi, John! 👋
            </h2>
            <p className="text-sm text-muted-foreground">john@ucll.be</p>
          </div>

          <Card className="p-3">
            <h3 className="text-xl">The voting for this month is now open! </h3>
            <p>Choose your favorite idea.</p>
          </Card>
          <Separator className="my-4" />
          <div className="space-y-1">
            <p className="text-sm text-foreground">Active ideas</p>
          </div>
          <div className="relative">
            <ScrollArea>
              <div className="flex space-x-4 pb-4">
                {listenNowAlbums.map((album) => (
                  <AlbumArtwork
                    key={album.name}
                    album={album}
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
