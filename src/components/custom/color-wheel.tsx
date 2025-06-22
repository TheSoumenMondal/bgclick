"use client";

import Wheel from "@uiw/react-color-wheel";
import React, { useEffect, useState } from "react";
import { hsvaToHex, hsvaToRgba, rgbaToHsva } from "@uiw/color-convert";
import { useBackgroundGlow } from "@/context/BackgroundGlowContext";

interface RGBA {
  a: number;
  b: number;
  g: number;
  r: number;
}

const DEFAULT_RGBA_STRING = "rgba(52, 168, 83, 1)";

const parseRgbaString = (rgba: string | undefined): RGBA => {
  const match = rgba?.match(/rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*([\d\.]+)?\)/);
  if (!match) {
    return { r: 52, g: 168, b: 83, a: 1 };
  }
  return {
    r: parseInt(match[1]),
    g: parseInt(match[2]),
    b: parseInt(match[3]),
    a: parseFloat(match[4]) || 1,
  };
};

const ColorWheel = () => {
  const { rgba, setRgba } = useBackgroundGlow();

  const safeRgba = rgba || DEFAULT_RGBA_STRING;
  const initialHsva = rgbaToHsva(parseRgbaString(safeRgba));

  const [hsva, setHsva] = useState(initialHsva);

  useEffect(() => {
    const rgbaColor: RGBA = hsvaToRgba(hsva);
    const RGBAString = `rgba(${rgbaColor.r}, ${rgbaColor.g}, ${rgbaColor.b}, ${rgbaColor.a})`;
    setRgba(RGBAString);
    console.log("Updated RGBA:", RGBAString);
  }, [hsva, setRgba]);

  return (
    <div>
      <Wheel
        color={hsva}
        onChange={(color) => setHsva({ ...hsva, ...color.hsva })}
      />
      <div
        className="w-full rounded-lg mt-5"
        style={{
          height: 34,
          background: hsvaToHex(hsva),
        }}
      />
    </div>
  );
};

export default ColorWheel;
