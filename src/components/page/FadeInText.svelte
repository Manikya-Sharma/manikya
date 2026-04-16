<script lang="ts">
  import { cubicOut } from "svelte/easing";
  import { prefersReducedMotion, Tween } from "svelte/motion";

  const { children, id, onScroll = false } = $props();
  let animationPlayed = $state(false);

  const animationState = new Tween(
    {
      opacity: prefersReducedMotion.current ? 1.0 : 0.0,
      y: 0,
    },
    {
      duration: 300,
      easing: cubicOut,
    },
  );

  const observeOnScroll = () => {
    // display animation only when element is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          if (!animationPlayed)
            animationState.target = {
              opacity: 1.0,
              y: -25,
            };
          animationPlayed = true;
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -20% 0px",
        threshold: 0.5,
      },
    );
    // element always exists, so type assertion is valid
    observer.observe(document.getElementById(`fade-in-${id}`) as Element);
    return () => observer.disconnect();
  };

  $effect(() => {
    if (onScroll && !prefersReducedMotion.current) {
      return observeOnScroll();
    }
  });
</script>

<div
  id={`fade-in-${id}`}
  style="opacity:{animationState.current
    .opacity}; transform: translateY({animationState.current.y}px)"
>
  {@render children()}
</div>
