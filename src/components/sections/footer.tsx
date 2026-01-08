"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="relative bg-background py-12 md:py-20">
      <div className="container-max max-w-3xl px-4">
        {/* Carte blanche animée */}
        <motion.div
          className="bg-white text-black rounded-card p-8 md:p-16 space-y-8 md:space-y-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
          }}
        >
          {/* Email Principal */}
          <motion.a
            href="mailto:hello@example.com"
            className="text-h3 md:text-h2 font-bold text-black hover:text-accent-primary transition-colors block"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            hello@example.com
          </motion.a>

          {/* Navigation Simple */}
          <motion.nav
            className="flex flex-wrap justify-center gap-4 md:gap-8 text-body text-black/60"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link
              href="/"
              className="hover:text-black transition-colors px-2 py-1"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-black transition-colors px-2 py-1"
            >
              About
            </Link>
            <Link
              href="/#packages"
              className="hover:text-black transition-colors px-2 py-1"
            >
              Packages
            </Link>
          </motion.nav>

          {/* Copyright */}
          <motion.p
            className="text-body-sm text-black/40 pt-6 md:pt-8 border-t border-black/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            © 2025 Nasr & Aboudou
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}
