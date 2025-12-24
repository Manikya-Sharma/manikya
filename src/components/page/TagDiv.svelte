<script lang="ts">
  import { animate, spring } from "animejs";

  const TRANSLATE = 3;

  const {
    tag,
    tagName,
    fg,
    bg,
  }: { tag: string; tagName: string; fg: string; bg: string } = $props();
  const onhover = () => {
    animate(`#push-div-${tag}`, {
      translateX: TRANSLATE,
      translateY: -TRANSLATE,
      ease: spring({
        bounce: 0.15,
        duration: 100,
      }),
    });
  };
  const onleave = () => {
    animate(`#push-div-${tag}`, {
      translateX: 0,
      translateY: 0,
      ease: spring({
        bounce: 0.15,
        duration: 100,
      }),
    });
  };
</script>

<div
  role="presentation"
  class={[
    "relative group cursor-pointer inline-block text-base font-semibold rounded-md",
    bg,
  ]}
  onmouseenter={onhover}
  onmouseleave={onleave}
  onmousedown={onleave}
  onmouseup={onhover}
>
  <div id={`push-div-${tag}`} class={["rounded-md border px-2 py-1", fg]}>
    <span class="flex gap-0.5 items-center">
      <img src={`/logos/${tag}-logo.svg`} class="block size-5" alt={tagName} />
      <span class="block">{tagName}</span>
    </span>
  </div>
</div>
