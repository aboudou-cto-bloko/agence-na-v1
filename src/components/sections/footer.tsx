"use client";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-background py-20">
      <div className="container-max max-w-3xl">
        {/* Carte blanche centrée */}
        <div className="bg-white text-black rounded-card p-16 space-y-12 text-center">
          {/* Email Principal */}
          <a
            href="mailto:hello@example.com"
            className="text-h2 font-bold text-black hover:text-accent-primary transition-colors block"
          >
            hello@example.com
          </a>

          {/* Navigation Simple */}
          <nav className="flex justify-center gap-8 text-body text-black/60">
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-black transition-colors">
              About
            </Link>
            <Link
              href="/#packages"
              className="hover:text-black transition-colors"
            >
              Packages
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-body-sm text-black/40 pt-8 border-t border-black/10">
            © 2025 Nasr & Aboudou
          </p>
        </div>
      </div>
    </footer>
  );
}
