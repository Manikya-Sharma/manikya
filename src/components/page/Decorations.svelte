<script lang="ts">
  import { CIRC, MAX_SPEED } from "@/data/constants";
  import { prefersReducedMotion } from "svelte/motion";
  import { fade } from "svelte/transition";

  const getRandomRange = (min: number, max: number) => {
    const range = max - min;
    return min + Math.random() * range;
  };

  const getRandomColor = () => {
    const l = getRandomRange(0.3, 0.8);
    const c = getRandomRange(0, 0.4);
    const h = getRandomRange(0, 360);
    return `oklch(${l} ${c} ${h}deg / 0.8)`;
  };

  let max_radius = $state(40);

  let previousTime = $state<number | null>(null);

  let dimensions = $state({ width: 0, height: 0 });

  let bubbles_properties: {
    x: number;
    y: number;
    radius: number;
    dx: number;
    dy: number;
    speed: number;
    color: string;
  }[] = $state([]);

  $effect(() => {
    const { width, height } = document.documentElement.getBoundingClientRect();

    previousTime = document.timeline.currentTime as number | null;

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
      const dx = Math.random();
      const abs_norm_y = Math.sqrt(1 - Math.pow(dx, 2));
      return {
        x: getRandomRange(max_radius + 1, width - max_radius - 1),
        y: getRandomRange(max_radius + 1, height - max_radius - 1),
        radius,
        dx,
        dy: Math.random() < 0.5 ? -abs_norm_y : abs_norm_y,
        speed,
        color: getRandomColor(),
      };
    });
  });

  const updateBubbles = $derived((dt: number) => {
    bubbles_properties.forEach((bubble) => {
      const new_x = bubble.x + bubble.speed * bubble.dx * dt;
      const new_y = bubble.y + bubble.speed * bubble.dy * dt;
      if (new_x < bubble.radius) {
        bubble.x = bubble.radius + 1;
        bubble.dx = -bubble.dx;
      } else if (new_x > dimensions.width - bubble.radius) {
        bubble.x = dimensions.width - bubble.radius - 1;
        bubble.dx = -bubble.dx;
      } else {
        bubble.x = new_x;
      }

      if (new_y < bubble.radius) {
        bubble.y = bubble.radius + 1;
        bubble.dy = -bubble.dy;
      } else if (new_y > dimensions.height - bubble.radius) {
        bubble.y = dimensions.height - bubble.radius - 1;
        bubble.dy = -bubble.dy;
      } else {
        bubble.y = new_y;
      }
      // add some circular movements in between, just to make it look like
      // bubbles not balls
      if (Math.random() < 0.1) {
        const angle = Math.acos(bubble.dx);
        const new_angle = Math.random() < 0.5 ? angle + CIRC : angle - CIRC;
        const new_dx = Math.sign(bubble.dx) * Math.abs(Math.cos(new_angle));
        const new_dy = Math.sign(bubble.dy) * Math.abs(Math.sin(new_angle));
        bubble.dx = new_dx;
        bubble.dy = new_dy;
      }
    });
  });

  const drawBubbles = $derived((ctx: CanvasRenderingContext2D) => {
    bubbles_properties.forEach(({ x, y, color, radius }) => {
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
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
