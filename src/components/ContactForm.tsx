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
import toast, { Toaster } from "react-hot-toast";

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

  const onSubmit = async (data: FormSchema) => {
    const response = await fetch("/api/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      form.reset();
    }
    if (response.status === 500) {
      throw new Error("Failed to send message. Please try again later.");
    }
  };

  return (
    <div
      className={cn(
        "px-5 py-10 w-full max-w-prose mt-10 md:mt-0 border-zinc-200 border rounded-lg shadow-md",
        figtree.className
      )}
    >
      <Toaster />
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
          <button
            className="block px-6 py-3"
            onClick={() =>
              toast.promise(form.handleSubmit(onSubmit)(), {
                loading: "Sending message...",
                success:
                  "Message sent successfully! I will get back to you soon.",
                error: "Failed to send message. Please try again.",
              })
            }
            type="submit"
          >
            <div className="flex items-center gap-1.5">
              <div>Send</div>
              <Send className="size-5" />
            </div>
          </button>
        </StylishButton>
      </div>
    </div>
  );
};
