<script>
  // TODO: fix this Disclosure to match headlessui behavior
  export let open = true;
</script>

<div class:disclosure-open={open}>
  <slot />
</div>
