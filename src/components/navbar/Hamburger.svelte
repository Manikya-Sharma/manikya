<script lang="ts">
  import type { Snippet } from "svelte";
  import { cubicOut } from "svelte/easing";
  import { prefersReducedMotion } from "svelte/motion";
  import { fade } from "svelte/transition";

  let isOpen = $state(false);

  const {
    close,
    open,
    options,
  }: {
    open: Snippet;
    close: Snippet;
    options: Snippet;
  } = $props();

  const on_menu_blur = (e: MouseEvent) => {
    for (const el of e.composedPath()) {
      if (
        (el as HTMLElement).id === "dropdown-animation" ||
        (el as HTMLElement).id === "dropdown-button"
      ) {
        return;
      }
    }
    isOpen = !isOpen;
  };
</script>

<!-- Hamburger -->
<button
  class="cursor-pointer"
  id="dropdown-button"
  onclick={() => {
    isOpen = !isOpen;
  }}
  aria-controls="dropdown-animation"
  aria-expanded={isOpen}
  aria-label="Hamburger to open navigation menu"
>
  {#if isOpen}
    {@render close()}
  {:else}
    {@render open()}
  {/if}
</button>

<!-- Options menu -->
<svelte:window onclick={isOpen ? on_menu_blur : () => {}} />
{#if isOpen}
  <div
    id="dropdown-button"
    transition:fade={{
      duration: prefersReducedMotion.current ? 50 : 200,
      easing: cubicOut,
    }}
    class={["absolute top-18 right-5 rounded-md bg-black px-10 py-3"]}
  >
    {@render options()}
  </div>
{/if}
