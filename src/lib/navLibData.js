import { ChambersData } from "./chamberData";
import { ServiceData } from "./serviceData";

const navLinks = [
  {
    text: "home",
    href: "/",
  },
  {
    text: "About Us",
    href: "/about-us",
  },
  {
    text: "Our Services",
    subMenu: ServiceData.map((item) => ({
      text: item.heading,
      href: item.href,
    })),
  },
  {
    text: "Chamber",
    subMenu: ChambersData.map((item) => ({
      text: item.heading,
      href: item.href,
    })),
  },
  {
    text: "Media",
    subMenu: [
      {
        href: "/photo-gallery",
        text: "Photo Gallery",
      },
      {
        href: "/video-gallery",
        text: "Video Gallery",
      },
    ],
  },
  {
    text: "Contact Us",
    href: "/contact-us",
  },
];

export { navLinks as NavLinksData };
