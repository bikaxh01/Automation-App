import { ConnectionProviderProps } from "@/provider/connection-provider";
import { z } from "zod";

export const updateUserFormSchema = z.object({
  name: z.string().min(4),
  email: z.string().email(),
});

export type connectionTypes = "Google Drive" | "Discord" | "Slack" | "Notion";
export type Connection = {
  title: connectionTypes;
  description: string;

  image: string;
  connectionKey: keyof ConnectionProviderProps;
  accessTokenKey?: string;
  slackSpecial?: boolean;
  alwaysTrue?: boolean;
};
