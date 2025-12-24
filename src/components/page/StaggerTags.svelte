<script lang="ts">
  import { animate, cubicBezier, JSAnimation, stagger } from "animejs";
  import TagDiv from "./TagDiv.svelte";

  const {
    tags,
    fgs,
    bgs,
    tagNames,
  }: { tags: string[]; fgs: string[]; bgs: string[]; tagNames: string[] } =
    $props();

  const animationOptions = {
    opacity: [0, 1],
    delay: stagger(100),
    ease: cubicBezier(0.1, 0.7, 0.5, 1),
  };

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
    observer.observe(document.getElementById(`${tags[0]}-tag`) as Element);
    return () => observer.disconnect();
  };

  $effect(() => {
    const animation = animate(`.${tags[0]}-tag`, animationOptions);
    return observeOnScroll(animation);
  });
</script>

<div class="flex gap-2 flex-wrap" id={`${tags[0]}-tag`}>
  {#each tags as tag, idx}
    <span class={`${tags[0]}-tag`}>
      <TagDiv {tag} bg={bgs[idx]} fg={fgs[idx]} tagName={tagNames[idx]} />
    </span>
  {/each}
</div>
