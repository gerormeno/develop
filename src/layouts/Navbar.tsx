import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import TopNav from "./TopNav";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScreenMobile, setIsScreenMobile] = useState<boolean>(
    window.innerWidth < 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsScreenMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav>
      <TopNav
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      {isScreenMobile && (
        <MobileMenu setIsMobileMenuOpen={setIsMobileMenuOpen} isMobileMenuOpen={isMobileMenuOpen} />
      )}
    </nav>
  );
};

export default Navbar;
