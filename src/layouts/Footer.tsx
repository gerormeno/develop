import Logo from "@/assets/KievLogo.png";
import { HashLink } from "react-router-hash-link";
import { FacebookIcon, InstagramIcon, TikTokIcon, YoutubeIcon, WhatsAppIcon } from "@/assets/icons/socialMediaIcons";

const footerNavigation = {
  sections: [
    { name: "Productos", href: "/products#top" },
    { name: "Nosotros", href: "/about#top" },
    { name: "Contacto", href: "/contact#top" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/KievTecnologia",
      icon: FacebookIcon,
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@kievingenieria",
      icon: TikTokIcon,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@Kievingenieria",
      icon: YoutubeIcon,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/kievingenieria?igsh=ZWNrYjg1OW85dzl6",
      icon: InstagramIcon,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/5493584407047", 
      icon: WhatsAppIcon,
    },
  ]
};

const Footer = () => {
  return (
    <footer
      className="bg-footer-background-primary"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="lg:px-8 lg:py-16 mx-auto max-w-md px-6 py-12 sm:max-w-7xl">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="flex flex-col justify-between sm:flex-row">
            <div className="xl:col-span-1 space-y-8 sm:items-center sm:text-center">
              <img
                className="mx-auto h-24 sm:mx-0"
                src={Logo}
                alt="Kiev Logo"
              />
              <p className="text-center text-footer-text-primary sm:text-left">
                Los mejores productos para tu cultivo
              </p>
              <div className="flex justify-center space-x-6 sm:justify-start">
                {footerNavigation.social.map((item) => (
                  <HashLink
                    key={item.name}
                    to={item.href}
                    className="text-slate-400 hover:text-slate-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </HashLink>
                ))}
              </div>
            </div>
            <div className="xl:col-span-2 xl:mt-0 mt-4 gap-8 border-t border-slate-200 pt-12 text-center sm:border-transparent sm:pt-0 sm:text-right">
              <h3 className="text-lg font-medium text-footer-text-primary">
                <strong>Explorar</strong>
              </h3>
              <ul role="list" className="mt-4 space-y-4">
                {footerNavigation.sections.map((item) => (
                  <li key={item.name}>
                    <HashLink
                      smooth
                      to={item.href}
                      className="text-footer-text-secondary hover:text-footer-text-secondary-hover"
                    >
                      {item.name}
                    </HashLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-200 pt-8">
          <p className="text-center text-base text-slate-400">
            &copy; {new Date().getFullYear()} KIEV Ingeniería
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
