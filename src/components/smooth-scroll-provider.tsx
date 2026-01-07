"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Désactiver sur mobile
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) return;

    const lenis = new Lenis({
      duration: 1.8, // Ultra slow (1.8s pour décélérer)
      easing: (t) => {
        // easeOutQuint — très doux, décélération progressive
        return 1 - Math.pow(1 - t, 5);
      },
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.7, // Scroll réduit (70% de la vitesse normale)
      touchMultiplier: 1.5,
      infinite: false,
      lerp: 0.08, // Interpolation très douce (0.08 = chill)
    });

    // RAF loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
