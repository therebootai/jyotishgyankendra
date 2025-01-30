"use client";
import useClickOutside from "@/hooks/useClickOutside";
import {
  Chambers,
  Contacts,
  OurBestServices,
  OurServices,
  QuickView,
} from "@/lib/footerData";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaRegWindowClose } from "react-icons/fa";
import { HiCurrencyRupee } from "react-icons/hi2";

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  const modalRef = useClickOutside(() => setModalOpen(false));

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <footer className="bg-[url('/background/footer-bg.png')] bg-no-repeat bg-cover flex items-center justify-center bg-center">
      <div className="flex flex-col gap-12 bg-[#6699ff]/70 xl:p-16 lg:p-8 p-4 flex-1">
        <div className="flex flex-col lg:flex-row xlg:gap-7 gap-3 justify-between">
          <div className="flex flex-col gap-3 lg:gap-2 xlg:gap-3 shrink">
            <div className="flex flex-col gap-3 lg:gap-2 xlg:gap-3">
              <Image
                src="/logo.svg"
                alt="logo"
                height={40}
                width={315}
                className="h-10 max-w-fit w-full"
              />
            </div>
            <div className="flex flex-col gap-3 lg:gap-1 xlg:gap-2">
              <h1 className="text-lg xlg:text-2xl font-semibold text-site-main-yellow">
                {Contacts.heading}
              </h1>
              {Contacts.subLinks}
            </div>
            <div className="flex flex-col gap-3 lg:gap-1 xlg:gap-2">
              <h1 className="text-lg xlg:text-2xl font-semibold text-site-main-yellow">
                {Chambers.heading}
              </h1>
              {Chambers.subLinks}
            </div>
          </div>
          <div className="flex flex-col gap-3 xlg:text-base lg:text-xs text-base xlg:gap-3">
            <h1 className="text-lg xlg:text-2xl font-semibold text-site-main-yellow truncate">
              {QuickView.heading}
            </h1>
            {QuickView.subLinks}
          </div>
          <div className="flex flex-col gap-3 xlg:text-base lg:text-xs text-base xlg:gap-3">
            <h1 className="text-lg xlg:text-2xl font-semibold text-site-main-yellow truncate">
              {OurServices.heading}
            </h1>
            {OurServices.subLinks}
          </div>
          <div className="flex flex-col gap-3 xlg:text-base lg:text-xs text-base xlg:gap-3">
            <h1 className="text-lg xlg:text-2xl font-semibold text-site-main-yellow truncate">
              {OurBestServices.heading}
            </h1>
            {OurBestServices.subLinks}
          </div>
          <div className="flex flex-col gap-3 lg:gap-7">
            <div className="h-52 lg:h-full w-full lg:w-[10rem] xl:w-60">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4264.48018181621!2d88.435976!3d26.7192292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e441631e787227%3A0xa60ad0369adc598c!2sJyotish%20Gyan%20Kendra%20-%20Best%20Astrologer%20in%20Siliguri!5e1!3m2!1sen!2sin!4v1736936544087!5m2!1sen!2sin"
                className="border-0"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="rounded-md px-2 md:px-4 lg:px-2 xlg:px-4 h-[2.5rem] buttonshine bg-gold-gradient text-white bg-custom-gradient-blue-yellow flex justify-center md:gap-2 xlg:gap-4 lg:gap-2 gap-1 items-center border border-white"
            >
              <HiCurrencyRupee className="size-6" />
              <span className="sm:text-xs md:text-base lg:text-[10px] xlg:text-sm xl:text-base">
                Pay Now
              </span>
            </button>
          </div>
        </div>
        <div className="w-full h-0.5 bg-white/40" />
        <div className="flex flex-col lg:flex-row items-center gap-4 xlg:gap-0 justify-between">
          <h1 className="text-white font-medium text-sm lg:text-xl text-left">
            &copy; Copyright{" "}
            <span className="font-semibold">Jyotish Gyan Kendra</span> All
            Rights Reserved
          </h1>
          <h1 className="text-white font-medium text-sm lg:text-xl text-right">
            Design &amp; Developed By:{" "}
            <Link
              href="https://rebootai.in/"
              target="_blank"
              className="inline"
            >
              Reboot AI Pvt. Ltd.
            </Link>
          </h1>
        </div>
      </div>
      {modalOpen && (
        <div className="fixed top-0 z-[1300] left-0 w-full h-full flex items-center justify-center overflow-y-scroll bg-black bg-opacity-50">
          <div className=" w-full sm:h-[50vh] lg:h-[100vh] justify-center items-center flex flex-col  rounded-lg">
            <div className="w-full flex p-4 justify-end items-center"></div>
            <div className=" w-[95%] md:w-[60%] lg:w-[45%] xl:w-[40%] xxl:w-[30%] z-[1300] relative">
              <button
                className="bg-primary text-site-main-yellow lg:w-16 right-2 absolute z-[1400] top-2 lg:h-10 sm:w-12 sm:h-8 flex items-center justify-center rounded-lg hover:bg-white hover:text-primary border-2 border-primary"
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
    </footer>
  );
}
