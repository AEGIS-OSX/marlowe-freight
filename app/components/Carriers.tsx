"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

const vettingStandards = [
  "$1M Auto Liability minimum.",
  "$100k Cargo Insurance minimum.",
  "SMS Safety Scores below 65% threshold.",
  "98% On-time performance requirement.",
];

export default function Carriers() {
  return (
    <motion.section
      id="carriers"
      className="carriers-section bg-[var(--color-canvas)] border-t border-[var(--color-rule)]"
      style={{ paddingBlock: "var(--space-20)" }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-12)] lg:gap-[var(--space-20)] items-start">
          {/* Left column: quote + vetting standards */}
          <motion.div
            className="carriers-content-col flex flex-col gap-[var(--space-10)]"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="flex flex-col gap-[var(--space-4)]">
              <p className="label carriers-label text-[var(--color-steel)]">
                CARRIER VETTING
              </p>

              <figure className="carriers-quote my-[var(--space-4)]">
                <blockquote
                  className="border-l-[3px] border-[var(--color-rust)] pl-[var(--space-6)] text-[var(--color-ink)] font-[family-name:var(--font-display)] leading-[1.2] italic"
                  style={{ fontSize: "clamp(20px, 2.5vw, 32px)" }}
                >
                  {`"Marlowe is the only broker that understands terminal congestion. They pay detention without a fight and their carriers actually show up for the appointment."`}
                </blockquote>
                <figcaption className="mt-[var(--space-4)] pl-[var(--space-6)] text-[var(--color-steel)] font-[family-name:var(--font-mono)] text-[var(--text-data)] leading-[var(--lh-ui)]">
                  Dispatch Manager, MC #492011
                </figcaption>
              </figure>
            </div>

            {/* Vetting standards: editorial specification rows */}
            <div className="flex flex-col gap-[var(--space-4)]">
              <p className="label text-[var(--color-steel)]">
                VETTING STANDARDS
              </p>
              <div className="carriers-vetting-spec flex flex-col">
                {vettingStandards.map((standard, i) => (
                  <motion.div
                    key={i}
                    className="carriers-spec-row flex items-baseline gap-[var(--space-4)] py-[var(--space-3)] border-t border-[var(--color-rule)]"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" }}
                  >
                    <span
                      className="font-[family-name:var(--font-mono)] text-[var(--color-rust)] shrink-0"
                      style={{ fontSize: "var(--text-label)" }}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-[family-name:var(--font-body)] text-[var(--text-secondary)] leading-[var(--lh-ui)] text-[var(--color-ink)]">
                      {standard}
                    </span>
                  </motion.div>
                ))}
                <div className="border-t border-[var(--color-rule)]" />
              </div>
            </div>
          </motion.div>

          {/* Right column: image */}
          <motion.div
            className="carriers-image-col"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="overflow-hidden" style={{ borderRadius: "var(--radius)" }}>
              <ProjectImage
                id="feature_3"
                className="w-full h-auto object-cover block"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}