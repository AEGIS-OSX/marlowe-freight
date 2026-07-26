"use client";

import { motion } from "framer-motion";

export default function Coverage() {
  const containerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="coverage" className="coverage-section surface-dark py-[var(--space-20)] md:py-[120px] bg-[var(--color-canvas)]">
      <div className="container mx-auto px-[var(--space-6)] md:px-[var(--space-20)] max-w-[var(--max-width)]">
        <h2 className="coverage-heading font-[family-name:var(--font-display)] text-[var(--color-ink)] text-[var(--text-h2)] leading-[1.1] tracking-[-0.02em] mb-[var(--space-16)]">
          Coverage that moves with the freight.
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* Block 1 */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col py-[var(--space-10)] md:py-0 md:pr-[var(--space-10)] border-b md:border-b-0 md:border-r border-[var(--color-rule)]"
          >
            <p className="label coverage-label font-[family-name:var(--font-body)] text-[var(--text-label)] leading-[1.0] tracking-[0.08em] uppercase text-[var(--color-steel)] mb-[var(--space-4)]">
              PORTS COVERED
            </p>
            <p className="coverage-data data font-[family-name:var(--font-mono)] text-[var(--text-h2)] leading-[1.1] text-[var(--color-ink)] mb-[var(--space-4)]">
              42
            </p>
            <p className="coverage-desc font-[family-name:var(--font-body)] text-[var(--text-body)] leading-[1.6] text-[var(--color-steel)]">
              Inland terminals across the Western and Gulf corridors.
            </p>
          </motion.div>

          {/* Block 2 */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col py-[var(--space-10)] md:py-0 md:px-[var(--space-10)] border-b md:border-b-0 md:border-r border-[var(--color-rule)]"
          >
            <p className="label coverage-label font-[family-name:var(--font-body)] text-[var(--text-label)] leading-[1.0] tracking-[0.08em] uppercase text-[var(--color-steel)] mb-[var(--space-4)]">
              AVG TURNAROUND
            </p>
            <p className="coverage-data data font-[family-name:var(--font-mono)] text-[var(--text-h2)] leading-[1.1] text-[var(--color-ink)] mb-[var(--space-4)]">
              18 hrs
            </p>
            <p className="coverage-desc font-[family-name:var(--font-body)] text-[var(--text-body)] leading-[1.6] text-[var(--color-steel)]">
              From gate-in to available for pickup at destination.
            </p>
          </motion.div>

          {/* Block 3 */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col py-[var(--space-10)] md:py-0 md:pl-[var(--space-10)]"
          >
            <p className="label coverage-label font-[family-name:var(--font-body)] text-[var(--text-label)] leading-[1.0] tracking-[0.08em] uppercase text-[var(--color-steel)] mb-[var(--space-4)]">
              CARRIER NETWORK
            </p>
            <p className="coverage-data data font-[family-name:var(--font-mono)] text-[var(--text-h2)] leading-[1.1] text-[var(--color-ink)] mb-[var(--space-4)]">
              340+
            </p>
            <p className="coverage-desc font-[family-name:var(--font-body)] text-[var(--text-body)] leading-[1.6] text-[var(--color-steel)]">
              Vetted drayage carriers with active authority.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
