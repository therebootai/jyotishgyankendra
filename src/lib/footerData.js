import Link from "next/link";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import { IoIosPin } from "react-icons/io";

const chambers = {
  heading: "Our Chambers",
  subLinks: (
    <ul className="flex flex-col gap-3 text-sm lg:text-xs xlg:text-base leading-7 lg:leading-10 font-medium text-white">
      <Link href="/chambers/siliguri-chamber">
        Siliguri, West Bengal, India
      </Link>
      <Link href="/chambers/jalpaiguri-chamber">
        Jalpaiguri, West Bengal, India
      </Link>
    </ul>
  ),
};

const contact = {
  heading: "Contact Details",
  subLinks: (
    <ul className="flex flex-col text-sm gap-3 lg:text-xs xlg:text-base leading-7 lg:leading-10 font-medium text-white">
      <li className="inline-flex gap-2 items-center">
        <FaPhoneVolume />{" "}
        <Link href="tel:917001790055" className="inline">
          +91 70017 90055
        </Link>
        ,
        <Link href="tel:919474323694" className="inline">
          +91 94743 23694
        </Link>
      </li>
      <li className="inline-flex gap-2 items-center">
        <IoMailSharp />
        <Link
          href="mailTo:astrologersubhabrata2003@gmail.com"
          className="inline"
        >
          astrologersubhabrata2003@gmail.com
        </Link>
      </li>
      <li className="inline-flex gap-2 items-center">
        <IoIosPin />
        <Link
          href="https://maps.app.goo.gl/PXNVYDk3fmmP5FnD6"
          target="_blank"
          referrerPolicy="no-referrer"
          className="inline"
        >
          Vivekananda Sarani, Siliguri, West Bengal - 736101
        </Link>
      </li>
    </ul>
  ),
};

const quickView = {
  heading: "Quick View",
  subLinks: (
    <ul className="flex flex-col gap-4 text-sm lg:text-xs xlg:text-base leading-7 lg:leading-10 font-medium text-white">
      {[
        { label: "Home", href: "/" },
        { label: "About Us", href: "/about-us" },
        { label: "Our Services", href: "/services/business_astrology" },
        { label: "Our Chembers", href: "/chambers/siliguri-chamber" },
        { label: "Media", href: "/photo-gallery" },
        { label: "Contact Us", href: "/contact-us" },
      ].map((link, key) => (
        <li key={key}>
          <Link href={link.href} className="text-white">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  ),
};

const ourServices = {
  heading: "Our Services",
  subLinks: (
    <ul className="flex flex-col gap-4 text-sm lg:text-xs xlg:text-base leading-7 lg:leading-10 font-medium text-white">
      {[
        {
          label: "Krishna Murti Paddhati",
          href: "/services/krishnamurti-paddhati",
        },
        { label: "Lal Kitab Service", href: "/services/lal-kitab-service" },
        {
          label: "Nadi Jyotish Service",
          href: "/services/nadi-jyotish-service",
        },
        { label: "Palmistry Services", href: "/services/palmistry-service" },
        { label: "Parasar Jyotish", href: "/services/parasar-jyotish" },
        { label: "Tarot Services", href: "/services/tarot-service" },
      ].map((link, key) => (
        <li key={key}>
          <Link href={link.href} className="text-white truncate">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  ),
};

const ourBestServices = {
  heading: "Our Best  Services",
  subLinks: (
    <ul className="flex flex-col gap-4 text-sm lg:text-xs xlg:text-base leading-7 lg:leading-10 font-medium text-white">
      {[
        {
          label: "Best Astrologer In Siliguri",
          href: "/chambers/siliguri-chamber",
        },
        {
          label: "Best Astrologer In Jalpaiguri",
          href: "/chambers/jalpaiguri-chamber",
        },
        {
          label: "Best Astrologer In Gangtok",
          href: "/chambers/gangtok-chamber",
        },
        {
          label: "Best Astrologer In Darjeeling",
          href: "/chambers/darjeeling-chamber",
        },
        {
          label: "Best Astrologer In Cooch Behar",
          href: "/chambers/coochbehar-chamber",
        },
      ].map((link, key) => (
        <li key={key}>
          <Link href={link.href} className="text-white truncate">
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  ),
};

export {
  chambers as Chambers,
  contact as Contacts,
  quickView as QuickView,
  ourServices as OurServices,
  ourBestServices as OurBestServices,
};
