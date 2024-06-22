import App from "@/App";
import CustomerSupportPage from "@/pages/customer-support/customer-support";
import DownloadPage from "@/pages/download/download";
import FollowUsPage from "@/pages/follow-us/follow-us";
import Home from "@/pages/home/home";
import UnderConstructionPage from "@/pages/under-construction";
// import Product from "@/pages/product/product";
import { createBrowserRouter } from "react-router-dom";
import About from "@/pages/about/about";
import PrivacyPolicy from "@/pages/privacy-policy";
// import Feature from "@/pages/feature";
// import { News } from "@/pages/news";
// import NewsDetails from "@/pages/news/_details";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "news",
        element: <UnderConstructionPage />,
      },
      {
        path: "news/:id",
        // loader: newsDetailsLoader,
        element: <UnderConstructionPage />,
      },
      {
        path: "features",
        element: <UnderConstructionPage />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "product",
        element: <UnderConstructionPage />,
      },
      {
        path: "customer-support",
        element: <CustomerSupportPage />,
      },
      {
        path: "follow-us",
        element: <FollowUsPage />,
      },
      {
        path: "download",
        element: <DownloadPage />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
    ],
  },
  {
    path: "*",
    element: <UnderConstructionPage />,
  },
];

const router = createBrowserRouter(routes, {});

export default router;
