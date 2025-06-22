"use client";

import React, { useEffect, useRef, useState } from "react";
import ColourCard from "@/components/custom/colour-card";
import { Button } from "@/components/ui/button";
import { useBackgroundGlow } from "@/context/BackgroundGlowContext";
import { colours } from "@/data/dark-gradient-data";
import { IconChevronRight, IconConfettiFilled } from "@tabler/icons-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import ColorWheel from "@/components/custom/color-wheel";
import { toast } from "sonner";
import { useTheme } from "next-themes";

const Page = () => {
  const { setTheme } = useTheme();
  const { rgba } = useBackgroundGlow();
  const [copied, setCopied] = useState<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCopySnippet = () => {
    const jsxSnippet = `<div className="min-h-screen w-full relative bg-black">
                      {/* Custom Background with Glow Effect */}
                      <div
                        className="absolute inset-0 z-0"
                        style={{
                          background:
                            "radial-gradient(ellipse 80% 60% at 50% 0%, ${rgba}, transparent 70%), #000000",
                        }}
                      />
                      {/* Your Content/Components */}
                    </div>`;

    navigator.clipboard.writeText(jsxSnippet);
    setCopied(true);

    toast.success("Copied!", {
      description: "Background snippet copied to clipboard.",
      duration: 3000,
    });

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  useEffect(() => {
    setTheme("dark");
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen w-full relative">
      {rgba !== "" && (
        <div
          className="absolute min-h-screen w-full inset-0 z-0"
          style={{
            background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${rgba}, transparent 70%), #000000`,
          }}
        />
      )}

      <div className="relative z-10 w-full h-full max-h-fit flex flex-col items-center justify-center">
        <div className="h-72 w-full flex items-center justify-center text-2xl font-bold select-none flex-col gap-3">
          <span className="w-full max-w-sm scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
            Pick a background below to see it live
          </span>

          <Button
            variant="outline"
            size="sm"
            className="rounded-full text-xs cursor-pointer"
          >
            One click copy
            <IconConfettiFilled className="w-4 h-4 text-orange-600" />
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full text-xs cursor-pointer"
              >
                <span className="font-serif italic">
                  Create a gradient background with custom colour
                </span>
                <IconChevronRight className="w-4 h-4" />
              </Button>
            </SheetTrigger>

            <SheetContent
              className="w-full max-w-xl flex flex-col items-center justify-center gap-4 fixed top-1/2 left-1/2 transform -translate-x-1/2 rounded-xl bg-background p-6"
              side="bottom"
            >
              <SheetHeader className="w-full">
                <SheetTitle></SheetTitle>
                <SheetDescription asChild>
                  <div className="flex flex-col items-center gap-4 w-full">
                    <ColorWheel />
                    <Button
                      variant="default"
                      size="sm"
                      className="cursor-pointer flex items-center gap-2"
                      onClick={handleCopySnippet}
                    >
                      {copied ? (
                        <div className="text-green-600 flex gap-2 items-center">
                          <span>Copied</span>
                          <IconConfettiFilled className="w-4 h-4" />
                        </div>
                      ) : (
                        <>
                          <span>Copy Background</span>
                        </>
                      )}
                    </Button>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>

        <div className="w-full flex items-center justify-center">
          <ScrollArea className="w-full max-w-5xl h-96 border rounded-lg p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
              {colours.map((colour) => (
                <ColourCard
                  key={colour.name}
                  rgbaVal={colour.rgba}
                  name={colour.name}
                  theme={colour.theme}
                />
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  );
};

export default Page;
