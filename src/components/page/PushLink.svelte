<script lang="ts">
  import type { Snippet } from "svelte";
  import { prefersReducedMotion, Spring } from "svelte/motion";
  const TRANSLATE = 15;

  const { children, href }: { children: Snippet; href: string } = $props();

  const animationState = new Spring(
    {
      x: 0,
      y: 0,
    },
    {
      damping: 0.75,
      stiffness: 0.4,
    },
  );

  const onhover = () => {
    if (prefersReducedMotion.current) return;
    animationState.target = {
      x: TRANSLATE,
      y: -TRANSLATE,
    };
  };
  const onleave = () => {
    if (prefersReducedMotion.current) return;
    animationState.target = {
      x: 0,
      y: 0,
    };
  };
</script>

<a
  {href}
  class="block relative group"
  onfocus={onhover}
  onblur={onleave}
  onmouseover={onhover}
  onmouseout={onleave}
  data-astro-prefetch="viewport"
>
  <div
    role="presentation"
    class="motion-reduce:hidden block absolute bg-neutral text-neutral inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-box"
  ></div>
  <div
    style="transform: translate({animationState.current.x}px, {animationState
      .current.y}px)"
    class="block bg-base-100 p-4 text-3xl sm:text-4xl lg:text-5xl font-space outline-dashed group-hover:outline-solid outline-base-content rounded-box"
  >
    {@render children()}
  </div>
</a>
