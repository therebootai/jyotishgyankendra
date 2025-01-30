import ChambersPageDesign from "@/components/chambers/ChambersPageDesign";
import SubBanner from "@/components/global/SubBanner";
import { ChambersData } from "@/lib/chamberData";
import MainWebSite from "@/templates/MainWebsite";
import React from "react";

const getServiceData = (chamber) => {
  const ChamberAllData = ChambersData.reduce((acc, item) => {
    const key = item.href.split("/")[2];
    acc[key] = {
      imgsrc: item.imgsrc,
      href: item.href,
      heading: item.heading,
      maplink: item.maplink,
      chambertitle: item.chambertitile,
      pagedescription: item.pagedescription,
      metaTitle: item.metaTitle,
      metaDescription: item.metaDescription,
    };
    return acc;
  }, {});

  return ChamberAllData[chamber] || null;
};

export async function generateMetadata({ params }) {
  const { chamber } = await params;
  const data = getServiceData(chamber);
  return {
    title: data.metaTitle,
    description: data.metaDescription,
    keywords: [
      "Best Astrologer in Siliguri",
      "Best Astrologer in Jalpaiguri",
      "Best Astrologer in Darjeeling",
      "Best Astrologer in Gangtok",
      "Best Astrologer in Cooch Behar",
    ],
  };
}

const ChamberPage = async ({ params }) => {
  const { chamber } = await params;
  const data = getServiceData(chamber);

  if (!data) {
    return <div>Service not found</div>;
  }

  return (
    <MainWebSite>
      <SubBanner heading={"Our Chambers"} extraLink={data.href} />
      <ChambersPageDesign
        imgsrc={data.imgsrc}
        heading={data.heading}
        maplink={data.maplink}
        chambertitle={data.chambertitle}
        pagedescription={data.pagedescription}
      />
    </MainWebSite>
  );
};

export default ChamberPage;

export const generateStaticParams = async () => {
  return ChambersData.map((item) => {
    return { chamber: item.href.split("/")[2] };
  });
};
