<script>
  import { writable } from 'svelte/store';
  import Container from './Container.svelte';

  const playVideo = writable(false);
  const setPlayVideo = (state) => playVideo.set(state);
</script>

<Container>
  <div class="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl ">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      on:click={() => setPlayVideo(!$playVideo)}
      class="relative bg-indigo-300 cursor-pointer aspect-w-16 aspect-h-9 bg-gradient-to-tr from-purple-400 to-indigo-700"
    >
      {#if !$playVideo}
        <button
          class="absolute inset-auto w-16 h-16 text-white transform -translate-x-1/2 -translate-y-1/2 lg:w-28 lg:h-28 top-1/2 left-1/2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-16 h-16  lg:w-28 lg:h-28"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
          <path
          id="path49"
          d="m 8.9244467,2.0837291 a 8,8 0 0 0 0,15.9999999 8,8 0 0 0 0,-15.9999999 z M 8.0318686,7.0895885 a 1,1 0 0 1 0.4472656,0.1621094 l 3.0000008,2 a 1,1 0 0 1 0,1.6640621 l -3.0000008,2 A 1,1 0 0 1 6.9244467,12.083729 V 8.0837291 A 1,1 0 0 1 8.0318686,7.0895885 Z"
          style="fill:currentColor" />
          </svg>
          <span class="sr-only">Play Video</span>
        </button>
      {:else}
        <iframe
          src="https://www.youtube-nocookie.com/embed/aOq49euWnIo?controls=0&autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      {/if}
    </div>
  </div>
</Container>
