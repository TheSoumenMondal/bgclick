'use client'

import { GridBackground } from "@/data/grid-background-data";
import React, { createContext, useState } from "react";

type GridBackgroundContextType = {
  currentBackGround: GridBackground | null;
  setCurrentBackGround: (background: GridBackground) => void;
};

export const GridBackgroundContext = createContext<GridBackgroundContextType>({
  currentBackGround: null,
  setCurrentBackGround: () => {},
});

export const GridBackgroundProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentBackGround, setCurrentBackGround] =
    useState<GridBackground | null>(null);

  return (
    <GridBackgroundContext.Provider
      value={{ currentBackGround, setCurrentBackGround }}
    >
      {children}
    </GridBackgroundContext.Provider>
  );
};
