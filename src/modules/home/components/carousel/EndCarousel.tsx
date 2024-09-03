import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";
import QrImage from "@/components/global/QrImage";
import DownloadButton from "@/components/global/download-button";
import { useTranslation } from "react-i18next";
import boldWords from "@/utils/BoldWords";
import useMediaQuery from "@/hooks/useMediaQuery";
import {
  fifthBackgroundDesktop,
  fifthBackgroundMobile,
} from "../../constant/image-assets";

const EndCarousel = ({
  index,
  transition,
}: {
  index: number;
  transition: any;
}) => {
  const { t } = useTranslation();
  const socialButtonItem = [
    {
      title: "privilege@scola.co.id",
      icon: "ic:outline-email",
      color: "bg-[#2A7FFF] ",
      link: "mailto:privilege@scola.co.id",
    },
    {
      title: "WA: +6282231063405",
      icon: "ic:baseline-whatsapp",
      color: "bg-[#37C837]",
      link: "https://wa.me/+6282231063405",
    },
    {
      title:
        "Pakuwon Mall 3rd Floor\nJl. Ring Road Utara, Kaliwaru, Condongcatur, Depok, Sleman\nYogyakarta 5512813",
      icon: "carbon:location",
      color: "bg-[#D35F5F]",
      link: "https://maps.app.goo.gl/wzXqXA561aJoDAQS7",
    },
  ];
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  return (
    <motion.div
      style={{
        backgroundImage: isLargeScreen
          ? fifthBackgroundDesktop
          : fifthBackgroundMobile,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      animate={{
        scale: index === 4 ? 1 : 0.95,
      }}
      transition={transition}
      className="min-h-screen w-full shrink-0 flex justify-center items-center relative"
    >
      <div className="w-screen h-screen flex flex-col items-center justify-between">
        <div className="flex h-full w-full lg:hidden"></div>
        <div className="lg:h-screen flex flex-col items-center justify-between">
          <div className="w-full lg:h-5/6 flex flex-col lg:flex-row ">
            <div className="lg:h-full lg:w-1/2 shadow-sm flex items-end lg:items-center justify-center px-10 pb-4 md:pb-6 lg:p-0 text-white">
              <div className="flex flex-col lg:w-10/12">
                <h1 className="text-[10px] md:text-[16px] lg:text-[24px] text-center lg:text-start font-medium pb-2 md:pb-10">
                  {t("joining_scola_community")}
                </h1>
                <div className="text-justify text-[8px] md:text-[14px] lg:text-[16px]">
                  <p>
                    {boldWords(t("scola_community_description"), [
                      "Scola Community",
                      "Komunitas Scola",
                    ])}
                  </p>
                  <br />
                  <p>
                    {boldWords(t("educational_institution"), [
                      "Educational Institution",
                      "Institusi Pendidikan",
                    ])}
                  </p>
                  <br />
                  <p>{boldWords(t("students"), ["Students", "Siswa"])}</p>
                  <br />
                  <p>{t("result")}</p>
                </div>
              </div>
            </div>
            <div className="lg:h-full lg:w-1/2 shadow-sm flex items-center justify-center p-10 lg:p-0">
              <div className="flex gap-10 items-center justify-center lg:w-3/5">
                <div className="flex flex-col items-center justify-center gap-4 w-11/12 ">
                  <DownloadButton
                    link="https://play.google.com/store/apps/details?id=co.id.scola"
                    icon={"mage:playstore"}
                    title="Play Store"
                    padding="p-0"
                  />
                  <QrImage src="/assets/images/playstore_qr.png" />
                </div>
                <div className="flex flex-col items-center justify-center gap-4 w-11/12 ">
                  <DownloadButton
                    link="https://apps.apple.com/id/app/scola/id6478919038?l=id"
                    icon={"grommet-icons:apple-app-store"}
                    title="App Store"
                    padding="p-0"
                  />
                  <QrImage src={"/assets/images/applestore-qr.png"} />
                </div>
              </div>
            </div>
          </div>
          <Footer socialButtonItem={socialButtonItem} />
        </div>
      </div>
    </motion.div>
  );
};

const SocialButton = ({
  link,
  icon,
  bgColor,
  altText, // Add this prop to receive the alt text
}: {
  link: string | null;
  icon: string;
  bgColor: string;
  altText: string; // Add this prop to specify the type of alt text
}) => {
  return (
    <Link
      to={link ?? "/"}
      target="_blank"
      className={`w-8 h-8 lg:w-12 lg:h-12 relative ${bgColor} rounded-full flex-center cursor-pointer z-20`}
      title={altText} // Use the title attribute to show the alt text on hover
    >
      <Icon icon={icon} color="white" width={"75%"} />
    </Link>
  );
};

const Footer = ({ socialButtonItem }: { socialButtonItem: any }) => {
  return (
    <div className="w-full py-4 px-10 bg-white">
      <div className="flex flex-col-reverse lg:flex-row w-full items-center gap-2 lg:justify-between">
        <div className="flex flex-col items-center gap-1 lg:items-start">
          <div className="flex text-[8px] lg:text-lg font-light lg:font-medium">
            All Rights Reserved |&ensp;
            <Link
              to="/"
              className="underline lg:no-underline underline-offset-4 font-medium"
            >
              Terms and Conditions
            </Link>
            <p>&ensp;|&ensp;</p>
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/privacy-policy"
              className="underline lg:no-underline underline-offset-4 font-medium"
            >
              Privacy Policy
            </Link>
          </div>
          <p className="flex text-[8px] lg:text-lg font-light">
            Copyright &copy; 2024 MARM LLC.
          </p>
        </div>
        <div className="flex gap-4">
          {socialButtonItem.map((item: any, index: any) => (
            <SocialButton
              key={index}
              altText={item.title}
              link={item.link}
              icon={item.icon}
              bgColor={item.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EndCarousel;
