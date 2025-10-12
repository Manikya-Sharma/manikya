<script lang="ts">
  import { animate, spring } from "animejs";
  import { MENU_OPTION_HEIGHT } from "@/data/constants";

  const { children, id } = $props();

  const BOUNCE = 0.3;
  const DURATION = 250;

  const onhover = () => {
    animate(`#flipping-text-${id}-original`, {
      translateY: ["0%", "-100%"],
      ease: spring({
        bounce: BOUNCE,
        duration: DURATION,
      }),
    });
    animate(`#flipping-text-${id}-copy`, {
      translateY: ["100%", "0%"],
      ease: spring({
        bounce: BOUNCE,
        duration: DURATION,
      }),
    });
  };
  const onleave = () => {
    animate(`#flipping-text-${id}-original`, {
      translateY: ["-100%", "0%"],
      ease: spring({
        bounce: BOUNCE,
        duration: DURATION,
      }),
    });
    animate(`#flipping-text-${id}-copy`, {
      translateY: ["0%", "100%"],
      ease: spring({
        bounce: BOUNCE,
        duration: DURATION,
      }),
    });
  };
</script>

<div
  role="presentation"
  onmouseenter={() => onhover()}
  onmouseleave={() => onleave()}
  style:height={`${MENU_OPTION_HEIGHT}px`}
  class="relative overflow-hidden"
>
  <div id={`flipping-text-${id}-original`}>
    {@render children()}
  </div>
  <div
    role="presentation"
    aria-hidden="true"
    id={`flipping-text-${id}-copy`}
    class="absolute inset-0"
  >
    {@render children()}
  </div>
</div>
