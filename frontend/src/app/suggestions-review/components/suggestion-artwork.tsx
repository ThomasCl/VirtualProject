import Image from "next/image";
import { cn } from "@/lib/utils";
import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu";
import { Suggestion } from "../data/suggestions";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SuggestionArtworkProps extends React.HTMLAttributes<HTMLDivElement> {
  suggestion: Suggestion;
  aspectRatio?: "portrait" | "square";
  width?: number;
  height?: number;
}

export function SuggestionArtwork({
  suggestion,
  aspectRatio = "portrait",
  width,
  height,
  className,
  ...props
}: SuggestionArtworkProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <div className="mb-2 flex gap-2">
        <Button className="w-full" variant={"default"} asChild>
          <Link href={`/suggestions-review`}>Accept</Link>
        </Button>
        <Button className="w-full" variant={"outline"} asChild>
          <Link href={`/suggestions-review`}>Decline</Link>
        </Button>
      </div>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="overflow-hidden rounded-md">
            <Image
              src={suggestion.cover}
              alt={suggestion.name}
              width={width}
              height={height}
              className={cn(
                "h-auto w-auto object-cover transition-all hover:scale-105",
                aspectRatio === "portrait" ? "aspect-[3/4]" : "aspect-square",
              )}
            />
          </div>
        </ContextMenuTrigger>
      </ContextMenu>
      <div className="flex justify-between">
        <div className="space-y-1 text-sm">
          <h3 className="font-medium leading-none">{suggestion.name}</h3>
          <p className="text-xs text-muted-foreground">
            {suggestion.description.slice(0, 40) + "..."}
          </p>
        </div>
        <Button variant={"outline"} asChild>
          <Link
            href={`/suggestions-review/${suggestion.name}?name=${suggestion.name}&cover=${suggestion.cover}&description=${suggestion.description}`}
          >
            More info
          </Link>
        </Button>
      </div>
    </div>
  );
}
