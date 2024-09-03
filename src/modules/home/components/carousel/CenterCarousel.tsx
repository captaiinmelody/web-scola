import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import slideBackgrounds from "../../constant/image-assets";
import useMediaQuery from "@/hooks/useMediaQuery";
import { ChevronRight } from "lucide-react";
import AppBarCarousel from "./AppBarCarousel";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import boldWords from "@/utils/BoldWords";

interface Contents {
  title: string;
  titleSize: string;
  description: ReactNode;
  backgroundDesktop: string;
  backgroundMobile: string;
  linkTutorial: string | null;
}

const CenterCarousel = ({
  index,
  transition,
  setCurrentIndex,
}: {
  index: number;
  transition: any;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { t } = useTranslation();
  const contents: Contents[] = [
    {
      title: "scola",
      titleSize: "[60px] md:text-[96px] lg:text-[140px]",
      description: boldWords(t("scola_description"), [
        "prospective",
        "students",
        "educational",
        "institutions",
        "calon",
        "siswa",
        "institusi",
        "pendidikan",
      ]),
      backgroundDesktop: `${slideBackgrounds[1]}`,
      backgroundMobile: `${slideBackgrounds[5]}`,
      linkTutorial: null,
    },
    {
      title: "Partner",
      titleSize: "[48px] md:text-[96px] lg:text-[140px]",
      description: boldWords(t("partner_description"), [
        '"Partners"',
        '"Partner"',
      ]),
      backgroundDesktop: `${slideBackgrounds[2]}`,
      backgroundMobile: `${slideBackgrounds[6]}`,
      linkTutorial:
        "https://drive.google.com/file/d/1mREDcDloJt7EaHvX79B-jqEnpYJ_Chzi/view?usp=sharing",
    },
    {
      title: "User",
      titleSize: "[48px] md:text-[96px] lg:text-[140px]",
      description: boldWords(t("user_description"), ['"Users"', '"User"']),
      backgroundDesktop: `${slideBackgrounds[3]}`,
      backgroundMobile: `${slideBackgrounds[7]}`,
      linkTutorial:
        "https://drive.google.com/file/d/1Whcg4V5CxknVtESeayqquV7c8qkPF0jZ/view?usp=sharing",
    },
  ];

  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      {contents.map((content, i) => (
        <motion.div
          key={i}
          style={{
            backgroundImage: isLargeScreen
              ? content.backgroundDesktop
              : content.backgroundMobile,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          animate={{
            scale: index - 1 === i ? 1 : 0.95,
          }}
          transition={transition}
          className="h-screen w-full shrink-0 flex items-center justify-center relative"
        >
          <AppBarCarousel setCurrentIndex={setCurrentIndex} />
          <div className="w-full md:w-4/5 absolute top-44 lg:top-0 lg:bottom-0 flex items-center justify-center lg:justify-start">
            <div className="h-full w-3/4 flex items-center lg:items-start justify-center flex-col text-white">
              <div className="pb-6 flex items-center lg:items-start justify-center flex-col ">
                <h1
                  className={`text-[48px] md:text-[96px] lg:text-[140px] font-comforta text-secondary`}
                >
                  {content.title}
                </h1>
                <br />
                <p className="text-[14px] md:text-[20px] lg:text-[24px] text-center lg:text-left">
                  {content.description}
                </p>
              </div>
              {content.linkTutorial != null && (
                <TutorialButton link={content.linkTutorial} />
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </>
  );
};

const TutorialButton = ({ link }: { link: string }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="text-white bg-primary hover:bg-primary-dark font-medium px-8 py-2 rounded-lg shadow-md"
    >
      <Link
        to={link}
        className="flex items-center justify-center gap-1 text-sm"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p>Tutorial</p>
        <ChevronRight size={20} />
      </Link>
    </motion.button>
  );
};

export default CenterCarousel;
