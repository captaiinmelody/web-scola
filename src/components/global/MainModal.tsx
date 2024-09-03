import React from "react";

interface MainModalProps {
  isOpen: boolean;
  onRequestClose?: () => void | null;
  onConfirm?: () => void | null;

  displayConfirmationButton?: boolean;
  children: React.ReactNode;
}

const MainModal: React.FC<MainModalProps> = ({
  isOpen,
  onRequestClose,
  onConfirm,

  displayConfirmationButton = true,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
      <div className="bg-white rounded-lg p-6 shadow-lg w-80 md:w-96">
        {children}
        {displayConfirmationButton && (
          <div className="flex justify-end gap-4">
            <button
              onClick={onConfirm}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Yes
            </button>
            <button
              onClick={onRequestClose}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
            >
              No
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainModal;
