import { useState, useEffect } from "react";

const About = () => {
  const [bgClass, setBgClass] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 400) {
        setBgClass("bg-about-page");
      } else {
        setBgClass("bg-about-page-mobile bg-cover");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`text-white min-h-screen font-serif flex flex-col ${bgClass} bg-cover bg-center bg-fixed bg-no-repeat`}
    >
      <div className="wrapper">
        <div className="flex items-center justify-center pt-16 md:pt-24">
          <h1 className="whitespace-pre-line text-black text-justify text-base md:text-3xl font-semibold px-4 md:px-24">
            {
              "Kami menghadirkan scola sebagai sarana interaksi yang lebih hangat antara institusi pendidikan dan calon siswa. \n\nSebagai platform pencarian sekolah terbaik versi calon siswa, Scola hadir lebih dekat, mudah dan menyenangkan."
            }
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
