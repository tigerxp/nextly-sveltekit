<script>
  export let theme = 'light';

  // TODO: use cookies instead of localStorage
  if (typeof window !== 'undefined') {
    theme =
      window.themePreference ||
      localStorage.getItem('themePreference') ||
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light');
  }

  const applyTheme = () => {
    if (document) {
      let htmlEl = document.querySelector('html');
      htmlEl.setAttribute('style', `color-scheme: ${theme};`);
      htmlEl.setAttribute('class', theme);
    }
  };

  const switchTheme = () => {
    theme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('themePreference', theme);
    applyTheme();
  };
</script>

<div class="flex items-center">
  <button
    on:click={() => switchTheme()}
    class="text-gray-300 rounded-full outline-none focus:outline-none"
  >
    <span class="sr-only">{theme == 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
    {#if theme === 'light'}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-5 h-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
      </svg>
    {:else}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="5" />
        <path
          d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
        />
      </svg>
    {/if}
  </button>
</div>
