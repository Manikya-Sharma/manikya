<script lang="ts">
  import { safeAnimate } from "@/utils/safeAnimate";
  import { stagger, splitText } from "animejs";
  const { text } = $props();
  $effect(() => {
    const { chars } = splitText(`#stagger-text-${text}`, {
      words: false,
      chars: true,
    });
    safeAnimate(chars, {
      opacity: [0, 1],
      delay: stagger(60),
      duration: 500,
    });
  });
</script>

<div id={`stagger-text-${text}`}>{text}</div>
