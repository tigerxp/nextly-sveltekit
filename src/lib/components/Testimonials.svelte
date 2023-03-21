<script>
  import Container from './Container.svelte';
  import Avatar from './testimonials/Avatar.svelte';
  import Mark from './testimonials/Mark.svelte';

  // TODO: refactor this
  const userOneImg = '/img/user1.jpg';
  const userTwoImg = '/img/user2.jpg';
  const userThreeImg = '/img/user3.jpg';
</script>

<Container>
  <div class="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
    <div class="lg:col-span-2 xl:col-auto">
      <div
        class="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800"
      >
        <p class="text-2xl leading-normal ">
          Share a real <Mark>testimonial</Mark>
          that hits some of your benefits from one of your popular customer.
        </p>

        <Avatar image={userOneImg} name="Sarah Steiner" title="VP Sales at Google" />
      </div>
    </div>
    <div class="">
      <div
        class="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800"
      >
        <p class="text-2xl leading-normal ">
          Make sure you only pick the <Mark>right sentence</Mark>
          to keep it short and simple.
        </p>

        <Avatar image={userTwoImg} name="Dylan Ambrose" title="Lead marketer at Netflix" />
      </div>
    </div>
    <div class="">
      <div
        class="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800"
      >
        <p class="text-2xl leading-normal ">
          This is an <Mark>awesome</Mark> landing page template I've seen. I would use this for anything.
        </p>

        <Avatar image={userThreeImg} name="Gabrielle Winn" title="Co-founder of Acme Inc" />
      </div>
    </div>
  </div>
</Container>
