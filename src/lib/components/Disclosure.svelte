<script>
  import ChevronUpIcon from './heroicons/chevron-up.svelte';

  export let open = false;
  export let title;
</script>

<div>
  <button
    class="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200"
    on:click={() => (open = !open)}
  >
    <span>{title}</span>
    <ChevronUpIcon class="{open ? '' : 'transform rotate-180'} w-5 h-5 text-indigo-500" />
  </button>
  <div class="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300" class:hidden={!open}>
    <slot />
  </div>
</div>
