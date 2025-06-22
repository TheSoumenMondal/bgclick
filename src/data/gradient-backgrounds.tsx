"use client"

import type { JSX } from "react"

export interface gradientBackground {
  name: string
  code: JSX.Element
  theme: "dark" | "light"
}

export const gradientBackgrounds: gradientBackground[] = [
  // Modified existing gradients with reduced opacity
  {
    name: "Radial Gradient Glow",
    code: (
      <div className="w-full h-full bg-gradient-to-br from-purple-900/10 via-black to-pink-900/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_40%,rgba(255,0,182,0.15),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_80%_60%,rgba(255,0,182,0.1),transparent)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_100%,rgba(255,0,182,0.05),transparent)]"></div>
      </div>
    ),
    theme: "dark",
  },
  {
    name: "Apple Mesh Gradient",
    code: (
      <div className="w-full h-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_0%_0%,rgba(120,119,198,0.4),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_100%_100%,rgba(255,154,158,0.4),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_20%,rgba(168,85,247,0.2),transparent_70%)]"></div>
      </div>
    ),
    theme: "light",
  },
  {
    name: "Spotify Dark Glow",
    code: (
      <div className="w-full h-full bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_30%_30%,rgba(34,197,94,0.3),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_120%_at_70%_70%,rgba(34,197,94,0.2),transparent_80%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-green-400/10"></div>
      </div>
    ),
    theme: "dark",
  },
  {
    name: "Instagram Sunset",
    code: (
      <div className="w-full h-full bg-gradient-to-br from-purple-900/60 via-pink-600/70 to-orange-500/80">
        <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-yellow-300/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_150%_100%_at_100%_0%,rgba(251,191,36,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-pink-500/10 to-purple-900/20"></div>
      </div>
    ),
    theme: "dark",
  },
  {
    name: "Linear App Subtle",
    code: (
      <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_0%_0%,rgba(99,102,241,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_120%_at_100%_100%,rgba(168,85,247,0.12),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 via-transparent to-purple-50/50"></div>
      </div>
    ),
    theme: "light",
  },
  {
    name: "Discord Purple Haze",
    code: (
      <div className="w-full h-full bg-[#2c2f33]">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/15 via-purple-500/10 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_100%_0%,rgba(114,137,218,0.2),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_0%_100%,rgba(88,101,242,0.15),transparent_70%)]"></div>
      </div>
    ),
    theme: "dark",
  },
  {
    name: "Stripe Clean",
    code: (
      <div className="w-full h-full bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-indigo-50/40 to-purple-50/60"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_100%_at_25%_50%,rgba(59,130,246,0.2),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_75%_50%,rgba(168,85,247,0.15),transparent_70%)]"></div>
      </div>
    ),
    theme: "light",
  },
  {
    name: "GitHub Dark Pro",
    code: (
      <div className="w-full h-full bg-[#0d1117]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/15 via-transparent to-purple-900/15"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_120%_at_50%_0%,rgba(56,139,253,0.2),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_0%_80%,rgba(139,92,246,0.15),transparent_60%)]"></div>
      </div>
    ),
    theme: "dark",
  },
  {
    name: "Figma Colorful",
    code: (
      <div className="w-full h-full bg-gradient-to-br from-orange-100 via-pink-50 to-purple-100">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_20%_30%,rgba(251,146,60,0.3),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_70%_70%,rgba(168,85,247,0.25),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_120%_at_80%_20%,rgba(34,197,94,0.2),transparent_60%)]"></div>
      </div>
    ),
    theme: "light",
  },
  {
    name: "Vercel Monochrome",
    code: (
      <div className="w-full h-full bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-white/5"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_150%_100%_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/8 via-transparent to-transparent"></div>
      </div>
    ),
    theme: "dark",
  },
  {
    name: "Notion Warm",
    code: (
      <div className="w-full h-full bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_30%_70%,rgba(251,191,36,0.2),rgba(249,115,22,0.15),rgba(239,68,68,0.2),rgba(251,191,36,0.2))]"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-orange-100/50"></div>
      </div>
    ),
    theme: "light",
  },
  {
    name: "Slack Aurora",
    code: (
      <div className="w-full h-full bg-[#1a1d29]">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/25 via-blue-500/15 to-purple-500/25"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_150%_at_50%_30%,rgba(34,197,94,0.3),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_150%_100%_at_80%_80%,rgba(59,130,246,0.25),transparent_60%)]"></div>
      </div>
    ),
    theme: "dark",
  },
  {
    name: "Airbnb Coral",
    code: (
      <div className="w-full h-full bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_30%_40%,rgba(244,63,94,0.3),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_120%_at_70%_60%,rgba(251,146,60,0.35),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent"></div>
      </div>
    ),
    theme: "light",
  },
  {
    name: "Twitter Blue Depth",
    code: (
      <div className="w-full h-full bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_150%_100%_at_100%_0%,rgba(6,182,212,0.3),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_150%_at_0%_100%,rgba(59,130,246,0.25),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-cyan-500/10"></div>
      </div>
    ),
    theme: "dark",
  },
  {
    name: "Shopify Mint",
    code: (
      <div className="w-full h-full bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_25%_30%,rgba(16,185,129,0.25),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_120%_at_75%_70%,rgba(6,182,212,0.2),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100/50 via-transparent to-cyan-100/50"></div>
      </div>
    ),
    theme: "light",
  },
  {
    name: "Netflix Red Drama",
    code: (
      <div className="w-full h-full bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-black to-red-950/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_150%_100%_at_40%_30%,rgba(220,38,38,0.4),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_150%_at_60%_70%,rgba(239,68,68,0.3),transparent_70%)]"></div>
      </div>
    ),
    theme: "dark",
  },
  {
    name: "Dribbble Pink Pop",
    code: (
      <div className="w-full h-full bg-gradient-to-br from-pink-100 via-rose-50 to-purple-100">
        <div className="absolute inset-0 bg-[conic-gradient(from_45deg_at_30%_70%,rgba(236,72,153,0.3),rgba(168,85,247,0.25),rgba(59,130,246,0.2),rgba(236,72,153,0.3))]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_120%_at_80%_20%,rgba(236,72,153,0.3),transparent_70%)]"></div>
      </div>
    ),
    theme: "light",
  },
  {
    name: "Uber Dark Motion",
    code: (
      <div className="w-full h-full bg-[#000000]">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 via-black to-gray-800/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_60%_40%,rgba(255,255,255,0.12),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_120%_at_30%_70%,rgba(156,163,175,0.18),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_40%,rgba(255,255,255,0.03)_50%,transparent_60%)]"></div>
      </div>
    ),
    theme: "dark",
  },
  {
    name: "Canva Creative",
    code: (
      <div className="w-full h-full bg-gradient-to-br from-violet-100 via-fuchsia-50 to-cyan-100">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_120%_at_25%_30%,rgba(139,92,246,0.3),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_70%_60%,rgba(6,182,212,0.25),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_100%_at_50%_80%,rgba(236,72,153,0.2),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent"></div>
      </div>
    ),
    theme: "light",
  },
  {
    name: "Midnight Ocean",
    code: (
      <div className="w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_150%_100%_at_50%_0%,rgba(59,130,246,0.4),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_150%_at_100%_100%,rgba(99,102,241,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-blue-500/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_200%_100%_at_50%_50%,rgba(147,197,253,0.15),transparent_70%)]"></div>
      </div>
    ),
    theme: "dark",
  },
  {
    name: "Cosmic Purple",
    code: (
      <div className="w-full h-full bg-gradient-to-br from-purple-900/70 via-violet-800/80 to-indigo-900/70">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_150%_at_20%_20%,rgba(168,85,247,0.2),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_150%_120%_at_80%_80%,rgba(139,92,246,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/10 via-transparent to-purple-400/8"></div>
      </div>
    ),
    theme: "dark",
  },
  {
    name: "Forest Mist",
    code: (
      <div className="w-full h-full bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_150%_at_30%_40%,rgba(34,197,94,0.25),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_150%_100%_at_70%_60%,rgba(20,184,166,0.2),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-green-100/60 via-transparent to-emerald-100/40"></div>
      </div>
    ),
    theme: "light",
  },
  {
    name: "Sunset Horizon",
    code: (
      <div className="w-full h-full bg-gradient-to-b from-orange-400 via-pink-500 to-purple-600">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_200%_100%_at_50%_0%,rgba(251,191,36,0.6),transparent_40%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-yellow-300/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_150%_80%_at_80%_60%,rgba(251,146,60,0.4),transparent_60%)]"></div>
      </div>
    ),
    theme: "dark",
  },
  // 20 New Gradient Backgrounds
  {
    name: "Electric Blue",
    code: (
      <div className="w-full h-full bg-gradient-to-br from-blue-600 via-cyan-500 to-teal-400">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_30%_20%,rgba(59,130,246,0.8),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_120%_at_70%_80%,rgba(6,182,212,0.6),transparent_70%)]"></div>
      </div>
    ),
    theme: "dark",
  },
  {
    name: "Neon Green",
    code: (
      <div className="w-full h-full bg-gradient-to-tr from-green-400 via-emerald-500 to-teal-600">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_150%_100%_at_50%_30%,rgba(34,197,94,0.9),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-lime-400/40 via-transparent to-green-600/60"></div>
      </div>
    ),
    theme: "dark",
  },
  {
    name: "Crimson Fire",
    code: (
      <div className="w-full h-full bg-gradient-to-br from-red-500 via-orange-500 to-yellow-400">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_150%_at_40%_40%,rgba(239,68,68,0.8),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_150%_100%_at_60%_60%,rgba(251,146,60,0.7),transparent_70%)]"></div>
      </div>
    ),
    theme: "dark",
  },
  {
    name: "Arctic White",
    code: (
      <div className="w-full h-full bg-gradient-to-br from-slate-100 via-gray-50 to-blue-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_25%_25%,rgba(148,163,184,0.3),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_120%_at_75%_75%,rgba(59,130,246,0.2),transparent_80%)]"></div>
      </div>
    ),
    theme: "light",
  },
  {
    name: "Deep Space",
    code: (
      <div className="w-full h-full bg-gradient-to-br from-gray-900 via-slate-800 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_200%_100%_at_50%_50%,rgba(255,255,255,0.1),transparent_80%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_200%_at_20%_80%,rgba(99,102,241,0.2),transparent_70%)]"></div>
      </div>
    ),
    theme: "dark",
  },
  {
    name: "Golden Hour",
    code: (
      <div className="w-full h-full bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_150%_100%_at_30%_70%,rgba(251,191,36,0.9),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-amber-500/60 via-transparent to-yellow-300/80"></div>
      </div>
    ),
    theme: "light",
  },
  {
    name: "Mint Fresh",
    code: (
      <div className="w-full h-full bg-gradient-to-br from-mint-100 via-green-50 to-emerald-100">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_150%_at_40%_30%,rgba(16,185,129,0.3),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_150%_100%_at_60%_70%,rgba(34,197,94,0.25),transparent_80%)]"></div>
      </div>
    ),
    theme: "light",
  },
  {
    name: "Royal Purple",
    code: (
      <div className="w-full h-full bg-gradient-to-br from-purple-600 via-violet-700 to-indigo-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_150%_at_50%_20%,rgba(139,92,246,0.8),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-600/50 via-transparent to-purple-500/70"></div>
      </div>
    ),
    theme: "dark",
  },
  {
    name: "Steel Gray",
    code: (
      <div className="w-full h-full bg-gradient-to-br from-gray-400 via-slate-500 to-zinc-600">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_120%_at_30%_40%,rgba(148,163,184,0.7),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_70%_60%,rgba(71,85,105,0.6),transparent_70%)]"></div>
      </div>
    ),
    theme: "dark",
  },
  {
    name: "Coral Reef",
    code: (
      <div className="w-full h-full bg-gradient-to-br from-pink-400 via-coral-500 to-orange-400">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_150%_100%_at_40%_50%,rgba(244,63,94,0.8),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-rose-400/60 via-transparent to-orange-300/70"></div>
      </div>
    ),
    theme: "light",
  },
  {
    name: "Cyber Teal",
    code: (
      <div className="w-full h-full bg-gradient-to-br from-teal-500 via-cyan-600 to-blue-700">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_150%_at_50%_30%,rgba(20,184,166,0.9),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_150%_100%_at_80%_70%,rgba(6,182,212,0.7),transparent_60%)]"></div>
      </div>
    ),
    theme: "dark",
  },
  {
    name: "Lavender Dream",
    code: (
      <div className="w-full h-full bg-gradient-to-br from-purple-200 via-pink-100 to-indigo-100">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_30%_40%,rgba(168,85,247,0.4),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_120%_at_70%_60%,rgba(236,72,153,0.3),transparent_80%)]"></div>
      </div>
    ),
    theme: "light",
  },
  {
    name: "Emerald Matrix",
    code: (
      <div className="w-full h-full bg-gradient-to-br from-green-800 via-emerald-700 to-teal-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_150%_100%_at_20%_30%,rgba(34,197,94,0.6),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_150%_at_80%_70%,rgba(16,185,129,0.5),transparent_70%)]"></div>
      </div>
    ),
    theme: "dark",
  },
  {
    name: "Rose Gold",
    code: (
      <div className="w-full h-full bg-gradient-to-br from-pink-300 via-rose-200 to-orange-200">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_120%_at_40%_30%,rgba(244,63,94,0.5),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-amber-200/60 via-transparent to-pink-200/80"></div>
      </div>
    ),
    theme: "light",
  },
  {
    name: "Midnight Blue",
    code: (
      <div className="w-full h-full bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_150%_at_50%_40%,rgba(59,130,246,0.4),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_150%_120%_at_30%_70%,rgba(99,102,241,0.3),transparent_70%)]"></div>
      </div>
    ),
    theme: "dark",
  },
  {
    name: "Lime Burst",
    code: (
      <div className="w-full h-full bg-gradient-to-br from-lime-400 via-green-400 to-emerald-500">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_150%_at_60%_20%,rgba(132,204,22,0.8),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-yellow-400/50 via-transparent to-green-500/70"></div>
      </div>
    ),
    theme: "light",
  },
  {
    name: "Charcoal Storm",
    code: (
      <div className="w-full h-full bg-gradient-to-br from-gray-800 via-slate-700 to-zinc-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_150%_100%_at_40%_60%,rgba(71,85,105,0.7),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_150%_at_60%_40%,rgba(52,73,94,0.6),transparent_70%)]"></div>
      </div>
    ),
    theme: "dark",
  },
  {
    name: "Peach Sunset",
    code: (
      <div className="w-full h-full bg-gradient-to-br from-orange-300 via-pink-300 to-red-400">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_30%_50%,rgba(251,146,60,0.7),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-300/50 via-transparent to-pink-400/60"></div>
      </div>
    ),
    theme: "light",
  },
  {
    name: "Electric Violet",
    code: (
      <div className="w-full h-full bg-gradient-to-br from-violet-600 via-purple-700 to-fuchsia-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_120%_at_50%_30%,rgba(139,92,246,0.9),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_70%_70%,rgba(168,85,247,0.7),transparent_60%)]"></div>
      </div>
    ),
    theme: "dark",
  },
  {
    name: "Ocean Breeze",
    code: (
      <div className="w-full h-full bg-gradient-to-br from-sky-200 via-blue-100 to-cyan-100">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_150%_100%_at_25%_40%,rgba(59,130,246,0.4),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_150%_at_75%_60%,rgba(6,182,212,0.3),transparent_80%)]"></div>
      </div>
    ),
    theme: "light",
  },
]

export default function GradientShowcase() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Gradient Background Collection</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A curated collection of {gradientBackgrounds.length} modern gradient backgrounds for your projects. Each
          gradient is optimized for both light and dark themes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {gradientBackgrounds.map((gradient, index) => (
            <div key={index} className="group">
              <div className="relative w-full h-48 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="absolute inset-0">{gradient.code}</div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <h3 className="text-white font-semibold text-sm">{gradient.name}</h3>
                  <span
                    className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-1 ${
                      gradient.theme === "dark" ? "bg-gray-800 text-gray-200" : "bg-white/90 text-gray-800"
                    }`}
                  >
                    {gradient.theme}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">Total: {gradientBackgrounds.length} gradient backgrounds</p>
        </div>
      </div>
    </div>
  )
}