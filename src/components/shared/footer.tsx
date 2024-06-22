import { footer_menu } from "@/constants/footer-items";
import { Mail, MapPinIcon, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleClickFooterItem = (link: any) => {
    window.open(link, "_blank");
  };
  return (
    <div className="w-full h-full bg-gradient-to-r via-white from-gray-300 to-white text-black">
      <div className="wrapper h-full">
        <div className="flex md:flex md:flex-between w-full h-full">
          <div className="grid grid-cols-2 w-full gap-x-10 lg:flex-start lg:w-1/2 h-full lg:gap-20 pt-20 pb-16">
            {footer_menu.map((footer, index) => (
              <div
                key={index}
                className={`flex flex-col h-80 gap-y-6 ${
                  index == footer_menu.length - 1 ? `col-span-2` : ""
                }`}
              >
                <h3 className="text-xl font-bold ">{footer.title}</h3>
                <div>
                  {footer.items.map((item, index) => (
                    <div
                      key={index}
                      className={`flex text-start gap-2 w-full ${
                        item.icon !== null ? "pt-4" : ""
                      }`}
                    >
                      {item.icon !== null && (
                        <div>
                          {item.icon === "mail" ? (
                            <Mail />
                          ) : item.icon === "tlp" ? (
                            <Phone />
                          ) : (
                            <MapPinIcon />
                          )}
                        </div>
                      )}
                      <p
                        onClick={() => {
                          item.link !== null
                            ? handleClickFooterItem(item.link)
                            : null;
                        }}
                        className={`text-lg text-[#6F6C90] whitespace-pre-line ${
                          item.link !== null
                            ? "hover:cursor-pointer hover:underline hover:text-blue-600"
                            : ""
                        }`}
                      >
                        {item.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-200 w-full h-0.5"></div>
        <div className="flex flex-col md:flex-row md:justify-between w-full py-8">
          <p className="text-lg text-center pb-2 md:pb-0 text-[#6F6C90]">
            Copyright &copy; 2024 MARM LLC.{" "}
          </p>
          <div className="w-full flex-center md:w-1/2 md:flex-end">
            <p className="text-lg text-[#6F6C90]">All Rights Reserved</p>
            <span>&nbsp;|&nbsp;</span>
            <Link to="/" className="text-lg text-blue-600 underline">
              Terms and Conditions
            </Link>
            <span>&nbsp;|&nbsp;</span>
            <Link
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to="/privacy-policy"
              className="text-lg text-blue-600 underline"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
