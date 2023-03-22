<script>
  import Container from './Container.svelte';
  import Disclosure from './Disclosure.svelte';

  const faqdata = [
    {
      id: 'template',
      question: 'Is this template completely free to use?',
      answer: 'Yes, this template is completely free to use.'
    },
    {
      id: 'caniuse',
      question: 'Can I use it in a commercial project?',
      answer: 'Yes, this you can.'
    },
    {
      id: 'policy',
      question: 'What is your refund policy? ',
      answer:
        "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked."
    },
    {
      id: 'support',
      question: 'Do you offer technical support? ',
      answer:
        "No, we don't offer technical support for free downloads. Please purchase a support plan to get 6 months of support."
    }
  ];
</script>

<Container class="!p-0">
  <div class="w-full max-w-2xl p-2 mx-auto rounded-2xl">
    {#each faqdata as item}
      <div key={item.question} class="mb-5">
        <Disclosure title={item.question}>
          {item.answer}
        </Disclosure>
      </div>
    {/each}
  </div>
</Container>
