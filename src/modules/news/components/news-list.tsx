import { useState, useEffect } from "react";
import NewsItem from "./news-item";
import { Button } from "@/components/ui/button";

const NewsList = ({
  news,
  className,
  selectedNewsId,
}: {
  news: any[];
  className: string;
  selectedNewsId?: string;
}) => {
  const [itemsPerPage, setItemsPerPage] = useState(6); // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);
  const [transitioning, setTransitioning] = useState(false); // State to track transition status

  const filteredNews = news.filter((item) => item.id !== selectedNewsId);

  useEffect(() => {
    const handleResize = () => {
      // Adjust itemsPerPage based on screen width
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        setItemsPerPage(4);
      } else {
        setItemsPerPage(6);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set initial itemsPerPage value
    handleResize();

    // Remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(news.length / itemsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setTransitioning(true); // Start transition
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setTransitioning(false); // End transition
      }, 300); // Adjust the duration to match the transition duration in CSS
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setTransitioning(true); // Start transition
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setTransitioning(false); // End transition
      }, 300); // Adjust the duration to match the transition duration in CSS
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div className="z-10 flex-center flex-col">
      <div className={`grid grid-cols-1 gap-10 ${className}`}>
        {filteredNews
          .slice(startIndex, endIndex)
          .map((data: any, index: number) => (
            <NewsItem
              key={index}
              title={data.title}
              datePublish={data.datePublish}
              img_url={data.thumbnailUrl}
              id={data.id}
              className={
                transitioning
                  ? "transition-opacity duration-300 opacity-0"
                  : "transition-opacity duration-300 opacity-100"
              }
            />
          ))}
      </div>

      <div className="flex justify-end gap-5 mt-4 ">
        {currentPage > 1 && (
          <Button
            className="bg-secondary hover:bg-blue-800 w-20 px-4 py-2 rounded mr-2 transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handlePrevPage}
            disabled={transitioning}
          >
            Previous
          </Button>
        )}
        {currentPage < totalPages && (
          <Button
            className="bg-secondary hover:bg-blue-800 w-20 px-4 py-2 rounded transition duration-300 ease-in-out transform hover:scale-105"
            onClick={handleNextPage}
            disabled={transitioning}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default NewsList;
