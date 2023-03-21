<script>
  import Image from './Image.svelte';
  import Container from './Container.svelte';
  import Backlink from './footer/Backlink.svelte';
  import Facebook from './footer/Facebook.svelte';
  import Instagram from './footer/Instagram.svelte';
  import Linkedin from './footer/Linkedin.svelte';
  import Twitter from './footer/Twitter.svelte';

  const navigation = ['Product', 'Features', 'Pricing', 'Company', 'Blog'];
  const legal = ['Terms', 'Privacy', 'Legal'];
</script>

<div class="relative">
  <Container>
    <div
      class="grid max-w-screen-xl grid-cols-1 gap-10 pt-10 mx-auto mt-5 border-t border-gray-100 dark:border-trueGray-700 lg:grid-cols-5"
    >
      <div class="lg:col-span-2">
        <div>
          <a
            href="/"
            class="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100"
          >
            <span>
              <img src="/img/logo.svg" alt="N" width="32" height="32" class="w-8" />
            </span>
            <span>Nextly</span>
          </a>
        </div>

        <div class="max-w-md mt-4 text-gray-500 dark:text-gray-400">
          Nextly is a free landing page & marketing website template for startups and indie
          projects. Its built with Next.js & TailwindCSS. And its completely open-source.
        </div>

        <div class="mt-5">
          <a
            href="https://vercel.com/?utm_source=web3templates&utm_campaign=oss"
            target="_blank"
            rel="noopener"
            class="relative block w-44"
          >
            <Image
              src="/img/vercel.svg"
              layout="responsive"
              alt="Powered by Vercel"
              width="212"
              height="44"
            />
          </a>
        </div>
      </div>

      <div>
        <div class="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
          {#each navigation as item, index}
            <a
              href="/"
              class="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
            >
              {item}
            </a>
          {/each}
        </div>
      </div>
      <div>
        <div class="flex flex-wrap w-full -mt-2 -ml-3 lg:ml-0">
          {#each legal as item, index}
            <a
              href="/"
              class="w-full px-4 py-2 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-trueGray-700"
            >
              {item}
            </a>
          {/each}
        </div>
      </div>
      <div class="">
        <div>Follow us</div>
        <div class="flex mt-5 space-x-5 text-gray-400 dark:text-gray-500">
          <a href="https://twitter.com/web3templates" target="_blank" rel="noopener">
            <span class="sr-only">Twitter</span>
            <Twitter />
          </a>
          <a href="https://facebook.com/web3templates" target="_blank" rel="noopener">
            <span class="sr-only">Facebook</span>
            <Facebook />
          </a>
          <a href="https://instagram.com/web3templates" target="_blank" rel="noopener">
            <span class="sr-only">Instagram</span>
            <Instagram />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener">
            <span class="sr-only">Linkedin</span>
            <Linkedin />
          </a>
        </div>
      </div>
    </div>
    <div class="my-10 text-sm text-center text-gray-600 dark:text-gray-400">
      Copyright © {new Date().getFullYear()}. Made with ♥ by{' '}
      <a href="https://web3templates.com/" target="_blank" rel="noopener"> Web3Templates. </a>{' '}
      Illustrations from{' '}
      <a href="https://www.glazestock.com/" target="_blank" rel="noopener "> Glazestock </a>
    </div>
  </Container>
  <!-- Do not remove this -->
  <Backlink />
</div>
