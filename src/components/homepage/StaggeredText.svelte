<script lang="ts">
  import { animate, stagger, splitText } from "animejs";
  const { text } = $props();
  $effect(() => {
    const { chars } = splitText(`#stagger-text-${text}`, {
      words: false,
      chars: true,
    });
    animate(chars, {
      opacity: [0, 1],
      delay: stagger(60),
      duration: 500,
    });
  });
</script>

<div id={`stagger-text-${text}`}>{text}</div>
