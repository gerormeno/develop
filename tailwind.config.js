/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {

        // COMMON
        "background-primary": "#FFFFFF",
        "background-primary-hover": "#333333",
        "background-secondary": "#333333", // hacer un poquito mas claro
        "background-secondary-hover": "#363636",
        "accent": "#2e3b2e",
        "accent-hover": "#4338ca",
        "text-primary": "#1a1a1a",
        "text-primary-hover": "#666666",
        "text-secondary": "#e0e7ff",
        "text-secondary-hover": "#000000",
        "text-title": "#FFFFFF",
        "text-button": "#FFFFFF",
        
        // NAVBAR
        "navbar-background": "#FFFFFF",
        "navbar-text": "#1a1a1a",
        "navbar-text-hover": "#1a1a1a",
        "navbar-accent": "#1a1a1a",
        "topDisclaimer-background": "#2e3b2e",

        // CART
        "cart-background": "#FFFFFF",
        "cart-text-primary": "#1a1a1a",
        "cart-text-primary-hover": "#4f46e5",
        "cart-text-secondary": "#e0e7ff",
        "cart-text-secondary-hover": "#FFFFFF",
        
        // FOOTER
        "footer-background-primary": "#2e3b2e",
        "footer-background-secondary": "#333333",
        "footer-text-primary": "#FFFFFF",
        "footer-text-primary-hover": "#4f46e5",
        "footer-text-secondary": "#FFFFFF",
        "footer-text-secondary-hover": "#4f46e5",
        "footer-text-tertiary": "#e0e7ff",
        "footer-icon-color": "#FFFFFF",

        // CATALOG
        "filters-background-primary": "#111827",
        "filters-accent": "#577B8D",
        "filters-text-primary": "#FFFFFF",
        "filters-text-primary-hover": "#4f46e5",
        "filters-text-secondary": "#e0e7ff",
        "filters-text-secondary-hover": "#FFFFFF",
        "filters-text-title": "#FFFFFF",

        // CHECKOUT
        "checkout-filters": "#F9FAFB",
                // IMPORTANT ==> the empty-state icon color can only be set in checkout/index.tsx

        // LOGIN
        

        "login-background-primary": "#2B2B2B",
        "login-text-primary": "#FFFFFF",
        "login-text-secondary": "#FFFFFF",

        "background-primary-hover": "#333333",
        "background-secondary": "#333333", // hacer un poquito mas claro
        "background-secondary-hover": "#363636",
        "accent": "#4f46e5",
        "accent-hover": "#4338ca",
        "text-primary-hover": "#666666",
        "text-secondary": "#e0e7ff",
        "text-secondary-hover": "#000000",
        "text-title": "#FFFFFF",
        "text-button": "#FFFFFF",

      },

      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/Abstractwaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
      width: {
        '30': '30%',
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [
  ],
};
