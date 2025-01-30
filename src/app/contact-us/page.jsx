import ContactUsStyle from "@/components/contacts/ContactUsStyle";
import SubBanner from "@/components/global/SubBanner";
import MainWebSite from "@/templates/MainWebsite";
import React from "react";

export const metadata = {
  title: "Jyothish Gyan kendra | Contact Us",
  description:
    "Looking for best Astrologer in Siliguri, Dr Suvabrata Bharati is one of the best astrologer in Siliguri famous for love marriage vastu kundali astrology services.",
};

const ContactUs = () => {
  return (
    <MainWebSite>
      <SubBanner heading={"Contact Us"} extraLink={"/contact-us"} />
      <div className="xl:p-16 lg:p-8 p-4 flex flex-col lg:gap-16 gap-8">
        <ContactUsStyle />
      </div>
    </MainWebSite>
  );
};

export default ContactUs;
