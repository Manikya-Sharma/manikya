<script lang="ts">
  import { animate, JSAnimation } from "animejs";
  import throttle from "lodash/throttle";
  import type { Snippet } from "svelte";
  const { children }: { children: Snippet } = $props();
  let x = $state(0);
  let y = $state(0);
  let yOffset = $state(0);
  let isHover = $state(false);
  let hoverRoundAnimation: JSAnimation | null = null;
  let insideSpinAnimation: JSAnimation | null = null;
  let insideTransAnimation: JSAnimation | null = null;
  // change the position of the hover block
  $effect(() => {
    const manageHover = throttle((event: MouseEvent) => {
      x = event.x;
      y = event.y;
      const target = event.target as HTMLElement;
      isHover = !!target.closest(".hover-block");
    }, 16);
    const manageScroll = throttle(() => {
      yOffset = window.scrollY;
    }, 16);
    document.addEventListener("mousemove", manageHover);
    document.addEventListener("scroll", manageScroll);
    manageScroll();
    return () => {
      document.removeEventListener("mousemove", manageHover);
      document.removeEventListener("scroll", manageScroll);
    };
  });
  // create animation and attach it to the target
  $effect(() => {
    hoverRoundAnimation = animate("#hover-round", {
      opacity: [0, 1],
      scale: [0.3, 1],
      autoplay: false,
      duration: 400,
      ease: "inOutExpo",
    });
    insideSpinAnimation = animate("#in-content", {
      rotate: [-90, 0],
      autoplay: false,
      duration: 400,
    });
    insideTransAnimation = animate("#in-content", {
      x: [0, 10, 0],
      autoplay: false,
      duration: 200,
    });
  });
  // play animation based on hover state
  const onclick = () => {
    insideTransAnimation?.play();
  };
  $effect(() => {
    if (!hoverRoundAnimation) return;
    if (isHover) {
      document.addEventListener("click", onclick);
      hoverRoundAnimation.play();
      insideSpinAnimation?.play();
    } else {
      document.removeEventListener("click", onclick);
      hoverRoundAnimation.reverse();
      insideSpinAnimation?.revert();
    }
  });
</script>

<div
  role="presentation"
  class={[
    "pointer-events-none bg-black size-28 rounded-full absolute z-10 -translate-x-1/2 -translate-y-1/2 left-20 top-20 flex items-center justify-center border-2 border-white/80",
  ]}
  id="hover-round"
  style:left="{x}px"
  style:top="{y + yOffset}px"
>
  <span id="in-content">
    {@render children()}
  </span>
</div>
