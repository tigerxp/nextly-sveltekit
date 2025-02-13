import EmojiHappyIcon from './components/heroicons/face-smile.svelte';

import ChartSquareBarIcon from './components/heroicons/chart-bar-square.svelte';
import CursorClickIcon from './components/heroicons/cursor-click.svelte';
import DeviceMobileIcon from './components/heroicons/device-phone-mobile.svelte';
import AdjustmentsIcon from './components/heroicons/adjustments-vertical.svelte';
import SunIcon from './components/heroicons/sun.svelte';

const benefitOne = {
  title: 'Highlight your benefits',
  desc: 'You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.',
  image: '/img/benefit-one.png',
  bullets: [
    {
      title: 'Understand your customers',
      desc: 'Then explain the first point breifly in one or two lines.',
      icon: EmojiHappyIcon
    },
    {
      title: 'Improve acquisition',
      desc: 'Here you can add the next benefit point.',
      icon: ChartSquareBarIcon
    },
    {
      title: 'Drive customer retention',
      desc: 'This will be your last bullet point in this section.',
      icon: CursorClickIcon
    }
  ]
};

const benefitTwo = {
  title: 'Offer more benefits here',
  desc: 'You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.',
  image: '/img/benefit-two.png',
  bullets: [
    {
      title: 'Mobile Responsive Template',
      desc: 'Nextly is designed as a mobile first responsive template.',
      icon: DeviceMobileIcon
    },
    {
      title: 'Powered by Next.js & TailwindCSS',
      desc: 'This template is powered by latest technologies and tools.',
      icon: AdjustmentsIcon
    },
    {
      title: 'Dark & Light Mode',
      desc: 'Nextly comes with a zero-config light & dark mode. ',
      icon: SunIcon
    }
  ]
};

export { benefitOne, benefitTwo };
