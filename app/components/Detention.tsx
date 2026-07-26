"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

export default function Detention() {
  return (
    <section id="detention" className="detention-section py-[var(--space-16)] md:py-[var(--space-32)] overflow-x-hidden bg-[var(--color-canvas)]">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-[var(--space-12)] md:gap-[var(--space-20)] items-center">
        <motion.div 
          className="flex flex-col gap-[var(--space-4)] md:gap-[var(--space-6)]"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="label detention-label text-[var(--color-steel)]">DETENTION CLAIMS</p>
          <h2 className="text-[var(--color-ink)] text-[var(--text-h2)] leading-[var(--lh-display)]">
            Detention-claim settlement.
          </h2>
          <p className="detention-body text-[var(--color-steel)] text-[var(--text-body)] leading-[var(--lh-body)] max-w-[540px]">
            We eliminate the friction of detention recovery. When a carrier is delayed at a terminal gate or rail ramp, the claim is logged via GPS timestamp. Marlowe settles approved detention claims within 48 hours of delivery. No manual paperwork. No six-week wait for reimbursement. We handle the recovery from the terminal so you can maintain your margins.
          </p>
        </motion.div>
        
        <div className="detention-image-panel relative h-[300px] md:h-[500px] w-full md:mr-[calc(-1*var(--gutter-desktop))] overflow-hidden">
          <div className="w-full h-full [&>img]:w-full [&>img]:h-full [&>img]:object-cover">
            <ProjectImage id="feature_3" />
          </div>
        </div>
      </div>
    </section>
  );
}
