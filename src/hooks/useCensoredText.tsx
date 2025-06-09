
import { useState, useEffect } from "react";

interface UseCensoredTextOptions {
  originalText: string;
  censorChars?: string[];
  animationSpeed?: number;
}

export const useCensoredText = ({ 
  originalText, 
  censorChars = ['*', '#', '@', '!', '$'],
  animationSpeed = 200 
}: UseCensoredTextOptions) => {
  const [censoredText, setCensoredText] = useState('');

  useEffect(() => {
    const generateCensoredText = () => {
      return originalText
        .split('')
        .map(() => censorChars[Math.floor(Math.random() * censorChars.length)])
        .join('');
    };

    const interval = setInterval(() => {
      setCensoredText(generateCensoredText());
    }, animationSpeed);

    // Initial generation
    setCensoredText(generateCensoredText());

    return () => clearInterval(interval);
  }, [originalText, censorChars, animationSpeed]);

  return censoredText;
};
