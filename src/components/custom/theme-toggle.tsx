"use client";

import { cn } from "@/lib/utils";
import { IconBrightness } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import React from "react";

const ThemeToggle = ({ className }: { className?: string }) => {
  const { setTheme } = useTheme();
  const handleThemeChange = () => {
    setTheme((prev: string) => (prev === "dark" ? "light" : "dark"));
  };
  return (
    <IconBrightness
      onClick={handleThemeChange}
      className={cn("w-5 h-5", className)}
    />
  );
};

export default ThemeToggle;
