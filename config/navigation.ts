export const mainNavItems = [
  {
    title: "Who We Are",
    href: "/who-we-are",
  },
  {
    title: "Business Solutions",
    href: "/business-solutions",
    children: [
      {
        title: "Carbon Credit Solutions",
        href: "/business-solutions/carbon-credits",
      },
      {
        title: "Net Zero Solutions",
        href: "/business-solutions/net-zero",
      },
    ],
  },
  {
    title: "Our Services",
    href: "/services",
    children: [
      {
        title: "Services for Projects",
        href: "/services",
      },
      {
        title: "Explore Our Projects",
        href: "/projects",
      },
      {
        title: "Case Studies",
        href: "/case-studies",
      },
    ],
  },
  {
    title: "News & Insights",
    href: "/news",
  },
] as const;

export const additionalLinks = [
  {
    title: "Careers",
    href: "/careers",
  },
  {
    title: "Client log in",
    href: "/client-login",
  },
] as const; 