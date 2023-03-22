<script>
  let className = '';
  export { className as class };
</script>

<button class={className} on:click>
  <slot />
</button>
