<script lang="ts">
  //  Note: Use this only once per page
  import Lottie, { type AnimationItem } from "lottie-web";

  const {}: {} = $props();

  let animation: AnimationItem | null = null;

  const observeTopScroll = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          animation = Lottie.loadAnimation({
            container: document.getElementById("scroll-down")!,
            path: "/scrollDown.json",
            renderer: "svg",
            loop: true,
            autoplay: true,
          });
        } else {
          animation?.destroy();
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      },
    );
    // this is placed in base layout
    observer.observe(document.getElementById("top-element")!);
    return () => observer.disconnect();
  };

  $effect(() => {
    const abserverDisconnet = observeTopScroll();
    return abserverDisconnet;
  });
</script>

<div id="scroll-down" class="w-12 h-12"></div>
