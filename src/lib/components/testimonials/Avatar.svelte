<script>
  import Image from '../Image.svelte';
  export let image;
  export let name;
  export let title;
</script>

<div class="flex items-center mt-8 space-x-3">
  <div class="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
    <Image src={image} width="40" height="40" alt="Avatar" layout="responsive" placeholder="blur" />
  </div>
  <div>
    <div class="text-lg font-medium">{name}</div>
    <div class="text-gray-600 dark:text-gray-400">{title}</div>
  </div>
</div>
