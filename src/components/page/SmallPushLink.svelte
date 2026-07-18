<script lang="ts">
  import type { Snippet } from "svelte";
  import { prefersReducedMotion, Spring } from "svelte/motion";

  const TRANSLATE = 5;

  const {
    children,
    title,
    href,
  }: {
    children: Snippet;
    title?: string;
    href: string;
  } = $props();

  const id = $props.id();

  const animationState = new Spring(
    {
      x: 0,
      y: 0,
    },
    {
      damping: 0.75,
      stiffness: 0.4,
      precision: 0.6,
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
  id={`model-button-${id}`}
  class="relative group cursor-pointer"
  data-astro-prefetch="hover"
  onfocus={onhover}
  onblur={onleave}
  onmouseover={onhover}
  onmouseout={onleave}
  onmousedown={onleave}
  onmouseup={onhover}
  aria-label={title}
>
  <div
    class="absolute -z-10 bg-accent/30 text-transparent inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-box"
    role="presentation"
  ></div>
  <div
    id={`small-push-link-${id}`}
    style="transform: translate({animationState.current.x}px, {animationState
      .current.y}px)"
    class="bg-accent rounded-box border border-neutral text-accent-content py-1 px-0.5 sm:py-2 sm:px-1.5 line-clamp-1 truncate"
  >
    {@render children()}
  </div>
</a>
