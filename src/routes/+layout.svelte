<script>
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import PopupWidget from '$lib/components/PopupWidget.svelte';
  import '../css/app.postcss';
</script>

<svelte:head>
  <title>Nextly SvekteKit - Free SvelteKit & TailwindCSS Landing Page Template</title>
  <meta
    name="description"
    content="Nextly is a free landing page template built with SvelteKit & Tailwind CSS"
  />
  <link rel="icon" href="/favicon.ico" />
</svelte:head>

<Navbar />
<slot />
<Footer />
<PopupWidget />
