import { news } from "@/constants/news";
import { useState, useRef } from "react";
import Slider from "react-slick";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NewsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<Slider | null>(null); // Specify the type of sliderRef

  // const isMobile = useMediaQuery("(max-width: 1024px)"); // Change the max-width as needed
  const slidesToShow = 1;

  const settings = {
    dots: true, // Show pagination dots
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    initialSlide: 0,
    afterChange: (index: number) => setCurrentIndex(index % news.length),
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handleSlideClick = (index: number) => {
    setCurrentIndex(index % news.length);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  const trendingNews = news.filter((data) => data.isTrending);

  return (
    <div className="mt-8 relative overflow-hidden w-full pb-5">
      <Button
        className="absolute left-4 top-1/2 transform text-5xl px-0 py-8 -translate-y-1/2 rounded-full bg-transparent text-black z-10 hover:text-tertiary"
        onClick={handlePrev}
      >
        <span className="icon-[ri--arrow-left-wide-line]"></span>
      </Button>
      <Slider {...settings} ref={sliderRef} className={`w-full relative z-0`}>
        {trendingNews.map((article, index) => (
          <div
            key={index}
            className="px-4 py-24 w-full relative "
            onClick={() => handleSlideClick(index)}
          >
            <Link to={`/news/${article.id}`} className="w-full">
              <div
                className={`w-[150px] md:w-[500px] mx-10 min-h-64 relative text-wrap rounded-xl flex-center flex-col bg-white text-white ${
                  currentIndex === index ? "scale-125 md:mx-10" : ""
                }`}
              >
                <img
                  src={article.thumbnailUrl}
                  alt=""
                  className="object-fill w-full rounded-xl"
                />
                <div className="absolute bottom-0 bg-gradient-to-t from-gray-600 to-transparent rounded-xl w-full h-1/2"></div>
                <h3 className="flex-start text-[8px] md:text-lg font-semibold text-start w-full px-4 py-5 absolute bottom-0 z-10">
                  {article.title.length > 105
                    ? `${article.title.slice(0, 105)}...`
                    : article.title}
                </h3>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
      <Button
        className="absolute right-4 top-1/2 text-5xl px-0 py-8 -translate-y-1/2 rounded-full bg-transparent text-black z-10 hover:text-tertiary"
        onClick={handleNext}
      >
        <span className="icon-[ri--arrow-right-wide-line]"></span>
      </Button>
    </div>
  );
};

export default NewsCarousel;
