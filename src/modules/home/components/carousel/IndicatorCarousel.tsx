import useMediaQuery from "@/hooks/useMediaQuery";
import { Icon } from "@iconify/react/dist/iconify.js";

const IndicatorCarousel = ({
  currentIndex,
  setCurrentIndex,
}: {
  currentIndex: number;
  setCurrentIndex: Function;
}) => {
  const index = [0, 1, 2, 3, 4];
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  return (
    <div
      className={`mt-4 flex w-fit justify-center items-center gap-2 absolute bottom-10 transition-all duration-300 ${
        !isLargeScreen && currentIndex === 4
          ? "opacity-0 translate-y-4"
          : "opacity-100 translate-y-0"
      }`}
    >
      <Icon
        icon="raphael:arrowleft"
        onClick={() => setCurrentIndex(currentIndex - 1)}
        className={`text-secondary transition-opacity duration-300 ${
          currentIndex === 0
            ? "opacity-0 translate-x-[-10px] pointer-events-none"
            : "opacity-100 cursor-pointer"
        }`}
      />
      {index.map((i) => (
        <button
          key={i}
          onClick={() => setCurrentIndex(i)}
          className={`h-2 w-2 rounded-full transition-colors ${
            currentIndex === i ? "bg-secondary" : "bg-gray-300"
          }`}
        />
      ))}
      <Icon
        icon="raphael:arrowright"
        onClick={() => setCurrentIndex(currentIndex + 1)}
        className={`text-secondary transition-opacity duration-300 ${
          currentIndex === 4
            ? "opacity-0 translate-x-[10px] pointer-events-none"
            : "opacity-100 cursor-pointer"
        }`}
      />
    </div>
  );
};

export default IndicatorCarousel;
