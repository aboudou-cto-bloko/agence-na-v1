"use client";

import { ReactNode, useEffect, useRef } from "react";

interface HeroLightWrapperProps {
  children: ReactNode;
  videoSrc?: string;
  playbackSpeed?: number; // 0.1 à 2.0
}

export function HeroLightWrapper({
  children,
  videoSrc = "/videos/light-rays.mp4",
  playbackSpeed = 0.8,
}: HeroLightWrapperProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const speed = playbackSpeed ?? 0.85;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = speed;
  }, [speed]);

  return (
    <div className="relative bg-gradient-to-b from-[#0a0a12] via-[#0f0f1a] to-[#0a0a12] overflow-hidden">
      <div className="relative" style={{ zIndex: 1 }}>
        {children}
      </div>

      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{
          filter: "blur(60px)",
          mixBlendMode: "screen",
          opacity: 0.7,
          zIndex: 20,
        }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}
