<script lang="ts">
  import { checkReducedMotion } from "@/utils/safeAnimate";
  import type { Snippet } from "svelte";
  import { Spring } from "svelte/motion";

  const TRANSLATE = 5;

  const animationState = new Spring(
    {
      x: 0,
      y: 0,
    },
    {
      damping: 0.6,
      stiffness: 0.35,
    },
  );

  const {
    id,
    children,
    dialog,
  }: {
    id: string;
    children: Snippet;
    dialog: Snippet;
  } = $props();
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

  const openmodal = () => {
    const dialogElem = document.getElementById(
      `model-${id}`,
    ) as HTMLDialogElement;
    dialogElem.showModal();
    const handleClickOutside = (event: PointerEvent) => {
      if (event.target === dialogElem) {
        dialogElem.close();
        dialogElem.removeEventListener("click", handleClickOutside);
      }
    };
    dialogElem.addEventListener("click", handleClickOutside);
  };
</script>

<button
  id={`model-button-${id}`}
  class="relative group cursor-pointer"
  onmouseenter={onhover}
  onmouseleave={onleave}
  onmousedown={onleave}
  onmouseup={onhover}
  onclick={openmodal}
>
  <div
    class="absolute -z-10 bg-black inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-md"
    role="presentation"
  >
    {@render children()}
  </div>
  <div
    id={`push-button-${id}`}
    class="bg-white rounded-md border border-[#b2b2b2] p-1.5"
    style="transform: translate({animationState.current.x}px, {animationState
      .current.y}px)"
  >
    {@render children()}
  </div>
</button>

{@render dialog()}
