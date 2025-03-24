"use server";
import SubBanner from "@/components/global/SubBanner";
import MainWebSite from "@/templates/MainWebsite";
import Image from "next/image";

export async function generateMetadata() {
  return {
    title: "Jyothish Gyan kendra | Photo Gallery",
    description:
      "Looking for best Astrologer in Siliguri, Dr Suvabrata Bharati is one of the best astrologer in Siliguri famous for love marriage vastu kundali astrology services.",
  };
}

async function getAllMedia() {
  // Fetch data from external API
  try {
    const mediaRes = await fetch(
      `${process.env.API_URI}/api/media?mediaType=photo&limit=24`
    );
    const media = await mediaRes.json();
    // Pass data to the page via props
    return { media: media.medias };
  } catch (error) {
    return { media: [] };
  }
}

export default async function PhotoGallery() {
  const { media } = await getAllMedia();

  return (
    <MainWebSite>
      <SubBanner heading={"Photo Gallery"} extraLink={"/photo-gallery"} />
      <div className=" grid grid-cols-2 md:grid-cols-3 place-items-stretch xl:grid-cols-4  gap-2 md:gap-4 xl:gap-6 xl:p-16 lg:p-8 p-4 ">
        {media.length > 0 &&
          media.map((img) => (
            <Image
              key={img._id}
              src={img.mediaImage?.path}
              width={306}
              height={306}
              alt="gallery"
              className="h-28 md:h-60 xl:h-80 object-cover w-full"
            />
          ))}
      </div>
    </MainWebSite>
  );
}
