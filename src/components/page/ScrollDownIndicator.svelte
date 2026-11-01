<script lang="ts">
  //  Note: Use this only once per page
  import { fade } from "svelte/transition";
  let visible = $state(false);

  const onScroll = () => {
    visible = window.scrollY === 0;
  };

  const onClick = () => {
    window.scrollBy({ top: window.innerHeight });
  };

  // run on mount
  $effect(() => {
    onScroll();
  });
</script>

<svelte:window onscroll={onScroll} />

{#if visible}
  <button
    in:fade={{ duration: 1000, delay: 500 }}
    out:fade={{ duration: 200 }}
    onclick={onClick}
    aria-label="scroll-down"
    class="block motion-reduce:hidden cursor-pointer"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="size-10"
    >
      <path d="m6 9 6 6 6-6" class="fade-animate fade-animate-1" />
      <path d="m6 9 6 6 6-6" class="translate-y-2 fade-animate fade-animate-2" />
    </svg>
  </button>
  <div
    in:fade={{ duration: 0, delay: 5000 }}
    class="motion-safe:hidden text-base-content"
  >
    Scroll Down
  </div>
{/if}

<style>
  .fade-animate {
    animation-name: fade-animation-kf;
    animation-duration: 2000ms;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-direction: alternate-reverse;
  }

  .fade-animate-2 {
    animation-delay: 1000ms;
  }

  .fade-animate-1 {
    animation-delay: 2000ms;
  }

  @keyframes fade-animation-kf {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
