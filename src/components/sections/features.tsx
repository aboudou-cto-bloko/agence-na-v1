"use client";

import { motion } from "framer-motion";

interface FeatureCard {
  title: string;
  description: string;
  benefit: string;
}

const features: FeatureCard[] = [
  {
    title: "Delivered Fast",
    description:
      "Your website launches in 2-3 weeks, not months. No endless revisions or drawn-out timelines.",
    benefit: "Start generating leads immediately",
  },
  {
    title: "Built to Convert",
    description:
      "Every element is designed with one goal: turning visitors into loyal, high-value, paying customers.",
    benefit: "Higher ROI from day one",
  },
  {
    title: "No Technical Headaches",
    description:
      "We handle hosting, updates, and maintenance. You focus on running your business.",
    benefit: "Zero ongoing technical work",
  },
];

export function Features() {
  return (
    <section className="relative py-section">
      <div className="container-max">
        {/* En-tête */}
        <motion.div
          className="mb-section-sm text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-label text-accent-primary mb-4 block">
            WHY CHOOSE US
          </span>
          <h2 className="text-h2 mb-6">
            We're not another agency promising the world
          </h2>
          <p className="text-body-lg text-gray-500">
            We deliver results, fast. No fluff, no excuses.
          </p>
        </motion.div>

        {/* Grille de cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Carte principale */}
              <div className="bg-card rounded-card shadow-lg hover-lift p-8 h-full transition-base border border-gray-100 dark:border-gray-800">
                {/* Indicateur visuel */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-label text-primary font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <div className="w-8 h-px bg-gray-200 dark:bg-gray-700 transition-base group-hover:w-12 group-hover:bg-accent-primary" />
                </div>

                {/* Contenu */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-h4 mb-3">{feature.title}</h3>
                    <p className="text-body text-gray-500 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                    <p className="text-body-sm font-medium text-accent-primary">
                      → {feature.benefit}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Callout en bas */}
        <motion.div
          className="mt-section-sm text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-50 dark:bg-gray-900 rounded-full">
            <div className="w-2 h-2 bg-accent-primary rounded-full animate-pulse" />
            <span className="text-label text-shadow-white">
              Ready to transform your online presence?
            </span>
            <a
              href="/contact"
              className="text-label text-primary font-medium hover:text-accent-primary/80 transition-fast"
            >
              Get in touch →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
