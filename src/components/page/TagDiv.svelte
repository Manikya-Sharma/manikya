<script lang="ts">
  import { checkReducedMotion } from "@/utils/safeAnimate";
  import { Spring } from "svelte/motion";

  const TRANSLATE = 3;

  const animationState = new Spring(
    {
      x: 0,
      y: 0,
    },
    {
      damping: 0.8,
      stiffness: 0.4,
    },
  );

  const {
    tag,
    tagName,
    fg,
    bg,
  }: { tag: string; tagName: string; fg: string; bg: string } = $props();

  const onhover = () => {
    if (checkReducedMotion()) return;
    animationState.target = {
      x: TRANSLATE,
      y: -TRANSLATE,
    };
  };
  const onleave = () => {
    if (checkReducedMotion()) return;
    animationState.target = {
      x: 0,
      y: 0,
    };
  };
</script>

<div
  role="presentation"
  class={[
    "relative group motion-safe:cursor-pointer inline-block text-sm sm:text-base font-semibold rounded-md",
    bg,
  ]}
  onmouseover={onhover}
  onmouseout={onleave}
  onfocus={onhover}
  onblur={onleave}
  onmousedown={onleave}
  onmouseup={onhover}
>
  <div
    style="transform: translate({animationState.current.x}px, {animationState
      .current.y}px)"
    id={`push-div-${tag}`}
    class={["rounded-md border px-2 py-1", fg]}
  >
    <span class="flex gap-0.5 items-center">
      <img src={`/logos/${tag}-logo.svg`} class="block size-5" alt={tagName} />
      <span class="block">{tagName}</span>
    </span>
  </div>
</div>
