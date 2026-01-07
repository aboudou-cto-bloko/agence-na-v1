"use client";

import { useEffect, useState, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

interface UseScrambleTextOptions {
  text: string;
  speed?: number; // ms per iteration
  scrambleSpeed?: number; // iterations per character
  trigger?: boolean; // External trigger (for scroll animations)
}

export function useScrambleText({
  text,
  speed = 30,
  scrambleSpeed = 3,
  trigger = true,
}: UseScrambleTextOptions) {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const iterationRef = useRef(0);

  useEffect(() => {
    if (!trigger || isComplete) return;

    let interval: NodeJS.Timeout;
    const targetLength = text.length;

    interval = setInterval(() => {
      iterationRef.current++;
      const currentIteration = iterationRef.current;

      // Calculate how many characters should be "resolved"
      const resolvedCount = Math.floor(currentIteration / scrambleSpeed);

      if (resolvedCount >= targetLength) {
        setDisplayText(text);
        setIsComplete(true);
        clearInterval(interval);
        return;
      }

      // Build the display text
      let newText = "";

      for (let i = 0; i < targetLength; i++) {
        if (i < resolvedCount) {
          // Character is resolved
          newText += text[i];
        } else if (text[i] === " ") {
          // Preserve spaces
          newText += " ";
        } else {
          // Scrambled character
          newText += CHARS[Math.floor(Math.random() * CHARS.length)];
        }
      }

      setDisplayText(newText);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, scrambleSpeed, trigger, isComplete]);

  return displayText || text;
}
