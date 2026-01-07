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
        {/* Hero Section — Layout Z comme home */}
        <section className="relative py-40 md:py-48">
          <div className="container-max max-w-5xl">
            {/* Header — Simple et direct */}
            <div className="mb-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <ScrambleText
                  text="Why We Exist"
                  as="h1"
                  className="text-display font-bold leading-none mb-8"
                  triggerOnView={false}
                  speed={6}
                  scrambleSpeed={4}
                />
              </motion.div>

              <motion.p
                className="text-h3 text-muted-foreground max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We're not another agency promising the world.
              </motion.p>
            </div>

            {/* Content Grid — Z-Pattern */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              {/* Left — Narrative */}
              <motion.div
                className="space-y-12"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="space-y-6">
                  <h2 className="text-h2 font-bold">The Problem</h2>
                  <p className="text-body-lg text-muted-foreground leading-relaxed">
                    Scottish businesses deserve better than bloated agencies
                    that charge £5K for templates or cheap freelancers who
                    vanish after launch.
                  </p>
                </div>

                <div className="space-y-6">
                  <h2 className="text-h2 font-bold">Our Approach</h2>
                  <p className="text-body-lg text-muted-foreground leading-relaxed">
                    We combine deep local market knowledge with
                    international-grade technical execution. Small by choice.
                    Selective by design.
                  </p>
                </div>

                <div className="pt-6 border-t border-border">
                  <p className="text-h3 font-medium text-accent-primary">
                    Most agencies sell websites. We build revenue systems.
                  </p>
                </div>
              </motion.div>

              {/* Right — Contact */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="space-y-8 lg:sticky lg:top-32">
                  {/* Contact Info — Épuré */}
                  <div className="space-y-8">
                    <h3 className="text-h3 font-bold">Get In Touch</h3>

                    <div className="space-y-6">
                      <div>
                        <p className="text-label text-muted-foreground mb-2">
                          Email
                        </p>
                        <a
                          href="mailto:hello@nasraboudou.com"
                          className="text-body-lg text-foreground hover:text-accent-primary transition-colors"
                        >
                          hello@example.com
                        </a>
                      </div>

                      <div>
                        <p className="text-label text-muted-foreground mb-2">
                          Location
                        </p>
                        <p className="text-body text-foreground">
                          Scotland, United Kingdom
                        </p>
                      </div>

                      <div>
                        <p className="text-label text-muted-foreground mb-2">
                          Response Time
                        </p>
                        <p className="text-body text-foreground">
                          Within 24 hours
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-8 border-t border-border space-y-4">
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full"
                      asChild
                    >
                      <a href="mailto:hello@nasraboudou.com">
                        Book Strategy Call
                      </a>
                    </Button>

                    <div className="flex flex-col gap-3 text-body-sm text-muted-foreground">
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

        {/* Values Section — Stack simple comme Features */}
        <section className="relative py-40 md:py-48 bg-card">
          <div className="container-max max-w-4xl">
            <motion.h2
              className="text-h1 font-bold mb-32"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              What We Stand For
            </motion.h2>

            <div className="space-y-24">
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
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  className="pb-24 border-b border-border last:border-0 last:pb-0"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                >
                  <h3 className="text-h2 font-bold mb-4">{value.title}</h3>
                  <p className="text-body-lg text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
