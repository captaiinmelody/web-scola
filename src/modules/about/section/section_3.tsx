import { useEffect, useRef, useState } from "react";
import Feature from "../components/feature";
import { Link } from "react-router-dom";

const Section_3 = () => {
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
    <div ref={sectionRef} className={`min-h-screen flex-center flex-col`}>
      <div className="min-h-4/5 w-full flexCol flex-center gap-10 md:gap-20 bg-primary rounded-t-[100px] px-4 py-12">
        <div
          className={`w-full flex-center flex-col gap-10 ${
            isVisible
              ? "opacity-100 transition-opacity duration-1000 ease-in"
              : "opacity-0"
          }`}
        >
          <h1 className="text-xl md:text-4xl font-bold text-secondary text-center">
            Ada apa saja sih di aplikasi SCOLA?
          </h1>
          <Feature />
          <div className="flex-center">
            <Link
              to="/features"
              className="bg-secondary py-2 px-4 rounded-full font-bold scale-75 md:scale-100 duration-300 transform hover:scale-110"
            >
              Lihat Selengkapnya
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_3;
