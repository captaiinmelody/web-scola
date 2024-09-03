import { useEffect, useRef, useState } from "react";
import Point from "../components/point";

const Section_4 = () => {
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
      className={`text-black flex-center px-8 bg-white ${
        isVisible
          ? "opacity-100 transition-opacity duration-1000 ease-in"
          : "opacity-0"
      }`}
    >
      <div className="flex-center flex-col gap-10 md:w-5/6">
        <h1 className="text-center text-secondary text-xl md:text-4xl font-black w-2/3">
          Pakai aplikasi SCOLA banyak untungnya loh!
        </h1>
        <div className="flex flex-row gap-32 w-full">
          <div className="flex-center flex-col gap-5 md:gap-10 w-full">
            <Point
              color="border-yellow-500 bg-yellow-400"
              point="1"
              description="Institusi dapat menggunakan aplikasi SCOLA sebagai salah satu channel pendaftaran siswa baru dan promosi"
            />
            <Point
              color="border-green-500 bg-green-400"
              point="2"
              description="Bahwa dengan penggunaan aplikasi ini, institusi akan mendapatkan fasilitas berupa penayangan video iklan secara gratis selama 3 bulan (termasuk semua platform media sosial SCOLA). Materi video iklan disediakan oleh institusi"
            />
            <Point
              color="border-red-500 bg-red-400"
              point="3"
              description="Bahwa PT Mukti Aji Rejeki Mbanyumili berkewajiban mengelola SCOLA baik dari sisi teknis maupun komersial sehingga kerjasama ini dapat memberikan manfaat yang optimal pada institusi."
            />
          </div>
          <img
            src="assets/images/splash.png"
            className="w-1/5 hidden md:flex"
          />
        </div>
      </div>
    </div>
  );
};

export default Section_4;
