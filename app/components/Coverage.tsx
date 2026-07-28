"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

const metrics = [
  {
    label: "TERMINAL NETWORK",
    data: "47 Inland Ramps",
    desc: "Daily drayage operations across major US rail heads and port terminals.",
  },
  {
    label: "CARRIER CAPACITY",
    data: "1,200+ Vetted Units",
    desc: "Power-only and chassis-equipped carriers under permanent lease or long-term contract.",
  },
  {
    label: "RESPONSE TIME",
    data: "15 Minute SLA",
    desc: "Average time from quote request to rate confirmation during terminal hours.",
  },
];

export default function Coverage() {
  return (
    <motion.section
      id="coverage"
      className="coverage-section bg-[var(--color-canvas)] border-t border-[var(--color-rule)]"
      style={{
        paddingBlock: "var(--space-20)",
      }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        {/* Section heading */}
        <div className="coverage-header mb-[var(--space-16)]">
          <p className="label coverage-label text-[var(--color-steel)] mb-[var(--space-4)]">
            COVERAGE
          </p>
          <h2
            className="coverage-heading font-[family-name:var(--font-display)] text-[var(--color-ink)]"
            style={{
              fontSize: "40px",
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
              maxWidth: "640px",
            }}
          >
            Coverage that moves with the freight.
          </h2>
        </div>

        {/* Asymmetric editorial layout: metrics left, feature_1 right */}
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-[var(--space-12)] lg:gap-[var(--space-20)] items-start mb-[var(--space-16)]">
          {/* Left: stacked metrics with dividers */}
          <div className="coverage-metrics flex flex-col">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                className="coverage-metric-row flex flex-col gap-[var(--space-3)] py-[var(--space-8)] border-t border-[var(--color-rule)]"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              >
                <p className="label coverage-metric-label text-[var(--color-steel)]">
                  {metric.label}
                </p>
                <p
                  className="coverage-metric-data font-[family-name:var(--font-mono)] text-[var(--color-ink)] leading-[1.1]"
                  style={{ fontSize: "32px" }}
                >
                  {metric.data}
                </p>
                <p className="coverage-metric-desc font-[family-name:var(--font-body)] text-[var(--text-body)] leading-[var(--lh-body)] text-[var(--color-steel)]">
                  {metric.desc}
                </p>
              </motion.div>
            ))}
            <div className="border-t border-[var(--color-rule)]" />
          </div>

          {/* Right: feature_1 image, tall editorial */}
          <motion.div
            className="coverage-feature-image lg:sticky lg:top-[80px]"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="overflow-hidden" style={{ borderRadius: "var(--radius)" }}>
              <ProjectImage
                id="feature_1"
                className="w-full h-auto object-cover block"
              />
            </div>
          </motion.div>
        </div>

        {/* feature_2: full-width editorial strip */}
        <motion.div
          className="coverage-feature-strip border-t border-[var(--color-rule)] pt-[var(--space-8)]"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="overflow-hidden" style={{ borderRadius: "var(--radius)" }}>
            <ProjectImage
              id="feature_2"
              className="w-full h-auto object-cover block"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}