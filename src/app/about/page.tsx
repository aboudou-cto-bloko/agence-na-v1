"use client";

import { Navigation } from "@/components/sections/navigation";
import { Button } from "@/components/ui/button";
import { ScrambleText } from "@/components/ui/scramble-text";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-section">
          <div className="container-max max-w-5xl">
            {/* Header */}
            <div className="mb-section-sm">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <ScrambleText
                  text="Why We Exist"
                  as="h1"
                  className="text-label text-accent-primary mb-8 leading-none"
                  triggerOnView={false}
                  speed={6}
                  scrambleSpeed={4}
                />
              </motion.div>

              <motion.div
                className="mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <ScrambleText
                  text="We exist to turn websites into measurable business assets."
                  as="p"
                  className="text-h2 text-shadow-white mb-6 max-w-2xl"
                  triggerOnView={false}
                  speed={6}
                  scrambleSpeed={4}
                  delay={400}
                />
              </motion.div>
            </div>

            {/* Content Grid */}
            <div className="split-layout">
              {/* Left — Narrative */}
              <motion.div
                className="space-y-component"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="space-y-6">
                  <h2 className="text-h3">The Problem</h2>
                  <p className="text-body-lg text-gray-500 leading-relaxed">
                    Scottish businesses deserve better than bloated agencies
                    that charge £5K for templates or cheap freelancers who
                    vanish after launch.
                  </p>
                </div>

                <div className="space-y-6">
                  <h2 className="text-h3">Our Approach</h2>
                  <p className="text-body-lg text-gray-500 leading-relaxed">
                    We combine deep local market knowledge with
                    international-grade technical execution. Small by choice.
                    Selective by design.
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <p className="text-h4 text-accent-primary">
                    Most agencies sell websites. We build revenue systems.
                  </p>
                </div>
              </motion.div>

              {/* Right — Contact */}
              <motion.div
                className="space-y-component"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="space-y-8 lg:sticky lg:top-32">
                  {/* Contact Info */}
                  <div className="space-y-8">
                    <h3 className="text-h3">Get In Touch</h3>

                    <div className="space-y-6">
                      <div>
                        <p className="text-label text-gray-400 mb-2">Email</p>
                        <a
                          href="mailto:hello@example.com"
                          className="text-body-lg text-foreground hover:text-accent-primary transition-colors"
                        >
                          hello@example.com
                        </a>
                      </div>

                      <div>
                        <p className="text-label text-gray-400 mb-2">
                          Location
                        </p>
                        <p className="text-body">Scotland, United Kingdom</p>
                      </div>

                      <div>
                        <p className="text-label text-gray-400 mb-2">
                          Response Time
                        </p>
                        <p className="text-body">Within 24 hours</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-8 border-t border-gray-200 space-y-4">
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full"
                      asChild
                    >
                      <a href="mailto:hello@example.com">Book Strategy Call</a>
                    </Button>

                    <div className="flex flex-col gap-3 text-body-sm text-gray-500">
                      <Link
                        href="/#packages"
                        className="hover:text-foreground transition-colors"
                      >
                        View Pricing →
                      </Link>
                      <Link
                        href="/"
                        className="hover:text-foreground transition-colors"
                      >
                        Back to Home →
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section — Card centrale contrastée */}
        <section className="relative py-section bg-gray-50 dark:bg-gray-900/30">
          <div className="container-max max-w-4xl">
            {/* Carte principale */}
            <motion.div
              className="bg-card rounded-card shadow-lg p-8 md:p-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* En-tête de la carte */}
              <motion.div
                className="mb-12 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-label text-accent-primary mb-4 block leading-none">
                  OUR MANIFESTO
                </span>
                <h2 className="text-h2 mb-6">What We Stand For</h2>
                <p className="text-body-lg text-gray-500 max-w-2xl mx-auto">
                  Principles that guide every project, every decision, every
                  client.
                </p>
              </motion.div>

              {/* Liste des valeurs */}
              <div className="space-y-8">
                {[
                  {
                    title: "No Account Managers",
                    description:
                      "You work directly with the people building your website. No middlemen who've never written code.",
                  },
                  {
                    title: "No Offshore Teams",
                    description:
                      "Everything is built in-house. Your project isn't outsourced to the lowest bidder in a different timezone.",
                  },
                  {
                    title: "No Bloated Overhead",
                    description:
                      "Small team means lower costs and faster decisions. We pass those savings to you.",
                  },
                  {
                    title: "No Vanity Metrics",
                    description:
                      "We measure success by leads, sales, and ROI—not just traffic and bounce rates.",
                  },
                  {
                    title: "No Lock-in Contracts",
                    description:
                      "You own your website 100%. No monthly fees to keep it live. No hidden charges.",
                  },
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    className="pb-8 border-b border-gray-100 dark:border-gray-800 last:border-0 last:pb-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + index * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    <div className="flex gap-6">
                      {/* Indicateur visuel */}
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-accent-primary/10 flex items-center justify-center">
                          <div className="w-2 h-2 bg-accent-primary rounded-full" />
                        </div>
                      </div>

                      {/* Contenu */}
                      <div className="flex-1">
                        <h3 className="text-h4 mb-3">{value.title}</h3>
                        <p className="text-body text-gray-500 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer de la carte */}
              <motion.div
                className="mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <p className="text-body-lg text-gray-500 mb-6">
                  Ready to work with a different kind of agency?
                </p>
                <Button
                  variant="primary"
                  size="lg"
                  asChild
                  className="shadow-md"
                >
                  <Link href="/contact">Start Your Project</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
