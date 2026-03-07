<script lang="ts">
  import { checkReducedMotion } from "@/utils/safeAnimate";
  import { Spring } from "svelte/motion";

  const { children } = $props();

  let navState = new Spring(
    { left: 0, right: 0, top: 0, borderRadius: 0 },
    {
      damping: 0.5,
      stiffness: 0.1,
    },
  );
  let scrollTop = $state(0);

  $effect(() => {
    if (scrollTop > 0 && !checkReducedMotion()) {
      navState.target = {
        top: 20,
        left: 10,
        right: 10,
        borderRadius: 19,
      };
    } else {
      navState.target = {
        top: 0,
        left: 0,
        right: 0,
        borderRadius: 0,
      };
    }
  });
</script>

<svelte:window bind:scrollY={scrollTop} />

<div
  class="fixed z-50 top-0 inset-x-0 bg-black"
  id="scroll-shorten"
  style:transform="translateY({navState.current.top}px)"
  style:left="{navState.current.left}%"
  style:right="{navState.current.right}%"
  style:border-radius="{navState.current.borderRadius}px"
>
  {@render children()}
</div>
