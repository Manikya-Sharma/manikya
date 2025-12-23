<script lang="ts">
  import { animate, spring } from "animejs";
  import type { Snippet } from "svelte";
  const TRANSLATE = 15;

  const {
    children,
    href,
    id,
  }: { children: Snippet; href: string; id: string } = $props();

  const onhover = () => {
    animate(`#push-link-${id}`, {
      translateX: TRANSLATE,
      translateY: -TRANSLATE,
      ease: spring({
        bounce: 0.4,
        duration: 300,
      }),
    });
  };
  const onleave = () => {
    animate(`#push-link-${id}`, {
      translateX: 0,
      translateY: 0,
      ease: spring({
        bounce: 0.4,
        duration: 300,
      }),
    });
  };
</script>

<a
  {href}
  class="block relative group"
  onmouseenter={onhover}
  onmouseleave={onleave}
>
  <div
    role="presentation"
    class="block absolute bg-black text-black inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-md"
  >
    {@render children()}
  </div>
  <div
    id={`push-link-${id}`}
    class="block bg-white p-4 text-3xl sm:text-4xl lg:text-5xl font-space outline-dashed group-hover:outline-solid rounded-md"
  >
    {@render children()}
  </div>
</a>
