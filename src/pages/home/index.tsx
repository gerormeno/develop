import VideoBanner from "@/components/VideoBanner";
import ShopByCategory2 from "./components/ShopByCategory2";
import InnovationSection from "./components/InnovationSection";
import StaticImageBanner from "@/components/StaticImageBanner";

const Home = () => {
  return (
    <div className="bg-background-primary">
      <VideoBanner
        title="Tecnología robusta, a los mejores precios"
        description="Lámparas eficientes con uno de los espectros más completos que los LEDs pueden ofrecernos."
        textButton="Ver productos"
        redirection="/products#top"
        topDescription="INNOVACIÓN NACIONAL"
        videoSrc="https://videos.pexels.com/video-files/7667161/7667161-uhd_3840_2160_30fps.mp4"
      />

      <ShopByCategory2 />

      <InnovationSection />

      <StaticImageBanner />
    </div>
  );
};

export default Home;
