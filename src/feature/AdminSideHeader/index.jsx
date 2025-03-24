"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const AdminSideHeader = ({ isMobileSidebarOpen, closeMobileSidebar }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  //   const [isSidebarHovered, setIsSidebarHovered] = useState(false);
  const router = useRouter();

  const pathname = usePathname();

  const sideheader = [
    {
      icon: "/images/slider.svg",
      name: "Slider",
      link: "/admin/slider",
    },
    {
      icon: "/images/media.svg",
      name: "Media",
      link: "/admin/media",
    },
  ];

  const handleIconClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  // Reset active index when the sidebar is closed
  useEffect(() => {
    if (!isMobileSidebarOpen) {
      setActiveIndex(null);
    }
  }, [isMobileSidebarOpen]);

  return (
    <div
      className={` flex flex-col gap-4 h-full w-full bg-site-main-blue shadow-custom-light transition-all duration-300 z-50 px-2 ${
        isMobileSidebarOpen ? "block" : "hidden"
      } md:flex `}
    >
      <div className="flex justify-center items-center  border-b  h-[4rem]  border-[#00000033]">
        <Link href="/">
          <img src="/logo.svg" alt="Long Logo" className="h-[3.5rem] " />
        </Link>
      </div>
      <div className="flex flex-col gap-4 mt-2">
        {sideheader.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-start"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => handleIconClick(index)}
          >
            <div
              className={`flex items-center p-2 rounded-lg w-full ${
                hoveredIndex === index || pathname === item.link
                  ? "bg-gradient-to-b from-[#FFFFFF] to-[#EAEAEA]"
                  : "bg-transparent"
              } `}
              style={{
                transition: "background-color 0.5s ease, width 0.5s ease",
              }}
            >
              <span className={`p-2 rounded-md flex flex-row  `}>
                <img
                  src={item.icon}
                  alt={item.name}
                  className={`h-[1.4rem] w-[1.4rem]  `}
                />
                <>
                  {item.link ? (
                    <Link
                      href={item.link}
                      className={`text-site-main-yellow hover:text-site-main-blue font-semibold cursor-pointer ml-2`}
                      onClick={closeMobileSidebar}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <span
                      className={`text-site-main-yellow hover:text-site-main-blue font-semibold cursor-pointer ml-2 `}
                    >
                      {item.name}
                    </span>
                  )}
                </>{" "}
              </span>
            </div>

            {/* Render Dropdown Links if available */}
            {/* {item.links?.length > 0 && (
              <div
                className={`flex flex-col w-full ml-4 overflow-hidden ease-in-out ${
                  activeIndex === index ? "max-h-screen" : "max-h-0"
                }`}
                style={{
                  transform: activeIndex === index ? "scaleY(1)" : "scaleY(0)",
                  transformOrigin: "top",
                  transition: "transform 0.5s ease, max-height 0.9s ease",
                }}
              >
                {item.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.link}
                    className={`pl-10 py-2 transition-all duration-1000 ease-in-out ${
                      location.pathname === link.link
                        ? "text-[#BDBDBD]"
                        : "text-[#777777]"
                    }`}
                    style={{
                      transform:
                        activeIndex === index
                          ? "translateY(0)"
                          : "translateY(-10px)",
                      opacity: activeIndex === index ? 1 : 0,
                      transition:
                        "transform 0.5s ease, opacity 0.5s ease, color 0.3s ease",
                    }}
                    onClick={closeMobileSidebar} // Close sidebar on link click
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminSideHeader;
