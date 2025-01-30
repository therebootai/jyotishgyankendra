import Image from "next/image";

export default function AboutUsDesign({ content }) {
  const { imgsrc, heading, description } = content;

  const adjustHeight = () => {
    const leftSide = document.getElementById("left-side");
    const rightSide = document.getElementById("right-side");

    if (!leftSide || !rightSide) return;

    const isSmallScreen = window.innerWidth < 768;

    if (!isSmallScreen) {
      const rightHeight = rightSide.offsetHeight;
      leftSide.style.height = `${rightHeight}px`;
    } else {
      leftSide.style.height = "auto";
    }
  };

  if (typeof window !== "undefined") {
    window.onload = adjustHeight;
    window.onresize = adjustHeight;
  }

  return (
    <section className="flex flex-col md:flex-row lg:gap-6 gap-4 xl:gap-8">
      <div id="right-side" className="md:w-[40%] w-full">
        <Image
          src={imgsrc}
          alt="best-astrologer"
          className="rounded-md  w-full h-full object-cover"
          width={416}
          height={410}
        />
      </div>
      <div
        id="left-side"
        className="flex flex-col w-full md:w-[60%] gap-3 lg:gap-4 xl:gap-5"
      >
        <h1 className="text-site-main-blue font-medium text-xl md:text-lg lg:text-2xl xl:text-4xl">
          {heading}
        </h1>
        <section
          className="text-sm md:text-[11px]/[15px] lg:text-[13px]/[18px] xlg:text-base text-site-main-gray"
          dangerouslySetInnerHTML={{ __html: description }}
        ></section>
      </div>
    </section>
  );
}
