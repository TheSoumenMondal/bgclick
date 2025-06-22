"use client"
import type { JSX } from "react"

export interface GlassmorphismBackgroundInterface {
  name: string
  code: JSX.Element
  theme: "dark" | "light"
}

export const GlassmorphismBackgrounds: GlassmorphismBackgroundInterface[] = [
  {
    name: "Neo Light",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-gradient-to-r from-pink-500 to-rose-600 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-100px] w-[350px] h-[350px] bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[40%] right-[20%] w-[200px] h-[200px] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-35 blur-3xl" />
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[6px]" />
      </div>
    ),
  },
  {
    name: "Midnight Aurora",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#0f0f23] to-[#1a1a2e] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-purple-500 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-[30%] right-[15%] w-[200px] h-[200px] bg-cyan-400 rounded-full opacity-35 blur-3xl" />
        <div className="absolute top-[60%] left-[70%] w-[150px] h-[150px] bg-pink-400 rounded-full opacity-30 blur-3xl" />
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[6px]" />
      </div>
    ),
  },
  {
    name: "Ocean Breeze",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#e0f2fe] to-[#81d4fa] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[10%] right-[20%] w-[320px] h-[320px] bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[20%] left-[10%] w-[280px] h-[280px] bg-gradient-to-r from-teal-600 to-blue-700 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[60%] left-[60%] w-[200px] h-[200px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-40 blur-3xl" />
        <div className="absolute inset-0 bg-white/25 backdrop-blur-[7px]" />
      </div>
    ),
  },
  {
    name: "Sunset Glow",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#fff3e0] to-[#ffb74d] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[-50px] left-[30%] w-[400px] h-[400px] bg-gradient-to-r from-orange-600 to-red-600 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[-80px] right-[20%] w-[300px] h-[300px] bg-gradient-to-r from-red-600 to-pink-600 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[40%] left-[-100px] w-[250px] h-[250px] bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full opacity-40 blur-3xl" />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-[6px]" />
      </div>
    ),
  },
  {
    name: "Deep Space",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a0033] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[15%] left-[60%] w-[180px] h-[180px] bg-indigo-600 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-[40%] left-[20%] w-[220px] h-[220px] bg-purple-700 rounded-full opacity-35 blur-3xl" />
        <div className="absolute top-[70%] right-[10%] w-[160px] h-[160px] bg-blue-500 rounded-full opacity-30 blur-3xl" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[7px]" />
      </div>
    ),
  },
  {
    name: "Forest Mist",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#f1f8e9] to-[#a5d6a7] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[25%] right-[-50px] w-[350px] h-[350px] bg-gradient-to-r from-green-700 to-emerald-700 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[10%] left-[40%] w-[300px] h-[300px] bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[10%] left-[10%] w-[200px] h-[200px] bg-gradient-to-r from-lime-600 to-green-600 rounded-full opacity-40 blur-3xl" />
        <div className="absolute inset-0 bg-white/25 backdrop-blur-[7px]" />
      </div>
    ),
  },
  {
    name: "Neon Dreams",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#0d1117] to-[#161b22] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[30%] left-[15%] w-[200px] h-[200px] bg-green-400 rounded-full opacity-45 blur-3xl" />
        <div className="absolute bottom-[20%] right-[25%] w-[250px] h-[250px] bg-pink-500 rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-[10%] right-[40%] w-[180px] h-[180px] bg-cyan-400 rounded-full opacity-35 blur-3xl" />
        <div className="absolute bottom-[60%] left-[70%] w-[160px] h-[160px] bg-yellow-400 rounded-full opacity-30 blur-3xl" />
        <div className="absolute inset-0 bg-black/15 backdrop-blur-[6px]" />
      </div>
    ),
  },
  {
    name: "Rose Garden",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#fce4ec] to-[#f48fb1] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[-80px] left-[50%] w-[350px] h-[350px] bg-gradient-to-r from-rose-600 to-pink-700 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[30%] left-[-100px] w-[300px] h-[300px] bg-gradient-to-r from-pink-700 to-red-600 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[50%] right-[-80px] w-[250px] h-[250px] bg-gradient-to-r from-red-500 to-rose-600 rounded-full opacity-40 blur-3xl" />
        <div className="absolute inset-0 bg-white/25 backdrop-blur-[6px]" />
      </div>
    ),
  },
  {
    name: "Arctic Frost",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#f0f4f8] to-[#b3e5fc] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[20%] left-[20%] w-[320px] h-[320px] bg-gradient-to-r from-blue-600 to-cyan-700 rounded-full opacity-45 blur-3xl" />
        <div className="absolute bottom-[-50px] right-[30%] w-[350px] h-[350px] bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full opacity-50 blur-3xl" />
        <div className="absolute top-[60%] right-[10%] w-[200px] h-[200px] bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full opacity-40 blur-3xl" />
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[7px]" />
      </div>
    ),
  },
  {
    name: "Cosmic Void",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#000000] to-[#1a1a2e] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[40%] left-[10%] w-[150px] h-[150px] bg-violet-600 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[15%] right-[15%] w-[200px] h-[200px] bg-blue-600 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[10%] right-[50%] w-[120px] h-[120px] bg-purple-500 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-[70%] left-[60%] w-[180px] h-[180px] bg-indigo-500 rounded-full opacity-35 blur-3xl" />
        <div className="absolute inset-0 bg-black/25 backdrop-blur-[8px]" />
      </div>
    ),
  },
  {
    name: "Golden Hour",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#fffbf0] to-[#ffc107] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[10%] left-[-100px] w-[400px] h-[400px] bg-gradient-to-r from-amber-600 to-orange-600 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-gradient-to-r from-orange-600 to-red-500 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[50%] right-[50%] w-[250px] h-[250px] bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full opacity-40 blur-3xl" />
        <div className="absolute inset-0 bg-white/25 backdrop-blur-[6px]" />
      </div>
    ),
  },
  {
    name: "Electric Storm",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[25%] left-[40%] w-[250px] h-[250px] bg-blue-500 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-[30%] left-[10%] w-[200px] h-[200px] bg-cyan-400 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[60%] right-[20%] w-[180px] h-[180px] bg-purple-500 rounded-full opacity-35 blur-3xl" />
        <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-[6px]" />
      </div>
    ),
  },
  {
    name: "Lavender Fields",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#f3e5f5] to-[#ce93d8] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[-50px] right-[20%] w-[350px] h-[350px] bg-gradient-to-r from-purple-600 to-violet-700 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[10%] left-[30%] w-[300px] h-[300px] bg-gradient-to-r from-violet-600 to-purple-600 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[40%] left-[10%] w-[200px] h-[200px] bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full opacity-40 blur-3xl" />
        <div className="absolute inset-0 bg-white/25 backdrop-blur-[7px]" />
      </div>
    ),
  },
  {
    name: "Cyber Matrix",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#001100] to-[#003300] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[20%] left-[20%] w-[200px] h-[200px] bg-green-500 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[40%] right-[30%] w-[150px] h-[150px] bg-lime-400 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[70%] left-[60%] w-[180px] h-[180px] bg-emerald-400 rounded-full opacity-40 blur-3xl" />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[7px]" />
      </div>
    ),
  },
  {
    name: "Coral Reef",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#fff8e1] to-[#ffab40] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[30%] left-[-80px] w-[350px] h-[350px] bg-gradient-to-r from-orange-600 to-red-600 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[-100px] right-[40%] w-[300px] h-[300px] bg-gradient-to-r from-pink-600 to-rose-600 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[10%] right-[10%] w-[250px] h-[250px] bg-gradient-to-r from-coral-600 to-orange-600 rounded-full opacity-40 blur-3xl" />
        <div className="absolute inset-0 bg-white/25 backdrop-blur-[6px]" />
      </div>
    ),
  },
  {
    name: "Nebula Drift",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#0a0015] to-[#1a0033] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[15%] left-[50%] w-[280px] h-[280px] bg-purple-600 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-[25%] left-[15%] w-[220px] h-[220px] bg-pink-500 rounded-full opacity-35 blur-3xl" />
        <div className="absolute top-[60%] right-[-50px] w-[300px] h-[300px] bg-blue-600 rounded-full opacity-30 blur-3xl" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[8px]" />
      </div>
    ),
  },
  {
    name: "Mint Fresh",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#e8f5e8] to-[#66bb6a] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[40%] right-[20%] w-[350px] h-[350px] bg-gradient-to-r from-green-600 to-emerald-700 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[-80px] left-[25%] w-[320px] h-[320px] bg-gradient-to-r from-teal-600 to-green-700 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[10%] left-[10%] w-[200px] h-[200px] bg-gradient-to-r from-lime-600 to-teal-600 rounded-full opacity-40 blur-3xl" />
        <div className="absolute inset-0 bg-white/25 backdrop-blur-[7px]" />
      </div>
    ),
  },
  {
    name: "Crimson Night",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#1a0000] to-[#330000] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[25%] left-[30%] w-[250px] h-[250px] bg-red-600 rounded-full opacity-45 blur-3xl" />
        <div className="absolute bottom-[35%] right-[25%] w-[200px] h-[200px] bg-rose-500 rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-[70%] left-[10%] w-[180px] h-[180px] bg-pink-600 rounded-full opacity-35 blur-3xl" />
        <div className="absolute inset-0 bg-black/25 backdrop-blur-[6px]" />
      </div>
    ),
  },
  {
    name: "Sky Serenity",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#e3f2fd] to-[#42a5f5] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[-100px] left-[40%] w-[400px] h-[400px] bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[20%] right-[-100px] w-[350px] h-[350px] bg-gradient-to-r from-sky-600 to-blue-700 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[50%] left-[10%] w-[250px] h-[250px] bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full opacity-40 blur-3xl" />
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[7px]" />
      </div>
    ),
  },
  {
    name: "Phantom Glow",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#0f0f0f] to-[#2d1b69] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[35%] left-[20%] w-[180px] h-[180px] bg-indigo-500 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[20%] right-[30%] w-[220px] h-[220px] bg-purple-600 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[10%] right-[10%] w-[160px] h-[160px] bg-violet-500 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-[60%] left-[70%] w-[140px] h-[140px] bg-blue-500 rounded-full opacity-35 blur-3xl" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[7px]" />
      </div>
    ),
  },
  {
    name: "Peach Blossom",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#fef7f0] to-[#ff8a65] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[20%] left-[-50px] w-[350px] h-[350px] bg-gradient-to-r from-orange-600 to-red-600 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[30%] right-[20%] w-[320px] h-[320px] bg-gradient-to-r from-pink-600 to-rose-700 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[60%] left-[60%] w-[250px] h-[250px] bg-gradient-to-r from-red-500 to-pink-600 rounded-full opacity-40 blur-3xl" />
        <div className="absolute inset-0 bg-white/25 backdrop-blur-[6px]" />
      </div>
    ),
  },
  {
    name: "Void Walker",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#000000] to-[#434343] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[30%] left-[40%] w-[200px] h-[200px] bg-gray-600 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-[40%] right-[20%] w-[250px] h-[250px] bg-slate-500 rounded-full opacity-35 blur-3xl" />
        <div className="absolute top-[70%] left-[15%] w-[180px] h-[180px] bg-zinc-600 rounded-full opacity-30 blur-3xl" />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[8px]" />
      </div>
    ),
  },
  {
    name: "Tropical Paradise",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#e0f7fa] to-[#26c6da] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[10%] right-[-80px] w-[380px] h-[380px] bg-gradient-to-r from-cyan-600 to-teal-700 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[-50px] left-[30%] w-[350px] h-[350px] bg-gradient-to-r from-teal-600 to-green-700 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[50%] left-[-100px] w-[280px] h-[280px] bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full opacity-40 blur-3xl" />
        <div className="absolute inset-0 bg-white/25 backdrop-blur-[7px]" />
      </div>
    ),
  },
  {
    name: "Magma Core",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#1a0000] to-[#4a0000] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[20%] left-[25%] w-[280px] h-[280px] bg-red-700 rounded-full opacity-45 blur-3xl" />
        <div className="absolute bottom-[30%] right-[15%] w-[220px] h-[220px] bg-orange-600 rounded-full opacity-50 blur-3xl" />
        <div className="absolute top-[65%] left-[60%] w-[200px] h-[200px] bg-yellow-500 rounded-full opacity-40 blur-3xl" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[6px]" />
      </div>
    ),
  },
  {
    name: "Crystal Clear",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#ffffff] to-[#e0e0e0] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[25%] left-[20%] w-[300px] h-[300px] bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full opacity-45 blur-3xl" />
        <div className="absolute bottom-[35%] right-[30%] w-[350px] h-[350px] bg-gradient-to-r from-blue-600 to-indigo-700 rounded-full opacity-50 blur-3xl" />
        <div className="absolute top-[10%] right-[10%] w-[200px] h-[200px] bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-40 blur-3xl" />
        <div className="absolute inset-0 bg-white/35 backdrop-blur-[8px]" />
      </div>
    ),
  },
  {
    name: "Galactic Storm",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#0c0c0c] to-[#1f1f3a] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[15%] left-[15%] w-[200px] h-[200px] bg-blue-600 rounded-full opacity-45 blur-3xl" />
        <div className="absolute bottom-[20%] right-[20%] w-[250px] h-[250px] bg-purple-600 rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-[50%] left-[70%] w-[180px] h-[180px] bg-cyan-500 rounded-full opacity-35 blur-3xl" />
        <div className="absolute bottom-[70%] right-[60%] w-[160px] h-[160px] bg-pink-500 rounded-full opacity-30 blur-3xl" />
        <div className="absolute inset-0 bg-black/25 backdrop-blur-[7px]" />
      </div>
    ),
  },
  {
    name: "Sunrise Meadow",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#fff9c4] to-[#aed581] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[-80px] left-[50%] w-[400px] h-[400px] bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[10%] left-[-100px] w-[380px] h-[380px] bg-gradient-to-r from-lime-600 to-green-700 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[40%] right-[-50px] w-[320px] h-[320px] bg-gradient-to-r from-green-600 to-teal-600 rounded-full opacity-40 blur-3xl" />
        <div className="absolute inset-0 bg-white/25 backdrop-blur-[6px]" />
      </div>
    ),
  },
  {
    name: "Midnight Oil",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[40%] left-[30%] w-[220px] h-[220px] bg-amber-600 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-[25%] right-[25%] w-[180px] h-[180px] bg-orange-500 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[10%] right-[50%] w-[160px] h-[160px] bg-yellow-500 rounded-full opacity-35 blur-3xl" />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[8px]" />
      </div>
    ),
  },
  {
    name: "Ethereal Mist",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#f8f9fa] to-[#dee2e6] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[30%] left-[40%] w-[350px] h-[350px] bg-gradient-to-r from-indigo-600 to-purple-700 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[20%] right-[10%] w-[320px] h-[320px] bg-gradient-to-r from-purple-600 to-pink-700 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[10%] left-[10%] w-[250px] h-[250px] bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full opacity-40 blur-3xl" />
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[8px]" />
      </div>
    ),
  },
  {
    name: "Quantum Flux",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#0f0f23] to-[#16213e] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[20%] left-[20%] w-[180px] h-[180px] bg-cyan-500 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[30%] right-[30%] w-[200px] h-[200px] bg-blue-500 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[60%] left-[60%] w-[160px] h-[160px] bg-purple-500 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-[70%] right-[10%] w-[140px] h-[140px] bg-pink-500 rounded-full opacity-35 blur-3xl" />
        <div className="absolute top-[45%] left-[80%] w-[120px] h-[120px] bg-green-400 rounded-full opacity-30 blur-3xl" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[7px]" />
      </div>
    ),
  },
  {
    name: "Shadow Realm",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#0a0a0a] to-[#2a0845] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[25%] left-[25%] w-[220px] h-[220px] bg-violet-600 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[35%] right-[20%] w-[180px] h-[180px] bg-indigo-700 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[65%] left-[65%] w-[200px] h-[200px] bg-purple-500 rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-[10%] right-[45%] w-[150px] h-[150px] bg-pink-600 rounded-full opacity-35 blur-3xl" />
        <div className="absolute bottom-[15%] left-[15%] w-[160px] h-[160px] bg-blue-600 rounded-full opacity-30 blur-3xl" />
        <div className="absolute inset-0 bg-black/25 backdrop-blur-[8px]" />
      </div>
    ),
  },
  {
    name: "Spring Awakening",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#f1f8e9] to-[#8bc34a] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[15%] left-[30%] w-[350px] h-[350px] bg-gradient-to-r from-green-600 to-lime-700 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[25%] right-[25%] w-[320px] h-[320px] bg-gradient-to-r from-emerald-600 to-green-700 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[60%] right-[10%] w-[280px] h-[280px] bg-gradient-to-r from-lime-600 to-yellow-600 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-[70%] left-[10%] w-[200px] h-[200px] bg-gradient-to-r from-teal-600 to-green-600 rounded-full opacity-35 blur-3xl" />
        <div className="absolute inset-0 bg-white/25 backdrop-blur-[7px]" />
      </div>
    ),
  },
  {
    name: "Stellar Void",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#000011] to-[#001122] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[30%] left-[40%] w-[250px] h-[250px] bg-blue-400 rounded-full opacity-45 blur-3xl" />
        <div className="absolute bottom-[20%] right-[35%] w-[200px] h-[200px] bg-cyan-300 rounded-full opacity-50 blur-3xl" />
        <div className="absolute top-[15%] left-[15%] w-[180px] h-[180px] bg-teal-400 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-[60%] right-[15%] w-[160px] h-[160px] bg-sky-400 rounded-full opacity-35 blur-3xl" />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[8px]" />
      </div>
    ),
  },
  {
    name: "Desert Mirage",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#fff8dc] to-[#daa520] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[20%] right-[20%] w-[380px] h-[380px] bg-gradient-to-r from-orange-600 to-red-600 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[30%] left-[20%] w-[350px] h-[350px] bg-gradient-to-r from-yellow-600 to-orange-700 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[50%] left-[70%] w-[300px] h-[300px] bg-gradient-to-r from-amber-600 to-yellow-700 rounded-full opacity-40 blur-3xl" />
        <div className="absolute inset-0 bg-white/25 backdrop-blur-[6px]" />
      </div>
    ),
  },
  {
    name: "Digital Underground",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#0f0f0f] to-[#1a1a3a] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[35%] left-[30%] w-[200px] h-[200px] bg-emerald-400 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[25%] right-[25%] w-[180px] h-[180px] bg-green-500 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[15%] right-[40%] w-[160px] h-[160px] bg-lime-400 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-[65%] left-[60%] w-[220px] h-[220px] bg-teal-400 rounded-full opacity-35 blur-3xl" />
        <div className="absolute top-[70%] right-[10%] w-[140px] h-[140px] bg-cyan-400 rounded-full opacity-30 blur-3xl" />
        <div className="absolute inset-0 bg-black/25 backdrop-blur-[7px]" />
      </div>
    ),
  },
  {
    name: "Candy Dreams",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#fce4ec] to-[#f06292] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[25%] left-[25%] w-[340px] h-[340px] bg-gradient-to-r from-pink-600 to-rose-700 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[20%] right-[30%] w-[320px] h-[320px] bg-gradient-to-r from-purple-600 to-pink-700 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[10%] right-[10%] w-[250px] h-[250px] bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-[60%] left-[60%] w-[200px] h-[200px] bg-gradient-to-r from-violet-600 to-pink-600 rounded-full opacity-35 blur-3xl" />
        <div className="absolute inset-0 bg-white/25 backdrop-blur-[6px]" />
      </div>
    ),
  },
  {
    name: "Mystic Depths",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#1a0033] to-[#330066] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[40%] left-[20%] w-[240px] h-[240px] bg-indigo-500 rounded-full opacity-45 blur-3xl" />
        <div className="absolute bottom-[30%] right-[30%] w-[200px] h-[200px] bg-purple-600 rounded-full opacity-50 blur-3xl" />
        <div className="absolute top-[20%] right-[20%] w-[180px] h-[180px] bg-violet-500 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-[70%] left-[70%] w-[160px] h-[160px] bg-blue-500 rounded-full opacity-35 blur-3xl" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[8px]" />
      </div>
    ),
  },
  {
    name: "Northern Lights",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#e8f5e8] to-[#81c784] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[15%] left-[40%] w-[360px] h-[360px] bg-gradient-to-r from-green-600 to-cyan-700 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[25%] right-[20%] w-[330px] h-[330px] bg-gradient-to-r from-teal-600 to-blue-700 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[55%] left-[15%] w-[280px] h-[280px] bg-gradient-to-r from-cyan-600 to-green-700 rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-[10%] right-[10%] w-[220px] h-[220px] bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full opacity-35 blur-3xl" />
        <div className="absolute inset-0 bg-white/25 backdrop-blur-[7px]" />
      </div>
    ),
  },
  {
    name: "Lunar Eclipse",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#0a0a0a] to-[#4a1810] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[50%] left-[50%] w-[300px] h-[300px] bg-red-600 rounded-full opacity-40 blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-[30%] left-[25%] w-[180px] h-[180px] bg-orange-500 rounded-full opacity-45 blur-3xl" />
        <div className="absolute bottom-[25%] right-[25%] w-[200px] h-[200px] bg-yellow-500 rounded-full opacity-35 blur-3xl" />
        <div className="absolute top-[15%] right-[40%] w-[160px] h-[160px] bg-amber-500 rounded-full opacity-30 blur-3xl" />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[8px]" />
      </div>
    ),
  },
  {
    name: "Butterfly Garden",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#f3e5f5] to-[#ba68c8] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[30%] left-[30%] w-[340px] h-[340px] bg-gradient-to-r from-purple-600 to-pink-700 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[35%] right-[25%] w-[310px] h-[310px] bg-gradient-to-r from-violet-600 to-purple-700 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[10%] right-[15%] w-[260px] h-[260px] bg-gradient-to-r from-fuchsia-600 to-pink-600 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-[15%] left-[15%] w-[200px] h-[200px] bg-gradient-to-r from-rose-600 to-purple-600 rounded-full opacity-35 blur-3xl" />
        <div className="absolute inset-0 bg-white/25 backdrop-blur-[6px]" />
      </div>
    ),
  },
  {
    name: "Toxic Glow",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a4d1a] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[25%] left-[35%] w-[220px] h-[220px] bg-lime-400 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[30%] right-[30%] w-[200px] h-[200px] bg-green-400 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[60%] left-[15%] w-[180px] h-[180px] bg-emerald-400 rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-[15%] right-[15%] w-[160px] h-[160px] bg-yellow-400 rounded-full opacity-35 blur-3xl" />
        <div className="absolute bottom-[65%] right-[60%] w-[140px] h-[140px] bg-teal-400 rounded-full opacity-30 blur-3xl" />
        <div className="absolute inset-0 bg-black/25 backdrop-blur-[7px]" />
      </div>
    ),
  },
  {
    name: "Citrus Burst",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#fff9c4] to-[#ffb74d] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[20%] left-[25%] w-[370px] h-[370px] bg-gradient-to-r from-orange-600 to-red-600 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[25%] right-[25%] w-[340px] h-[340px] bg-gradient-to-r from-yellow-600 to-orange-700 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[55%] right-[10%] w-[290px] h-[290px] bg-gradient-to-r from-lime-600 to-yellow-700 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-[70%] left-[70%] w-[220px] h-[220px] bg-gradient-to-r from-amber-600 to-orange-600 rounded-full opacity-35 blur-3xl" />
        <div className="absolute inset-0 bg-white/25 backdrop-blur-[6px]" />
      </div>
    ),
  },
  {
    name: "Binary Dreams",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#000000] to-[#001a33] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[35%] left-[40%] w-[200px] h-[200px] bg-cyan-400 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[35%] right-[40%] w-[200px] h-[200px] bg-blue-500 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[20%] left-[20%] w-[150px] h-[150px] bg-teal-400 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-[20%] right-[20%] w-[150px] h-[150px] bg-sky-400 rounded-full opacity-35 blur-3xl" />
        <div className="absolute top-[60%] right-[60%] w-[120px] h-[120px] bg-indigo-400 rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-[60%] left-[60%] w-[120px] h-[120px] bg-purple-400 rounded-full opacity-25 blur-3xl" />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[8px]" />
      </div>
    ),
  },
  {
    name: "Ocean Waves",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#e1f5fe] to-[#29b6f6] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[15%] left-[35%] w-[380px] h-[380px] bg-gradient-to-r from-blue-600 to-cyan-700 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[20%] right-[30%] w-[350px] h-[350px] bg-gradient-to-r from-cyan-600 to-teal-700 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[50%] left-[10%] w-[300px] h-[300px] bg-gradient-to-r from-teal-600 to-blue-700 rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-[10%] right-[10%] w-[240px] h-[240px] bg-gradient-to-r from-sky-600 to-cyan-600 rounded-full opacity-35 blur-3xl" />
        <div className="absolute inset-0 bg-white/25 backdrop-blur-[7px]" />
      </div>
    ),
  },
  {
    name: "Obsidian Fire",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#1a0000] to-[#330a0a] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[30%] left-[30%] w-[250px] h-[250px] bg-red-500 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[25%] right-[25%] w-[220px] h-[220px] bg-orange-500 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[15%] right-[45%] w-[180px] h-[180px] bg-yellow-500 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-[60%] left-[60%] w-[200px] h-[200px] bg-pink-500 rounded-full opacity-35 blur-3xl" />
        <div className="absolute top-[70%] right-[15%] w-[160px] h-[160px] bg-rose-500 rounded-full opacity-30 blur-3xl" />
        <div className="absolute inset-0 bg-black/25 backdrop-blur-[8px]" />
      </div>
    ),
  },
  {
    name: "Rainbow Mist",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#ffffff] to-[#f5f5f5] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[25%] left-[20%] w-[300px] h-[300px] bg-gradient-to-r from-red-600 to-pink-700 rounded-full opacity-45 blur-3xl" />
        <div className="absolute bottom-[30%] right-[20%] w-[280px] h-[280px] bg-gradient-to-r from-blue-600 to-purple-700 rounded-full opacity-50 blur-3xl" />
        <div className="absolute top-[10%] right-[40%] w-[250px] h-[250px] bg-gradient-to-r from-green-600 to-teal-700 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-[15%] left-[50%] w-[220px] h-[220px] bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full opacity-35 blur-3xl" />
        <div className="absolute top-[60%] left-[70%] w-[200px] h-[200px] bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-30 blur-3xl" />
        <div className="absolute inset-0 bg-white/35 backdrop-blur-[8px]" />
      </div>
    ),
  },
  {
    name: "Midnight Prism",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#0f0f2e] to-[#2e0f2e] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[20%] left-[25%] w-[200px] h-[200px] bg-purple-500 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[35%] right-[30%] w-[180px] h-[180px] bg-pink-500 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[55%] left-[55%] w-[160px] h-[160px] bg-blue-500 rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-[40%] right-[10%] w-[140px] h-[140px] bg-cyan-500 rounded-full opacity-35 blur-3xl" />
        <div className="absolute bottom-[15%] left-[45%] w-[120px] h-[120px] bg-violet-500 rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-[70%] right-[70%] w-[100px] h-[100px] bg-indigo-500 rounded-full opacity-25 blur-3xl" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[7px]" />
      </div>
    ),
  },
  {
    name: "Flower Power",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#fef7f0] to-[#ff7043] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[30%] left-[30%] w-[350px] h-[350px] bg-gradient-to-r from-pink-600 to-rose-700 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[25%] right-[25%] w-[320px] h-[320px] bg-gradient-to-r from-orange-600 to-red-700 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[15%] right-[15%] w-[280px] h-[280px] bg-gradient-to-r from-yellow-600 to-orange-700 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-[60%] left-[60%] w-[240px] h-[240px] bg-gradient-to-r from-red-600 to-pink-700 rounded-full opacity-35 blur-3xl" />
        <div className="absolute top-[70%] right-[70%] w-[200px] h-[200px] bg-gradient-to-r from-rose-600 to-orange-600 rounded-full opacity-30 blur-3xl" />
        <div className="absolute inset-0 bg-white/25 backdrop-blur-[6px]" />
      </div>
    ),
  },
  {
    name: "Dark Matter",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#000000] to-[#1a1a1a] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[40%] left-[40%] w-[180px] h-[180px] bg-white rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-[30%] right-[35%] w-[160px] h-[160px] bg-gray-300 rounded-full opacity-35 blur-3xl" />
        <div className="absolute top-[25%] left-[15%] w-[140px] h-[140px] bg-slate-400 rounded-full opacity-25 blur-3xl" />
        <div className="absolute bottom-[60%] right-[15%] w-[120px] h-[120px] bg-zinc-400 rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-[65%] right-[65%] w-[100px] h-[100px] bg-neutral-400 rounded-full opacity-15 blur-3xl" />
        <div className="absolute bottom-[15%] left-[65%] w-[200px] h-[200px] bg-stone-400 rounded-full opacity-25 blur-3xl" />
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[9px]" />
      </div>
    ),
  },
  {
    name: "Sunburst Glory",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#fffde7] to-[#ffb300] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[50%] left-[50%] w-[400px] h-[400px] bg-gradient-to-r from-yellow-600 to-orange-700 rounded-full opacity-45 blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-[20%] left-[20%] w-[250px] h-[250px] bg-gradient-to-r from-orange-600 to-red-600 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[20%] right-[20%] w-[280px] h-[280px] bg-gradient-to-r from-amber-600 to-yellow-700 rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-[15%] right-[45%] w-[200px] h-[200px] bg-gradient-to-r from-red-600 to-pink-600 rounded-full opacity-35 blur-3xl" />
        <div className="absolute bottom-[45%] left-[15%] w-[220px] h-[220px] bg-gradient-to-r from-yellow-600 to-amber-700 rounded-full opacity-30 blur-3xl" />
        <div className="absolute inset-0 bg-white/25 backdrop-blur-[6px]" />
      </div>
    ),
  },
  {
    name: "Abyssal Depths",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#000033] to-[#001a4d] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[45%] left-[50%] w-[320px] h-[320px] bg-gradient-to-r from-blue-800 to-indigo-900 rounded-full opacity-60 blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-[20%] left-[20%] w-[180px] h-[180px] bg-navy-600 rounded-full opacity-45 blur-3xl" />
        <div className="absolute bottom-[25%] right-[25%] w-[200px] h-[200px] bg-blue-700 rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-[70%] right-[15%] w-[150px] h-[150px] bg-indigo-600 rounded-full opacity-35 blur-3xl" />
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[9px]" />
      </div>
    ),
  },
  {
    name: "Crystal Dawn",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[30%] left-[35%] w-[380px] h-[380px] bg-gradient-to-r from-blue-600 to-purple-700 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[20%] right-[30%] w-[350px] h-[350px] bg-gradient-to-r from-indigo-600 to-blue-700 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[15%] right-[15%] w-[280px] h-[280px] bg-gradient-to-r from-purple-600 to-pink-700 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-[60%] left-[15%] w-[220px] h-[220px] bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full opacity-35 blur-3xl" />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[8px]" />
      </div>
    ),
  },
  {
    name: "Neon Metropolis",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a3a] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[25%] left-[25%] w-[200px] h-[200px] bg-pink-500 rounded-full opacity-55 blur-3xl" />
        <div className="absolute bottom-[30%] right-[30%] w-[180px] h-[180px] bg-cyan-400 rounded-full opacity-50 blur-3xl" />
        <div className="absolute top-[60%] left-[60%] w-[160px] h-[160px] bg-green-400 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[15%] right-[45%] w-[140px] h-[140px] bg-yellow-400 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-[15%] left-[45%] w-[220px] h-[220px] bg-purple-500 rounded-full opacity-35 blur-3xl" />
        <div className="absolute top-[45%] right-[15%] w-[120px] h-[120px] bg-orange-400 rounded-full opacity-30 blur-3xl" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[7px]" />
      </div>
    ),
  },
  {
    name: "Pastel Paradise",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#fef7ff] to-[#f3e8ff] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[25%] left-[25%] w-[360px] h-[360px] bg-gradient-to-r from-pink-500 to-purple-600 rounded-full opacity-45 blur-3xl" />
        <div className="absolute bottom-[25%] right-[25%] w-[340px] h-[340px] bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full opacity-50 blur-3xl" />
        <div className="absolute top-[10%] right-[40%] w-[280px] h-[280px] bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-[60%] left-[60%] w-[240px] h-[240px] bg-gradient-to-r from-violet-500 to-pink-600 rounded-full opacity-35 blur-3xl" />
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[7px]" />
      </div>
    ),
  },
  {
    name: "Starfall Symphony",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#0f0f23] to-[#1a1a3a] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[120px] h-[120px] bg-white rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-[20%] left-[30%] w-[100px] h-[100px] bg-blue-300 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[35%] left-[50%] w-[140px] h-[140px] bg-purple-400 rounded-full opacity-50 blur-3xl" />
        <div className="absolute top-[50%] left-[70%] w-[110px] h-[110px] bg-pink-400 rounded-full opacity-35 blur-3xl" />
        <div className="absolute top-[65%] left-[20%] w-[160px] h-[160px] bg-cyan-400 rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-[80%] left-[60%] w-[130px] h-[130px] bg-violet-400 rounded-full opacity-30 blur-3xl" />
        <div className="absolute inset-0 bg-black/25 backdrop-blur-[8px]" />
      </div>
    ),
  },
  {
    name: "Vanilla Sky",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#fffef7] to-[#fef3c7] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[20%] left-[30%] w-[400px] h-[400px] bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full opacity-45 blur-3xl" />
        <div className="absolute bottom-[30%] right-[20%] w-[350px] h-[350px] bg-gradient-to-r from-orange-500 to-red-600 rounded-full opacity-50 blur-3xl" />
        <div className="absolute top-[60%] left-[10%] w-[300px] h-[300px] bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full opacity-40 blur-3xl" />
        <div className="absolute inset-0 bg-white/25 backdrop-blur-[6px]" />
      </div>
    ),
  },
  {
    name: "Void Whispers",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#000000] to-[#0f0f0f] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[40%] left-[20%] w-[180px] h-[180px] bg-gray-500 rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-[35%] right-[35%] w-[200px] h-[200px] bg-slate-400 rounded-full opacity-35 blur-3xl" />
        <div className="absolute top-[20%] right-[20%] w-[160px] h-[160px] bg-zinc-500 rounded-full opacity-25 blur-3xl" />
        <div className="absolute bottom-[20%] left-[50%] w-[140px] h-[140px] bg-neutral-400 rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-[70%] left-[70%] w-[220px] h-[220px] bg-stone-500 rounded-full opacity-40 blur-3xl" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[9px]" />
      </div>
    ),
  },
  {
    name: "Cotton Candy",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#fdf2f8] to-[#f9a8d4] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[30%] left-[30%] w-[370px] h-[370px] bg-gradient-to-r from-pink-600 to-rose-700 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[25%] right-[25%] w-[340px] h-[340px] bg-gradient-to-r from-purple-600 to-pink-700 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[15%] right-[15%] w-[290px] h-[290px] bg-gradient-to-r from-fuchsia-600 to-purple-700 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-[60%] left-[60%] w-[250px] h-[250px] bg-gradient-to-r from-rose-600 to-pink-700 rounded-full opacity-35 blur-3xl" />
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[7px]" />
      </div>
    ),
  },
  {
    name: "Electric Pulse",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#0a0a1a] to-[#1a0a3a] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[50%] left-[50%] w-[300px] h-[300px] bg-electric-blue rounded-full opacity-60 blur-3xl transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute top-[25%] left-[25%] w-[150px] h-[150px] bg-cyan-400 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[25%] right-[25%] w-[180px] h-[180px] bg-blue-500 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[75%] left-[75%] w-[120px] h-[120px] bg-purple-500 rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-[15%] right-[60%] w-[140px] h-[140px] bg-indigo-500 rounded-full opacity-35 blur-3xl" />
        <div className="absolute inset-0 bg-black/25 backdrop-blur-[8px]" />
      </div>
    ),
  },
  {
    name: "Morning Dew",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#f0fdf4] to-[#bbf7d0] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[25%] left-[35%] w-[380px] h-[380px] bg-gradient-to-r from-green-600 to-emerald-700 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[30%] right-[30%] w-[350px] h-[350px] bg-gradient-to-r from-teal-600 to-green-700 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] bg-gradient-to-r from-lime-600 to-teal-700 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-[70%] left-[15%] w-[250px] h-[250px] bg-gradient-to-r from-emerald-600 to-green-700 rounded-full opacity-35 blur-3xl" />
        <div className="absolute inset-0 bg-white/25 backdrop-blur-[7px]" />
      </div>
    ),
  },
  {
    name: "Shadow Dance",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[30%] left-[20%] w-[200px] h-[200px] bg-red-600 rounded-full opacity-45 blur-3xl" />
        <div className="absolute bottom-[40%] right-[30%] w-[180px] h-[180px] bg-orange-500 rounded-full opacity-50 blur-3xl" />
        <div className="absolute top-[60%] left-[60%] w-[160px] h-[160px] bg-yellow-500 rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-[15%] right-[15%] w-[140px] h-[140px] bg-pink-500 rounded-full opacity-35 blur-3xl" />
        <div className="absolute bottom-[15%] left-[40%] w-[220px] h-[220px] bg-purple-600 rounded-full opacity-30 blur-3xl" />
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[8px]" />
      </div>
    ),
  },
  {
    name: "Silk Ribbons",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#fefce8] to-[#fde047] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[20%] left-[20%] w-[350px] h-[100px] bg-gradient-to-r from-yellow-600 to-orange-700 rounded-full opacity-50 blur-3xl transform rotate-45" />
        <div className="absolute bottom-[30%] right-[20%] w-[320px] h-[80px] bg-gradient-to-r from-orange-600 to-red-700 rounded-full opacity-45 blur-3xl transform -rotate-45" />
        <div className="absolute top-[50%] left-[50%] w-[300px] h-[90px] bg-gradient-to-r from-amber-600 to-yellow-700 rounded-full opacity-40 blur-3xl transform rotate-12" />
        <div className="absolute top-[70%] right-[40%] w-[280px] h-[70px] bg-gradient-to-r from-lime-600 to-green-700 rounded-full opacity-35 blur-3xl transform -rotate-30" />
        <div className="absolute inset-0 bg-white/25 backdrop-blur-[6px]" />
      </div>
    ),
  },
  {
    name: "Cosmic Drift",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#0a0a2e] to-[#1a1a4e] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[35%] left-[40%] w-[250px] h-[250px] bg-blue-600 rounded-full opacity-45 blur-3xl" />
        <div className="absolute bottom-[25%] right-[25%] w-[200px] h-[200px] bg-purple-600 rounded-full opacity-50 blur-3xl" />
        <div className="absolute top-[15%] left-[15%] w-[180px] h-[180px] bg-cyan-500 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-[60%] right-[60%] w-[160px] h-[160px] bg-pink-500 rounded-full opacity-35 blur-3xl" />
        <div className="absolute top-[70%] left-[70%] w-[140px] h-[140px] bg-indigo-500 rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-[10%] left-[45%] w-[220px] h-[220px] bg-violet-600 rounded-full opacity-25 blur-3xl" />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[8px]" />
      </div>
    ),
  },
  {
    name: "Pearl Essence",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#ffffff] to-[#f1f5f9] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[30%] left-[30%] w-[360px] h-[360px] bg-gradient-to-r from-slate-600 to-gray-700 rounded-full opacity-45 blur-3xl" />
        <div className="absolute bottom-[30%] right-[30%] w-[340px] h-[340px] bg-gradient-to-r from-zinc-600 to-slate-700 rounded-full opacity-50 blur-3xl" />
        <div className="absolute top-[15%] right-[15%] w-[280px] h-[280px] bg-gradient-to-r from-neutral-600 to-stone-700 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-[65%] left-[65%] w-[220px] h-[220px] bg-gradient-to-r from-gray-600 to-zinc-700 rounded-full opacity-35 blur-3xl" />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[9px]" />
      </div>
    ),
  },
  {
    name: "Digital Rain",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#000a00] to-[#001a00] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[10%] left-[20%] w-[60px] h-[300px] bg-green-400 rounded-full opacity-50 blur-3xl" />
        <div className="absolute top-[15%] left-[40%] w-[50px] h-[250px] bg-lime-400 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[20%] left-[60%] w-[70px] h-[350px] bg-emerald-400 rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-[25%] left-[80%] w-[55px] h-[280px] bg-teal-400 rounded-full opacity-35 blur-3xl" />
        <div className="absolute top-[30%] left-[10%] w-[65px] h-[320px] bg-green-500 rounded-full opacity-30 blur-3xl" />
        <div className="absolute top-[35%] left-[90%] w-[45px] h-[200px] bg-lime-500 rounded-full opacity-25 blur-3xl" />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[7px]" />
      </div>
    ),
  },
  {
    name: "Ivory Dreams",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#fffef7] to-[#f7f3e9] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[25%] left-[25%] w-[380px] h-[380px] bg-gradient-to-r from-amber-600 to-orange-700 rounded-full opacity-45 blur-3xl" />
        <div className="absolute bottom-[25%] right-[25%] w-[360px] h-[360px] bg-gradient-to-r from-yellow-600 to-amber-700 rounded-full opacity-50 blur-3xl" />
        <div className="absolute top-[10%] right-[40%] w-[300px] h-[300px] bg-gradient-to-r from-orange-600 to-red-700 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-[60%] left-[60%] w-[250px] h-[250px] bg-gradient-to-r from-red-600 to-pink-700 rounded-full opacity-35 blur-3xl" />
        <div className="absolute inset-0 bg-white/35 backdrop-blur-[8px]" />
      </div>
    ),
  },
  {
    name: "Phantom Zone",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#0f0f0f] to-[#2a2a2a] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[40%] left-[40%] w-[280px] h-[280px] bg-white rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-[30%] right-[30%] w-[200px] h-[200px] bg-gray-300 rounded-full opacity-25 blur-3xl" />
        <div className="absolute top-[20%] left-[20%] w-[160px] h-[160px] bg-slate-400 rounded-full opacity-15 blur-3xl" />
        <div className="absolute bottom-[70%] right-[70%] w-[140px] h-[140px] bg-zinc-400 rounded-full opacity-10 blur-3xl" />
        <div className="absolute top-[75%] left-[75%] w-[120px] h-[120px] bg-neutral-400 rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-[15%] left-[15%] w-[240px] h-[240px] bg-stone-400 rounded-full opacity-35 blur-3xl" />
        <div className="absolute inset-0 bg-black/45 backdrop-blur-[10px]" />
      </div>
    ),
  },
  {
    name: "Soft Whispers",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[30%] left-[35%] w-[350px] h-[350px] bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-[25%] right-[30%] w-[320px] h-[320px] bg-gradient-to-r from-purple-500 to-blue-600 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[15%] right-[15%] w-[280px] h-[280px] bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-35 blur-3xl" />
        <div className="absolute bottom-[65%] left-[20%] w-[240px] h-[240px] bg-gradient-to-r from-violet-500 to-indigo-600 rounded-full opacity-30 blur-3xl" />
        <div className="absolute inset-0 bg-white/35 backdrop-blur-[8px]" />
      </div>
    ),
  },
  {
    name: "Midnight Storm",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[25%] left-[30%] w-[300px] h-[300px] bg-blue-600 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[35%] right-[25%] w-[250px] h-[250px] bg-cyan-500 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[60%] left-[60%] w-[200px] h-[200px] bg-purple-600 rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-[15%] right-[45%] w-[180px] h-[180px] bg-indigo-500 rounded-full opacity-35 blur-3xl" />
        <div className="absolute bottom-[15%] left-[15%] w-[220px] h-[220px] bg-violet-600 rounded-full opacity-30 blur-3xl" />
        <div className="absolute inset-0 bg-slate-900/25 backdrop-blur-[8px]" />
      </div>
    ),
  },
  {
    name: "Angel Wings",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#ffffff] to-[#fafafa] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[30%] left-[20%] w-[200px] h-[400px] bg-gradient-to-r from-blue-600 to-purple-700 rounded-full opacity-45 blur-3xl transform rotate-45" />
        <div className="absolute top-[30%] right-[20%] w-[200px] h-[400px] bg-gradient-to-r from-purple-600 to-pink-700 rounded-full opacity-50 blur-3xl transform -rotate-45" />
        <div className="absolute bottom-[20%] left-[40%] w-[300px] h-[150px] bg-gradient-to-r from-indigo-600 to-blue-700 rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-[15%] left-[45%] w-[150px] h-[150px] bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full opacity-35 blur-3xl" />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[9px]" />
      </div>
    ),
  },
  {
    name: "Dark Energy",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#000000] to-[#1a001a] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[40%] left-[40%] w-[320px] h-[320px] bg-purple-700 rounded-full opacity-55 blur-3xl" />
        <div className="absolute bottom-[25%] right-[25%] w-[200px] h-[200px] bg-violet-600 rounded-full opacity-50 blur-3xl" />
        <div className="absolute top-[20%] left-[20%] w-[180px] h-[180px] bg-indigo-600 rounded-full opacity-45 blur-3xl" />
        <div className="absolute bottom-[60%] right-[60%] w-[160px] h-[160px] bg-pink-600 rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-[70%] left-[70%] w-[140px] h-[140px] bg-fuchsia-600 rounded-full opacity-35 blur-3xl" />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[8px]" />
      </div>
    ),
  },
  {
    name: "Cloud Nine",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#f0f9ff] to-[#dbeafe] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[25%] left-[30%] w-[400px] h-[200px] bg-gradient-to-r from-blue-600 to-cyan-700 rounded-full opacity-45 blur-3xl" />
        <div className="absolute bottom-[35%] right-[25%] w-[350px] h-[180px] bg-gradient-to-r from-cyan-600 to-teal-700 rounded-full opacity-50 blur-3xl" />
        <div className="absolute top-[55%] left-[15%] w-[320px] h-[160px] bg-gradient-to-r from-sky-600 to-blue-700 rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-[10%] right-[15%] w-[280px] h-[140px] bg-gradient-to-r from-indigo-600 to-blue-700 rounded-full opacity-35 blur-3xl" />
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[7px]" />
      </div>
    ),
  },
  {
    name: "Cyber Punk",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#0a0a0a] to-[#2a0a2a] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[30%] left-[25%] w-[220px] h-[220px] bg-pink-500 rounded-full opacity-55 blur-3xl" />
        <div className="absolute bottom-[30%] right-[30%] w-[200px] h-[200px] bg-cyan-400 rounded-full opacity-50 blur-3xl" />
        <div className="absolute top-[15%] right-[15%] w-[180px] h-[180px] bg-green-400 rounded-full opacity-45 blur-3xl" />
        <div className="absolute bottom-[60%] left-[60%] w-[160px] h-[160px] bg-yellow-400 rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-[65%] right-[65%] w-[140px] h-[140px] bg-purple-500 rounded-full opacity-35 blur-3xl" />
        <div className="absolute bottom-[15%] left-[40%] w-[240px] h-[240px] bg-blue-500 rounded-full opacity-30 blur-3xl" />
        <div className="absolute inset-0 bg-black/25 backdrop-blur-[7px]" />
      </div>
    ),
  },
  {
    name: "Gentle Breeze",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[20%] left-[25%] w-[380px] h-[120px] bg-gradient-to-r from-green-600 to-teal-700 rounded-full opacity-45 blur-3xl transform rotate-12" />
        <div className="absolute bottom-[30%] right-[25%] w-[350px] h-[110px] bg-gradient-to-r from-teal-600 to-cyan-700 rounded-full opacity-50 blur-3xl transform -rotate-12" />
        <div className="absolute top-[50%] left-[50%] w-[320px] h-[100px] bg-gradient-to-r from-emerald-600 to-green-700 rounded-full opacity-40 blur-3xl transform rotate-6" />
        <div className="absolute top-[70%] right-[40%] w-[300px] h-[90px] bg-gradient-to-r from-lime-600 to-emerald-700 rounded-full opacity-35 blur-3xl transform -rotate-6" />
        <div className="absolute inset-0 bg-white/25 backdrop-blur-[7px]" />
      </div>
    ),
  },
  {
    name: "Black Hole",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#000000] to-[#000000] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[50%] left-[50%] w-[400px] h-[400px] bg-black rounded-full opacity-80 blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-[50%] left-[50%] w-[300px] h-[300px] bg-purple-900 rounded-full opacity-60 blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-[30%] left-[30%] w-[150px] h-[150px] bg-orange-500 rounded-full opacity-70 blur-3xl" />
        <div className="absolute bottom-[30%] right-[30%] w-[120px] h-[120px] bg-yellow-400 rounded-full opacity-65 blur-3xl" />
        <div className="absolute top-[70%] right-[20%] w-[100px] h-[100px] bg-red-500 rounded-full opacity-60 blur-3xl" />
        <div className="absolute bottom-[70%] left-[20%] w-[80px] h-[80px] bg-blue-500 rounded-full opacity-55 blur-3xl" />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[10px]" />
      </div>
    ),
  },
  {
    name: "Powder Snow",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#ffffff] to-[#f8fafc] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[20%] left-[20%] w-[100px] h-[100px] bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-[30%] left-[40%] w-[80px] h-[80px] bg-gradient-to-r from-indigo-500 to-blue-600 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[40%] left-[60%] w-[120px] h-[120px] bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full opacity-35 blur-3xl" />
        <div className="absolute top-[50%] left-[80%] w-[90px] h-[90px] bg-gradient-to-r from-violet-500 to-purple-600 rounded-full opacity-30 blur-3xl" />
        <div className="absolute top-[60%] left-[10%] w-[110px] h-[110px] bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full opacity-25 blur-3xl" />
        <div className="absolute top-[70%] left-[30%] w-[70px] h-[70px] bg-gradient-to-r from-sky-500 to-cyan-600 rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-[80%] left-[50%] w-[130px] h-[130px] bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full opacity-15 blur-3xl" />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[9px]" />
      </div>
    ),
  },
  {
    name: "Neural Network",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[25%] left-[25%] w-[120px] h-[120px] bg-cyan-400 rounded-full opacity-50 blur-3xl" />
        <div className="absolute top-[25%] right-[25%] w-[100px] h-[100px] bg-blue-500 rounded-full opacity-45 blur-3xl" />
        <div className="absolute bottom-[25%] left-[25%] w-[140px] h-[140px] bg-purple-500 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-[25%] right-[25%] w-[110px] h-[110px] bg-pink-500 rounded-full opacity-35 blur-3xl" />
        <div className="absolute top-[50%] left-[50%] w-[160px] h-[160px] bg-green-400 rounded-full opacity-55 blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-[40%] left-[40%] w-[2px] h-[100px] bg-cyan-400 opacity-30 blur-sm transform rotate-45" />
        <div className="absolute top-[40%] right-[40%] w-[2px] h-[100px] bg-blue-500 opacity-25 blur-sm transform -rotate-45" />
        <div className="absolute bottom-[40%] left-[40%] w-[2px] h-[100px] bg-purple-500 opacity-20 blur-sm transform -rotate-45" />
        <div className="absolute bottom-[40%] right-[40%] w-[2px] h-[100px] bg-pink-500 opacity-15 blur-sm transform rotate-45" />
        <div className="absolute inset-0 bg-black/25 backdrop-blur-[8px]" />
      </div>
    ),
  },
  {
    name: "Moonbeam",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#fefce8] to-[#fef3c7] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[20%] left-[50%] w-[400px] h-[80px] bg-gradient-to-r from-yellow-600 to-orange-700 rounded-full opacity-50 blur-3xl transform -translate-x-1/2 rotate-12" />
        <div className="absolute top-[35%] left-[50%] w-[380px] h-[70px] bg-gradient-to-r from-amber-600 to-yellow-700 rounded-full opacity-45 blur-3xl transform -translate-x-1/2 rotate-12" />
        <div className="absolute top-[50%] left-[50%] w-[360px] h-[60px] bg-gradient-to-r from-orange-600 to-amber-700 rounded-full opacity-40 blur-3xl transform -translate-x-1/2 rotate-12" />
        <div className="absolute top-[65%] left-[50%] w-[340px] h-[50px] bg-gradient-to-r from-red-600 to-orange-700 rounded-full opacity-35 blur-3xl transform -translate-x-1/2 rotate-12" />
        <div className="absolute inset-0 bg-white/25 backdrop-blur-[6px]" />
      </div>
    ),
  },
  {
    name: "Gothic Dreams",
    theme: "dark",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#1a0033] to-[#330066] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[30%] left-[30%] w-[280px] h-[280px] bg-purple-700 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[30%] right-[30%] w-[250px] h-[250px] bg-violet-600 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[15%] right-[15%] w-[200px] h-[200px] bg-indigo-600 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-[65%] left-[65%] w-[180px] h-[180px] bg-pink-600 rounded-full opacity-35 blur-3xl" />
        <div className="absolute top-[70%] right-[70%] w-[160px] h-[160px] bg-fuchsia-600 rounded-full opacity-30 blur-3xl" />
        <div className="absolute bottom-[15%] left-[40%] w-[220px] h-[220px] bg-rose-600 rounded-full opacity-25 blur-3xl" />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[8px]" />
      </div>
    ),
  },
  {
    name: "Seashell Shore",
    theme: "light",
    code: (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#fef7f0] to-[#fed7aa] flex items-center justify-center overflow-hidden">
        <div className="absolute top-[25%] left-[30%] w-[370px] h-[370px] bg-gradient-to-r from-orange-600 to-pink-700 rounded-full opacity-50 blur-3xl" />
        <div className="absolute bottom-[25%] right-[30%] w-[350px] h-[350px] bg-gradient-to-r from-coral-600 to-orange-700 rounded-full opacity-45 blur-3xl" />
        <div className="absolute top-[15%] right-[15%] w-[300px] h-[300px] bg-gradient-to-r from-rose-600 to-pink-700 rounded-full opacity-40 blur-3xl" />
        <div className="absolute bottom-[60%] left-[60%] w-[250px] h-[250px] bg-gradient-to-r from-pink-600 to-rose-700 rounded-full opacity-35 blur-3xl" />
        <div className="absolute top-[70%] right-[40%] w-[200px] h-[200px] bg-gradient-to-r from-red-600 to-coral-700 rounded-full opacity-30 blur-3xl" />
        <div className="absolute inset-0 bg-white/25 backdrop-blur-[6px]" />
      </div>
    ),
  },
]

