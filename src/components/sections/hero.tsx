"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeroProps {
  headline: string;
  subheadline: string;
  bodyText: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
}

export function Hero({
  headline,
  subheadline,
  bodyText,
  primaryCTA,
  secondaryCTA,
}: HeroProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center">
      <div className="container-max w-full py-20 md:py-32">
        {/* Grid Layout Z-Pattern */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT SIDE — Headline (Point focal principal) */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1
              className="text-display font-bold leading-[0.95] tracking-tight mb-8"
              style={{
                color: "#ffffff",
                WebkitTextStroke: "1px rgba(0, 0, 0, 0.2)",
                textShadow: `
                  0 2px 12px rgba(0, 0, 0, 0.9),
                  0 4px 24px rgba(0, 0, 0, 0.7),
                  0 8px 40px rgba(0, 0, 0, 0.5)
                `,
              }}
            >
              {headline}
            </h1>

            {/* Subheadline sous headline (hiérarchie) */}
            <motion.h2
              className="text-h2 font-medium text-white/90 max-w-xl"
              style={{
                textShadow: `0 2px 8px rgba(0, 0, 0, 0.7)`,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {subheadline}
            </motion.h2>
          </motion.div>

          {/* RIGHT SIDE — Body + CTAs (Bloc distinct) */}
          <motion.div
            className="lg:col-span-5 space-y-10"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Body text avec respiration */}
            <div className="space-y-6">
              <p
                className="text-body-lg leading-relaxed text-white/85"
                style={{
                  textShadow: `0 2px 6px rgba(0, 0, 0, 0.8)`,
                }}
              >
                {bodyText}
              </p>

              <p
                className="text-body leading-relaxed text-white/70"
                style={{
                  textShadow: `0 2px 6px rgba(0, 0, 0, 0.8)`,
                }}
              >
                Built for Scottish businesses tired of agencies that waste time
                and money.
              </p>
            </div>

            {/* CTAs — Clear action zone */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="primary"
                size="lg"
                asChild
                className="shadow-2xl"
              >
                <Link href={primaryCTA.href}>{primaryCTA.text}</Link>
              </Button>

              {secondaryCTA && (
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-white/40 text-white hover:bg-white/10 backdrop-blur-sm"
                  style={{
                    textShadow: "0 2px 4px rgba(0, 0, 0, 0.6)",
                  }}
                >
                  <Link href={secondaryCTA.href}>{secondaryCTA.text}</Link>
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
