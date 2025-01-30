"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineMenuFold } from "react-icons/ai";
import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { NavLinksData } from "@/lib/navLibData";
import { HiCurrencyRupee } from "react-icons/hi2";
import { FaRegWindowClose } from "react-icons/fa";
import useClickOutside from "@/hooks/useClickOutside";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // Track open dropdown for mobile
  const [modalOpen, setModalOpen] = useState(false);

  const modalRef = useClickOutside(() => setModalOpen(false));

  const closeModal = () => {
    setModalOpen(false);
  };

  const isActive = (path) => {
    return pathname === path || pathname.includes(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolling
          ? "bg-site-main-blue lg:pb-5"
          : "bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0.63)_0%,_rgba(0,_0,_0,_0.0945)_100%)] lg:pb-14 xl:pb-16"
      } pt-5 pb-5 xl:pb-7 px-8 xlg:px-14 xl:px-16 fixed w-full top-0 left-0 z-[1100] transition-all duration-500`}
    >
      <div className="flex justify-between items-center relative">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={315}
            height={42}
            className="w-40 lg:w-80"
          />
        </Link>

        <ul className="hidden lg:flex items-center  justify-center gap-5">
          {NavLinksData.map((item, index) => (
            <li key={index} className="relative group">
              {item.href ? (
                <Link
                  href={item.href}
                  className={`${
                    isActive(item.href) ? "text-site-main-yellow" : "text-white"
                  } text-base xlg:text-lg xl:text-xl font-medium capitalize hover:text-site-main-yellow `}
                >
                  {item.text}
                </Link>
              ) : (
                <div className="relative">
                  <span
                    className={`${
                      isActive(item.href) ? "text-primary" : "text-white"
                    } text-base xlg:text-lg xl:text-xl font-medium capitalize hover:text-primary`}
                  >
                    {item.text}
                  </span>

                  <div className="absolute top-full bg-black/90 left-1/2 -translate-x-1/2 duration-500 transition-all origin-top-right opacity-0 group-hover:opacity-100 w-0 group-hover:w-auto overflow-hidden flex rounded">
                    <div className="text-white flex flex-col gap-6 whitespace-nowrap p-2 py-4 xlg:p-4">
                      <ul className="flex flex-col gap-4">
                        {item.subMenu.map((menu, con) => (
                          <li
                            key={con}
                            className="text-base xl:text-lg hover:text-site-main-yellow"
                          >
                            <Link
                              href={menu.href}
                              className="flex items-center gap-2"
                            >
                              {menu.text}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
        {/* Contact Us Button */}
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className={`hidden lg:inline-flex items-center gap-2 py-2 px-4 rounded lg:text-base font-medium ${
            isScrolling
              ? " bg-site-main-yellow text-site-main-blue"
              : "bg-site-main-blue text-white"
          }`}
        >
          <HiCurrencyRupee className="size-6" />
          <span>Pay Now</span>
        </button>
        {/* Mobile Menu Button */}
        <button
          type="button"
          className="inline-flex lg:hidden text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          title="menu-open"
        >
          <svg width="0" height="0">
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3FFF74" />
              <stop offset="100%" stopColor="#0A5BFF" />
            </linearGradient>
          </svg>
          <span
            className={`transform transition-transform duration-500 ${
              isMenuOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            {isMenuOpen ? (
              <IoCloseSharp
                style={{
                  fill: "url(#gradient1)",
                }}
              />
            ) : (
              <AiOutlineMenuFold
                style={{
                  fill: "url(#gradient1)",
                }}
              />
            )}
          </span>
        </button>
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

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="bg-black/90 absolute top-full w-full left-0 text-white lg:hidden p-6 pb-24 rounded-b-lg h-screen overflow-y-scroll">
          <ul className="flex flex-col gap-4 capitalize">
            {NavLinksData.map((item, index) => (
              <li key={index} className="relative">
                {item.href ? (
                  <Link href={item.href} className="hover:text-primary ">
                    {item.text}
                  </Link>
                ) : (
                  <div>
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() =>
                        setOpenDropdown(openDropdown === index ? null : index)
                      }
                    >
                      <span className="capitalize">{item.text}</span>
                      <span>{openDropdown === index ? "-" : "+"}</span>
                    </div>
                    {openDropdown === index && (
                      <div
                        className={`duration-500 transition-all origin-top ${
                          openDropdown === index
                            ? "h-auto opacity-100"
                            : "h-0 opacity-0"
                        } overflow-hidden flex flex-col rounded`}
                      >
                        <ul className="flex flex-col gap-4">
                          {item.subMenu.map((menu, subIndex) => (
                            <div
                              className="text-white flex flex-col gap-6 whitespace-nowrap p-2"
                              key={subIndex}
                            >
                              <li className="text-base xlg:text-lg">
                                <Link
                                  href={menu.href}
                                  className="flex items-center gap-2"
                                >
                                  {menu.text}
                                </Link>
                              </li>
                            </div>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
            <Link
              href="/contact-us"
              className="w-fit bg-blue-600 text-white py-2 px-8 rounded"
            >
              Contact Us
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
