"use client";

import React, { createContext, useContext, useState } from "react";
import { GlassmorphismBackgroundInterface } from "@/data/glassmorphism-data";

type GlassmorphismContextType = {
  currentBackground: GlassmorphismBackgroundInterface | null;
  setCurrentBackground: (background: GlassmorphismBackgroundInterface) => void;
};

const GlassmorphismBackgroundContext = createContext<GlassmorphismContextType>({
  currentBackground: null,
  setCurrentBackground: () => {
    throw new Error(
      "setCurrentBackground must be used within the GlassmorphismBackgroundProvider"
    );
  },
});

export const GlassmorphismBackgroundProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentBackground, setCurrentBackground] =
    useState<GlassmorphismBackgroundInterface | null>(null);

  return (
    <GlassmorphismBackgroundContext.Provider
      value={{ currentBackground, setCurrentBackground }}
    >
      {children}
    </GlassmorphismBackgroundContext.Provider>
  );
};

export const useGlassmorphismBackground = () => {
  const context = useContext(GlassmorphismBackgroundContext);
  if (!context) {
    throw new Error(
      "useGlassmorphismBackground must be used within a GlassmorphismBackgroundProvider"
    );
  }
  return context;
};
