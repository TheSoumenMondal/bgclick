import Hero from "@/components/custom/hero";
import Navbar from "@/components/custom/navbar";
import React from "react";

const Home = () => {
  return (
    <div className="w-full flex relative items-center flex-col h-screen">
      <div className="w-full h-screen absolute flex items-center flex-col">
        <div className="w-full h-full relative max-w-5xl">
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(34, 197, 94, 0.25), transparent 70%)",
            }}
          />
        </div>
      </div>
      <div className="w-full z-10 max-w-5xl h-full flex flex-col">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
