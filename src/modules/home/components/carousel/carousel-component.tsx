import Header from "@/components/shared/header";
import { Icon } from "@iconify/react/dist/iconify.js";
import React, { useMemo, useState, useEffect } from "react";

const CarouselContent = ({
  content,
  isHidden: isDisplayed,
}: {
  content: any;
  isHidden: boolean;
}) => (
  <div
    className={`${
      isDisplayed ? "flex" : "hidden"
    } flex flex-col-reverse lg:flex-row w-full min-h-screen items-center justify-center lg:pl-32 ${
      content.background
    } bg-no-repeat bg-cover`}
  >
    <div className="flex flex-col justify-center items-center lg:items-end w-2/3 text-white pb-72 lg:pb-0">
      <div className="flex flex-col justify-center items-center lg:items-start">
        <p
          className={`text-[48px] md:text-[96px] lg:text-[140px] font-comforta text-secondary`}
        >
          {content.title}
        </p>
        <br />
        <p className="text-[14px] md:text-[20px] lg:text-[24px] text-center lg:text-left">
          {content.description}
        </p>
      </div>
    </div>
    <div className="flex justify-center items-start w-2/3">
      {/* <img
        src={content.imgSrc}
        className="bg-white rounded-full p-1 w-3/4"
        alt=""
      /> */}
    </div>
  </div>
);

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = 4;
  const isFirstSlide = currentIndex === 0;
  const isLastSlide = currentIndex === totalSlides - 1;

  useEffect(() => {}, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  const slideWidth = 100 / totalSlides;

  const slideButtons = useMemo(() => {
    return Array.from({ length: totalSlides }).map((_, index) =>
      currentIndex === index ? (
        <div className="flex-center bg-gray-300 rounded-full gap-1 px-4 py-1"></div>
      ) : (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`w-2 h-2 rounded-full bg-gray-300`}
        ></button>
      )
    );
  }, [currentIndex, totalSlides]);
  const carouselContents = [
    {
      title: "scola",
      titleSize: "[60px] md:text-[96px] lg:text-[140px]",
      description: (
        <>
          Scola merupakan platform berbasis komunitas yang memberikan kemudahan
          interaksi antara
          <strong> calon siswa </strong> dan
          <strong> institusi pendidikan </strong> secara efisien dan efektif.
        </>
      ),
      imgSrc: "/assets/images/carousel-1.png",
      background:
        "bg-[url('/assets/images/bg-m-2.png')] md:bg-[url('/assets/images/bg-new-2.png')]",
    },
    {
      title: "Partner",
      titleSize: "[48px] md:text-[96px] lg:text-[140px]",
      description: (
        <>
          Institusi pendidikan sebagai
          <strong> "Partner" </strong>
          dan memberikan kemudahan dalam menjangkau calon siswa secara efektif,
          efisien dan terukur.
        </>
      ),
      imgSrc: "/assets/images/carousel-2.png",
      background:
        "bg-[url('/assets/images/bg-m-3.png')] md:bg-[url('/assets/images/bg-new-3.png')]",
    },
    {
      title: "User",
      titleSize: "[48px] md:text-[96px] lg:text-[140px]",
      description: (
        <>
          <strong> "User" </strong> mendapatkan kemudahan dalam mendapatkan
          informasi, berinteraksi, memilih dan mendaftar pada institusi
          pendidikan yang paling tepat secara efektif dan efisien.
        </>
      ),
      imgSrc: "/assets/images/carousel-3.png",
      background:
        "bg-[url('/assets/images/bg-m-4.png')] md:bg-[url('/assets/images/bg-new-4.png')]",
    },
  ];

  return (
    <div className="relative flex overflow-hidden">
      <Header />
      <div
        style={{
          transform: `translateX(-${currentIndex * slideWidth}%)`,
          width: `${totalSlides * 100}%`,
        }}
        className={`${
          currentIndex != 0 ? "hidden" : "flex"
        } flex-col transition-transform duration-500 ease-in-out lg:gap-0 lg:flex-row w-full min-h-screen items-center justify-center bg-[url('/assets/images/bg-m-1.png')] md:bg-[url('/assets/images/bg-new-1(1).png')] bg-cover bg-no-repeat bg-center`}
      >
        <div className="flex items-center justify-center lg:justify-end w-full lg:w-1/2 text-white pb-80 md:pb-0">
          <div className="flex flex-col justify-center items-center lg:items-start">
            <p className="text-[14px] md:text-[22px] lg:text-[36px]">
              It is Not A Social Media
            </p>
            <p className="flex text-[52px] md:text-[80px] lg:text-[124px] font-comforta">
              it's <span className="text-secondary">&nbsp;scola</span>
            </p>
            <p className="flex text-[14px] md:text-[22px] lg:text-[36px] font-medium text-center lg:text-left">
              A Privilege
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-2/3 lg:w-1/2 pt-10">
          {/* <img
            src="/assets/images/hp-mobile.png"
            className={`${getImageWidthClass()}`}
            alt=""
          /> */}
        </div>
      </div>
      {carouselContents.map((content, i) => (
        <CarouselContent
          key={i}
          content={content}
          isHidden={currentIndex === i + 1}
        />
      ))}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 items-center justify-center">
        <button
          onClick={prevSlide}
          className={`w-4 h-4  bg-secondary rounded-full items-center justify-center ${
            isFirstSlide ? "hidden" : "flex"
          }`}
        >
          {/* <p className="text-primary text-xs">Prev</p> */}
          <Icon
            icon="material-symbols:arrow-back-ios-new"
            className="text-primary text-[10px] p-0.5"
          />
        </button>
        {slideButtons}
        <button
          onClick={nextSlide}
          className={`w-4 h-4 bg-secondary rounded-full items-center justify-center ${
            isLastSlide ? "hidden" : "flex"
          }`}
        >
          {/* <p className="text-primary text-xs">Next</p> */}
          <Icon
            icon="material-symbols:arrow-forward-ios"
            // fontSize={"24"}
            className="text-primary text-[10px] p-0.5"
          />
        </button>
      </div>
    </div>
  );
};

export default CarouselComponent;
