<script lang="ts">
  import TagDiv from "./TagDiv.svelte";
  import { Tween } from "svelte/motion";
  import { cubicIn } from "svelte/easing";
  import { checkReducedMotion } from "@/utils/safeAnimate";

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

  const tagsAnimationStates = $derived(
    tags?.map(
      (_, idx) =>
        new Tween(
          {
            opacity: 0.0,
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
              if (checkReducedMotion()) return;
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
    observer.observe(document.getElementById(`${tags?.[0]}-tag`) as Element);
    return () => observer.disconnect();
  };

  $effect(() => {
    if (tags) {
      return observeOnScroll();
    }
  });
</script>

<div class="flex gap-2 flex-wrap" id={`${tags?.[0]}-tag`}>
  {#if tags && bgs && fgs && tagNames}
    {#each tags as tag, idx}
      <span
        style:opacity={tagsAnimationStates?.[idx].current.opacity}
        class={`${tags[0]}-tag`}
      >
        <TagDiv {tag} bg={bgs[idx]} fg={fgs[idx]} tagName={tagNames[idx]} />
      </span>
    {/each}
  {/if}
</div>
