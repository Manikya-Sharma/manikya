<script lang="ts">
  import { checkReducedMotion } from "@/utils/safeAnimate";
  import type { Snippet } from "svelte";
  import { cubicOut } from "svelte/easing";
  import { Tween } from "svelte/motion";

  const animationState = new Tween(
    {
      scaleX: 1,
    },
    {
      duration: 200,
      easing: cubicOut,
    },
  );

  const {
    children,
    href,
    id,
  }: { href: string; children: Snippet; id: string } = $props();

  const onhover = () => {
    if (checkReducedMotion()) return;
    animationState.target = {
      scaleX: 0,
    };
  };

  const onleave = () => {
    if (checkReducedMotion()) return;
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
    id={`underline-${id}`}
    style="transform:scaleX({animationState.current.scaleX})"
    class="absolute block -bottom-0.5 h-0.5 left-0 right-2 bg-gradient rounded-sm"
  ></span>
</span>
