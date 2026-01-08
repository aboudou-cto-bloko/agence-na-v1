import type { Metadata } from "next";
import { Anton, Manrope } from "next/font/google";
import { Footer } from "@/components/sections/footer";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";

const anton = Anton({
  variable: "--font-anton",
  weight: "400",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nasr & Aboudou | Web Design for Scottish SMEs",
  description: "Premium websites that generate clients, not compliments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        suppressHydrationWarning
        className={`${anton.variable} ${manrope.variable} antialiased`}
      >
        <SmoothScrollProvider>
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
