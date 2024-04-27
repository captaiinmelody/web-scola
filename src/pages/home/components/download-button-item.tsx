const DownloadButtonItem = ({
  topText,
  botText,
  icon,
}: {
  topText: string;
  botText: string;
  icon: string;
}) => {
  return (
    <button className="appstore-button  text-white">
      <div className="flex flex-row gap-2 text-start">
        <span className={`${icon} text-5xl`}></span>
        <div className="flexCol">
          <div className="text-xs">{topText}</div>
          <div className="text-xl">{botText}</div>
        </div>
      </div>
    </button>
  );
};

export default DownloadButtonItem;
