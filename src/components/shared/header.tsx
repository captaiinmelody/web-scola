import { useEffect } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const Header = () => {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // const handleResize = () => setWindowWidth(window.innerWidth);
    // window.addEventListener("resize", handleResize);
    // return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const getLogoWidthClass = () => {
  //   if (windowWidth > 768) {
  //     return "w-1/12";
  //   } else if (windowWidth > 640) {
  //     return "w-1/6";
  //   } else if (windowWidth > 512) {
  //     return "w-1/4";
  //   } else {
  //     return "w-1/3";
  //   }
  // };

  return (
    <div className="w-full absolute top-0 bg-[#D5E5FF] bg-opacity-0 h-20 z-10">
      <div className="wrapper flex-between py-2 h-12">
        <div className="flex-3 w-full "></div>
        <div className="flex-1 flex-col justify-end pt-10 lg:pt-20">
          <Link to="/">
            <img src="/assets/images/logo_text.png" alt="" />
          </Link>
          <div className="flex items-center justify-center gap-2 pt-2 hover:cursor-pointer hover:text-blue-600 hover:border-b-2 border-blue-600">
            <Icon icon="mdi:internet" />
            <p className="text-xs md:text-base">English</p>
            <Icon icon="dashicons:arrow-down" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
