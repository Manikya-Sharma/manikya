<script lang="ts">
  import { MENU_OPTION_HEIGHT } from "@/data/constants";
  import { animate } from "animejs";
  import type { Snippet } from "svelte";

  let isOpen = $state(false);
  const {
    length: numOptions,
    close,
    open,
    options,
  }: {
    length: number;
    open: Snippet;
    close: Snippet;
    options: Snippet;
  } = $props();
  // 12 is the padding
  const height = $derived(
    () => `${MENU_OPTION_HEIGHT * numOptions + 12 * 2 + 8 * 2 * numOptions}px`,
  );

  const on_menu_blur = (e: PointerEvent) => {
    for (const el of e.composedPath()) {
      if (
        (el as HTMLElement).id === "dropdown-animation" ||
        (el as HTMLElement).id === "dropdown-button"
      ) {
        return;
      }
    }
    toggleState();
  };

  const toggleState = () => {
    isOpen = !isOpen;
    if (isOpen) {
      // enter animation
      animate("#dropdown-animation", {
        opacity: [0, 1],
        duration: 300,
        height: ["0px", height],
      });
      document.addEventListener("click", on_menu_blur);
    } else {
      // leave animation
      animate("#dropdown-animation", {
        opacity: [1, 0],
        duration: 300,
        height: [height, "0px"],
      });
      document.removeEventListener("click", on_menu_blur);
    }
  };
</script>

<!-- Hamburger -->
<button
  class="cursor-pointer"
  id="dropdown-button"
  onclick={() => toggleState()}
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
<div
  class={[
    "absolute top-18 right-5 rounded-md bg-black px-10 py-3 opacity-0",
    !isOpen && "pointer-events-none",
  ]}
  id="dropdown-animation"
>
  {@render options()}
</div>
