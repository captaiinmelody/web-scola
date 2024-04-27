import { quotes } from "@/constants/quotes";
import { useEffect, useState } from "react";

const Quotes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  useEffect(() => {
    const updateQuoteIndex = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    };

    const interval = setInterval(updateQuoteIndex, 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Apply fade-out effect to current quote
    const currentQuoteElement = document.getElementById("currentQuote");
    if (currentQuoteElement) {
      currentQuoteElement.classList.add("fade-out");
      setTimeout(() => {
        // Change the quote after the fade-out animation completes
        setCurrentQuote(quotes[currentIndex]);
      }, 500); // Adjust timing based on transition duration in CSS
    }
  }, [currentIndex]);

  useEffect(() => {
    // Apply fade-in effect to new quote
    const newQuoteElement = document.getElementById("currentQuote");
    if (newQuoteElement) {
      newQuoteElement.classList.remove("fade-out");
      newQuoteElement.classList.add("fade-in");
      setTimeout(() => {
        // Remove fade-in class after the fade-in animation completes
        newQuoteElement.classList.remove("fade-in");
      }, 500); // Adjust timing based on transition duration in CSS
    }
  }, [currentQuote]);

  const isEnglishQuote = (quote: string) => {
    return /^[a-zA-Z\s]+$/.test(quote);
  };
  return (
    <h3
      className={`wrapper font-semibold text-2xl italic md:text-3xl text-center ${
        isEnglishQuote(currentQuote) ? "italic" : ""
      }`}
      id="currentQuote"
    >
      {currentQuote}
    </h3>
  );
};

export default Quotes;
