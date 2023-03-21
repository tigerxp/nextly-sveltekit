<script>
  export let title;
  export let icon;
</script>

<div class="flex items-start mt-8 space-x-3">
  <div
    class="flex items-center justify-center flex-shrink-0 mt-1 text-white bg-indigo-500 rounded-md w-11 h-11 "
  >
    <svelte:component this={icon} />
  </div>
  <div>
    <h4 class="text-xl font-medium text-gray-800 dark:text-gray-200">
      {title}
    </h4>
    <p class="mt-1 text-gray-500 dark:text-gray-400">
      <slot />
    </p>
  </div>
</div>
