"use client";
import { motion } from "framer-motion";
import { PricingCard } from "@/components/ui/pricing-card";
import type { Variants } from "framer-motion";

interface Package {
  variant?: "basic" | "premium";
  badge?: string;
  title: string;
  price: string;
  features: string[];
  maintenanceNote?: string;
  cta: {
    text: string;
    href: string;
  };
}

interface PackagesProps {
  headline: string;
  packages: Package[];
}

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Packages({ headline, packages }: PackagesProps) {
  return (
    <section id="packages" className="py-section">
      <div className="container-max">
        <div className="space-y-component-lg">
          <motion.h2
            className="text-h2 text-foreground text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {headline}
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto pt-component">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
                transition={{ delay: index * 0.15 }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3 },
                }}
              >
                <PricingCard
                  variant={pkg.variant}
                  badge={pkg.badge}
                  title={pkg.title}
                  price={pkg.price}
                  features={pkg.features}
                  maintenanceNote={pkg.maintenanceNote}
                  cta={pkg.cta}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
