"use client";

import {
  GlassmorphismBackgroundInterface,
  GlassmorphismBackgrounds,
} from "@/data/glassmorphism-data";
import React from "react";
import GlassmorphismCard from "@/components/custom/glassmorphism-card";
import { useGlassmorphismBackground } from "@/context/GlassMorphismContext";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

const Page = () => {
  const { currentBackground } = useGlassmorphismBackground();

  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {currentBackground && currentBackground.code}
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-center pt-16 px-4 max-w-5xl">
        <div className="mb-4 h-[30%] text-center text-xl font-semibold flex items-center justify-center flex-col gap-2">
          <p>Click apply on a card <br /> to preview the background.</p>
          <Button variant={"outline"} size={"sm"} className="rounded-full text-xs italic cursor-copy">One click copy</Button>
        </div>

        <ScrollArea className="w-full h-[70%] border rounded-lg p-4 flex ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pb-16 max-w-6xl mx-auto justify-items-center">
            {GlassmorphismBackgrounds.map(
              (item: GlassmorphismBackgroundInterface, index: number) => (
                <GlassmorphismCard item={item} key={index} />
              )
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Page;
