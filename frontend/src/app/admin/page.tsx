"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Chart from "./chart";
import CountdownTimer from "./countDownTimer";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export default function AdminPage() {
  const { resolvedTheme } = useTheme();
  return (
    <>
      <div className="flex w-full border-spacing-y-2 items-center justify-center space-y-5 px-4 py-12 sm:px-6 lg:px-8 ">
        <div className="flex w-full max-w-2xl flex-col space-y-2">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              Admin Page
            </h2>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Countdown till next voting
                </CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  <CountdownTimer />
                </div>
                <p className="text-xs text-muted-foreground">Are you ready?</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Vote Chart</CardTitle>
              </CardHeader>
              <CardContent className="pl-2">
                <Chart />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
