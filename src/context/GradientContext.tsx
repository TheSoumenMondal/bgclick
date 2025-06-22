"use client";

import { gradientBackground } from "@/data/gradient-backgrounds";
import React, { createContext, useState } from "react";

type gradientBackgroundContextType = {
  currentBackGround: gradientBackground | null;
  setCurrentBackGround: (background: gradientBackground) => void;
};

export const GradientBackgroundContext = createContext<gradientBackgroundContextType>({
  currentBackGround: null,
  setCurrentBackGround: () => {},
});

export const GradientBackgroundProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentBackGround, setCurrentBackGround] =
    useState<gradientBackground | null>(null);

  return (
    <GradientBackgroundContext.Provider
      value={{ currentBackGround, setCurrentBackGround }}
    >
      {children}
    </GradientBackgroundContext.Provider>
  );
};
