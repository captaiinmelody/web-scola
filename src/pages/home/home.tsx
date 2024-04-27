import { useLoaderData } from "react-router-dom";

import "./styles/button-play-store.css";
import "./styles/contact-button.css";
import "./styles/fade.css";
import Section_1 from "./section/section_1";

export default function Home() {
  const news = useLoaderData();
  console.log(news);
  return (
    <main className=" min-h-screen w-full lg:bg-front-page bg-no-repeat">
      {/* <AdsVideo /> */}
      <Section_1 />
      {/* <Footer /> */}
      {/* <CustomChart /> */}
    </main>
  );
}
