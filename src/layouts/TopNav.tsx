import { Popover } from "@headlessui/react";
import CartButton from "@/components/CartButton";
import LoginButton from "@/components/LoginButton";
import AdminPanelButton from "@/components/AdminPanelButton";
import HeaderLogo from "@/assets/KievLogo.png";
import { theme } from "@/theme";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { useAuth } from "@/security/AuthContext";
import { useEffect, useState } from "react";

type Props = {
  setIsMobileMenuOpen: (value: boolean) => void;
  isMobileMenuOpen: boolean;
};

export default function TopNav({ setIsMobileMenuOpen, isMobileMenuOpen }: Props) {
  const location = useLocation();
  const { isUserLoggedIn } = useAuth();
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
    <header className="fixed top-0 z-10 w-full">
      <nav aria-label="Top" className="shadow-2xl">
        {/* Secondary navigation */}
        <div
          className={
            theme.blurNavBarEffect
              ? "bg-black bg-opacity-10 backdrop-blur-md backdrop-filter"
              : "bg-navbar-background"
          }
        >
          <div className="bg-topDisclaimer-background py-1 text-center text-xs text-white">
            <span>¡DESCUENTOS ESPECIALES EN HUMIDIFICADORES!</span>
          </div>
          <div className="lg:px-8 mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex h-16 items-center justify-start py-10">
              {/* Logo (lg+) */}
              <div className="flex flex-1 items-center justify-start">
                <a href="/">
                  <span className="sr-only">Your Company</span>
                  <img className="h-12 w-auto" src={HeaderLogo} alt="" />
                </a>
                {isScreenMobile && (
                  <div
                    className="ml-5"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  >
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                    >
                      <path
                        fill="#000000"
                        fill-rule="evenodd"
                        d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
                      />
                    </svg>
                  </div>
                )}
              </div>

              {!isScreenMobile && (
                <div className="">
                  {/* Flyout menus */}
                  <Popover.Group className="inset-x-0 bottom-0 px-4">
                    <div className="flex h-full justify-center space-x-8 text-navbar-text">
                      <HashLink
                        className={`flex items-center text-sm font-medium hover:text-navbar-text-hover ${
                          location.pathname === "/"
                            ? "border-b-2 border-navbar-accent"
                            : ""
                        }`}
                        smooth
                        to="/#top"
                      >
                        Home
                      </HashLink>
                      <HashLink
                        className={`flex items-center text-sm font-medium hover:text-navbar-text-hover ${
                          location.pathname.startsWith("/about")
                            ? "border-b-2 border-navbar-accent"
                            : ""
                        }`}
                        smooth
                        to="/about#top"
                      >
                        Nosotros
                      </HashLink>
                      <HashLink
                        className={`flex items-center text-sm font-medium hover:text-navbar-text-hover ${
                          location.pathname.startsWith("/products")
                            ? "border-b-2 border-navbar-accent"
                            : ""
                        }`}
                        smooth
                        to="/products#top"
                      >
                        Productos
                      </HashLink>
                      <HashLink
                        className={`flex items-center text-sm font-medium hover:text-navbar-text-hover ${
                          location.pathname.startsWith("/contact")
                            ? "border-b-2 border-navbar-accent"
                            : ""
                        }`}
                        smooth
                        to="/contact#top"
                      >
                        Contacto
                      </HashLink>
                    </div>
                  </Popover.Group>
                </div>
              )}

             

              <div className="flex flex-1 items-center justify-end">
                <div className="lg:ml-8 flex items-center">
                  {/* Admin Panel */}
                  {isUserLoggedIn && <AdminPanelButton />}
                  {/* Login */}
                  <LoginButton />
                  {/* Cart */}
                  {!isUserLoggedIn && <CartButton />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
