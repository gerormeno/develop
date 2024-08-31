import VideoBanner from "@/components/VideoBanner";
import KIEVLogoRecortado from "@/assets/kiev-logo-recortado.png";
import ShopByCategory2 from "./components/ShopByCategory2";
import InnovationSection from "./components/InnovationSection";
import StaticImageBanner from "@/components/StaticImageBanner";
import { useEffect } from "react";
import Aos from "aos";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-background-primary">
      <VideoBanner
        title="Tecnología robusta, a los mejores precios"
        description="Lámparas eficientes con uno de los espectros más completos que los LEDs pueden ofrecernos."
        textButton="Ver productos"
        redirection="/products#top"
        logoSrc={KIEVLogoRecortado}
        topDescription="INNOVACIÓN NACIONAL"
      />

      <ShopByCategory2 />

      <InnovationSection />

      <StaticImageBanner />
    </div>
  );
};

export default Home;
