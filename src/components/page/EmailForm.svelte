<script lang="ts">
  import type { Snippet } from "svelte";
  import FadeInText from "./FadeInText.svelte";
  import FlippingButton from "./FlippingButton.svelte";
  import { formSchema } from "@/data/forms";

  const { children }: { children: Snippet } = $props();

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
      status = "LOADING";
      formSchema.parse(formData);
      const data = new FormData(e.currentTarget as HTMLFormElement);
      const response = await fetch("/api/send-mail", {
        method: "POST",
        body: data,
      });
      if (response.status === 200) {
        status = "SUCCESS";
      } else {
        status = "FAIL";
      }
    } catch (e) {
      status = "FAIL";
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
