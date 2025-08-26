"use client";

import React, { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 50,
  delay = 0,
}) => {
  const [displayText, setDisplayText] = useState<string>("");
  const [isComplete, setIsComplete] = useState<boolean>(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let timeoutId: NodeJS.Timeout;

    const startTyping = (): void => {
      let index = 0;
      timer = setInterval(() => {
        if (index < text.length) {
          setDisplayText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(timer);
          setIsComplete(true);
        }
      }, speed);
    };

    if (delay > 0) {
      timeoutId = setTimeout(startTyping, delay);
    } else {
      startTyping();
    }

    return () => {
      if (timer) clearInterval(timer);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [text, speed, delay]);

  return (
    <span className="inline-block">
      {displayText}
      {!isComplete && (
        <span className="animate-pulse text-blue-500 ml-1">|</span>
      )}
    </span>
  );
};

export default TypewriterText;
