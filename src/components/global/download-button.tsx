import React from "react";
// import { Button } from "../ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const DownloadButton = ({
  link,
  icon,
  title,
  padding,
  iconSizeExtended,
  titleFontSizeExtended,
  subtitleFontSizeExtended,
}: {
  link: string;
  icon: string;
  title: string;
  padding: string;
  iconSizeExtended?: string;
  titleFontSizeExtended?: string;
  subtitleFontSizeExtended?: string;
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className={`text-white bg-primary hover:bg-primary-dark w-full font-medium ${padding} lg:py-1 rounded-lg shadow-md`}
    >
      <Link
        to={link}
        target="_blank"
        className="flex items-center justify-center text-sm"
      >
        <Icon
          icon={icon}
          className={`text-[30px] ${iconSizeExtended} lg:text-[42px]`}
        />
        <div className="flex flex-col justify-center items-start">
          <p
            className={`text-[8px] ${titleFontSizeExtended} lg:text-xs font-light text-start`}
          >
            Download on the
            <br />
            <span
              className={`text-[14px] ${subtitleFontSizeExtended} lg:text-xl font-medium`}
            >
              {title}
            </span>
          </p>
        </div>
      </Link>
    </motion.button>
  );
};

export default DownloadButton;
