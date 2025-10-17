<script lang="ts">
  import { animate, type JSAnimation } from "animejs";

  const animationOptions = {
    opacity: [0, 1],
    translateY: ["0px", "-25px"],
    duration: 400,
    loop: false,
    autoplay: false,
  };

  const { children, id, onScroll = false } = $props();
  let animationPlayed = $state(false);

  const observeOnScroll = (animation: JSAnimation) => {
    // display animation only when element is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          if (!animationPlayed) animation.restart();
          animationPlayed = true;
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      },
    );
    // element always exists, so type assertion is valid
    observer.observe(document.getElementById(`fade-in-${id}`) as Element);
    return () => observer.disconnect();
  };

  $effect(() => {
    const animation = animate(`#fade-in-${id}`, animationOptions);
    if (onScroll) {
      observeOnScroll(animation);
    } else {
      animation.restart();
    }
  });
</script>

<div id={`fade-in-${id}`}>
  {@render children()}
</div>
