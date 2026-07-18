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
      fill="currentColor"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="24px"
      height="24px"
      viewBox="0 0 970.586 970.586"
      xml:space="preserve"
    >
      <g>
        <path
          d="M44.177,220.307l363.9,296.4c22.101,18,48.9,27,75.8,27c26.901,0,53.701-9,75.801-27l366.699-298.7
		c51.4-41.9,59.101-117.4,17.2-168.8c-41.8-51.4-117.399-59.1-168.8-17.3l-290.901,237l-288.1-234.7c-51.4-41.8-127-34.1-168.8,17.3
		C-14.923,102.907-7.123,178.407,44.177,220.307z"
          class="fade-animate fade-animate-1"
        />
        <path
          d="M44.177,642.207l363.9,296.399c22.101,18,48.9,27,75.8,27c26.901,0,53.701-9,75.801-27l366.699-298.7
		c51.4-41.899,59.101-117.399,17.2-168.8c-41.899-51.399-117.399-59.1-168.8-17.2l-290.901,236.9l-288.1-234.6
		c-51.4-41.9-127-34.101-168.8,17.199C-14.923,524.807-7.123,600.406,44.177,642.207z"
          class="fade-animate fade-animate-2"
        />
      </g>
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
