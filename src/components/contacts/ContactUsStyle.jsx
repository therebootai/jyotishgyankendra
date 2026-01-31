"use client";
import useElementHeight from "@/hooks/useElementHeight";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoIosPin } from "react-icons/io";
import { IoMailSharp } from "react-icons/io5";
import { LuCalendarClock } from "react-icons/lu";

const ContactUsStyle = () => {
  const [rightSideHeight, leftSideRef] = useElementHeight();
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const contactus = [
    {
      chambername: "Siliguri Chamber",
      content: [
        {
          logo: <FaPhoneVolume className="size-5 mt-1" />,
          details: (
            <div className="flex gap-1">
              <Link href="tel:917076715202" className="inline">
                +91 70767 15202
              </Link>
              ,
              <Link href="tel:919474323694" className="inline">
                +91 94743 23694
              </Link>
            </div>
          ),
        },
        {
          logo: <IoMailSharp className="size-5 mt-1" />,
          details: (
            <Link
              href="mailTo:astrologersubhabrata2003@gmail.com"
              className="inline"
            >
              astrologersubhabrata2003@gmail.com
            </Link>
          ),
        },
        {
          logo: <IoIosPin className="size-5 mt-1" />,
          details:
            "Sachitra Paul Sarani, Swamiji More, opposite Dhaka Store , Haidar Para, Siliguri, West Bengal 734001",
        },
        {
          logo: <LuCalendarClock className="size-5 mt-1" />,
          details: "10:00 AM -  09:00 PM (Mon - Sat)",
        },
      ],
      maplink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.787677738652!2d88.435976!3d26.7192292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441631e787227%3A0xa60ad0369adc598c!2sJyotish%20Gyan%20Kendra%20-%20Best%20Astrologer%20in%20Siliguri!5e0!3m2!1sen!2sin!4v1736860815270!5m2!1sen!2sin",
    },
    {
      chambername: "Jalpaiguri Chamber",
      content: [
        {
          logo: <FaPhoneVolume className="size-5 mt-1" />,
          details: (
            <div className="flex gap-1">
              <Link href="tel:917076715202" className="inline">
                +91  70767 15202
              </Link>
              ,
              <Link href="tel:919474323694" className="inline">
                +91 94743 23694
              </Link>
            </div>
          ),
        },
        {
          logo: <IoMailSharp className="size-5 mt-1" />,
          details: (
            <Link
              href="mailTo:astrologersubhabrata2003@gmail.com"
              className="inline"
            >
              astrologersubhabrata2003@gmail.com
            </Link>
          ),
        },
        {
          logo: <IoIosPin className="size-5 mt-1" />,
          details:
            "Vivekananda Para Rd, Baman Para, Silpasamiti Para, Jalpaiguri, West Bengal 735101",
        },
        {
          logo: <LuCalendarClock className="size-5 mt-1" />,
          details: "10:00 AM -  09:00 PM (Mon - Sat)",
        },
      ],
      maplink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3569.7163413112403!2d88.7123151!3d26.5292459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4799966c5fb6b%3A0x45f0c165c059fa70!2sSri%20Suvabrata%20Bharati%20(Gold%20Medalist)%20%7C%20Best%20Astrologer%20in%20Jalpaiguri!5e0!3m2!1sen!2sin!4v1736861461184!5m2!1sen!2sin",
    },
  ];
  return (
    <div className="flex flex-col xl:gap-16 gap-8">
      {contactus.map((item, index) => (
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8 xl:gap-16"
          key={index}
        >
          <div
            ref={leftSideRef}
            className="shadow-custom rounded-md border border-site-main-blue xl:p-8 lg:p-6 p-4 bg-[#5B00940A]"
          >
            <div className="flex flex-col gap-4">
              <h1 className=" text-xl md:text-2xl lg:text-3xl font-semibold text-site-main-blue">
                {item.chambername}
              </h1>
              <div className=" flex flex-col gap-3">
                {item.content.map((item, id) => (
                  <div
                    className="flex items-start gap-4 text-sm lg:text-lg"
                    key={id}
                  >
                    <span className=" text-site-main-blue">{item.logo}</span>
                    {item.details}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="w-full"
            style={{ height: isSmallScreen ? "12rem" : `${rightSideHeight}px` }}
          >
            <iframe
              src={item.maplink}
              className="w-full h-full border border-site-main-blue rounded-md"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactUsStyle;
