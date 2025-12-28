<script lang="ts">
  import type { Snippet } from "svelte";
  import { animate, splitText, stagger, type JSAnimation } from "animejs";

  const DURATION = 250;

  const {
    pref,
    content,
    suff,
    href,
    className,
    id,
  }: {
    pref: Snippet;
    content: string;
    suff: Snippet;
    href: string;
    className?: string;
    id: string;
  } = $props();

  // prefix hover animation
  let prefixAnim: JSAnimation | null = null;
  $effect(() => {
    prefixAnim = animate(`#pref-${id}`, {
      x: [0, -20],
      opacity: [1, 0],
      scale: [1, 0.5],
      duration: DURATION,
      autoplay: false,
      ease: "inOutExpo",
    });
  });

  // suffix hover animation
  let suffixAnim: JSAnimation | null = null;
  $effect(() => {
    suffixAnim = animate(`#suff-${id}`, {
      x: [20, 0],
      opacity: [0, 1],
      scale: [0.5, 1],
      duration: DURATION,
      autoplay: false,
      ease: "inOutExpo",
    });
  });

  // text hover animation
  let contentAnim: JSAnimation | null = null;
  $effect(() => {
    splitText(`#content-${id}`, {
      chars: `<span class="char-${id}">{value}</span>`,
    });
    contentAnim = animate(`.char-${id}`, {
      x: [0, -20],
      duration: DURATION,
      delay: stagger(5),
      autoplay: false,
      ease: "inOutExpo",
    });
  });
</script>

<a
  {href}
  class={[
    "flex w-full h-full px-2 sm:px-3 py-1 sm:py-2 rounded-md border items-center justify-start gap-1.5",
    className,
  ]}
  onfocus={() => {
    prefixAnim?.play();
    suffixAnim?.play();
    contentAnim?.play();
  }}
  onblur={() => {
    prefixAnim?.reverse();
    suffixAnim?.reverse();
    contentAnim?.reverse();
  }}
  onmouseover={() => {
    prefixAnim?.play();
    suffixAnim?.play();
    contentAnim?.play();
  }}
  onmouseout={() => {
    prefixAnim?.reverse();
    suffixAnim?.reverse();
    contentAnim?.reverse();
  }}
>
  <span id={`pref-${id}`}>
    {@render pref()}
  </span>
  <span id={`content-${id}`} class="block min-w-fit">{content}</span>
  <span id={`suff-${id}`} class="ml-auto">
    {@render suff()}
  </span>
</a>
