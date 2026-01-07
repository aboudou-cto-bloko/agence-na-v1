"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function useLenisScroll(callback?: (lenis: Lenis) => void) {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      if (callback) callback(lenis);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [callback]);
}
