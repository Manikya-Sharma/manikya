<script lang="ts">
  import { animate, cubicBezier } from "animejs";

  const { children } = $props();

  $effect(() => {
    const onScroll = () => {
      const position = window.scrollY;
      if (position === 0) {
        animate("#scroll-shorten", {
          left: "0px",
          right: "0px",
          top: "0px",
          borderRadius: "0%",
          duration: 300,
          ease: cubicBezier(0.1, 0.7, 0.5, 1),
        });
      } else {
        animate("#scroll-shorten", {
          left: "10%",
          right: "10%",
          top: "20px",
          borderRadius: "19px",
          duration: 500,
          ease: "outElastic(1.20,0.80)",
        });
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });
</script>

<div class="fixed z-50 top-0 inset-x-0 bg-black" id="scroll-shorten">
  {@render children()}
</div>
