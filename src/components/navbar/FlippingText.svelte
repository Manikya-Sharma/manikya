<script lang="ts">
  import { MENU_OPTION_HEIGHT } from "@/data/constants";
  import type { Snippet } from "svelte";
  import { prefersReducedMotion, Spring } from "svelte/motion";

  const springOptions = {
    damping: 0.8,
    stiffness: 0.2,
  };

  const originalTextY = new Spring(
    {
      y: 0,
    },
    springOptions,
  );
  const copyTextY = new Spring(
    {
      y: 100,
    },
    springOptions,
  );

  const {
    children,
    id,
    height = MENU_OPTION_HEIGHT,
  }: {
    children: Snippet;
    id: string;
    href?: string;
    isLink?: boolean;
    height?: number;
  } = $props();

  const onhover = () => {
    if (prefersReducedMotion.current) {
      return;
    }
    originalTextY.target = {
      y: -100,
    };
    copyTextY.target = {
      y: 0,
    };
  };
  const onleave = () => {
    originalTextY.target = {
      y: 0,
    };
    copyTextY.target = {
      y: 100,
    };
  };
</script>

<span
  role="presentation"
  onfocus={() => onhover()}
  onblur={() => onleave()}
  onmouseenter={() => onhover()}
  onmouseleave={() => onleave()}
  style:height={`${height}px`}
  class="block relative overflow-hidden"
>
  <div
    id={`flipping-text-${id}-original`}
    style:height={`${height}px`}
    style:transform="translateY({originalTextY.current.y}%)"
  >
    {@render children()}
  </div>
  <div
    role="presentation"
    aria-hidden="true"
    id={`flipping-text-${id}-copy`}
    class="absolute inset-0"
    style:height={`${height}px`}
    style:transform="translateY({copyTextY.current.y}%)"
    tabindex="-1"
  >
    {@render children()}
  </div>
</span>
