"use client";

import EnquiryForm from "@/components/contacts/EnquiryForm";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export default function EnquiryReview() {
  const reviews = [
    {
      text: "I visited Sri Suvabrata Bharati ji during a very confusing phase of my career. His guidance was clear, practical, and surprisingly accurate. He explained my horoscope in simple language and gave remedies that truly worked. Within months, I saw positive changes. Truly the best astrologer in Siliguri.",
      name: "Anirban Chatterjee",
    },
    {
      text: "Jyotish Gyan Kendra came to me through word of mouth, and now I understand why. Sri Suvabrata Bharati’s predictions about my marriage and family life were precise. His calm approach gives immense mental peace. I highly recommend him to anyone seeking genuine astrological guidance.",
      name: "Somen Mandal",
    },
    {
      text: "I was struggling financially and mentally when I consulted Sri Suvabrata Bharati. He studied my birth chart deeply and showed me a clear path forward. His remedies were simple yet powerful. Today my life feels balanced again. He truly deserves the reputation he has.",
      name: "Souvik Banerjee",
    },
    {
      text: "What impressed me most was his honesty and deep knowledge of astrology. Sri Suvabrata Bharati doesn’t scare you; instead, he motivates you with hope and clarity. His predictions about my career growth turned out to be correct. Jyotish Gyan Kendra is a blessing.",
      name: "Mousumi Ghosh",
    },
    {
      text: "Sri Suvabrata Bharati has an incredible ability to simplify complex astrological concepts. His guidance helped me overcome delays in my profession. The accuracy of his readings is remarkable. I felt confident and positive after the consultation. Truly the best astrologer in Siliguri.",
      name: "Debashis Roy",
    },
    {
      text:"I consulted him for relationship issues, and his insights were eye-opening. He explained planetary influences with patience and care. His predictions gave me clarity and emotional strength. I am extremely satisfied with the guidance I received from Jyotish Gyan Kendra.",
      name:"Tanushree Das",
    }
  ];

  return (
    <section className="flex md:flex-row flex-col gap-5 lg:gap-10">
    
      <div className="md:w-[45%] w-full">
        <EnquiryForm />
      </div>

  
      <div className="w-full md:w-[55%]">
        <Swiper
          direction="vertical"
          slidesPerView={3}
          spaceBetween={16}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop
          modules={[Autoplay]}
          className="h-[600px]"  
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="xl:p-8 xlg:p-6 lg:p-4 p-4 flex flex-col gap-3 border border-gray-200 rounded-md relative w-full">
                <div className="xlg:text-sm lg:text-[13px]/[18px] text-xs text-site-main-gray z-10">
                  {item.text}
                </div>

                <div className="lg:text-lg text-base text-site-main-blue font-medium z-10">
                  {item.name}
                </div>

                <div className="absolute h-[6rem] w-[8rem] inset-0 -z-10 top-3 left-4">
                  <div className="relative h-[6rem] w-full">
                    <Image
                      src="/images/reviewbg.svg"
                      alt="Review"
                      fill
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
