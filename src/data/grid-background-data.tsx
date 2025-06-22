import { JSX } from "react";

export interface GridBackground {
  name: string;
  theme: "dark" | "light";
  code: JSX.Element;
}

export const gridBackgrounds: GridBackground[] = [
  {
    name: "Light Grid",
    theme: "light",
    code: (
      <div className="relative h-full w-full bg-white">
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
                        bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] 
                        bg-[size:24px_24px] 
                        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        ></div>
      </div>
    ),
  },
  {
    name: "Dark Grid",
    theme: "dark",
    code: (
      <div className="relative h-full w-full bg-black">
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
                        bg-[linear-gradient(to_right,#ffffff2e_1px,transparent_1px),linear-gradient(to_bottom,#ffffff2e_1px,transparent_1px)] 
                        bg-[size:24px_24px] 
                        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        ></div>
      </div>
    ),
  },
  {
    name: "Light Dotted Grid",
    theme: "light",
    code: (
      <div className="relative h-full w-full bg-white">
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
                        bg-[radial-gradient(circle,#4f4f4f_1px,transparent_1px)] 
                        bg-[size:20px_20px] 
                        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        ></div>
      </div>
    ),
  },
  {
    name: "Dark Dotted Grid",
    theme: "dark",
    code: (
      <div className="relative h-full w-full bg-black">
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
                        bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] 
                        bg-[size:20px_20px] 
                        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        ></div>
      </div>
    ),
  },
  {
    name: "Light Large Grid",
    theme: "light",
    code: (
      <div className="relative h-full w-full bg-white">
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
                        bg-[linear-gradient(to_right,#4f4f4f40_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f40_1px,transparent_1px)] 
                        bg-[size:48px_48px] 
                        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        ></div>
      </div>
    ),
  },
  {
    name: "Dark Large Grid",
    theme: "dark",
    code: (
      <div className="relative h-full w-full bg-black">
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
                        bg-[linear-gradient(to_right,#ffffff40_1px,transparent_1px),linear-gradient(to_bottom,#ffffff40_1px,transparent_1px)] 
                        bg-[size:48px_48px] 
                        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        ></div>
      </div>
    ),
  },
  {
    name: "Light Small Grid",
    theme: "light",
    code: (
      <div className="relative h-full w-full bg-white">
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
                        bg-[linear-gradient(to_right,#4f4f4f20_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f20_1px,transparent_1px)] 
                        bg-[size:12px_12px] 
                        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        ></div>
      </div>
    ),
  },
  {
    name: "Dark Small Grid",
    theme: "dark",
    code: (
      <div className="relative h-full w-full bg-black">
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
                        bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] 
                        bg-[size:12px_12px] 
                        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        ></div>
      </div>
    ),
  },
  {
    name: "Light Cross Grid",
    theme: "light",
    code: (
      <div className="relative h-full w-full bg-white">
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
                        bg-[linear-gradient(to_right,#4f4f4f30_2px,transparent_2px),linear-gradient(to_bottom,#4f4f4f30_2px,transparent_2px)] 
                        bg-[size:32px_32px] 
                        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        ></div>
      </div>
    ),
  },
  {
    name: "Dark Cross Grid",
    theme: "dark",
    code: (
      <div className="relative h-full w-full bg-black">
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
                        bg-[linear-gradient(to_right,#ffffff30_2px,transparent_2px),linear-gradient(to_bottom,#ffffff30_2px,transparent_2px)] 
                        bg-[size:32px_32px] 
                        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        ></div>
      </div>
    ),
  },
  {
    name: "Light Diagonal Grid",
    theme: "light",
    code: (
      <div className="relative h-full w-full bg-white">
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
                        bg-[linear-gradient(45deg,#4f4f4f25_1px,transparent_1px),linear-gradient(-45deg,#4f4f4f25_1px,transparent_1px)] 
                        bg-[size:20px_20px] 
                        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        ></div>
      </div>
    ),
  },
  {
    name: "Dark Diagonal Grid",
    theme: "dark",
    code: (
      <div className="relative h-full w-full bg-black">
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
                        bg-[linear-gradient(45deg,#ffffff25_1px,transparent_1px),linear-gradient(-45deg,#ffffff25_1px,transparent_1px)] 
                        bg-[size:20px_20px] 
                        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        ></div>
      </div>
    ),
  },
  {
    name: "Light Blueprint Grid",
    theme: "light",
    code: (
      <div className="relative h-full w-full bg-blue-50">
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
                        bg-[linear-gradient(to_right,#3b82f640_1px,transparent_1px),linear-gradient(to_bottom,#3b82f640_1px,transparent_1px)] 
                        bg-[size:24px_24px] 
                        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        ></div>
      </div>
    ),
  },

  {
    name: "Light Hexagon Grid",
    theme: "light",
    code: (
      <div className="relative h-full w-full bg-white">
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
                        bg-[radial-gradient(circle_at_25%_25%,#4f4f4f20_2px,transparent_2px),radial-gradient(circle_at_75%_75%,#4f4f4f20_2px,transparent_2px)] 
                        bg-[size:30px_30px] 
                        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        ></div>
      </div>
    ),
  },

  {
    name: "Gradient Mesh Light",
    theme: "light",
    code: (
      <div className="relative h-full w-full bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
                        bg-[linear-gradient(to_right,#8b5cf630_1px,transparent_1px),linear-gradient(to_bottom,#3b82f630_1px,transparent_1px)] 
                        bg-[size:32px_32px] 
                        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        ></div>
      </div>
    ),
  },

  {
    name: "Aurora Grid Light",
    theme: "light",
    code: (
      <div className="relative h-full w-full bg-gradient-to-t from-green-50 via-blue-50 to-purple-50">
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
                        bg-[linear-gradient(to_right,#10b98140_1px,transparent_1px),linear-gradient(to_bottom,#6366f140_1px,transparent_1px)] 
                        bg-[size:28px_28px] 
                        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        ></div>
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
                        bg-[radial-gradient(circle_at_50%_50%,#8b5cf620_0px,transparent_50px)]"
        ></div>
      </div>
    ),
  },

  {
    name: "Holographic Grid Light",
    theme: "light",
    code: (
      <div className="relative h-full w-full bg-gradient-to-tr from-violet-50 via-pink-50 to-orange-50">
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
                        bg-[linear-gradient(45deg,#8b5cf640_1px,transparent_1px),linear-gradient(-45deg,#f97316_1px,transparent_1px)] 
                        bg-[size:30px_30px] 
                        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        ></div>
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
                        bg-[conic-gradient(from_45deg,#8b5cf620,#ec489920,#f9731620,#8b5cf620)] 
                        bg-[size:60px_60px] opacity-30"
        ></div>
      </div>
    ),
  },

  {
    name: "Prism Grid Light",
    theme: "light",
    code: (
      <div className="relative h-full w-full bg-gradient-to-br from-red-50 via-blue-50 to-purple-50">
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
                        bg-[linear-gradient(to_right,#ef444450_1px,transparent_1px),linear-gradient(to_bottom,#3b82f650_1px,transparent_1px)] 
                        bg-[size:36px_36px] 
                        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        ></div>
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
                        bg-[linear-gradient(90deg,#ef444420,#eab30820,#22c55e20,#3b82f620,#8b5cf620)] 
                        bg-[size:180px_180px]"
        ></div>
      </div>
    ),
  },

  {
    name: "Cosmic Web Light",
    theme: "light",
    code: (
      <div className="relative h-full w-full bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
                        bg-[radial-gradient(circle_at_20%_20%,#8b5cf630_2px,transparent_2px),radial-gradient(circle_at_80%_80%,#3b82f630_2px,transparent_2px)] 
                        bg-[size:40px_40px] 
                        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        ></div>
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
                        bg-[linear-gradient(30deg,#8b5cf620_1px,transparent_1px),linear-gradient(150deg,#3b82f620_1px,transparent_1px)] 
                        bg-[size:60px_60px]"
        ></div>
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
                        bg-[radial-gradient(ellipse_at_center,#6366f110_0px,transparent_100px)]"
        ></div>
      </div>
    ),
  },

  {
    name: "Quantum Field Light",
    theme: "light",
    code: (
      <div className="relative h-full w-full bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50">
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
                        bg-[radial-gradient(circle_at_0%_0%,#06b6d430_1px,transparent_1px),radial-gradient(circle_at_50%_50%,#3b82f630_1px,transparent_1px),radial-gradient(circle_at_100%_100%,#8b5cf630_1px,transparent_1px)] 
                        bg-[size:20px_20px] 
                        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        ></div>
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
                        bg-[linear-gradient(45deg,transparent_9px,#06b6d420_10px,#06b6d420_11px,transparent_12px)] 
                        bg-[size:20px_20px]"
        ></div>
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
                        bg-[radial-gradient(ellipse_at_25%_25%,#3b82f615_0px,transparent_40px),radial-gradient(ellipse_at_75%_75%,#8b5cf615_0px,transparent_40px)]"
        ></div>
      </div>
    ),
  },
  {
    name: "Neural Network Light",
    theme: "light",
    code: (
      <div className="relative h-full w-full bg-gradient-to-br from-slate-50 to-blue-50">
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
                        bg-[radial-gradient(circle_at_25%_25%,#64748b40_2px,transparent_2px),radial-gradient(circle_at_75%_25%,#3b82f640_2px,transparent_2px),radial-gradient(circle_at_50%_75%,#64748b40_2px,transparent_2px)] 
                        bg-[size:50px_50px] 
                        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        ></div>
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
                        bg-[linear-gradient(27deg,#64748b20_1px,transparent_1px),linear-gradient(153deg,#3b82f620_1px,transparent_1px),linear-gradient(90deg,#64748b20_1px,transparent_1px)] 
                        bg-[size:50px_50px]"
        ></div>
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
                        bg-[radial-gradient(circle_at_50%_50%,#3b82f610_0px,transparent_75px)]"
        ></div>
      </div>
    ),
  },
  {
    name: "Minimalist Zen Light",
    theme: "light",
    code: (
      <div className="relative h-full w-full bg-gradient-to-br from-gray-50 to-slate-100">
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
                        bg-[linear-gradient(to_right,#64748b30_1px,transparent_1px),linear-gradient(to_bottom,#64748b30_1px,transparent_1px)] 
                        bg-[size:40px_40px] 
                        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        ></div>
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
                        bg-[radial-gradient(circle_at_50%_50%,#475569_1px,transparent_1px)] 
                        bg-[size:80px_80px]"
        ></div>
        <div
          className="absolute bottom-0 left-0 right-0 top-0 
                        bg-[radial-gradient(ellipse_at_center,#64748b10_0px,transparent_120px)]"
        ></div>
      </div>
    ),
  },
];