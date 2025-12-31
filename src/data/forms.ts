import { z } from "zod";

export const formSchema = z.object({
	name: z.string().min(1, { message: "Name is required" }),
	email: z.email({ message: "Invalid email address" }),
	message: z.string().min(1, { message: "Message is required" }),
});
