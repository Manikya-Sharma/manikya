"use client";

import { figtree, space } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import SmallHeading from "./SmallHeading";
import StylishButton from "./StylishButton";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().min(1, { message: "Message is required" }),
});

type FormSchema = z.infer<typeof formSchema>;

export const ContactForm = () => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  return (
    <div
      className={cn(
        "px-5 py-10 w-full max-w-prose mt-10 md:mt-0 border-zinc-200 border rounded-lg shadow-md",
        figtree.className
      )}
    >
      <SmallHeading className="text-lg sm:text-xl md:text-3xl text-center mb-5">
        Start a conversation
      </SmallHeading>
      <Form {...form}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="mt-5">
              <FormLabel className={cn("text-lg", space.className)}>
                Name
              </FormLabel>
              <FormControl>
                <Input
                  className="md:text-base text-black/70 border-black/30"
                  placeholder="Your name"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="mt-5">
              <FormLabel className={cn("text-lg", space.className)}>
                Email
              </FormLabel>
              <FormControl>
                <Input
                  className="md:text-base text-black/70 border-black/30"
                  placeholder="your.email@example.org"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="mt-5">
              <FormLabel className={cn("text-lg", space.className)}>
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  className="md:text-base text-black/70 border-black/30"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </Form>
      <div className="mt-5 ml-auto mr-auto md:mr-5 w-fit">
        <StylishButton className="flex items-center gap-1.5" size="md">
          <div className="flex items-center gap-1.5">
            <div>Send</div>
            <Send className="size-5" />
          </div>
        </StylishButton>
      </div>
    </div>
  );
};
