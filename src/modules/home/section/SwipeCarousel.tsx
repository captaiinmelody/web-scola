import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import StartCarousel from "../components/carousel/StartCarousel";
import CenterCarousel from "../components/carousel/CenterCarousel";
import EndCarousel from "../components/carousel/EndCarousel";
import IndicatorCarousel from "../components/carousel/IndicatorCarousel";

// const ONE_SECOND = 1000;
// const AUTO_DELAY = ONE_SECOND * 5;
const DRAG_BUFFER = 5;

const SPRING_OPTIONS = {
  type: "tween",
  mass: 5,
  stiffness: 400,
  damping: 50,
};

export const SwipeCarousel = ({ isAutoSwipe }: { isAutoSwipe: boolean }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const dragX = useMotionValue(0);
  // const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // if (isAutoSwipe) {
    //   // Clear any existing interval
    //   if (intervalRef.current) {
    //     clearInterval(intervalRef.current);
    //   }
    //   if (currentIndex < 4) {
    //     intervalRef.current = setInterval(() => {
    //       const x = dragX.get();
    //       if (x === 0) {
    //         setCurrentIndex((pv) => {
    //           if (pv === 4) {
    //             return 0;
    //           }
    //           return pv + 1;
    //         });
    //       }
    //     }, AUTO_DELAY);
    //   }
    // } else if (intervalRef.current) {
    //   clearInterval(intervalRef.current);
    // }
    // return () => {
    //   if (intervalRef.current) {
    //     clearInterval(intervalRef.current);
    //   }
    // };
  }, [isAutoSwipe, currentIndex]);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && currentIndex < 4) {
      setCurrentIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && currentIndex > 0) {
      setCurrentIndex((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden flex items-center justify-center">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${currentIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing min-h-screen relative"
      >
        <CarouselContent
          index={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
      </motion.div>

      <IndicatorCarousel
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
      {/* <GradientEdgesCarousel /> */}
    </div>
  );
};

const CarouselContent = ({
  index,
  setCurrentIndex,
}: {
  index: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <>
      <StartCarousel
        setCurrentIndex={setCurrentIndex}
        index={index}
        transition={SPRING_OPTIONS}
      />
      <CenterCarousel
        setCurrentIndex={setCurrentIndex}
        index={index}
        transition={SPRING_OPTIONS}
      />
      <EndCarousel index={index} transition={SPRING_OPTIONS} />
    </>
  );
};
