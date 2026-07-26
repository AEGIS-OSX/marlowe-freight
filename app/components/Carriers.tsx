"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

export default function Carriers() {
  return (
    <section id="carriers" className="carriers-section bg-[var(--color-canvas)] py-[var(--space-20)] md:py-[var(--space-32)] border-t border-[var(--color-rule)]">
      <div className="container mx-auto px-[var(--space-6)] md:px-[var(--space-20)] max-w-[1200px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-12)] lg:gap-[var(--space-20)] items-start">
          <motion.div 
            className="carriers-content-col flex flex-col gap-[var(--space-10)]"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="flex flex-col gap-[var(--space-4)]">
              <p className="label carriers-label text-[var(--color-steel)] font-[family-name:var(--font-body)] text-[12px] leading-[1.0] tracking-[0.08em] uppercase">
                CARRIER VETTING
              </p>
              
              <figure className="carriers-quote my-[var(--space-4)]">
                <blockquote className="border-l-[3px] border-[var(--color-rust)] pl-[var(--space-6)] text-[var(--color-ink)] font-[family-name:var(--font-display)] text-[24px] md:text-[32px] leading-[1.2] italic">
                  "Marlowe is the only broker that understands drayage isn't just trucking — it's terminal operations."
                </blockquote>
                <figcaption className="mt-[var(--space-4)] pl-[var(--space-6)] text-[var(--color-steel)] font-[family-name:var(--font-mono)] text-[14px] leading-[1.4]">
                  Dispatch Manager, MC #492011
                </figcaption>
              </figure>
            </div>

            <div className="flex flex-col gap-[var(--space-6)]">
              <p className="label text-[var(--color-steel)] font-[family-name:var(--font-body)] text-[12px] leading-[1.0] tracking-[0.08em] uppercase">
                VETTING STANDARDS
              </p>
              <ul className="carriers-vetting-list flex flex-col gap-[var(--space-3)]">
                {[
                  "$1M Auto Liability minimum.",
                  "$100k Cargo Insurance minimum.",
                  "SMS Safety Scores below 65% threshold.",
                  "98% On-time performance requirement."
                ].map((item, index) => (
                  <li 
                    key={index} 
                    className="text-[var(--color-ink)] font-[family-name:var(--font-body)] text-[18px] leading-[1.6] flex items-start gap-[var(--space-3)]"
                  >
                    <span className="text-[var(--color-rust)] mt-[0.5em] h-[6px] w-[6px] rounded-full bg-[var(--color-rust)] flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <div className="carriers-image-col w-full aspect-[4/5] lg:aspect-auto">
            <ProjectImage id="social_proof" />
          </div>
        </div>
      </div>
    </section>
  );
}
