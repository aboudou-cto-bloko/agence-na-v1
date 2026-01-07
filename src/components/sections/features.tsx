"use client";
import { motion } from "framer-motion";

interface Feature {
  title: string;
  description: string;
  benefit: string;
}

const features: Feature[] = [
  {
    title: "Delivered Fast",
    description:
      "Your website launches in 2-3 weeks, not months. No endless revisions or drawn-out timelines.",
    benefit: "Start generating leads immediately",
  },
  {
    title: "Built to Convert",
    description:
      "Every element is designed with one goal: turning visitors into paying customers.",
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
    <section className="relative py-40 md:py-48">
      <div className="container-max max-w-4xl">
        {/* Header — Ultra simple */}
        <motion.div
          className="mb-32"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-h1 font-bold mb-6">Why Choose Us</h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl">
            We're not another agency promising the world. We deliver results,
            fast.
          </p>
        </motion.div>

        {/* Features — Animation en cascade */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="pb-24 border-b border-border last:border-0 last:pb-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px", amount: 0.3 }}
              transition={{ staggerChildren: 0.2 }}
            >
              {/* Titre apparaît en premier */}
              <motion.h3
                className="text-h2 font-bold mb-4"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                {feature.title}
              </motion.h3>

              {/* Description apparaît ensuite */}
              <motion.p
                className="text-body-lg text-muted-foreground mb-6 leading-relaxed"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                {feature.description}
              </motion.p>

              {/* Benefit apparaît en dernier */}
              <motion.p
                className="text-body font-medium text-accent-primary"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
              >
                → {feature.benefit}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
