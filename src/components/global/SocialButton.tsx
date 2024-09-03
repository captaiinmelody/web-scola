import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import MainModal from "./MainModal";

const SocialButton = ({
  link,
  icon,
  bgColor,
}: {
  link: string | null;
  icon: string;
  bgColor: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <MainModal
        isOpen={isOpen}
        onConfirm={handleCloseModal}
        onRequestClose={handleCloseModal}
        displayConfirmationButton={false}
      >
        <div className="flex items-center justify-center">
          <ul className="flex flex-col gap-4 text-center">
            <li className="hover:text-blue-500 hover:cursor-pointer hover:underline">
              privilege@scola.co.id
            </li>
            <li>eka@scola.co.id</li>
          </ul>
        </div>
      </MainModal>
      {link !== null ? (
        <Link
          to={link!}
          target="_blank"
          className={`w-8 h-8 lg:w-12 lg:h-12 relative ${bgColor} rounded-full flex-center cursor-pointer z-10`}
        >
          <Icon icon={icon} color="white" width={"75%"} />
        </Link>
      ) : (
        <div
          onClick={() => handleOpenModal()}
          className={`w-8 h-8 lg:w-12 lg:h-12 relative ${bgColor} rounded-full flex-center cursor-pointer z-10`}
        >
          <Icon icon={icon} color="white" width={"75%"} />
        </div>
      )}
    </>
  );
};

export default SocialButton;
