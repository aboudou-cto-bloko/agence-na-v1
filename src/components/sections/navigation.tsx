"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll quand menu ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Navigation Bar */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-transparent",
        )}
        style={{
          mixBlendMode: isScrolled ? "normal" : "difference",
        }}
      >
        <div className="container-max">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link
              href="/"
              className={cn(
                "text-h4 font-bold focus-ring transition-colors relative z-50",
                isScrolled ? "text-foreground" : "text-white",
                isMobileMenuOpen && "text-white",
              )}
              aria-label="Nasr & Aboudou Home"
              onClick={closeMenu}
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
                className={cn(
                  "transition-all",
                  !isScrolled && "border-white/20",
                )}
              >
                Book Call
              </Button>
            </div>

            {/* Mobile Menu Button — Animated Hamburger */}
            <button
              className="md:hidden p-2 focus-ring relative z-50"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={toggleMenu}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                {/* Top bar */}
                <motion.span
                  className={cn(
                    "w-full h-0.5 bg-current origin-center transition-colors",
                    isScrolled && !isMobileMenuOpen
                      ? "text-foreground"
                      : "text-white",
                  )}
                  animate={
                    isMobileMenuOpen
                      ? { rotate: 45, y: 9 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Middle bar */}
                <motion.span
                  className={cn(
                    "w-full h-0.5 bg-current transition-colors",
                    isScrolled && !isMobileMenuOpen
                      ? "text-foreground"
                      : "text-white",
                  )}
                  animate={
                    isMobileMenuOpen
                      ? { opacity: 0, x: -20 }
                      : { opacity: 1, x: 0 }
                  }
                  transition={{ duration: 0.2 }}
                />

                {/* Bottom bar */}
                <motion.span
                  className={cn(
                    "w-full h-0.5 bg-current origin-center transition-colors",
                    isScrolled && !isMobileMenuOpen
                      ? "text-foreground"
                      : "text-white",
                  )}
                  animate={
                    isMobileMenuOpen
                      ? { rotate: -45, y: -9 }
                      : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay — Animation Originale */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Backdrop avec effet de révélation circulaire */}
            <motion.div
              className="absolute inset-0 bg-background"
              variants={{
                closed: {
                  clipPath: "circle(0% at top right)",
                },
                open: {
                  clipPath: "circle(150% at top right)",
                },
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            />

            {/* Gradient overlay subtil */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-accent-primary/5 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            />

            {/* Menu Content */}
            <div className="relative h-full flex flex-col justify-center px-8">
              {/* Navigation Links */}
              <nav className="space-y-2">
                {[
                  { label: "Home", href: "/", num: "01" },
                  { label: "About", href: "/about", num: "02" },
                  { label: "Packages", href: "/#packages", num: "03" },
                ].map((link, index) => (
                  <motion.div
                    key={link.href}
                    variants={{
                      closed: {
                        opacity: 0,
                        x: -50,
                        rotateX: -15,
                      },
                      open: {
                        opacity: 1,
                        x: 0,
                        rotateX: 0,
                      },
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className="group flex items-baseline gap-4 py-4 border-b border-border/30"
                    >
                      <span className="text-label text-accent-primary font-mono">
                        {link.num}
                      </span>
                      <span className="text-h2 font-bold text-foreground group-hover:text-accent-primary transition-colors">
                        {link.label}
                      </span>
                      <motion.svg
                        className="w-6 h-6 ml-auto text-foreground/40 group-hover:text-accent-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        initial={{ x: -10, opacity: 0 }}
                        whileHover={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </motion.svg>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* CTA Button */}
              <motion.div
                className="mt-12"
                variants={{
                  closed: { opacity: 0, y: 20, scale: 0.9 },
                  open: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={closeMenu}
                >
                  Book Strategy Call
                </Button>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                className="mt-auto pt-12 text-center space-y-4"
                variants={{
                  closed: { opacity: 0 },
                  open: { opacity: 1 },
                }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <a
                  href="mailto:hello@example.com"
                  className="block text-body text-muted-foreground hover:text-foreground transition-colors"
                >
                  hello@example.com
                </a>
                <p className="text-body-sm text-muted-foreground/60">
                  Scotland, United Kingdom
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
