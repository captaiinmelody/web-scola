// import { useState, useEffect } from "react";
// import { MobileNav } from "./mobile-nav";
// import NavItems from "./nav-items";

import { Link } from "react-router-dom";

const Header = () => {
  // const [isSticky, setIsSticky] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     const shouldBeSticky = scrollTop > 90;
  //     setIsSticky(shouldBeSticky);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className="wrapper w-full flex-start bg-white py-4">
      <Link to="/#">
        <img src="assets/images/logo_baru.png" alt="" />
      </Link>
      {/* <div className="hidden md:flex">
        <NavItems />
      </div>
      <MobileNav /> */}
    </div>
  );
};

export default Header;
