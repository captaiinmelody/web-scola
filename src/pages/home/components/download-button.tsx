import DownloadButtonItem from "./download-button-item";
const DownloadButton = () => {
  return (
    <div className="flex items-center justify-center pt-10 gap-10 font-sans flex-col md:flex-row">
      <DownloadButtonItem
        topText="Download on the"
        botText="Google play"
        icon="icon-[ri--google-play-fill]"
      />
      <DownloadButtonItem
        topText="Download on the"
        botText="App Store"
        icon="icon-[ri--apple-fill]"
      />
    </div>
  );
};

export default DownloadButton;
