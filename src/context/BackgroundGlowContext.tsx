"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type GlowContextType = {
  rgba: string;
  setRgba: (rgba: string) => void;
};

const BackgroundGlowContext = createContext<GlowContextType | null>(null);

export const BackgroundGlowProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [rgba, setRgba] = useState("");

  return (
    <BackgroundGlowContext.Provider value={{ rgba, setRgba }}>
      {children}
    </BackgroundGlowContext.Provider>
  );
};

// Custom hook for easier usage
export const useBackgroundGlow = () => {
  const context = useContext(BackgroundGlowContext);
  if (!context) {
    throw new Error(
      "useBackgroundGlow must be used within a BackgroundGlowProvider"
    );
  }
  return context;
};
