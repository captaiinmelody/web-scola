import React from "react";

const CarouselContent = ({ content }: { content: any }) => {
  return (
    <div
      className={` flex flex-col-reverse lg:flex-row w-full min-h-screen items-center justify-center lg:pl-32 ${content.background} bg-no-repeat bg-cover`}
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
};

export default CarouselContent;
