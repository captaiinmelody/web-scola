import { useEffect, useRef, useState } from "react";

const Section_2 = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationTriggered) {
          setIsVisible(true);
          setAnimationTriggered(true);
          observer.unobserve(sectionRef.current!); // Stop observing once animation is triggered
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust this value as needed
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animationTriggered]);

  return (
    <div
      ref={sectionRef}
      className={`text-black flex-center px-8  ${
        isVisible
          ? "opacity-100 transition-opacity duration-1000 ease-in"
          : "opacity-0"
      }`}
    >
      <div className="flex-center flex-col gap-10 w-5/6">
        <h1 className="text-center md:text-start md:pl-40 text-secondary text-xl md:text-4xl font-black w-2/3">
          Kenapa join SCOLA adalah sebuah PRIVILEGE?
        </h1>
        <div className="flex-center flex-row gap-32">
          <img
            src="assets/images/explore.png"
            className="w-1/5 hidden md:flex"
          />
          <div className="flex-center flex-col gap-5 md:gap-10 text-sm text-center md:text-3xl md:text-start">
            <p className="">
              SCOLA memberikan berbagai PRIVILEGE untuk menyampaikan lingkungan
              institusi sebagai ekosistem pendidikan secara lebih komprehensif.
              SCOLA memandang proses belajar secara lebih luas.
            </p>
            <p className="">
              SCOLA dirancang khusus untuk membantu institusi pendidikan
              mempromosikan sekolah atau kampus mereka kepada calon siswa.
              Dengan menggunakan SCOLA, institusi dapat dengan mudah menyediakan
              informasi yang diperlukan tentang program pendidikan, fasilitas,
              kurikulum, dan lingkungan yang mendukung bagi siswa dalam menempuh
              proses belajar mengajar
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_2;
