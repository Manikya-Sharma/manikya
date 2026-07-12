<script lang="ts">
  import type { Snippet } from "svelte";
  import FlippingText from "../navbar/FlippingText.svelte";

  const { children }: { children: Snippet } = $props();
</script>

<button class="cursor-pointer px-7 py-3 bg-primary rounded-field">
  <FlippingText height={30}>
    {@render children()}
  </FlippingText>
</button>
