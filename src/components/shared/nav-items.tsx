import { headerLinks } from "@/constants/header-links";
import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

interface NavItem {
  label: string;
  route: string;
  children?: { label: string; route: string }[];
}

const NavItems: React.FC = () => {
  const location = useLocation();
  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);

  // const [headersData, setHeadersData] = useState<any[]>([]);

  const handleMouseEnter = (index: number) => {
    // setActiveItem(index);
    setDropdownIndex(index);
  };

  const handleMouseLeave = () => {
    // setActiveItem(null);
    setDropdownIndex(null);
  };

  const handleDropdownMouseEnter = (index: number) => {
    setDropdownIndex(index);
  };

  const handleDropdownMouseLeave = () => {
    setDropdownIndex(null);
  };

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch("/api/headers"); // Adjust the URL based on your API endpoint
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const data = await response.json();
  //     setHeadersData(data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  useEffect(() => {
    // fetchData();
    function handleResize() {
      if (dropdownRef.current) {
        const dropdownWidth = dropdownRef.current.offsetWidth;
        const windowWidth = window.innerWidth;
        if (dropdownWidth > windowWidth) {
          dropdownRef.current.style.left = "0";
          dropdownRef.current.style.width = `${windowWidth}px`;
        } else {
          dropdownRef.current.style.left = "";
          dropdownRef.current.style.width = "";
        }
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ul className="md:flex-end md:flex-row flex flex-col w-full items-start gap-5">
      {headerLinks.map((item: NavItem, index: number) => (
        <li
          key={index}
          className="relative w-full md:w-auto"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
        >
          {item.children ? (
            <>
              <NavLink
                to={item.route}
                className={`cursor-pointer flex-start h-8 w-full md:w-auto hover:border-b-4  ${
                  location.pathname === item.route ? "" : ""
                }`}
              >
                {item.label}
              </NavLink>

              {dropdownIndex === index && (
                <ul
                  ref={dropdownRef}
                  className={`flexCol md:absolute top-full bg-white text-secondary shadow-md ${
                    item.label.toLocaleLowerCase() === "produk" ? "md:w-32" : ""
                  }`}
                  onMouseEnter={() => handleDropdownMouseEnter(index)}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  {item.children.map((child, childIndex) => (
                    <li key={childIndex}>
                      <NavLink
                        to={child.route}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block px-4 py-0 text-start ${
                          item.label.toLocaleLowerCase() === "produk"
                            ? "md:w-32"
                            : ""
                        } hover:bg-gray-100`}
                      >
                        {child.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <NavLink
              to={item.route}
              className={`cursor-pointer flex-start h-12 w-full md:w-auto  ${
                location.pathname === item.route ? "" : ""
              }`}
            >
              {item.label}
            </NavLink>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavItems;
