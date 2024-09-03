// import DownloadButton from "@/components/global/download-button";
// import QrImage from "@/components/global/QrImage";
import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute flex items-center justify-center inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-10">
      <div className="h-[75vh] w-[40vh] rounded-xl relative">
        <div
          onClick={onClose}
          className="absolute -top-2 -right-2 p-1 bg-black border border-white rounded-full cursor-pointer"
        >
          <Icon icon="ic:round-close" color="white" fontSize={24} />
        </div>
        <img src="/assets/images/popup_agustus.png" alt="" />
        {/* <div className="bg-primary h-1/6 rounded-t-xl w-full flex-center">
          <p className="text-white font-comforta text-4xl">scola</p>
        </div>
        <div className="h-5/6 bg-white rounded-b-xl flex flex-col items-center justify-between px-4">
          <div className="h-1/2 flex flex-col items-center md:justify-evenly gap-2">
            <div className="pt-4 text-center text-3xl md:text-5xl lg:text-3xl font-semibold font-nexa uppercase">
              {`Download ${
                localStorage.getItem("preferredLanguage") == "en"
                  ? "now"
                  : "Sekarang"
              }`}
              !
            </div>
            <div className="hidden gap-4 lg:flex">
              <QrImage src="/assets/images/playstore_qr.png" />
              <QrImage src={"/assets/images/applestore-qr.png"} />
            </div>
            <div className="flex flex-col w-full px-4 gap-4 lg:hidden">
              <DownloadButton
                link="https://play.google.com/store/apps/details?id=co.id.scola"
                icon={"mage:playstore"}
                title="Play Store"
                padding="py-0.5 md:py-2"
                iconSizeExtended="md:text-[42px]"
                titleFontSizeExtended="md:text-[16px]"
                subtitleFontSizeExtended="md:text-[24px]"
              />
              <DownloadButton
                link="https://apps.apple.com/id/app/scola/id6478919038?l=id"
                icon={"grommet-icons:apple-app-store"}
                title="App Store"
                padding="py-0.5 md:py-2"
                iconSizeExtended="md:text-[42px]"
                titleFontSizeExtended="md:text-[16px]"
                subtitleFontSizeExtended="md:text-[24px]"
              />
            </div>
          </div>
          <div className="h-1/2 w-full flex items-end justify-center ">
            <img src="/assets/images/popup-image.png" alt="" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Popup;
