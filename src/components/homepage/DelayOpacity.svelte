<script lang="ts">
  import { animate } from "animejs";
  import type { Snippet } from "svelte";
  const {
    children,
    startTime,
    id,
  }: { children: Snippet; startTime?: number; id: string } = $props();
  // iife to lazy load children: https://svelte.dev/docs/svelte/compiler-warnings#state_referenced_locally
  (() => {
    if (!children) {
      throw new Error("DelayOpacity needs children");
    }
  })();
  $effect(() => {
    animate(`#delay-opacity-${id}`, {
      opacity: [0, 1],
      delay: startTime ?? 0,
      duration: 1500,
    });
  });
</script>

<div id={`delay-opacity-${id}`}>
  {@render children()}
</div>
