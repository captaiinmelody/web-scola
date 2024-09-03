import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Icon } from "@iconify/react/dist/iconify.js";
// import DownloadButton from "../global/download-button";

const Footer = () => {
  const handleClickFooterItem = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-6 md:gap-12 py-10 bg-gray-100">
        {/* <div className="flex flex-col gap-12 lg:gap-0 lg:flex-row lg:w-1/2 items-center justify-center">
          <DownloadButton
            title="Download on the"
            subtitle="Play Store"
            icon="mage:playstore"
            qrImage="/assets/images/playstore_qr.png"
            placement="items-center justify-center"
            onClick={() => {
              handleClickFooterItem(
                "https://play.google.com/store/apps/details?id=co.id.scola"
              );
            }}
          />

          <DownloadButton
            title="Download on the"
            subtitle="App Store"
            icon="grommet-icons:apple-app-store"
            qrImage="/assets/images/applestore-qr.png"
            placement="items-center lg:items-start justify-center"
            onClick={() => {
              handleClickFooterItem(
                "https://apps.apple.com/id/app/scola/id6478919038?l=id"
              );
            }}
          />
        </div> */}
        <div className="flex flex-col items-center w-2/3 lg:w-1/2 text-black gap-4 py-10">
          <div className="flex justify-center lg:justify-start gap-6 w-1/2">
            <Button className="bg-primary text-white px-20 py-8 md:py-12 lg:py-6 w-1/2 hover:text-primary hover:bg-secondary shadow-xl">
              Contact Us
            </Button>
          </div>
          <div className="lg:pl-10 flex flex-col gap-2">
            <div className="flex w-full gap-2">
              <div className="flex justify-end items-center w-1/4">
                <Icon icon="ic:outline-email" className="text-xl md:text-3xl" />
              </div>
              <p
                className="text-base md:text-xl w-3/4 hover:cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText("pivilege@scola.co.id");
                  alert("Email copied!");
                }}
              >
                privilege@scola.co.id
              </p>
            </div>
            <div className="flex w-full gap-2">
              <div className="flex justify-end items-center w-1/4">
                <Icon
                  icon="ic:baseline-whatsapp"
                  className="text-xl md:text-3xl"
                />
              </div>
              <p
                className="text-base md:text-xl w-3/4 "
                onClick={() => {
                  handleClickFooterItem("https://wa.me/+6282231063405");
                }}
              >
                +62 813-3634-4458
              </p>
            </div>
            <div className="flex w-full gap-2">
              <div className="flex justify-end items-start w-1/4 ">
                <Icon
                  icon="mingcute:location-line"
                  className="text-xl md:text-3xl"
                />
              </div>

              <p className="text-base md:text-xl w-3/4">
                HQ Yogyakarta Pakuwon Mall 3rd Floor Jl. Ring Road Utara,
                Kaliwaru, Condongcatur, Depok, Sleman Yogyakarta 5512813.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className="flex flex-col md:flex-row md:justify-between w-full py-8 wrapper ">
          <p className="text-lg text-center pb-2 lg:pb-0">
            Copyright &copy; 2024 MARM LLC.
          </p>
          <div className="w-full flex flex-col md:flex-row justify-center md:justify-end items-center md:w-1/2 lg:flex-end">
            <p className="text-lg">All Rights Reserved</p>
            <span className="hidden lg:block">&nbsp;|&nbsp;</span>
            <Link to="/" className="text-lg">
              Terms and Conditions
            </Link>
            <span className="hidden lg:block">&nbsp;|&nbsp;</span>
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/privacy-policy"
              className="text-lg"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
