import { MouseEventHandler } from "react";

const DownloadButton = ({
  leadingImg,
  title,
  subtitle,
  onClick,
}: {
  leadingImg: string;
  title: String;
  subtitle: string;
  onClick: MouseEventHandler;
}) => {
  return (
    <div
      onClick={onClick}
      className="flex-center bg-white border-4 gap-2 border-black px-6 py-1 rounded-xl hover:cursor-pointer"
    >
      <img src={leadingImg} alt="" width={50} height={50} />
      <div className="flex flex-col">
        <h2 className="text-md font-semibold">{title}</h2>
        <h2 className="text-3xl font-bold">{subtitle}</h2>
      </div>
    </div>
  );
};

export default DownloadButton;
