<script lang="ts">
  import type { Snippet } from "svelte";
  import FadeInText from "./FadeInText.svelte";
  import { z } from "zod";
  import FlippingButton from "./FlippingButton.svelte";

  const { children }: { children: Snippet } = $props();

  const formSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.email({ message: "Invalid email address" }),
    message: z.string().min(1, { message: "Message is required" }),
  });

  let formData = $state({
    name: "",
    email: "",
    message: "",
  });

  let status: "SUCCESS" | "FAIL" | "IDLE" | "LOADING" = $state("IDLE");
  let formState: "CLEAN" | "DIRTY" = $state("CLEAN");

  const onSubmit = async (
    e: SubmitEvent & {
      currentTarget: EventTarget & HTMLFormElement;
    },
  ) => {
    e.preventDefault();
    try {
      const { name, email, message } = formSchema.parse(formData);
      status = "LOADING";
      const result = await fetch(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: import.meta.env.EMAILJS_SERVICE_ID!,
            template_id: import.meta.env.EMAILJS_TEMPLATE_ID!,
            user_id: import.meta.env.EMAILJS_PUBLIC_KEY!,
            accessToken: import.meta.env.EMAILJS_PRIVATE_KEY!,
            template_params: {
              message,
              user_name: name,
              user_email: email,
              from_name: name,
            },
          }),
        },
      );
      if (result.status === 200) {
        status = "SUCCESS";
      } else {
        status = "FAIL";
      }
    } catch (error) {
      // browser should have avoided it
      formState = "DIRTY";
    }
  };
</script>

<form
  onsubmit={onSubmit}
  class="flex-2 xl:flex-4 w-full md:max-w-160 xl:aspect-video border border-black/20 rounded-md shadow grid grid-cols-1 place-items-center py-12 px-6"
>
  <div class="toast toast-end font-figtree">
    {#if status === "SUCCESS"}
      <div class="alert alert-success">
        <span>Message sent successfully</span>
      </div>
    {/if}
    {#if status === "FAIL"}
      <div class="alert alert-error">
        <span>Could not send the message, please try again later</span>
      </div>
    {/if}
    {#if status === "LOADING"}
      <div class="alert alert-info">
        <span>Sending message</span>
      </div>
    {/if}
    {#if formState === "DIRTY"}
      <div class="alert alert-error">
        <span>{formSchema.safeParse(formData).error!.issues[0]}</span>
      </div>
    {/if}
  </div>
  <FadeInText id="convo"
    ><span class="font-semibold uppercase tracking-tight text-2xl xl:text-3xl"
      >Start a Conversation</span
    ></FadeInText
  >
  <div class="flex flex-col gap-1.5 w-full mb-5">
    <label for="name" class="text-lg">Name</label>
    <input
      id="name"
      name="name"
      required
      bind:value={formData.name}
      class="input font-figtree placeholder:text-base text-lg w-full"
      placeholder="Your name"
    />
  </div>
  <label for="email" class="flex flex-col gap-1.5 w-full mb-5">
    <div class="text-lg">Email</div>
    <input
      id="email"
      name="email"
      required
      type="email"
      bind:value={formData.email}
      class="input font-figtree placeholder:text-base text-lg w-full"
      placeholder="your@email.com"
    />
  </label>
  <div class="flex flex-col gap-1.5 w-full mb-5">
    <label for="message" class="text-lg">Message</label>
    <textarea
      id="message"
      name="message"
      required
      bind:value={formData.message}
      class="textarea font-figtree text-lg w-full"
    ></textarea>
  </div>
  <div class="w-full flex items-center justify-end">
    <FlippingButton id="send-button">
      {@render children()}
    </FlippingButton>
  </div>
</form>
