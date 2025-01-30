"use client";

import useClickOutside from "@/hooks/useClickOutside";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { BiSolidPhoneCall } from "react-icons/bi";

const OnlyMobile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const modalRef = useClickOutside(() => setModalOpen(false));

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollThreshold = window.innerWidth <= 768 ? 100 : 300;
    if (window.scrollY > scrollThreshold) {
      setIsVisible(true);
      setIsAnimated(true);
    } else {
      setIsVisible(false);
      setIsAnimated(false);
    }
  };

  return (
    <div
      className={`fixed w-full p-2 z-[80] bottom-0 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`sm:flex md:hidden justify-between bg-white items-center p-4 h-[4rem] rounded-lg border-site-main border-2 ${
          isAnimated ? "bottomToTop" : ""
        }`}
      >
        <Link
          target="_Blank"
          href="https://api.whatsapp.com/send?phone=917001790055"
          className="flex flex-col items-center gap-2 text-sm text-site-typo font-semibold"
        >
          <span className="text-xl text-site-main-blue">
            <IoLogoWhatsapp size={20} className="size-5" />
          </span>
          <span>Whats App</span>
        </Link>
        <button
          onClick={() => openModal()}
          className="flex flex-col gap-2 items-center h-[4rem] text-sm text-site-typo font-semibold"
        >
          <span className=" absolute -top-7 bg-white w-[4rem] h-[4rem] border-t-[1px] border-site-main rounded-full justify-center items-center flex">
            <span className="flex w-[3rem] h-[3rem] text-xl  bg-white rounded-full justify-center items-center">
              <RiMoneyRupeeCircleFill
                size={32}
                className="size-8 text-site-main-blue"
              />
            </span>
          </span>
          <span className="relative top-8">Pay Now</span>
        </button>
        <Link
          href="tel:7001790055"
          target="_Blank"
          className="flex flex-col gap-2 items-center text-sm text-site-typo font-semibold"
        >
          <span className="text-xl">
            <BiSolidPhoneCall
              size={20}
              className="size-5 text-site-main-blue"
            />
          </span>
          <span>Call Now </span>
        </Link>
      </div>
      {modalOpen && (
        <div className="fixed top-0 z-[1300] left-0 w-full h-full flex items-center justify-center overflow-y-scroll bg-black bg-opacity-50">
          <div className=" w-full sm:h-[50vh] lg:h-[100vh] justify-center items-center flex flex-col  rounded-lg">
            <div className="w-full flex p-4 justify-end items-center"></div>
            <div className=" w-[95%] md:w-[60%] lg:w-[45%] xl:w-[40%] xxl:w-[30%] z-[1300] relative">
              <button
                className="bg-primary text-site-main-yellow lg:w-16 right-2  absolute z-[1400] top-2 lg:h-10 sm:w-12 sm:h-8 flex items-center justify-center rounded-lg hover:bg-white hover:text-primary border-2 border-primary"
                onClick={closeModal}
              >
                <FaRegWindowClose className="lg:text-2xl sm:text-xl" />
              </button>
              <div
                className="flex flex-col lg:flex-row gap-6 items-center relative bg-white p-4 rounded-lg"
                ref={modalRef}
              >
                <Image
                  src="/images/qr.jpeg"
                  alt="qr"
                  width={200}
                  height={200}
                />
                <div className="flex flex-col gap-2">
                  <h3 className="text-base lg:text-xl font-medium">
                    Bank Name - Axis Bank Ltd
                  </h3>
                  <h3 className="text-base lg:text-xl font-medium">
                    Account Name - Suvabrata Ghosh
                  </h3>
                  <h3 className="text-base lg:text-xl font-medium">
                    A/C No. 912010040848634
                  </h3>
                  <h3 className="text-base lg:text-xl font-medium">
                    IFSC Code - UTIB0000442
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OnlyMobile;
