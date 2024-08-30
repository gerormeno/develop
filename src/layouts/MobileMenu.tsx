import {
  Dialog,
  DialogPanel,
  TransitionChild,
  Transition,
} from "@headlessui/react";
import { HashLink } from "react-router-hash-link";

type Props = {
  setIsMobileMenuOpen: (value: boolean) => void;
  isMobileMenuOpen: boolean;
};

const MobileMenu = ({ setIsMobileMenuOpen, isMobileMenuOpen }: Props) => {
  return (
    <Transition show={isMobileMenuOpen}>
      <Dialog
        className="z-10 h-full"
        onClose={() => setIsMobileMenuOpen(false)}
      >
        <TransitionChild
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 top-0 flex max-w-full">
              <div className="h-1/2">
                <TransitionChild
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="-translate-y-full"
                  enterTo="translate-y-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-y-0"
                  leaveTo="-translate-y-full"
                >
                  <DialogPanel className="pointer-events-auto mt-20 w-screen">
                    <div
                      className={`flex h-full flex-col overflow-y-scroll border-gray-200 backdrop-filter bg-navbar-background
                      `}
                    >
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="mt-4">
                          <div className="flow-root">
                            <HashLink
                              className={`m-5 flex items-center pb-2 text-lg font-medium text-black ${
                                location.pathname === "/" ? "underline" : ""
                              }`}
                              smooth
                              to="/#top"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Home
                            </HashLink>
                            <HashLink
                              className={`m-5 flex items-center pb-2 text-lg font-medium text-black 
                              ${
                                location.pathname.startsWith("/about")
                                  ? "underline"
                                  : ""
                              }`}
                              smooth
                              to="/about#top"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Nosotros
                            </HashLink>
                            <HashLink
                              className={`m-5 flex items-center pb-2 text-lg font-medium text-black ${
                                location.pathname.startsWith("/products")
                                  ? "underline"
                                  : ""
                              }`}
                              smooth
                              to="/products#top"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Productos
                            </HashLink>
                            <HashLink
                              className={`m-5 flex items-center pb-2 text-lg font-medium text-black ${
                                location.pathname.startsWith("/contact")
                                  ? "underline"
                                  : ""
                              }`}
                              smooth
                              to="/contact#top"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              Contacto
                            </HashLink>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default MobileMenu;
