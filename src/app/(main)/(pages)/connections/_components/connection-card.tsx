import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { connectionTypes } from "@/lib/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type props = {
  title: connectionTypes;
  icon: string;
  type: connectionTypes;
  description: string;
  callback?: () => void;
  connected: {} & any;
};

function ConnectionCard({
  connected,
  description,
  icon,
  title,
  type,
  callback,
}: props) {
  return (
    <Card className=" w-full items-center justify-center">
      <CardHeader className="  flex-col gap-4">
        <div className=" flex flex-row gap-2">
          <Image
            src={icon}
            alt="Icon"
            height={30}
            width={30}
            className="object-contain"
          />
        </div>
        <div>
          <CardTitle className=" text-lg">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <div className=" flex flex-col items-center gap-2 p-4">
        {false ? (
          <div
            className=" border-bg-primary rounded-lg border-2
                 px-3 py-2 font-bold text-white"
          >
            connected
          </div>
        ) : (
          <Link
            href={
              title == "Discord"
                ? process.env.NEXT_PUBLIC_DISCORD_REDIRECT!
                : title == "Notion"
                ? process.env.NEXT_PUBLIC_NOTION_AUTH_URL!
                : title == "Slack"
                ? process.env.NEXT_PUBLIC_SLACK_REDIRECT!
                : "#"
            }
            className=" rounded-lg bg-primary p-2 font-bold text-primary-foreground"
          >
            Connect
          </Link>
        )}
      </div>
    </Card>
  );
}

export default ConnectionCard;
