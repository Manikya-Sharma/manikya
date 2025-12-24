<script lang="ts">
  import { animate, spring } from "animejs";
  import type { Snippet } from "svelte";

  const TRANSLATE = 5;

  const {
    id,
    children,
    images,
  }: {
    id: string;
    children: Snippet;
    images?: {
      title: string;
      items: Array<{ src: string; alt: string }>;
    };
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

<dialog id={`model-${id}`} class="modal">
  <div class="modal-box">
    <div class="flex items-center justify-between">
      <h3 class="text-lg">{images?.title}</h3>
      <form method="dialog">
        <button
          class="cursor-pointer bg-black text-white rounded-md px-4 py-2 text-sm"
          >Close</button
        >
      </form>
    </div>
    <div
      class="carousel carousel-center space-x-2 mt-3 rounded-md p-2 bg-zinc-800"
    >
      {#each images?.items as { src, alt }}
        <div class="carousel-item w-[90%] rounded-md">
          <img
            {src}
            {alt}
            class="w-full aspect-video object-cover rounded-md"
          />
        </div>
      {/each}
    </div>
  </div>
</dialog>
