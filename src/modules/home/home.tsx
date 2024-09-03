import "./styles/button-play-store.css";
import "./styles/carousel.css";
import "./styles/contact-button.css";
import "./styles/fade.css";
// import HeroSection from "./section/carousel-section";
import { SwipeCarousel } from "./section/SwipeCarousel";
import { useState, useEffect } from "react";
import Popup from "./components/Popup";

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isAutoSwipe, setIsAutoSwipe] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPopupOpen(true);
    }, 500);

    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isPopupOpen) {
      setIsAutoSwipe(false);
    } else {
      setIsAutoSwipe(true);
    }
  }, [isPopupOpen]);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <main className="w-full">
      <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
      <SwipeCarousel isAutoSwipe={isAutoSwipe} />
    </main>
  );
}
