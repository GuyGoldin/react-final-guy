export const menu = {
  name: `menu`,
  items: [
    {
      href: `/`,
      text: `Home`,
    },
    {
      href: `/about`,
      text: `About`,
    },
    {
      href: `/contact`,
      text: `Contact`,
    },
    {
      href: `/products`,
      text: `Products`,
    },
    {
      href: `/location`,
      text: `Location`,
    },
    {
      unLoggedOnly: true,
      href: `/register`,
      text: `Register`,
    },
    {
      unLoggedOnly: true,
      href: `/login`,
      text: `Login`,
    },
    {
      href: `/favorites`,
      text: `Favorites`,
    },
  ],
};
