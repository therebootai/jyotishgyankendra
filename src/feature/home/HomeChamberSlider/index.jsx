"use client";
import MarqueeCard from "@/components/global/MarqueeCard";

import { useEffect, useState } from "react";

import Slider from "react-slick";

import HeadingDesign from "@/components/global/HeadingDesign";
import { ChambersData } from "@/lib/chamberData";
export default function HomeChamberSlider() {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [autoplaymode, setAutoplayMode] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 260) {
        setSlidesToShow(1);
        setAutoplayMode(true);
      } else if (window.innerWidth <= 600) {
        setSlidesToShow(2);
        setAutoplayMode(true);
      } else if (window.innerWidth <= 768) {
        setSlidesToShow(3);
        setAutoplayMode(true);
      } else if (window.innerWidth <= 1000) {
        setSlidesToShow(4);
        setAutoplayMode(false);
      } else if (window.innerWidth <= 1400) {
        setSlidesToShow(4);
        setAutoplayMode(false);
      } else {
        setSlidesToShow(4);
        setAutoplayMode(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 500,
    arrows: false,

    lazyLoad: "ondemand",
  };

  return (
    <div className="flex flex-col gap-6 lg:gap-12">
      <HeadingDesign heading={"Our Chamber"} />
      <Slider {...settings}>
        {ChambersData.map((item, index) => (
          <div key={index}>
            <MarqueeCard label={item.heading} link={item.href} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
