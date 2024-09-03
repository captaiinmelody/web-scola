import { useState, useEffect } from "react";

const Section_1 = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="bg-white flex-center font-univers bg-primary">
      <div className="w-full relative">
        {/* <Wave /> */}

        <div
          className={`wrapper p-4 min-h-screen flex-center relative ${
            loaded
              ? "opacity-100 transition-opacity duration-1000 ease-in"
              : "opacity-0"
          }`}
        >
          <div className="flexCol text-center md:text-start md:pl-20 text-tertiary">
            <div className="flex-center md:flex-start">
              <img src="/assets/images/logo.png" className="w-1/2 md:w-1/3" />
            </div>
            <h1 className="text-[50px] md:text-[60px] lg:text-[70px] font-black">
              S C O L A
            </h1>
            <p className="text-[30px] md:text-[40px] lg:text-[50px]">
              A &ensp;P R I V I L E G E
            </p>
          </div>
          <div className="w-1/2 hidden md:flex-center">
            <img
              src="/assets/images/hero-about.png"
              className={`w-1/2 ${
                loaded
                  ? "opacity-100 transition-opacity duration-1000 ease-in"
                  : "opacity-0"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_1;
