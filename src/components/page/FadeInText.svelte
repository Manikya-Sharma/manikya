<script lang="ts">
  import { animate } from "animejs";
  const { children, id } = $props();
  $effect(() => {
    animate(`#fade-in-${id}`, {
      opacity: [0, 1],
      translateY: ["0px", "-25px"],
      duration: 400,
      loop: false,
    });
  });
</script>

<div id={`fade-in-${id}`}>
  {@render children()}
</div>
