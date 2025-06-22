"use client";

import React from "react";
import { Button } from "../ui/button";
import {
  IconAlertCircleFilled,
  IconChevronRight,
  IconCircleDot,
  IconGridDots,
  IconHighlightOff,
  IconPrismLight,
  IconWheel,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Badge } from "../ui/badge";

const AnimatedIcon = ({
  children,
  index,
}: {
  children: React.ReactNode;
  index: number;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
        y: 20,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
        x: [0, Math.sin(index * 0.5) * 15, 0],
        rotate: [0, Math.sin(index * 0.3) * 3, 0],
      }}
      transition={{
        opacity: { duration: 0.6, delay: index * 0.1 },
        scale: { duration: 0.6, delay: index * 0.1 },
        y: { duration: 0.6, delay: index * 0.1 },
        x: {
          duration: 4 + index * 0.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.2,
        },
        rotate: {
          duration: 5 + index * 0.3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.15,
        },
      }}
      whileHover={{
        scale: 1.05,
        y: -5,
        transition: { duration: 0.2 },
      }}
      whileTap={{
        scale: 0.95,
        transition: { duration: 0.1 },
      }}
    >
      {children}
    </motion.div>
  );
};

const Hero = () => {
  const router = useRouter();
  const handleClick = (link: string) => {
    if (link === "") {
      toast.info("Thanks for your interest", {
        description: "We are working hard to bring more backgrounds!",
        duration: 3000,
        position: "bottom-right",
      });
      return;
    }

    router.push(link);
  };

  const buttonData = [
    {
      icon: IconCircleDot,
      text: "Glassmorphism Background",
      link: "/glassmorphism",
    },
    { icon: IconPrismLight, text: "Gradient Backgrounds", link: "/gradient" },
    {
      icon: IconHighlightOff,
      text: "Dark Glow effect backgrounds",
      link: "/dark-glow",
    },
    { icon: IconGridDots, text: "Background Grids", link: "/grid" },
    {
      icon: IconAlertCircleFilled,
      text: "Any Suggestions of backgrounds?",
      link: "",
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center md:flex-row select-none px-8 md:px-4 xl:px-0">
      <div className="w-full h-1/2 md:h-full flex flex-col justify-center items-start space-y-5">
        <Button
          size={"sm"}
          variant={"outline"}
          className="rounded-full divide-x text-xs px-4 py-4 group cursor-pointer mt-10 md:mt-0"
        >
          <span className="pr-2 text-xs">
            <IconWheel className="w-4 h-4 group-hover:animate-spin" />
          </span>
            <span className="pl-1">Pick a background style from the menu on the right</span>
        </Button>
        <p className="text-3xl md:text-5xl lg:text-6xl max-w-xl font-semibold text-balance tracking-tight">
          Collection of modern backgrounds
        </p>
        <p className="text-xs md:text-sm max-w-xl">
          A curated collection of high-quality CSS patterns and gradients.
          Instantly copy and integrate into any project—built with modern
          Tailwind CSS.
        </p>
        <div className="gap-5 flex">
          <Badge variant="secondary" className="bg-[#ff0fffa2] ">
            <IconCircleDot />
            Easy to use
          </Badge>
          <Badge variant="outline">100% free</Badge>
          <Badge variant="default">One click copy</Badge>
        </div>
      </div>

      <motion.div
        className="w-full h-1/2 md:h-full items-center justify-center flex flex-col relative gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="w-full h-3/4 flex-col gap-3 flex items-center justify-center ">
          {buttonData.map((item, index) => (
            <AnimatedIcon key={index} index={index}>
              <Button
                onClick={() => handleClick(item.link)}
                size={"sm"}
                variant={"outline"}
                className="rounded-full text-xs cursor-pointer flex items-center gap-2 backdrop-blur-sm hover:shadow-md transition-shadow duration-200"
              >
                <item.icon className="w-4 h-4" />
                {item.text}
                <IconChevronRight className="w-3 h-3" />
              </Button>
            </AnimatedIcon>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
