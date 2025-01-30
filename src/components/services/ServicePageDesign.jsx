"use client";
import { ServiceData } from "@/lib/serviceData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import EnquiryForm from "../contacts/EnquiryForm";
import { usePathname } from "next/navigation";

const ServicePageDesign = ({
  imgsrc,
  heading,
  servicetitle,
  pagedescription,
}) => {
  const currentPath = usePathname();
  const adjustHeight = () => {
    const leftSide = document.getElementById("left-side");
    const rightSide = document.getElementById("right-side");

    if (!leftSide || !rightSide) return;

    const isSmallScreen = window.innerWidth < 768;

    if (!isSmallScreen) {
      const rightHeight = rightSide.offsetHeight;
      leftSide.style.height = `${rightHeight}px`;
    } else {
      leftSide.style.height = "auto";
    }
  };

  if (typeof window !== "undefined") {
    window.onload = adjustHeight;
    window.onresize = adjustHeight;
  }
  return (
    <div className="xl:p-16 lg:p-8 p-4 flex flex-col lg:gap-16 gap-8">
      <div className="flex flex-col md:flex-row xlg:gap-8 gap-4">
        <div id="right-side" className="md:w-[60%] w-full ">
          <Image
            src={imgsrc}
            alt={heading}
            width={856}
            height={441}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div id="left-side" className="md:w-[40%] w-full">
          <div className="h-fit w-full border border-site-main-blue rounded-md">
            {ServiceData.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className={`relative p-2 w-full flex justify-center items-center h-[3.5rem] lg:text-lg text-base font-medium transition-all duration-500 overflow-hidden group ${
                  currentPath === item.href
                    ? "bg-site-main-blue text-white"
                    : index % 2 === 0
                    ? "bg-[#0034940a] text-site-main-blue"
                    : "bg-white text-site-main-blue"
                } hover:bg-site-main-blue hover:text-white`}
              >
                {/* Background Effect */}
                <span
                  className="absolute inset-0 bg-site-main-blue opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ zIndex: -1 }}
                ></span>

                {/* Text Content */}
                <span className="relative z-10 transition-transform duration-500 group-hover:scale-105">
                  {item.heading}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row xlg:gap-8 gap-4">
        <div className="md:w-[60%] w-full flex flex-col lg:gap-8 gap-5">
          <h1 className="xlg:text-4xl text-2xl lg:text-3xl  font-semibold text-site-main-blue">
            {servicetitle}
          </h1>
          <div
            dangerouslySetInnerHTML={{ __html: pagedescription }}
            className=" text-site-main-gray text-base lg:text-lg "
          ></div>
        </div>
        <div className="md:w-[40%] w-full">
          <EnquiryForm />
        </div>
      </div>
    </div>
  );
};

export default ServicePageDesign;
