<script>
  import ThemeChanger from './ThemeChanger.svelte';
  export let title = 'Nextly';
  let open = false;

  const navigation = ['Product', 'Features', 'Pricing', 'Company', 'Blog'];
</script>

<div class="w-full">
  <nav
    class="container navbar relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0"
    class:navbar-open={open}
  >
    <div class="flex flex-wrap items-center justify-between w-full lg:w-auto">
      <a
        class="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
        href="/"
        ><span><img src="/img/logo.svg" alt="N" width="32" height="32" class="w-8" /></span><span
          >{title}</span
        ></a
      >
      <button
        aria-label="Toggle Menu"
        class="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
        type="button"
        on:click={() => (open = !open)}
      >
        <svg
          class="navbar-hamburger w-6 h-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          ><path
            fill-rule="evenodd"
            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
          />
        </svg>
        <svg
          class="navbar-close w-6 h-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          ><path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
          /></svg
        >
      </button>
    </div>
    <div class="navbar-items hidden text-center lg:flex lg:items-center">
      <ul class="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
        {#each navigation as item}
          <li class="mr-3 nav__item">
            <a
              class="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
              href="/"
              on:click={() => (open = false)}
            >
              {item}
            </a>
          </li>
        {/each}
      </ul>
    </div>
    <div class="navbar-tools hidden mr-3 space-x-4 lg:flex nav__item">
      <a class="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5" href="/">Get Started</a>
      <ThemeChanger />
    </div>
  </nav>
</div>
