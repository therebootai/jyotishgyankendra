"use client";
import Image from "next/image";
import { useState } from "react";
import ReactPlayer from "react-player";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function VideoSlideCard({ media }) {
  const [showModal, setShowModal] = useState(false);
  const [playing, setPlaying] = useState(false);

  const startVideo = () => {
    setShowModal(true);
    setPlaying(true);
  };

  const closeVideo = () => {
    setPlaying(false);
    setShowModal(false);
  };
  return (
    <>
      <div className="flex relative group">
        <Image
          src={media.mediaVideoThumb?.path}
          alt="video thumb"
          width={306}
          height={390}
          className="lg:h-[20rem] md:h-[15rem] h-[10rem] object-cover w-full"
        />
        <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center group-hover:bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0.00)_0%,_#000_100%)] transition duration-300">
          <div className="relative w-full h-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <button
                type="button"
                className="md:p-4 p-3 bg-site-main rounded-full"
                onClick={startVideo}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 22 26"
                  fill="none"
                >
                  <path
                    d="M21 11.2679C22.3333 12.0377 22.3333 13.9622 21 14.732L3 25.1243C1.66667 25.8941 8.41226e-08 24.9319 1.51421e-07 23.3923L1.05994e-06 2.60765C1.12724e-06 1.06805 1.66667 0.105805 3 0.875606L21 11.2679Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            <div className="bottom-0 left-0 ps-6 absolute opacity-0 group-hover:opacity-100 transition duration-300">
              <h2 className="text-white text-2xl font-medium">
                {media.mediaTitle}
              </h2>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/80 flex items-center justify-center z-[1100]">
          <button
            type="button"
            onClick={closeVideo}
            className="text-white absolute top-[4%] right-[4%] text-xl md:text-3xl"
          >
            <IoCloseCircleOutline />
          </button>
          <div className="w-[80%] h-[80%] relative">
            <ReactPlayer
              playing={playing}
              url={media.mediaVideo}
              controls={true}
              width="100%"
              height="100%"
            />
          </div>
        </div>
      )}
    </>
  );
}
