"use client";
import useElementHeight from "@/hooks/useElementHeight";
import React, { useEffect, useState } from "react";
import EnquiryForm from "../contacts/EnquiryForm";
import Image from "next/image";

const ChambersPageDesign = ({
  imgsrc,
  heading,
  maplink,
  chambertitle,
  pagedescription,
}) => {
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
  return (
    <div className="xl:p-16 lg:p-8 p-4 flex flex-col xl:gap-16 gap-8">
      <div className="flex flex-col md:flex-row xlg:gap-8 gap-4">
        <div className="md:w-[60%] w-full " ref={leftSideRef}>
          <Image
            src={imgsrc}
            alt={heading}
            width={856}
            height={441}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="md:w-[40%] w-full">
          <div
            className="w-full"
            style={{ height: isSmallScreen ? "12rem" : `${rightSideHeight}px` }}
          >
            <iframe
              src={maplink}
              className="w-full h-full border border-site-main-blue rounded-md"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row xlg:gap-8 gap-4">
        <div className="md:w-[60%] w-full flex flex-col lg:gap-8 gap-5">
          <h1 className="xlg:text-4xl text-2xl lg:text-3xl  font-semibold text-site-main-blue">
            {chambertitle}
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

export default ChambersPageDesign;
