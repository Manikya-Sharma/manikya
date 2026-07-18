<script lang="ts">
  import type { Snippet } from "svelte";
  import { cubicOut } from "svelte/easing";
  import { prefersReducedMotion, Tween } from "svelte/motion";

  const animationState = new Tween(
    {
      scaleX: 1,
    },
    {
      duration: 200,
      easing: cubicOut,
    },
  );

  const { children, href }: { href: string; children: Snippet } = $props();

  const onhover = () => {
    if (prefersReducedMotion.current) return;
    animationState.target = {
      scaleX: 0,
    };
  };

  const onleave = () => {
    if (prefersReducedMotion.current) return;
    animationState.target = {
      scaleX: 1,
    };
  };
</script>

<span
  role="presentation"
  class="relative"
  onmouseenter={onhover}
  onmouseleave={onleave}
>
  <a class="text-gradient" {href}>
    {@render children()}
  </a>
  <span
    style="transform:scaleX({animationState.current.scaleX})"
    class="absolute origin-bottom-left hover:origin-bottom-right block -bottom-0.5 h-0.5 left-0 right-2 bg-gradient rounded-sm"
  ></span>
</span>
