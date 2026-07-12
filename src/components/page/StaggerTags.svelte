<script lang="ts">
  import TagDiv from "./TagDiv.svelte";
  import { prefersReducedMotion, Tween } from "svelte/motion";
  import { cubicIn } from "svelte/easing";

  const {
    tags,
    fgs,
    bgs,
    tagNames,
  }: {
    tags: string[] | undefined;
    fgs: string[] | undefined;
    bgs: string[] | undefined;
    tagNames: string[] | undefined;
  } = $props();

  const id = $props.id();

  const tagsAnimationStates = $derived(
    tags?.map(
      (_, idx) =>
        new Tween(
          {
            opacity: prefersReducedMotion.current ? 1.0 : 0.0,
          },
          {
            delay: idx * 50,
            duration: 200,
            easing: cubicIn,
          },
        ),
    ),
  );

  let animationPlayed = $state(false);

  const observeOnScroll = () => {
    // display animation only when element is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          if (!animationPlayed) {
            for (const tagsAnimationState of tagsAnimationStates ?? []) {
              if (prefersReducedMotion.current) return;
              tagsAnimationState.target = {
                opacity: 1.0,
              };
            }
          }
          animationPlayed = true;
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -15% 0px",
        threshold: 0.5,
      },
    );
    // element always exists, so type assertion is valid
    observer.observe(document.getElementById(id) as Element);
    return () => observer.disconnect();
  };

  $effect(() => {
    if (tags && !prefersReducedMotion.current) {
      return observeOnScroll();
    }
  });
</script>

<div class="flex gap-2 flex-wrap" {id}>
  {#if tags && bgs && fgs && tagNames}
    {#each tags as tag, idx}
      <span style:opacity={tagsAnimationStates?.[idx].current.opacity}>
        <TagDiv {tag} bg={bgs[idx]} fg={fgs[idx]} tagName={tagNames[idx]} />
      </span>
    {/each}
  {/if}
</div>
