<script lang="ts">
  import type { Snippet } from "svelte";
  import { sineInOut } from "svelte/easing";
  import { prefersReducedMotion, Spring, Tween } from "svelte/motion";

  const DURATION = 150;

  const {
    pref,
    content,
    suff,
    href,
    className,
  }: {
    pref: Snippet;
    content: string;
    suff: Snippet;
    href: string;
    className?: string;
  } = $props();

  let prefAnimation = new Spring(
    {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    {
      damping: 0.8,
      stiffness: 0.2,
    },
  );

  let suffAnimation = new Spring(
    {
      x: 20,
      opacity: 0,
      scale: 0.5,
    },
    {
      damping: 0.8,
      stiffness: 0.2,
    },
  );

  const chars = $derived(content.split(""));

  const charsAnimation = $derived(
    chars.map(
      (_, index) =>
        new Tween(
          {
            x: 0,
          },
          {
            duration: DURATION + index * 10,
            easing: (p) => {
              return sineInOut(p + index * 10);
            },
          },
        ),
    ),
  );

  const onleave = () => {
    if (prefersReducedMotion.current) {
      return;
    }
    prefAnimation.target = {
      x: 0,
      opacity: 1,
      scale: 1,
    };
    suffAnimation.target = {
      x: 20,
      opacity: 0,
      scale: 0.5,
    };
    charsAnimation.forEach((animation) => {
      animation.target = { x: 0 };
    });
  };

  const onhover = () => {
    if (prefersReducedMotion.current) {
      return;
    }
    prefAnimation.target = {
      x: -20,
      opacity: 0,
      scale: 0.5,
    };
    suffAnimation.target = {
      x: 0,
      opacity: 1,
      scale: 1,
    };
    charsAnimation.forEach((animation) => {
      animation.target = { x: -20 };
    });
  };
</script>

<a
  {href}
  class={[
    "flex w-full h-full px-2 sm:px-3 py-1 sm:py-2 rounded-field border items-center justify-start gap-1.5",
    className,
  ]}
  onmouseover={onhover}
  onfocus={onhover}
  onmouseout={onleave}
  onblur={onleave}
>
  <span
    style:opacity={prefAnimation.current.opacity}
    style:transform="translateX({prefAnimation.current.x}px) scale({prefAnimation
      .current.scale})"
  >
    {@render pref()}
  </span>
  <span aria-label={content} class="block min-w-fit">
    {#each chars as ch, index}
      <span
        class="inline-block"
        style:transform="translateX({charsAnimation[index].current.x}px)"
        role="none"
      >
        {ch}
      </span>
    {/each}
  </span>
  <span
    style:opacity={suffAnimation.current.opacity}
    style:transform="translateX({suffAnimation.current.x}px) scale({suffAnimation
      .current.scale})"
    class="ml-auto"
  >
    {@render suff()}
  </span>
</a>
