<script lang="ts">
  import { animate, spring } from "animejs";
  import type { Snippet } from "svelte";

  const TRANSLATE = 5;

  const { id, children }: { id: string; children: Snippet } = $props();
  const onhover = () => {
    animate(`#push-button-${id}`, {
      translateX: TRANSLATE,
      translateY: -TRANSLATE,
      ease: spring({
        bounce: 0.15,
        duration: 100,
      }),
    });
  };
  const onleave = () => {
    animate(`#push-button-${id}`, {
      translateX: 0,
      translateY: 0,
      ease: spring({
        bounce: 0.15,
        duration: 100,
      }),
    });
  };
</script>

<button
  class="relative group cursor-pointer"
  onmouseenter={onhover}
  onmouseleave={onleave}
  onmousedown={onleave}
  onmouseup={onhover}
>
  <div
    class="absolute -z-10 bg-black inset-0 opacity-0 group-hover:opacity-100 transition-colors rounded-md"
    role="presentation"
  >
    {@render children()}
  </div>
  <div
    id={`push-button-${id}`}
    class="bg-white rounded-md border border-[#b2b2b2] p-1.5"
  >
    {@render children()}
  </div>
</button>
