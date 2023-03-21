<script>
  let className = '';
  export { className as class };
</script>

<div class="container p-8 mx-auto xl:px-0 {className}">
  <slot />
</div>
