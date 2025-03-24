"use server"
import SubBanner from "@/components/global/SubBanner";
import VideoSlideCard from "@/feature/VideoSlideCard";
import MainWebSite from "@/templates/MainWebsite";

export async function generateMetadata() {
  return {
    title: "Jyothish Gyan kendra | Video Gallery",
    description:
      "Looking for best Astrologer in Siliguri, Dr Suvabrata Bharati is one of the best astrologer in Siliguri famous for love marriage vastu kundali astrology services.",
  };
}

async function getAllMedia() {
  try {
    const mediaRes = await fetch(
      `${process.env.API_URI}/api/media?mediaType=video&limit=24`
    );
    const media = await mediaRes.json();
    // Pass data to the page via props
    return { media: media.medias };
  } catch (error) {
    return { media: [] };
  }
}

export default async function VideoGallery() {
  const { media } = await getAllMedia();
  return (
    <MainWebSite>
      <SubBanner heading={"Video Gallery"} extraLink={"/video-gallery"} />
      <div className="xl:p-16 lg:p-8 p-4 grid grid-cols-2 md:grid-cols-3 place-items-stretch xl:grid-cols-4  gap-2 md:gap-4 xl:gap-6 ">
        {media.length > 0 &&
          media.map((med) => <VideoSlideCard key={med.mediaId} media={med} />)}
      </div>
    </MainWebSite>
  );
}
