import React, { useState, useEffect } from "react";
import { Text } from "react-native";

type TypingTextProps = {
  text: string;
  speed?: number;
  className?: string;
};

export function TypingText({
  text,
  speed = 100,
  className = "",
}: TypingTextProps) {
  const [displayed, setDisplayed] = useState<string>("");

  useEffect(() => {
     
    let index = 0;

     
    setDisplayed("");

    const interval = setInterval(() => {
      index++;
      if (index <= text.length) {
         
        setDisplayed(text.slice(0, index));
      } else {
         
        clearInterval(interval);
      }
    }, speed);

    // cleanup
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <Text className={`font-fira text-4xl text-white ${className}`}>
      {displayed}
      <Text className="text-white">|</Text>
    </Text>
  );
}