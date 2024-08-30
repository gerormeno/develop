import VideoBanner from "@/components/VideoBanner";
import KIEVLogoRecortado from "@/assets/kiev-logo-recortado.png";
import ShopByCategory2 from "./components/ShopByCategory2";
import InnovationSection from "./components/InnovationSection";
import StaticImageBanner from "@/components/StaticImageBanner";
import Video from "@/assets/cannabis-plant-indoor-2-compressed.mp4";
import SkeletonPicture from "@/assets/cannabis-plant-indoor-2-skeleton.webp";

const Home = () => {
  return (
    <div className="bg-background-primary">
      <VideoBanner
        title="Tecnología robusta, a los mejores precios"
        description="Lámparas eficientes con uno de los espectros más completos que los LEDs pueden ofrecernos."
        textButton="Ver productos"
        redirection="/products#top"
        logoSrc={KIEVLogoRecortado}
        topDescription="INNOVACIÓN NACIONAL"
        videoSrc={Video}
        skeletonSrc={SkeletonPicture}
      />

      <ShopByCategory2 />

      <InnovationSection />

      <StaticImageBanner />
    </div>
  );
};

export default Home;
