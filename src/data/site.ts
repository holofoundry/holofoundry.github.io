export const site = {
  name: 'Holo Foundry',
  tagline: 'Technology that works for people. Not the other way around.',
  description:
    'We build web applications, AI tools, and digital strategies for SMEs and public sector organisations who are tired of being over sold and under delivered.',
  url: 'https://holofoundry.github.io',
  email: 'hello@holofoundry.io',
  formspreeId: import.meta.env.PUBLIC_FORMSPREE_ID as string | undefined,
  legal: {
    company: 'Holo Foundry Ltd',
    registration: 'Company registered in England and Wales. Company number: 08778935.',
    address: '71-75 Shelton Street, Covent Garden, London WC2H 9JQ.',
    vat: 'VAT registration number: GB444970471.',
    trading:
      'Holo Foundry is a trading name of Holo Foundry Ltd. All rights reserved.',
  },
  nav: [
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' },
  ],
} as const;
