"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent",
      )}
      style={{
        // Mix-blend-mode pour contraste automatique
        mixBlendMode: isScrolled ? "normal" : "difference",
      }}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              "text-h4 font-bold focus-ring transition-colors",
              isScrolled ? "text-foreground" : "text-white",
            )}
            aria-label="Nasr & Aboudou Home"
          >
            N&A
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/about"
              className={cn(
                "link-interactive text-body font-medium transition-colors",
                isScrolled ? "text-foreground" : "text-white",
              )}
            >
              About
            </Link>
            <Button
              variant="primary"
              size="sm"
              className={cn("transition-all", !isScrolled && "border-white/20")}
            >
              Book Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 focus-ring" aria-label="Open menu">
            <svg
              className={cn(
                "w-6 h-6 transition-colors",
                isScrolled ? "text-foreground" : "text-white",
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
