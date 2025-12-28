<script lang="ts">
  import { animate, spring } from "animejs";
  import { MENU_OPTION_HEIGHT } from "@/data/constants";
  import type { Snippet } from "svelte";

  const {
    children,
    id,
    className,
    height = MENU_OPTION_HEIGHT,
  }: {
    children: Snippet;
    id: string;
    href?: string;
    className?: string;
    isLink?: boolean;
    height?: number;
  } = $props();

  const BOUNCE = 0.3;
  const DURATION = 250;

  const onhover = () => {
    animate(`#flipping-text-${id}-original`, {
      translateY: ["0%", "-100%"],
      ease: spring({
        bounce: BOUNCE,
        duration: DURATION,
      }),
    });
    animate(`#flipping-text-${id}-copy`, {
      translateY: ["100%", "0%"],
      ease: spring({
        bounce: BOUNCE,
        duration: DURATION,
      }),
    });
  };
  const onleave = () => {
    animate(`#flipping-text-${id}-original`, {
      translateY: ["-100%", "0%"],
      ease: spring({
        bounce: BOUNCE,
        duration: DURATION,
      }),
    });
    animate(`#flipping-text-${id}-copy`, {
      translateY: ["0%", "100%"],
      ease: spring({
        bounce: BOUNCE,
        duration: DURATION,
      }),
    });
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
  <div id={`flipping-text-${id}-original`} style:height={`${height}px`}>
    {@render children()}
  </div>
  <div
    role="presentation"
    aria-hidden="true"
    id={`flipping-text-${id}-copy`}
    class="absolute inset-0"
    style:height={`${height}px`}
    tabindex="-1"
  >
    {@render children()}
  </div>
</span>
