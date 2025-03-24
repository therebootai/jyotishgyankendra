"use server";
import AboutUsDesign from "@/components/global/AboutUsDesign";
import OurServices from "@/components/home/OurServices";
import EnquiryReview from "@/feature/home/EnquiryReview";
import HomeChamberSlider from "@/feature/home/HomeChamberSlider";
import HomeSlider from "@/feature/home/HomeSlider";
import MainWebSite from "@/templates/MainWebsite";

export async function generateMetadata() {
  return {
    title: "Best Astrologer in Siliguri - Jyotish Gyan Kendra",
    description:
      "Looking for best Astrologer in Siliguri, Dr Suvabrata Bharati is one of the best astrologer in Siliguri famous for love marriage vastu kundali astrology services.",
  };
}

async function getPageData() {
  try {
    const sliderRes = await fetch(
      `${process.env.API_URI}/api/sliders?isActive=true`
    );
    const sliders = await sliderRes.json();
    return {
      sliders: sliders.sliders,
      content: {
        imgsrc: "/images/abouthome.jpg",
        heading:
          "Your Stars Talk! Hear them out loud big time - Visit the Best Astrologer in Siliguri",
        description: `
        Amidst all the chaos of daily life, having a trusted astrologer by your side makes life easier. Sri Suvabrata Bharati (Jyotish Gyan Kendra), unanimously known as the <b>best astrologer in Siliguri,</b> is here to guide you through your trying times and take you to your potential! <br/> <br/>
        Sri Suvabrata Bharati (Jyotish Gyan Kendra) is known for his immaculate reading of astrology and the way he simplifies one of the toughest sciences from medieval ages. His accuracy helps people find rhythm back in life, succeed through tough times, succeed in career and achieve excellence in life. His knowledge, education, and pure passion for the subject further makes him the <b>best astrologer in Siliguri</b>. <br/> <br/>
        We understand that life gets complicated and all we need at times is someone to show us the light at the end of the tunnel. Sri Suvabrata Bharati (Jyotish Gyan Kendra) just becomes the perfect person who would guide you and show you the hope and positives coming in life. His predictions are sure to thrill you because your rollercoaster ride to success gets the perfect roadmap through them. The astrologer delves deep into your birth chart to indeed patterns and nuances that foretell the future. His popularity as the <b>best astrologer in Siliguri</b> is further enhanced due to people flocking to him in numbers just by the positive word of mouth about him. If you are looking to understand your astrology based prediction, Sri Suvabrata Bharati (Jyotish Gyan Kendra) is the man to go.
        `,
      },
      whyuscontent: {
        imgsrc: "/images/whychoose.jpg",
        heading:
          "With numerous astrology service offerings in the city, the numero uno question that comes to mind is - Why Us?",
        description: `
          Our reputation as the <b>best astrologer in Siliguri</b> is not something that has come overnight. It has taken years of hard work and reputation building for us to be at this level. It honestly has been only possible because of the appreciation we have received from every client that ever visited Sri Suvabrata Bharati (Jyotish Gyan Kendra). It is unlikely that once you interact with him, you will not find the meeting insightful, because every word he speaks comes from what the stars have got to tell you. The astrology services we offer are of top-notch quality as they are created by Sri Suvabrata Bharati (Jyotish Gyan Kendra) with his years of experience and education in science. Unlike others, we truly believe this is all science and we have the power to create the life we want. Birth chart reading and suggestions to create an aura of dominance all around you is what we are experts at. We believe that luck fuels ambition but with astrology by your side, we help you to create a fail-proof plan for the rest of your life events! <br/> <br/>
          Life is a journey that is best when the path is illuminated. Our astrology services are sure to illuminate your pathway and ensure that you achieve all that the stars have for you in life. To claim such sureshot success and achieve big in life, Sri Suvabrata Bharati (Jyotish Gyan Kendra) is the person that can really change the game for you! 
          `,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      sliders: [],
      content: {
        imgsrc: "/images/abouthome.jpg",
        heading:
          "Your Stars Talk! Hear them out loud big time - Visit the Best Astrologer in Siliguri",
        description: `
      Amidst all the chaos of daily life, having a trusted astrologer by your side makes life easier. Sri Suvabrata Bharati (Jyotish Gyan Kendra), unanimously known as the <b>best astrologer in Siliguri,</b> is here to guide you through your trying times and take you to your potential! <br/> <br/>
      Sri Suvabrata Bharati (Jyotish Gyan Kendra) is known for his immaculate reading of astrology and the way he simplifies one of the toughest sciences from medieval ages. His accuracy helps people find rhythm back in life, succeed through tough times, succeed in career and achieve excellence in life. His knowledge, education, and pure passion for the subject further makes him the <b>best astrologer in Siliguri</b>. <br/> <br/>
      We understand that life gets complicated and all we need at times is someone to show us the light at the end of the tunnel. Sri Suvabrata Bharati (Jyotish Gyan Kendra) just becomes the perfect person who would guide you and show you the hope and positives coming in life. His predictions are sure to thrill you because your rollercoaster ride to success gets the perfect roadmap through them. The astrologer delves deep into your birth chart to indeed patterns and nuances that foretell the future. His popularity as the <b>best astrologer in Siliguri</b> is further enhanced due to people flocking to him in numbers just by the positive word of mouth about him. If you are looking to understand your astrology based prediction, Sri Suvabrata Bharati (Jyotish Gyan Kendra) is the man to go.
      `,
      },
      whyuscontent: {
        imgsrc: "/images/whychoose.jpg",
        heading:
          "With numerous astrology service offerings in the city, the numero uno question that comes to mind is - Why Us?",
        description: `
          Our reputation as the <b>best astrologer in Siliguri</b> is not something that has come overnight. It has taken years of hard work and reputation building for us to be at this level. It honestly has been only possible because of the appreciation we have received from every client that ever visited Sri Suvabrata Bharati (Jyotish Gyan Kendra). It is unlikely that once you interact with him, you will not find the meeting insightful, because every word he speaks comes from what the stars have got to tell you. The astrology services we offer are of top-notch quality as they are created by Sri Suvabrata Bharati (Jyotish Gyan Kendra) with his years of experience and education in science. Unlike others, we truly believe this is all science and we have the power to create the life we want. Birth chart reading and suggestions to create an aura of dominance all around you is what we are experts at. We believe that luck fuels ambition but with astrology by your side, we help you to create a fail-proof plan for the rest of your life events! <br/> <br/>
          Life is a journey that is best when the path is illuminated. Our astrology services are sure to illuminate your pathway and ensure that you achieve all that the stars have for you in life. To claim such sureshot success and achieve big in life, Sri Suvabrata Bharati (Jyotish Gyan Kendra) is the person that can really change the game for you! 
          `,
      },
    };
  }
}

export default async function Home() {
  const pageData = await getPageData();
  
  const { sliders, content, whyuscontent } = pageData;

  return (
    <MainWebSite>
      <HomeSlider sliders={sliders} />

      <div className=" xl:p-16 lg:p-8 p-4 flex flex-col lg:gap-16 gap-8">
        <AboutUsDesign content={content} />
        <OurServices />
        <AboutUsDesign content={whyuscontent} />

        <EnquiryReview />
        <HomeChamberSlider />
      </div>
    </MainWebSite>
  );
}
