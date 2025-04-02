import SubBanner from "@/components/global/SubBanner";
import ServicePageDesign from "@/components/services/ServicePageDesign";
import { ServiceData } from "@/lib/serviceData";
import MainWebSite from "@/templates/MainWebsite";

const getServiceData = (service) => {
  const ServiceAllData = ServiceData.reduce((acc, item) => {
    const key = item.href.split("/")[2];
    acc[key] = {
      href: item.href,
      imgsrc: item.imgsrc,
      heading: item.heading,
      pagedescription: item.pagedescription,
      servicetitle: item.servicetitle,
      metaTitle: item.metaTitle,
      metaDescription: item.metaDescription,
      href: item.href,
    };
    return acc;
  }, {});

  return ServiceAllData[service] || null;
};

export async function generateMetadata({ params }) {
  const { service } = await params;
  const data = getServiceData(service);

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
    },
  };
}
export default async function ServiceDetailPage({ params }) {
  const { service } = await params;
  const data = getServiceData(service);

  if (!data) {
    // If the service is not found, render a 404 message
    return <div>Service not found</div>;
  }

  return (
    <MainWebSite>
      <SubBanner heading={"Services"} extraLink={data.href} />
      <ServicePageDesign
        imgsrc={data.imgsrc}
        heading={data.heading}
        pagedescription={data.pagedescription}
        servicetitle={data.servicetitle}
      />
    </MainWebSite>
  );
}

export const generateStaticParams = async () => {
  return ServiceData.map((item) => {
    return { service: item.href.split("/")[2] };
  });
};
