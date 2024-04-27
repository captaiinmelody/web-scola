export const headerLinks = [
  {
    label: "Beranda",
    route: "/",
  },
  {
    label: "News",
    route: "/news",
  },
  {
    label: "Fitur",
    route: "/features",
  },
  {
    label: "Produk",
    route: "/product",
    children: [
      {
        label: "SCOLA",
        route: "/about",
      },
      {
        label: "1 ON 1",
        route: "/",
      },
      {
        label: "Format Masa Depan",
        route: "/",
      },
    ],
  },
  {
    label: "Tentang SCOLA",
    route: "/about",
  },
  {
    label: "Follow Us",
    route: "/follow-us",
    children: [
      {
        label: "Instagram",
        route:
          "https://www.instagram.com/scola_yourprivilege?igsh=MmV3eTg0dnBlMmg2&utm_source=qr",
      },
      {
        label: "Tiktok",
        route: "https://www.tiktok.com/@scola.co.id?_t=8kVgxHqR33q&_r=1",
      },
    ],
  },
  {
    label: "Customer Support",
    route: "/customer-support",
    children: [
      {
        label: "Whatsapp",
        route: "https://wa.me/+6281336344458",
      },
      {
        label: "Email",
        route: "mailto:privilege@scola.co.id",
      },
      {
        label: "Telephone",
        route: "tel:081336344458",
      },
    ],
  },
  {
    label: "Download",
    route: "/download",
    children: [
      {
        label: "Play Store",
        route: "",
      },
      {
        label: "App Store",
        route: "",
      },
    ],
  },
];
