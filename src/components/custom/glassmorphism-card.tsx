import { GlassmorphismBackgroundInterface } from "@/data/glassmorphism-data";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useGlassmorphismBackground } from "@/context/GlassMorphismContext";
import { useTheme } from "next-themes";
import reactElementToJSXString from "react-element-to-jsx-string";
import { toast } from "sonner";
import {
  IconConfettiFilled,
  IconThumbUpFilled,
} from "@tabler/icons-react";

type Props = {
  item: GlassmorphismBackgroundInterface;
};

const GlassmorphismCard = ({ item }: Props) => {
  const { setCurrentBackground } = useGlassmorphismBackground();
  const { setTheme } = useTheme();
  const [copied, setCopied] = useState<boolean>(false);
  const [applied, setApplied] = useState<boolean>(false);

  const handleClick = (bg: GlassmorphismBackgroundInterface) => {
    setCurrentBackground(bg);
    if (bg.theme === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
    setApplied(true);
    setTimeout(() => {
      setApplied(false);
    }, 1500);
  };

  const handleCopy = (background: GlassmorphismBackgroundInterface) => {
    try {
      const codeString = reactElementToJSXString(background.code, {
        showFunctions: true,
        showDefaultProps: false,
        sortProps: false,
        useBooleanShorthandSyntax: false,
        maxInlineAttributesLineLength: 80,
      });

      navigator.clipboard.writeText(codeString);
      toast.success(`${background.name} code copied to clipboard!`);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (err) {
      console.error("Failed to copy: ", err);
      toast.error("Failed to copy code to clipboard");
    }
  };

  return (
    <div className="relative w-full max-w-72 h-56 rounded-xl overflow-hidden shadow-lg border">
      <div className="absolute inset-0 z-0">{item.code}</div>
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-4">
        <div className="flex gap-2 flex-col">
          <Button
            onClick={() => handleClick(item)}
            variant="outline"
            size={"sm"}
            className={`w-full text-sm cursor-pointer ${item.theme === "light" ? "text-black dark:text-black" : ""}`}
          >
            {applied ? (
              <>
                Applied
                <IconThumbUpFilled className="w-4 h-4 text-sky-600" />
              </>
            ) : (
              "Apply"
            )}
          </Button>
          <Button
            onClick={() => handleCopy(item)}
            variant="outline"
            size={"sm"}
            className={`w-full text-sm cursor-pointer ${item.theme === "light" ? "text-black dark:text-black" : ""}`}
          >
            {copied ? (
              <>
                <IconConfettiFilled className="w-4 h-4" />
                Copied
              </>
            ) : (
              "Copy"
            )}
          </Button>
        </div>
        <div className={`w-full text-sm cursor-pointer mt-5 text-center ${item.theme === "light" ? "text-black dark:text-black" : ""}`}>
          {item.name}
        </div>
      </div>
    </div>
  );
};

export default GlassmorphismCard;
