import { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

export function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  });

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
   
  return (
    <>
      {backToTopButton && (
        <button
          className="fixed bottom-10 right-10 text-2xl z-20"
          onClick={() => scrollUp()}
        >
          <FaArrowAltCircleUp 
          size={40}
          className="text-pagani-orange border-2 border-pagani-black rounded-full"
          />
        </button>
      )}
    </>
  );
}
