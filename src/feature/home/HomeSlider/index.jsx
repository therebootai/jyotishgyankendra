"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

export default function HomeSlider({ sliders }) {
  return (
    <Swiper
      pagination={true}
      modules={[Pagination, Autoplay]}
      loop={true}
      autoplay={{ duration: 3000 }}
    >
      {sliders.map((slider) => (
        <SwiperSlide key={slider._id}>
          <Image
            width={1440}
            height={600}
            className="w-full object-cover"
            alt="slider"
            src={slider.image.path}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
