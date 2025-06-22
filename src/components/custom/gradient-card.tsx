import React, { useContext, useState } from "react";
import { Button } from "../ui/button";
import { IconConfettiFilled, IconThumbUpFilled } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import { toast } from "sonner";
import reactElementToJSXString from "react-element-to-jsx-string";
import { gradientBackground } from "@/data/gradient-backgrounds";
import { GradientBackgroundContext } from "@/context/GradientContext";

type Props = {
  item: gradientBackground;
};

const GradientCard = ({ item }: Props) => {
  const { setTheme } = useTheme();
  const { setCurrentBackGround } = useContext(GradientBackgroundContext);
  const [copied, setCopied] = useState<boolean>(false);
  const [applied, setApplied] = useState<boolean>(false);

  const handleApply = (background: gradientBackground) => {
    setTheme(background.theme === "dark" ? "dark" : "light");
    setCurrentBackGround(background);
    setApplied(true);
    setTimeout(() => {
      setApplied(false);
    }, 2000);
  };

  const handleCopy = (background: gradientBackground) => {
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
      }, 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
      toast.error("Failed to copy code to clipboard");
    }
  };

  return (
    <div
      onClick={() => handleApply(item)}
      className="cursor-pointer rounded-lg overflow-hidden border w-full max-w-72 max-h-56 aspect-square relative flex items-center justify-center"
    >
      <div className="absolute inset-0 rounded-lg">{item.code}</div>
      <div className="absolute left-0 bottom-0 right-0 backdrop-blur-sm p-2 z-20 ">
        <div className="w-full flex items-center flex-col gap-2">
          <Button
            className={`text-xs w-full text-center truncate cursor-pointer ${
              item.theme === "dark"
                ? "text-black hover:text-black dark:text-white dark:hover:text-white"
                : "text-black hover:text-black dark:text-black dark:hover:text-black"
            }`}
            size={"sm"}
            variant={"outline"}
          >
            {applied ? (
              <>
                Applied <IconThumbUpFilled />
              </>
            ) : (
              "Apply"
            )}
          </Button>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleCopy(item);
            }}
            className={`text-xs w-full text-center truncate cursor-pointer ${
              item.theme === "dark"
                ? "text-black hover:text-black dark:text-white dark:hover:text-white"
                : "text-black hover:text-black dark:text-black dark:hover:text-black"
            }`}
            variant={"outline"}
          >
            {copied ? (
              <>
                Copied ! <IconConfettiFilled />
              </>
            ) : (
              "Copy code"
            )}
          </Button>
        </div>
        <p
          className={`text-xs text-center truncate mt-4 ${
            item.theme === "dark" ? "text-white" : "text-black"
          }`}
        >
          {item.name}
        </p>
      </div>
    </div>
  );
};

export default GradientCard;
