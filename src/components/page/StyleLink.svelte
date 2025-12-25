<script lang="ts">
  import { animate } from "animejs";
  import type { Snippet } from "svelte";

  const {
    children,
    href,
    id,
  }: { href: string; children: Snippet; id: string } = $props();

  const onhover = () => {
    animate(`#underline-${id}`, {
      scaleX: 0,
      duration: 300,
    });
  };

  const onleave = () => {
    animate(`#underline-${id}`, {
      scaleX: 1,
      duration: 300,
    });
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
    class="absolute block -bottom-0.5 h-0.5 left-0 right-2 bg-gradient rounded-sm"
  ></span>
</span>
