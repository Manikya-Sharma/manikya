<script lang="ts">
  import { CIRC, INTERVAL_DURATION, MAX_SPEED } from "@/data/constants";
  import { prefersReducedMotion, Tween } from "svelte/motion";
  import { fade } from "svelte/transition";

  const getRandomRange = (min: number, max: number) => {
    const range = max - min;
    return min + Math.random() * range;
  };

  const getRandomColor = () => {
    const l = getRandomRange(0.3, 0.8);
    const c = getRandomRange(0, 0.4);
    const h = getRandomRange(0, 360);
    return `oklch(${l} ${c} ${h}deg)`;
  };

  let max_radius = $state(40);

  let previousTime = $state<number | null>(null);

  let dimensions = $state({ width: 0, height: 0 });

  let bubbles_properties: {
    x: Tween<number>;
    y: Tween<number>;
    radius: number;
    theta: number;
    speed: number;
    color: string;
  }[] = $state([]);

  $effect(() => {
    const { width, height } = document.documentElement.getBoundingClientRect();
    dimensions = { width, height };

    let bubbleCount = 20;
    let min_radius = 20;

    if (width < 600) {
      bubbleCount = 15;
      min_radius = 10;
      max_radius = 20;
    }

    bubbles_properties = new Array(bubbleCount).fill(null).map(() => {
      const radius = getRandomRange(min_radius, max_radius);
      const speed =
        MAX_SPEED * Math.max(0.2, Math.cos(90 * (radius / max_radius)));
      return {
        x: new Tween(getRandomRange(max_radius + 1, width - max_radius - 1)),
        y: new Tween(getRandomRange(max_radius + 1, height - max_radius - 1), {
          duration: INTERVAL_DURATION,
        }),
        radius,
        theta: getRandomRange(0, 360),
        speed,
        color: getRandomColor(),
      };
    });
  });

  const updateBubbles = $derived((dt: number) => {
    bubbles_properties.forEach((bubble) => {
      const dx = Math.cos(bubble.theta);
      const dy = Math.sin(bubble.theta);
      // add some circular motion :)
      if (Math.random() > 0.3) {
        bubble.theta = (bubble.theta + CIRC * dt) % 360;
      } else if (Math.random() > 0.6) {
        bubble.theta = (bubble.theta - CIRC * dt + 360) % 360;
      }
      bubble.x.target += bubble.speed * dx * dt;
      bubble.y.target += bubble.speed * dy * dt;
      if (
        bubble.x.current < 0 ||
        bubble.y.current < 0 ||
        bubble.x.current > dimensions.width ||
        bubble.y.current > dimensions.height
      ) {
        bubble.theta = (bubble.theta + 180) % 360;
        bubble.x.target = Math.max(max_radius, bubble.x.current);
        bubble.y.target = Math.max(max_radius, bubble.y.current);
        bubble.x.target = Math.min(
          dimensions.width - max_radius,
          bubble.x.current,
        );
        bubble.y.target = Math.min(
          dimensions.height - max_radius,
          bubble.y.current,
        );
      }
    });
  });

  const drawBubbles = $derived((ctx: CanvasRenderingContext2D) => {
    bubbles_properties.forEach(({ x, y, color, radius }) => {
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.arc(x.current, y.current, radius, 0, 2 * Math.PI);
      ctx.fill();
    });
  });

  const draw = $derived(
    (time: number, canvas: HTMLCanvasElement | undefined) => {
      const ctx = canvas?.getContext("2d");
      if (!ctx) return;

      const dt = previousTime ? time - previousTime : 0;
      previousTime = time;

      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      updateBubbles(dt);
      drawBubbles(ctx);

      window.requestAnimationFrame((time) => draw(time, canvas));
    },
  );

  $effect(() => {
    const canvas = document.getElementById("decoration-canvas") as
      | HTMLCanvasElement
      | undefined;

    if (!canvas) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const frameId = window.requestAnimationFrame((time) => draw(time, canvas));
    return () => window.cancelAnimationFrame(frameId);
  });
</script>

<div
  in:fade={{ duration: 150 }}
  role="presentation"
  class="absolute inset-0 overflow-hidden"
>
  {#if !prefersReducedMotion.current}
    <canvas class="absolute inset-0" id="decoration-canvas"></canvas>
  {/if}
</div>
