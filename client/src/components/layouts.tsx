import React, { ReactNode } from "react";
import Navbar from "./navbar";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex w-full items-center justify-center bg-navy-900">
      <div className="flex h-screen w-full flex-col">
        <nav className="flex w-full items-center justify-center border-b-2 border-b-white">
          <Navbar />
        </nav>
        <div className="flex w-full justify-center px-8 py-4">
          <div className="w-full max-w-[2000px]">{children}</div>
        </div>
      </div>
    </div>
  );
}
