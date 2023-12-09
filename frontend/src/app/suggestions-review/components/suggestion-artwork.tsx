import Image from "next/image";
import { cn } from "@/lib/utils";
import { ContextMenu, ContextMenuTrigger } from "@/components/ui/context-menu";
import { Suggestion } from "../data/suggestions";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import keys from "@/keys";

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
  const handleVoteButtonClick = async (approve: boolean) => {
    try {
      const response = await fetch(`${keys.NEXT_PUBLIC_URL}/api/voteEase/approve-or-deny/${suggestion.title}/${approve}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        window.location.reload();

        // Handle success, e.g., update UI or show a message
        console.log(`${approve ? 'Accept' : 'Decline'} vote submitted successfully`);
      } else {
        // Handle errors, e.g., show an error message
        console.error('Error submitting vote');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error making API request:', error);
    }
  };

  return (
    <div className={cn("space-y-3", className)} {...props}>
      <div className="mb-2 flex gap-2">
        <Button className="w-full" variant={"default"} asChild onClick={() =>handleVoteButtonClick(true)}>
          <Link href={`/suggestions-review`}>Accept</Link>
        </Button>
        <Button className="w-full" variant={"outline"} asChild onClick={() =>handleVoteButtonClick(false)}>
          <Link href={`/suggestions-review`}>Decline</Link>
        </Button>
      </div>
      <ContextMenu>
        <ContextMenuTrigger>
          <div className="overflow-hidden rounded-md">
            <Image
              src={suggestion.cover}
              alt={suggestion.title}
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
          <h3 className="font-medium leading-none">{suggestion.title}</h3>
          <p className="text-xs text-muted-foreground">
            {suggestion.description.slice(0, 40) + "..."}
          </p>
        </div>
        <Button variant={"outline"} asChild>
          <Link
            href={`/suggestions-review/${suggestion.title}?name=${suggestion.title}&cover=${suggestion.cover}&description=${suggestion.description}`}
          >
            More info
          </Link>
        </Button>
      </div>
    </div>
  );
}
