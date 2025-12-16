<script lang="ts">
  import { MENU_OPTION_HEIGHT } from "@/data/constants";
  import { animate } from "animejs";

  let open = $state(false);
  // length is the number of options
  const { length }: { length: number } = $props();
  // 12 is the padding
  const height = $derived(
    () => `${MENU_OPTION_HEIGHT * length + 12 * 2 + 8 * 2 * length}px`,
  );

  const toggleState = () => {
    open = !open;
    if (open) {
      // enter animation
      animate("#dropdown-animation", {
        opacity: [0, 1],
        duration: 300,
        height: ["0px", height],
      });
    } else {
      // leave animation
      animate("#dropdown-animation", {
        opacity: [1, 0],
        duration: 300,
        height: [height, "0px"],
      });
    }
  };
</script>

<!-- Hamburger -->
<button class="cursor-pointer" onclick={() => toggleState()}>
  {#if open}
    <!-- svelte-ignore slot_element_deprecated: no other way to pass named slots-->
    <slot name="close" />
  {:else}
    <!-- svelte-ignore slot_element_deprecated-->
    <slot name="open" />
  {/if}
</button>

<!-- Options menu -->
<div
  class={[
    "absolute top-18 right-5 rounded-md bg-black px-10 py-3 opacity-0",
    !open && "pointer-events-none",
  ]}
  id="dropdown-animation"
>
  <!-- svelte-ignore slot_element_deprecated-->
  <slot name="options" />
</div>
