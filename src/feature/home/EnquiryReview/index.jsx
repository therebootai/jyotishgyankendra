import EnquiryForm from "@/components/contacts/EnquiryForm";
import Image from "next/image";

export default function EnquiryReview() {
  const reviews = [
    {
      text: "Lorem ipsum dolor sit amet consectetur. Nunc mauris blandit posuere massa integer. Aliquet pellentesque diam consectetur nunc quis. Congue iaculis lobortis vel nulla erat at lacus. Fringilla egestas tellus at id massa morbi ultrices neque. Massa non varius odio molestie turpis mauris. Convallis cum viverra sed a turpis at odio. Arcu diam tempor nunc ut at sed eu id feugiat. Aenean proin vitae natoque suspendisse faucibus semper egestas. Vulputate fringilla orci amet leo blandit ut facilisi orci id. Elementum cursus eros duis sit et at. Amet nibh massa faucibus sed dolor amet nam ullamcorper. Fermentum quis tortor vehicula venenatis. Cursus morbi urna integer lacinia in augue. Ipsum tristique urna ligula faucibus. Placerat ultrices purus eu volutpat viverra purus donec. Tortor convallis urna sem suspendisse posuere massa rhoncus. Gravida adipiscing cras egestas adipiscing urna diam nunc. Commodo arcu facilisis nunc tristique. Lacus.",
      name: "Anirban Bharati",
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur. Nunc mauris blandit posuere massa integer. Aliquet pellentesque diam consectetur nunc quis. Congue iaculis lobortis vel nulla erat at lacus. Fringilla egestas tellus at id massa morbi ultrices neque. Massa non varius odio molestie turpis mauris. Convallis cum viverra sed a turpis at odio. Arcu diam tempor nunc ut at sed eu id feugiat. Aenean proin vitae natoque suspendisse faucibus semper egestas. Vulputate fringilla orci amet leo blandit ut facilisi orci id. Elementum cursus eros duis sit et at. Amet nibh massa faucibus sed dolor amet nam ullamcorper. Fermentum quis tortor vehicula venenatis. Cursus morbi urna integer lacinia in augue. Ipsum tristique urna ligula faucibus. Placerat ultrices purus eu volutpat viverra purus donec. Tortor convallis urna sem suspendisse posuere massa rhoncus. Gravida adipiscing cras egestas adipiscing urna diam nunc. Commodo arcu facilisis nunc tristique. Lacus.",
      name: "Anirban Bharati",
    },
  ];
  return (
    <section className="flex md:flex-row flex-col gap-5 lg:gap-10">
      <div className="md:w-[45%] w-full">
        <EnquiryForm />
      </div>
      <div className="flex flex-col justify-between gap-4 w-full md:w-[55%]">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="xl:p-8 xlg:p-6 lg:p-4 p-2 flex flex-col gap-3 shadow-custom rounded-md relative w-full"
          >
            <div className="xlg:text-sm lg:text-[13px]/[18px] text-xs text-site-main-gray z-10">
              {item.text}
            </div>
            <div className=" lg:text-lg text-base text-site-main-blue font-medium z-10">
              {item.name}
            </div>
            <div className=" absolute h-[6rem] w-[8rem] inset-0 -z-10 top-3 left-4">
              <div className=" relative h-[6rem] w-full">
                <Image
                  src={"/images/reviewbg.svg"}
                  alt="Review"
                  fill
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
