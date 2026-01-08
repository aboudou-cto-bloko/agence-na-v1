"use client";
import { motion } from "framer-motion";

const businessMetrics = [
  {
    metric: "Conversion Speed",
    ourValue: "1.2s load",
    industryAvg: "3.2s load",
    description:
      "Customers don't wait. Every second saved increases conversions by up to 7%.",
    percentage: 62,
  },
  {
    metric: "User Experience",
    ourValue: "50ms response",
    industryAvg: "300ms response",
    description: "Instant interaction keeps visitors engaged and ready to buy.",
    percentage: 83,
  },
  {
    metric: "Brand Trust",
    ourValue: "0.05 shift",
    industryAvg: "0.25 shift",
    description:
      "Stable, professional appearance builds immediate credibility.",
    percentage: 80,
  },
];

export function SitePerformance() {
  return (
    <section className="relative py-20 md:py-48 bg-card">
      <div className="container-max max-w-5xl">
        <motion.div
          className="mb-12 md:mb-32 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            Performance That Pays
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4 md:px-0">
            Technical excellence translates directly to business results. Here's
            what our performance means for your bottom line.
          </p>
        </motion.div>

        {/* Business Metrics Grid — 2 Colonnes */}
        <div className="space-y-12 md:space-y-20">
          {businessMetrics.map((item, index) => (
            <motion.div
              key={item.metric}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center pb-12 md:pb-20 border-b border-border last:border-0 last:pb-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* LEFT — Business Impact */}
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">
                  {item.metric}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  {item.description}
                </p>
                <p className="text-base md:text-lg font-medium text-accent-primary">
                  {item.percentage}% more effective than average
                </p>
              </div>

              {/* RIGHT — Technical Comparison */}
              <div className="space-y-4 md:space-y-6">
                {/* This Page */}
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-xs md:text-sm text-muted-foreground">
                      This page
                    </p>
                    <p className="text-lg md:text-xl lg:text-2xl font-bold text-green-500">
                      {item.ourValue}
                    </p>
                  </div>
                  <div className="relative h-2 md:h-3 bg-border rounded-full overflow-hidden">
                    <motion.div
                      className="absolute left-0 h-full bg-green-500 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${100 - item.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    />
                  </div>
                </div>

                {/* Industry Average */}
                <div className="space-y-2 md:space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-xs md:text-sm text-muted-foreground">
                      Industry Average
                    </p>
                    <p className="text-lg md:text-xl lg:text-2xl font-bold text-red-500/70">
                      {item.industryAvg}
                    </p>
                  </div>
                  <div className="relative h-2 md:h-3 bg-border rounded-full overflow-hidden">
                    <motion.div
                      className="absolute left-0 h-full bg-red-500/50 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.4 }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA — Business-Focused */}
        <motion.div
          className="text-center space-y-4 md:space-y-6 pt-12 md:pt-20 mt-12 md:mt-20 border-t border-border"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xs md:text-sm text-muted-foreground px-4 md:px-0">
            Data from{" "}
            <a
              href="https://httparchive.org/reports/loading-speed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-primary hover:underline"
            >
              HTTP Archive
            </a>{" "}
            shows 1-second delay reduces conversions by 7%. We build for
            revenue, not just speed.
          </p>

          <button
            onClick={() => {
              document.getElementById("packages")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
            className="inline-block text-base md:text-lg font-medium text-primary hover:underline cursor-pointer"
          >
            Get performance that converts →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
