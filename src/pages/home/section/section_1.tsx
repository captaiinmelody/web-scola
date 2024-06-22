import ReactPlayer from "react-player";

const Section_1 = () => {
  return (
    <div className="py-12 pr-4 xl:py-0 xl:flex min-h-screen">
      <div className="w-full  flex-center">
        <div className="hidden md:flex-center">
          <ReactPlayer
            playing={true}
            url="assets/videos/user_scola_2.mp4"
            width={"60%"}
            height={"60%"}
            muted={true}
          />
        </div>
      </div>
      <div className="w-full flex-center flex-col gap-4">
        <div className="flex flex-col text-center">
          <h2 className="text-2xl lg:text-3xl xl:text-5xl pb-6 md:pb-8">
            It is Not A Social Media
          </h2>
          <h1 className="text-5xl pb-2 md:text-6xl lg:text-8xl">
            it’s <span className="text-[#B02F33]">scola</span>
          </h1>
          <h3 className="text-xl md:text-2xl lg:text-4xl font-bold">
            A Privilege to Enhance Your Life
          </h3>
        </div>
        <div className="pt-8 flex flex-col items-center justify-center gap-12 xl:gap-0 xl:flex-row xl:justify-evenly">
          <img
            src="assets/images/scola_apk_qr(1).png"
            className="w-3/5 lg:w-1/2 xl:w-1/3"
            alt=""
          />
          <img
            src="assets/images/scola_ios_qr(1).png"
            className="w-3/5 lg:w-1/2 xl:w-1/3"
            alt=""
          />
        </div>
        {/* <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex-center md:text-2xl lg:text-xl font-bold text-center">
              Download on&ensp;
              <img
                src="assets/images/logo_playstore.png"
                width={25}
                height={25}
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <img
              src="assets/images/scola_ios_qr.png"
              className="w-1/2 xl:w-3/5"
              alt=""
            />
            <div className="flex-center md:text-2xl lg:text-xl font-bold text-center">
              Download on&ensp;
              
            </div>
          </div> */}
        {/* <DownloadButton
            leadingImg="assets/images/logo_playstore.png"
            title={"GET IT ON"}
            subtitle="Google Play"
            onClick={onclick == null ? () => {} : onclick}
          />
          <DownloadButton
            leadingImg="assets/images/logo_apple.png"
            title={"Download on the"}
            subtitle="App Store"
            onClick={() => {
              window.location.href =
                "https://apps.apple.com/us/app/scola/id6478919038";
            }}
          /> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Section_1;
