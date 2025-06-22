"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { useBackgroundGlow } from "@/context/BackgroundGlowContext";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { IconConfetti, IconThumbUpFilled } from "@tabler/icons-react";
import { toast } from "sonner";

type Props = {
  name: string;
  rgbaVal: string;
  theme?: "dark" | "light";
};

const ColourCard = ({ name, theme = "dark", rgbaVal }: Props) => {
  const { setRgba } = useBackgroundGlow();
  const { setTheme } = useTheme();
  const [applied, setApplied] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const jsxSnippet = `<div className="min-h-screen w-full relative bg-black">
                        {/* ${name} Background with Glow Effect */}
                        <div
                          className="absolute inset-0 z-0"
                          style={{
                            background:
                              "radial-gradient(ellipse 80% 60% at 50% 0%, ${rgbaVal}, transparent 70%), #000000",
                          }}
                        />
                        {/* Your Content/Components */}
                      </div>`;

    navigator.clipboard.writeText(jsxSnippet).then(() => {
      toast.success("Background copied successfully !");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleApply = () => {
    setTheme(theme);
    setRgba(rgbaVal);
    setApplied(true);
    setTimeout(() => setApplied(false), 2000);
  };

  return (
    <div className="w-full group min-w-56 h-56 max-w-64 rounded-xl relative overflow-hidden shadow-md flex items-end justify-center border">
      \
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${rgbaVal}, transparent 70%), #000000`,
        }}
      />
      <div className="z-10 p-4 w-full flex flex-col items-center gap-2 lg:hidden">
        <Button onClick={handleApply} variant="outline" className="w-full">
          {applied ? (
            <div className="flex gap-2 text-orange-600">
              <span>Applied</span>
              <IconThumbUpFilled className="w-4 h-4" />
            </div>
          ) : (
            "Apply"
          )}
        </Button>

        <Button onClick={handleCopy} variant="outline" className="w-full">
          {copied ? (
            <div className="flex text-green-600 gap-2">
              <span>Copied</span>
              <IconConfetti />
            </div>
          ) : (
            "Copy"
          )}
        </Button>

        <p
          className={`text-center text-sm font-medium ${
            theme === "dark" ? "text-white" : ""
          }`}
        >
          {name}
        </p>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="absolute inset-0 flex-col justify-end items-center gap-2 p-4 z-10
                  lg:flex hidden opacity-0 group-hover:opacity-100"
      >
        <Button
          onClick={handleApply}
          variant="outline"
          className="w-full cursor-pointer"
        >
          {applied ? (
            <div className="flex gap-2 text-orange-600">
              <span>Applied</span>
              <IconThumbUpFilled className="w-4 h-4" />
            </div>
          ) : (
            "Apply"
          )}
        </Button>

        <Button
          onClick={handleCopy}
          variant="outline"
          className="w-full cursor-pointer"
        >
          {copied ? (
            <div className="flex text-green-600 gap-2">
              <span>Copied</span>
              <IconConfetti />
            </div>
          ) : (
            "Copy"
          )}
        </Button>

        <p
          className={`text-center text-sm font-medium ${
            theme === "dark" ? "text-white" : ""
          }`}
        >
          {name}
        </p>
      </motion.div>
    </div>
  );
};

export default ColourCard;
