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
      <div className="container-max w-full py-section">
        {/* Layout en deux colonnes */}
        <div className="split-layout">
          {/* COLONNE GAUCHE — Titre et sous-titre */}
          <motion.div
            className="space-y-component"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {/* Titre principal */}
            <motion.h1
              className="text-h1 text-balance"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
            >
              {headline}
            </motion.h1>

            {/* Sous-titre */}
            <motion.h2
              className="text-h3 text-gray-500 text-pretty max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {subheadline}
            </motion.h2>
          </motion.div>

          {/* COLONNE DROITE — Texte et CTAs */}
          <motion.div
            className="space-y-component-lg"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          >
            {/* Texte de description */}
            <div className="space-y-6">
              <p className="text-body-lg text-shadow-white text-pretty leading-relaxed">
                {bodyText}
              </p>

              {/* Liste des spécialités */}
              <ul className="grid grid-cols-2 gap-4 pt-4">
                {["Web Development", "Brand Identity", "SEO Strategy"].map(
                  (item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                    >
                      <div className="w-2 h-2 bg-accent-primary rounded-full" />
                      <span className="text-body-sm text-white">{item}</span>
                    </motion.li>
                  ),
                )}
              </ul>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button
                variant="primary"
                size="lg"
                asChild
                className="shadow-lg hover-lift"
              >
                <Link href={primaryCTA.href}>{primaryCTA.text}</Link>
              </Button>

              {secondaryCTA && (
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-gray-300 hover:border-accent-primary transition-base"
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
