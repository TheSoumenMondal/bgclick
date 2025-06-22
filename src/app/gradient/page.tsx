"use client";

import React, { useContext } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { GradientBackgroundContext } from "@/context/GradientContext";
import {
  gradientBackground,
  gradientBackgrounds,
} from "@/data/gradient-backgrounds";
import GradientCard from "@/components/custom/gradient-card";
import { Button } from "@/components/ui/button";

const Page = () => {
  const { currentBackGround } = useContext(GradientBackgroundContext);

  return (
    <div className="relative flex flex-col items-center w-full h-screen overflow-hidden">
      {/* Background Layer - Fixed positioning to cover entire viewport */}
      {currentBackGround && (
        <div className="fixed inset-0 z-0 pointer-events-none">
          {React.cloneElement(currentBackGround.code, {
            className: "absolute inset-0 w-full h-full",
          })}
        </div>
      )}

      {/* Content Layer */}
      <div className="relative z-10 w-full max-w-5xl h-screen px-4 pt-16">
        <div className="text-xl font-semibold h-[20%] flex items-center justify-center text-center flex-col gap-2">
          <span>Please apply any of the backgrounds from below</span>
          <Button
            size={"sm"}
            variant={"outline"}
            className="rounded-full text-xs cursor-copy"
          >
            Just copy and interate in your project 🎉
          </Button>
        </div>

        <ScrollArea className="h-[80%] border p-5 rounded-lg bg-secondary/80 backdrop-blur-sm w-full">
          <div
            className="grid grid-cols-1 
            sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center"
          >
            {gradientBackgrounds.map(
              (item: gradientBackground, index: number) => (
                <GradientCard item={item} key={index} />
              )
            )}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Page;
