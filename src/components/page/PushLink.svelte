<script lang="ts">
  import type { Snippet } from "svelte";
  import { prefersReducedMotion, Spring } from "svelte/motion";
  const TRANSLATE = 15;

  const {
    children,
    href,
    id,
  }: { children: Snippet; href: string; id: string } = $props();

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
    class="motion-reduce:hidden block absolute bg-black text-black inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-md"
  ></div>
  <div
    id={`push-link-${id}`}
    style="transform: translate({animationState.current.x}px, {animationState
      .current.y}px)"
    class="block bg-white p-4 text-3xl sm:text-4xl lg:text-5xl font-space outline-dashed group-hover:outline-solid rounded-md"
  >
    {@render children()}
  </div>
</a>
