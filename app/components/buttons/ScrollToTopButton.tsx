"use client"

import { useEffect, useState } from "react";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

const ScrollToTopButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      className={`z-50 fixed bottom-4 right-4 m-2 rounded-full text-yellow-500 transition-opacity duration-300 ${
        showScrollButton ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <BsFillArrowUpCircleFill size={25}/>
    </button>
  );
};

export default ScrollToTopButton;