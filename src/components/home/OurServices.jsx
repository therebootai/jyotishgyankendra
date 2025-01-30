import React from "react";
import HeadingDesign from "../global/HeadingDesign";
import { ServiceData } from "@/lib/serviceData";
import Image from "next/image";
import Link from "next/link";

const OurServices = () => {
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <HeadingDesign heading={"Our Services"} />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 xlg:gap-6 xl:gap-8">
        {ServiceData.map((item, index) => (
          <div
            key={index}
            className="xlg:p-8 lg:p-4  p-2 py-4 md:py-3 lg:py-4 xlg:py-8 flex flex-col md:flex-row gap-2 lg:gap-4 w-full rounded-md shadow-custom justify-center items-center "
          >
            <div className="md:w-[30%] w-full flex justify-center items-center">
              <div className="xl:w-[6rem] xl:h-[6rem] xlg:w-[5rem] xlg:h-[5rem] lg:h-[4rem] lg:w-[4rem] h-[4rem] w-[4rem] rounded-full flex justify-center items-center outline-2 outline outline-offset-4 outline-site-main-blue bg-custom-gradient-blue">
                <div className="xl:h-[3rem] xlg:h-[2.5rem] lg:h-[2.3rem] h-[2rem] w-full relative ">
                  <Image
                    src={item.icon}
                    alt="service"
                    fill
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:gap-0 gap-1 lg:gap-1 md:w-[70%] w-full">
              <h1 className="xlg:text-xl lg:text-lg md:text-sm text-base font-semibold text-site-main-black text-center md:text-start ">
                {item.heading}
              </h1>
              <p className="xlg:text-sm lg:text-xs md:text-[10px]/[14px] text-xs  three-line-limit text-site-main-gray text-center md:text-start">
                {item.description}
              </p>
              <Link
                href={item.href}
                className="px-2 lg:h-[2rem] h-[2rem] buttonshine rounded-md !w-fit flex justify-center items-center text-base md:text-xs/[0px] lg:text-lg font-semibold bg-custom-gradient-blue-yellow  bg-clip-text text-transparent"
              >
                Consult Now &#8599;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
