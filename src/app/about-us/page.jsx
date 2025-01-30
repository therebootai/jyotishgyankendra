import AboutUsDesign from "@/components/global/AboutUsDesign";
import SubBanner from "@/components/global/SubBanner";
import EnquiryReview from "@/feature/home/EnquiryReview";
import HomeChamberSlider from "@/feature/home/HomeChamberSlider";
import MainWebSite from "@/templates/MainWebsite";
export const metadata = {
  title: "Best Astrologer in Siliguri - Jyotish Gyan Kendra",
  description:
    "Amidst all the chaos of daily life, having a trusted astrologer by your side makes life easier. Sri Suvabrata Bharati (Jyotish Gyan Kendra), unanimously known as the best astrologer in Siliguri, is here to guide you through your trying times and take you to your potential! Sri Suvabrata Bharati (Jyotish Gyan Kendra) is known for his immaculate reading of astrology and the way he simplifies one of the toughest sciences from medieval ages.",
};
export default function AboutUs() {
  const content = {
    imgsrc: "/images/aboutuspage.jpg",
    heading:
      "Your Stars Talk! Hear them out loud big time - Visit the Best Astrologer in Siliguri",
    description: `
      Amidst all the chaos of daily life, having a trusted astrologer by your side makes life easier. Sri Suvabrata Bharati (Jyotish Gyan Kendra), unanimously known as the <b>best astrologer in Siliguri,</b> is here to guide you through your trying times and take you to your potential! <br/> <br/>
      Sri Suvabrata Bharati (Jyotish Gyan Kendra) is known for his immaculate reading of astrology and the way he simplifies one of the toughest sciences from medieval ages. His accuracy helps people find rhythm back in life, succeed through tough times, succeed in career and achieve excellence in life. His knowledge, education, and pure passion for the subject further makes him the <b>best astrologer in Siliguri</b>. <br/> <br/>
      We understand that life gets complicated and all we need at times is someone to show us the light at the end of the tunnel. Sri Suvabrata Bharati (Jyotish Gyan Kendra) just becomes the perfect person who would guide you and show you the hope and positives coming in life. His predictions are sure to thrill you because your rollercoaster ride to success gets the perfect roadmap through them. The astrologer delves deep into your birth chart to indeed patterns and nuances that foretell the future. His popularity as the <b>best astrologer in Siliguri</b> is further enhanced due to people flocking to him in numbers just by the positive word of mouth about him. If you are looking to understand your astrology based prediction, Sri Suvabrata Bharati (Jyotish Gyan Kendra) is the man to go.
      `,
  };
  return (
    <MainWebSite>
      <SubBanner heading={"About Us"} extraLink={"/about-us"} />
      <div className="xl:p-16 lg:p-8 p-4 flex flex-col lg:gap-16 gap-8">
        <AboutUsDesign content={content} />
        <HomeChamberSlider />
        <EnquiryReview />
      </div>
    </MainWebSite>
  );
}
