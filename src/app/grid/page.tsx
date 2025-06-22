"use client";

import React, { useContext } from "react";
import { GridBackground, gridBackgrounds } from "@/data/grid-background-data";
import { ScrollArea } from "@/components/ui/scroll-area";
import GridCard from "@/components/custom/gridcard";
import { GridBackgroundContext } from "@/context/GridBackgroundContext";
import { Button } from "@/components/ui/button";

const Page = () => {
  const { currentBackGround } = useContext(GridBackgroundContext);

  return (
    <div className="relative flex flex-col items-center w-full h-screen">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {currentBackGround && currentBackGround.code}
      </div>

      <div className="relative z-10 w-full max-w-5xl h-screen px-4 pt-16">
        <h2
          className="text-xl font-semibold h-[20%] flex items-center justify-center text-center flex-col gap-2
        "
        >
          <span>Please apply any of the backgrounds from below</span>
          <Button
            size={"sm"}
            variant={"outline"}
            className="rounded-full text-xs cursor-copy"
          >
            Just copy and use in your project 🎉
          </Button>
        </h2>

        <ScrollArea className="h-[80%] border p-5 rounded-lg bg-secondary w-full">
          <div
            className="grid grid-cols-1 
            sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center"
          >
            {gridBackgrounds.map((item: GridBackground, index: number) => (
              <GridCard item={item} key={index} />
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Page;
