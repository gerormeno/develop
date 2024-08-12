import { Popover } from "@headlessui/react";
import CartButton from "@/components/CartButton";
import LoginButton from "@/components/LoginButton";
import AdminPanelButton from "@/components/AdminPanelButton";
import HeaderLogo from "@/assets/KievLogo.png";
import { theme } from "@/theme";
import { HashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";

export default function Example() {
  const location = useLocation();

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
          <div className="bg-topDisclaimer-background text-center py-1 text-xs text-white">
            <span>¡DESCUENTOS ESPECIALES EN HUMIDIFICADORES!</span>
          </div>
          <div className="lg:px-8 mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex h-16 py-10 items-center justify-between">
              {/* Logo (lg+) */}
              <div className="flex flex-1">
                <a href="/">
                  <span className="sr-only">Your Company</span>
                  <img className="h-12 w-auto" src={HeaderLogo} alt="" />
                </a>
              </div>

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
                      to="/#top">
                      Home
                    </HashLink>
                    <HashLink
                      className={`flex items-center text-sm font-medium hover:text-navbar-text-hover ${
                        location.pathname.startsWith("/about")
                          ? "border-b-2 border-navbar-accent"
                          : ""
                      }`}
                      smooth
                      to="/about#top">
                      Nosotros
                    </HashLink>
                    <HashLink
                      className={`flex items-center text-sm font-medium hover:text-navbar-text-hover ${
                        location.pathname.startsWith("/products")
                          ? "border-b-2 border-navbar-accent"
                          : ""
                      }`}
                      smooth
                      to="/products#top">
                      Productos
                    </HashLink>
                    <HashLink
                      className={`flex items-center text-sm font-medium hover:text-navbar-text-hover ${
                        location.pathname.startsWith("/contact")
                          ? "border-b-2 border-navbar-accent"
                          : ""
                      }`}
                      smooth
                      to="/contact#top">
                      Contacto
                    </HashLink>
                  </div>
                </Popover.Group>
              </div>

              <div className="flex flex-1 items-center justify-end">
                <div className="lg:ml-8 flex items-center">
                  {/* Admin Panel */}
                  <AdminPanelButton />
                  {/* Login */}
                  <LoginButton />
                  {/* Cart */}
                  <CartButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
