import { useState, useEffect } from "react";
import { MobileNav } from "./mobile-nav";
import NavItems from "./nav-items";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldBeSticky = scrollTop > 90;
      setIsSticky(shouldBeSticky);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-100vw bg-transparent text-secondary h-8 flex-end z-50 text-base font-normal ${
        isSticky ? "sticky top-0 bg-white" : "absolute right-5"
      }`}
    >
      <div className="hidden md:flex">
        <NavItems />
      </div>
      <MobileNav />
    </div>
  );
};

export default Header;
