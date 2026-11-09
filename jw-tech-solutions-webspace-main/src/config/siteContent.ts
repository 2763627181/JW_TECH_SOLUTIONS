// Datos que NO dependen del idioma (imágenes, clientes, enlaces).
// Los textos traducibles viven en src/i18n/en.ts y src/i18n/es.ts.

// ✅ Cambias imágenes aquí y ya
export const heroImages = ["/home/hero-1.png", "/home/hero-2.png", "/home/hero-3.jpeg"];

export const serviceImages = {
  web: "/services/web.png",
  mobile: "/services/mobile.png",
  ecommerce: "/services/ecommerce.png",
  security: "/services/security.png",
  software: "/services/software.jpg",
  database: "/services/database.png",
  design: "/services/design.png",
} as const;

export const clients = [
  {
    name: "ER TOWINGS",
    logo: "/ERTOW.png",
    url: "https://ertowing.pages.dev",
  },
  {
    name: "AK DEVELOPMENTS",
    logo: "/Akdevelop.png",
    url: "https://ankdevelopments.pages.dev/",
  },
  {
    name: "International ASCC",
    logo: "/International.png",
    url: "https://internationalascc.com/",
  },
  {
    name: "Agregados Geraldo Diaz",
    logo: "/AgregadosGeraldo.png",
    url: "https://www.agregadosgeraldodiaz.com/",
  },
  {
    name: "JW Tech Solutions",
    logo: "/JWTECH.png",
    url: "https://jwtechssolutions.com/",
  },
  {
    name: "Jamcob Electric",
    logo: "/Jamcobe.png",
    url: "https://www.jamcobelectric.com/",
  },
];
