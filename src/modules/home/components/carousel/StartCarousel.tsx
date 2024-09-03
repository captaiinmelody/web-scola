import React from "react";
import { motion } from "framer-motion";
import slideBackgrounds from "../../constant/image-assets";
import useMediaQuery from "@/hooks/useMediaQuery";
import AppBarCarousel from "./AppBarCarousel";

const StartCarousel = ({
  index,
  transition,
  setCurrentIndex,
}: {
  index: number;
  transition: any;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  return (
    <motion.div
      style={{
        backgroundImage: isLargeScreen
          ? slideBackgrounds[0]
          : slideBackgrounds[4],
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      animate={{
        scale: index === 0 ? 1 : 0.95,
      }}
      transition={transition}
      className={`h-screen w-full shrink-0 flex items-center justify-center relative`}
    >
      <AppBarCarousel setCurrentIndex={setCurrentIndex} />
      <div className="w-full md:w-4/5 absolute top-52 lg:top-0 lg:bottom-0 flex items-center justify-center lg:justify-start">
        <div className="h-full w-1/2 flex items-center lg:items-start justify-center flex-col text-white">
          <h1 className="text-[14px] md:text-[22px] lg:text-[36px] text-center">
            It is Not A Social Media
          </h1>
          <p className="flex text-[52px] md:text-[80px] lg:text-[124px] font-comforta">
            it's <span className="text-secondary">&nbsp;scola</span>
          </p>
          <p className="flex text-[14px] md:text-[22px] lg:text-[36px] font-medium text-center lg:text-left">
            A Privilege
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default StartCarousel;
