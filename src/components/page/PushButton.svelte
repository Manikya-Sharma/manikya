<script lang="ts">
  import { animate, spring } from "animejs";
  import type { Snippet } from "svelte";

  const TRANSLATE = 5;

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
  >
    {@render children()}
  </div>
</button>

{@render dialog()}
