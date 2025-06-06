
import { useState, useEffect } from "react";

interface AnimatedTextProps {
  words: string[];
  className?: string;
  speed?: number;
}

const AnimatedText = ({ words, className = "", speed = 2000 }: AnimatedTextProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsVisible(true);
      }, 300);
    }, speed);

    return () => clearInterval(interval);
  }, [words, speed]);

  return (
    <span
      className={`inline-block transition-all duration-300 ${
        isVisible ? "opacity-100 transform-none" : "opacity-0 -translate-y-2"
      } ${className}`}
    >
      {words[currentIndex]}
    </span>
  );
};

export default AnimatedText;
