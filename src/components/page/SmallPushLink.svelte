<script lang="ts">
  import { safeAnimate } from "@/utils/safeAnimate";
  import { spring } from "animejs";
  import type { Snippet } from "svelte";

  const TRANSLATE = 5;

  const {
    id,
    children,
    title,
    href,
  }: {
    id: string;
    children: Snippet;
    title?: string;
    href: string;
  } = $props();
  const onhover = () => {
    safeAnimate(`#small-push-link-${id}`, {
      translateX: TRANSLATE,
      translateY: -TRANSLATE,
      ease: spring({
        bounce: 0.15,
        duration: 100,
      }),
    });
  };
  const onleave = () => {
    safeAnimate(`#small-push-link-${id}`, {
      translateX: 0,
      translateY: 0,
      ease: spring({
        bounce: 0.15,
        duration: 100,
      }),
    });
  };
</script>

<a
  {href}
  id={`model-button-${id}`}
  class="relative group cursor-pointer"
  data-astro-prefetch="hover"
  onfocus={onhover}
  onblur={onleave}
  onmouseover={onhover}
  onmouseout={onleave}
  onmousedown={onleave}
  onmouseup={onhover}
  aria-label={title}
>
  <div
    class="motion-reduce:hidden absolute -z-10 bg-black inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-md"
    role="presentation"
  ></div>
  <div
    id={`small-push-link-${id}`}
    class="bg-white rounded-md border border-[#b2b2b2] py-1 px-0.5 sm:py-2 sm:px-1.5"
  >
    {@render children()}
  </div>
</a>
