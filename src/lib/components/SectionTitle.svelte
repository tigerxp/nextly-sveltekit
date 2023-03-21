<script>
  import Container from './Container.svelte';

  export let title;
  export let pretitle;
  export let align;
</script>

<Container
  class="flex w-full flex-col mt-4 {align === 'left'
    ? ''
    : 'items-center justify-center text-center'}"
>
  {#if pretitle}
    <div class="text-sm font-bold tracking-wider text-indigo-600 uppercase">
      {pretitle}
    </div>
  {/if}

  {#if title}
    <h2
      class="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white"
    >
      {title}
    </h2>
  {/if}

  {#if $$slots.default}
    <p
      class="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300"
    >
      <slot />
    </p>
  {/if}
</Container>
