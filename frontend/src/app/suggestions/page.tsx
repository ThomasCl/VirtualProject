"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SuggestionsForm } from "./suggestions-form";

export default function CreateSuggestionPage() {
  return (
    <>
      <div className="flex w-full border-spacing-y-2 items-center justify-center space-y-5 px-4 py-12 sm:px-6 lg:px-8 ">
        <div className="flex max-w-2xl flex-col space-y-2">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              Submit your idea!
            </h2>
            <p className="text-sm text-muted-foreground">
              Fill the form below and share your idea with us!
            </p>
            <SuggestionsForm />
          </div>
        </div>
      </div>
    </>
  );
}
