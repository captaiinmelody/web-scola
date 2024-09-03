import App from "@/App";
import CustomerSupportPage from "@/modules/customer-support/customer-support";
import DownloadPage from "@/modules/download/download";
import FollowUsPage from "@/modules/follow-us/follow-us";
import Home from "@/modules/home/home";
import UnderConstructionPage from "@/modules/under-construction";
// import Product from "@/pages/product/product";
import { createBrowserRouter } from "react-router-dom";
import About from "@/modules/about/about";
import PrivacyPolicy from "@/modules/privacy-policy";
import Tutorial from "@/modules/tutorial/page/Tutorial";
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
      {
        path: "tutorial-user",
        element: <Tutorial img={"/assets/images/tutorial_user.png"} />,
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
