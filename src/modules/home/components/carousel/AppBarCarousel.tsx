import { Icon } from "@iconify/react/dist/iconify.js";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const AppBarCarousel = ({
  setCurrentIndex,
}: {
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { t } = useTranslation();

  const handleLanguageChange = (e: string) => {
    const newLang = e;
    localStorage.setItem("preferredLanguage", newLang);
    window.location.reload();
  };
  return (
    <div className="absolute top-4 right-2 md:top-8 md:right-8 text-black py-3 px-4 flex flex-col items-center justify-end gap-3 md:gap-5">
      <div className="flex gap-4">
        <Link to="/">
          <img
            src="/assets/images/logo_text.png"
            className="w-[100px] md:w-[150px]"
            alt=""
          />
        </Link>
        <div className="dropdown dropdown-hover dropdown-end rounded-none ">
          <Icon
            tabIndex={0}
            role="button"
            icon={`${
              localStorage.getItem("preferredLanguage") == "id"
                ? "emojione-v1:flag-for-indonesia"
                : "emojione-v1:flag-for-united-kingdom"
            }`}
            className="text-[15px] md:text-[18px]"
          />
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-white rounded-box z-[1] w-52 p-2 shadow"
          >
            <li
              role="button"
              onClick={() =>
                localStorage.getItem("preferredLanguage") != "en" &&
                handleLanguageChange("en")
              }
            >
              <a>English</a>
            </li>
            <li
              role="button"
              onClick={() =>
                localStorage.getItem("preferredLanguage") != "id" &&
                handleLanguageChange("id")
              }
            >
              <a>Bahasa Indonesia</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full flex items-center justify-end gap-2 text-xs md:text-base">
        <div
          onClick={() => setCurrentIndex(4)}
          className="hover:cursor-pointer"
        >
          {t("contact_us")}
        </div>
        <Link to={"https://wa.me/+6282231063405"} target="_blank">
          <Icon icon="logos:whatsapp-icon" className="text-[16px]" />
        </Link>
        <Link to={"mailto:privilege@scola.co.id"}>
          <Icon icon="skill-icons:gmail-light" className="text-[16px]" />
        </Link>
      </div>
    </div>
  );
};

export default AppBarCarousel;
