<script lang="ts">
  import type { Snippet } from "svelte";
  import { prefersReducedMotion, Spring } from "svelte/motion";
  const { children }: { children: Snippet } = $props();

  let position = $state({
    x: 0,
    y: 0,
  });

  let yOffset = $state(0);
  let isHover = $state(false);

  const animationState = new Spring(
    {
      rotation: -90,
      opacity: 0,
      scale: 0.4,
    },
    {
      damping: 0.5,
      stiffness: 0.2,
    },
  );

  $effect(() => {
    if (prefersReducedMotion.current) return;
    if (isHover) {
      animationState.target = {
        rotation: 0,
        opacity: 1,
        scale: 1,
      };
    } else {
      animationState.target = {
        rotation: -90,
        opacity: 0,
        scale: 0.4,
      };
    }
  });
</script>

<svelte:document
  onmousemove={(e) => {
    if (prefersReducedMotion.current) return;
    const target = e.target as HTMLElement;
    isHover = !!target.closest(".hover-block");

    position = {
      x: e.clientX,
      y: e.clientY,
    };
  }}
  onscroll={() => {
    yOffset = window.scrollY;
  }}
/>

<div
  role="presentation"
  class={[
    "motion-reduce:hidden md:motion-reduce:hidden pointer-events-none bg-neutral size-28 rounded-full absolute z-10 -translate-x-1/2 -translate-y-1/2 left-20 top-20 hidden md:flex items-center justify-center border-2 border-white/80",
  ]}
  id="hover-round"
  style:left="{position.x}px"
  style:top="{position.y + yOffset}px"
  style:opacity={animationState.current.opacity}
  style:transform="scale({animationState.current.scale})"
>
  <span
    style:transform="rotate({animationState.current.rotation}deg)"
    id="in-content"
  >
    {@render children()}
  </span>
</div>
