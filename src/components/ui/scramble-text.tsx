"use client";

import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useScrambleText } from "@/hooks/use-scramble-text";
import { cn } from "@/lib/utils";

interface ScrambleTextProps {
  text: string;
  speed?: number;
  scrambleSpeed?: number;
  triggerOnView?: boolean;
  delay?: number; // ← Ajouté
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
}

export function ScrambleText({
  text,
  speed = 30,
  scrambleSpeed = 3,
  triggerOnView = true,
  delay = 0, // ← Ajouté avec valeur par défaut
  as: Component = "span",
  className,
}: ScrambleTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [shouldStart, setShouldStart] = useState(false);

  useEffect(() => {
    if (!triggerOnView || isInView) {
      if (delay > 0) {
        const timer = setTimeout(() => {
          setShouldStart(true);
        }, delay);
        return () => clearTimeout(timer);
      } else {
        setShouldStart(true);
      }
    }
  }, [isInView, triggerOnView, delay]);

  const displayText = useScrambleText({
    text,
    speed,
    scrambleSpeed,
    trigger: triggerOnView ? shouldStart : shouldStart,
  });

  return (
    <Component ref={ref} className={cn(className)}>
      {displayText}
    </Component>
  );
}
