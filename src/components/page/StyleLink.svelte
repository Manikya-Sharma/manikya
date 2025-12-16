<script lang="ts">
  import { animate } from "animejs";
  import type { Snippet } from "svelte";

  const { children, href }: { href: string; children: Snippet } = $props();
  const id = $derived(new URL(href).host.split(".").join("-"));

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
    class="absolute block -bottom-[2px] h-[2px] w-[calc(100%-7px)] bg-gradient rounded-sm"
  ></span>
</span>
