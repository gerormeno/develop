import ImgBanner1 from "@/assets/banners/hand-drop.webp";
import Banner from "@/components/Banner";
import AboutItems from "./components/AboutItems";
import Certifications from "./components/Certifications";
import ContactUsBanner from "@/components/ContactUsBanner";
import AboutUsSection from "./components/AboutSection";

const AboutUs = () => {
  return (
    <div className="bg-background-primary">
      {/* <Banner
        title="we are Natural Beauty"
        imgSrc={ImgBanner1}
        description="Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames. Dui, amet, nec sit pulvinar."
      /> */}


      <AboutUsSection />
    </div>
  );
};

export default AboutUs;
