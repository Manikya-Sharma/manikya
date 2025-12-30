<script lang="ts">
  import type { Snippet } from "svelte";
  import { animate, splitText, spring, stagger } from "animejs";

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
  const prefixAnim = {
    play() {
      animate(`#pref-${id}`, {
        x: [0, -20],
        opacity: [1, 0],
        scale: [1, 0.5],
        duration: DURATION,
        ease: spring({
          bounce: 0.4,
          duration: 400,
        }),
      });
    },
    reverse() {
      animate(`#pref-${id}`, {
        x: [-20, 0],
        opacity: [0, 1],
        scale: [0.5, 1],
        duration: DURATION,
        ease: spring({
          bounce: 0.4,
          duration: 400,
        }),
      });
    },
  };

  // suffix hover animation
  const suffixAnim = {
    play() {
      animate(`#suff-${id}`, {
        x: [20, 0],
        opacity: [0, 1],
        scale: [0.5, 1],
        duration: DURATION,
        ease: spring({
          bounce: 0.4,
          duration: 400,
        }),
      });
    },
    reverse() {
      animate(`#suff-${id}`, {
        x: [0, 20],
        opacity: [1, 0],
        scale: [1, 0.5],
        duration: DURATION,
        ease: spring({
          bounce: 0.4,
          duration: 400,
        }),
      });
    },
  };

  // text hover animation
  const contentAnim = {
    play() {
      animate(`.char-${id}`, {
        x: [0, -20],
        duration: DURATION,
        delay: stagger(5),
        ease: spring({
          bounce: 0.4,
          duration: 400,
        }),
      });
    },
    reverse() {
      animate(`.char-${id}`, {
        x: [-20, 0],
        duration: DURATION,
        delay: stagger(5),
        ease: spring({
          bounce: 0.4,
          duration: 400,
        }),
      });
    },
  };

  const onhover = () => {
    prefixAnim.play();
    suffixAnim.play();
    contentAnim.play();
  };
  const onleave = () => {
    prefixAnim.reverse();
    suffixAnim.reverse();
    contentAnim.reverse();
  };

  // setup animations
  $effect(() => {
    splitText(`#content-${id}`, {
      chars: `<span class="char-${id}">{value}</span>`,
    });
    animate(`#suff-${id}`, {
      x: [20],
      opacity: [0],
      scale: [0.5],
      duration: 0,
      ease: "none",
    });
  });
</script>

<a
  {href}
  class={[
    "flex w-full h-full px-2 sm:px-3 py-1 sm:py-2 rounded-md border items-center justify-start gap-1.5",
    className,
  ]}
  onfocus={onhover}
  onblur={onleave}
  onmouseenter={onhover}
  onmouseleave={onleave}
>
  <span id={`pref-${id}`}>
    {@render pref()}
  </span>
  <span id={`content-${id}`} class="block min-w-fit">{content}</span>
  <span id={`suff-${id}`} class="ml-auto">
    {@render suff()}
  </span>
</a>
