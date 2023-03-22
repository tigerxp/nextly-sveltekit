<script>
  import Container from './Container.svelte';
  import Benefit from './Benefit.svelte';
  import Image from './Image.svelte';

  export let imgPos = 'left';
  export let data;
</script>

<Container class="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
  <div
    class="flex items-center justify-center w-full lg:w-1/2"
    class:lg:order-1={imgPos === 'right'}
  >
    <div>
      <Image
        src={data.image}
        width="521"
        height="482"
        alt="Benefits"
        layout="intrinsic"
        placeholder="blur"
      />
    </div>
  </div>

  <div
    class="flex flex-wrap items-center w-full lg:w-1/2"
    class:lg:justify-end={imgPos === 'right'}
  >
    <div>
      <div class="flex flex-col w-full mt-4">
        <h3
          class="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white"
        >
          {data.title}
        </h3>

        <p
          class="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300"
        >
          {data.desc}
        </p>
      </div>

      <div class="w-full mt-5">
        {#each data.bullets as item}
          <Benefit title={item.title} icon={item.icon}>
            {item.desc}
          </Benefit>
        {/each}
      </div>
    </div>
  </div>
</Container>
