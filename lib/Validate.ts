import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  description: z.string().min(10).max(500),
});

export const telegramFormSchema = z.object({
  email: z.string().email(),
  name: z.string().min(2).max(50),
});
