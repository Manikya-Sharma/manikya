<script lang="ts">
  import { animate } from "animejs";
  const { children, startTime, id } = $props();
  if (!children) {
    throw new Error("DelayOpacity needs children");
  }
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
