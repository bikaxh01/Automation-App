"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Separator } from "@/components/ui/separator";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  HomeIcon,
  ReceiptIcon,
  SettingsIcon,
  WorkflowIcon,
  Zap,
} from "lucide-react";
import clsx from "clsx";

function MenuOptions() {
  const pathName = usePathname();
  console.log("🚀 ~ MenuOptions ~ pathName:", pathName);

  return (
    <nav className=" h-screen overflow-auto justify-between flex flex-col items-center gap-10 px-2 py-6 ">
      <div className=" flex items-center justify-center flex-col gap-8 ">
        <Link className=" flex font-bold flex-row" href={"/"}>
          AU
        </Link>

        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href={"/dashboard"}
                className={clsx(
                  "group m-1 h-8 w-8 flex items-center justify-center scale-[1.5] rounded-lg p-[3px] cursor-pointer",
                  pathName === "/dashboard" && "bg-primary"
                )}
              >
                <HomeIcon />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Dashboard</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href={"/workflows"}
                className={clsx(
                  "group m-1 h-8 w-8 flex items-center justify-center scale-[1.5] rounded-lg p-[3px] cursor-pointer",
                  pathName === "/workflows" && "bg-primary"
                )}
              >
                <WorkflowIcon className="" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>WorkFlows</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href={"/settings"}
                className={clsx(
                  "group m-1 h-8 w-8 flex items-center justify-center scale-[1.5] rounded-lg p-[3px] cursor-pointer",
                  pathName === "/settings" && "bg-primary"
                )}
              >
                <SettingsIcon />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Settings</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href={"/connections"}
                className={clsx(
                  "group m-1 h-8 w-8 flex items-center justify-center scale-[1.5] rounded-lg p-[3px] cursor-pointer",
                  pathName === "/connections" && "bg-primary"
                )}
              >
                <Zap />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Connections</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href={"/billing"}
                className={clsx(
                  "group m-1 h-8 w-8 flex items-center justify-center scale-[1.5] rounded-lg p-[3px] cursor-pointer",
                  pathName === "/billing" && "bg-primary"
                )}
              >
                <ReceiptIcon />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>Billing</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Separator />
      </div>
    </nav>
  );
}

export default MenuOptions;
