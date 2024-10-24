import MenuOptions from "@/components/sidebar";
import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className=" flex overflow-auto h-screen">
      <MenuOptions />
      <div className=" w-full">{children}</div>
    </div>
  );
}

export default Layout;
