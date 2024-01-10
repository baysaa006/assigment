import React, { ReactNode } from "react";
import Navbar from "../navbar";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-max w-full items-center justify-center bg-navy-900">
      <div className="flex h-max w-full flex-col">
        <nav className="fixed z-40 flex w-full items-center justify-center border-b-2 border-b-white">
          <Navbar />
        </nav>
        <div className=" flex h-full w-full justify-center">
          <div className="min-h-screen w-full max-w-[2000px]">{children}</div>
        </div>
      </div>
    </div>
  );
}
