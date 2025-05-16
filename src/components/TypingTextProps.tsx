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
    // índice de quantos caracteres já foram mostrados
    let index = 0;

    // antes de tudo, zera a tela
    setDisplayed("");

    const interval = setInterval(() => {
      index++;
      if (index <= text.length) {
        // pega sempre os primeiros `index` caracteres de `text`
        setDisplayed(text.slice(0, index));
      } else {
        // quando já mostrou toda a palavra, para o intervalo
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
