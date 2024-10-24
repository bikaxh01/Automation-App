import { z } from "zod";

export const updateUserFormSchema = z.object({
  name: z.string().min(4),
  email: z.string().email(),
});
