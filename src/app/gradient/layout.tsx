import Navbar from "@/components/custom/navbar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full max-w-5xl fixed top-0 z-50">
        <Navbar />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Layout;
