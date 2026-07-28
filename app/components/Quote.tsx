"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export default function Quote() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <motion.section
      id="quote"
      className="quote-section bg-[var(--color-canvas)] border-t border-[var(--color-rule)]"
      style={{ paddingBlock: "var(--space-20)" }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        {/* 12-column grid: form occupies left 7 columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[var(--space-8)]">
          <div className="lg:col-span-7 flex flex-col gap-[var(--space-8)]">
            <div className="flex flex-col gap-[var(--space-4)]">
              <h2
                className="font-[family-name:var(--font-display)] text-[var(--color-ink)]"
                style={{
                  fontSize: "clamp(32px, 4vw, 52px)",
                  lineHeight: "1.1",
                  letterSpacing: "-0.02em",
                }}
              >
                Request a rate.
              </h2>
              <p className="quote-subheadline font-[family-name:var(--font-body)] text-[var(--text-body)] leading-[var(--lh-body)] text-[var(--color-steel)]">
                Response within 15 minutes during operational hours.
              </p>
            </div>

            {status === "success" ? (
              <div
                role="alert"
                aria-live="polite"
                className="py-[var(--space-10)] border-t border-[var(--color-rule)]"
              >
                <p className="font-[family-name:var(--font-body)] text-[var(--text-body)] text-[var(--color-green)]">
                  Your request has been received.
                </p>
              </div>
            ) : (
              <form
                className="quote-form flex flex-col gap-[var(--space-6)]"
                onSubmit={handleSubmit}
                noValidate
              >
                {/* Pickup Terminal */}
                <div className="form-field flex flex-col gap-[var(--space-2)]">
                  <label
                    htmlFor="pickup_terminal"
                    className="label text-[var(--color-steel)]"
                  >
                    Pickup Terminal
                  </label>
                  <input
                    type="text"
                    id="pickup_terminal"
                    name="pickup_terminal"
                    required
                    className="h-[44px] px-[var(--space-3)] border border-[var(--color-rule)] bg-transparent text-[var(--color-ink)] font-[family-name:var(--font-body)] text-[var(--text-body)] focus-visible:outline focus-visible:outline-[2px] focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-[-1px]"
                    style={{ borderRadius: "var(--radius)" }}
                  />
                </div>

                {/* Delivery Zip */}
                <div className="form-field flex flex-col gap-[var(--space-2)]">
                  <label
                    htmlFor="delivery_zip"
                    className="label text-[var(--color-steel)]"
                  >
                    Delivery Zip
                  </label>
                  <input
                    type="text"
                    id="delivery_zip"
                    name="delivery_zip"
                    required
                    inputMode="numeric"
                    pattern="[0-9]{5}"
                    className="h-[44px] px-[var(--space-3)] border border-[var(--color-rule)] bg-transparent text-[var(--color-ink)] font-[family-name:var(--font-body)] text-[var(--text-body)] focus-visible:outline focus-visible:outline-[2px] focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-[-1px]"
                    style={{ borderRadius: "var(--radius)" }}
                  />
                </div>

                {/* Equipment Type */}
                <div className="form-field flex flex-col gap-[var(--space-2)]">
                  <label
                    htmlFor="equipment_type"
                    className="label text-[var(--color-steel)]"
                  >
                    Equipment Type
                  </label>
                  <select
                    id="equipment_type"
                    name="equipment_type"
                    required
                    className="h-[44px] px-[var(--space-3)] border border-[var(--color-rule)] bg-[var(--color-canvas)] text-[var(--color-ink)] font-[family-name:var(--font-body)] text-[var(--text-body)] focus-visible:outline focus-visible:outline-[2px] focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-[-1px] appearance-none"
                    style={{ borderRadius: "var(--radius)" }}
                  >
                    <option value="">Select equipment</option>
                    <option value="power_only">Power Only</option>
                    <option value="chassis">Chassis Equipped</option>
                    <option value="flatbed">Flatbed</option>
                  </select>
                </div>

                {/* Ready Date */}
                <div className="form-field flex flex-col gap-[var(--space-2)]">
                  <label
                    htmlFor="ready_date"
                    className="label text-[var(--color-steel)]"
                  >
                    Ready Date
                  </label>
                  <input
                    type="date"
                    id="ready_date"
                    name="ready_date"
                    required
                    className="h-[44px] px-[var(--space-3)] border border-[var(--color-rule)] bg-transparent text-[var(--color-ink)] font-[family-name:var(--font-body)] text-[var(--text-body)] focus-visible:outline focus-visible:outline-[2px] focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-[-1px]"
                    style={{ borderRadius: "var(--radius)" }}
                  />
                </div>

                {/* Email Address */}
                <div className="form-field flex flex-col gap-[var(--space-2)]">
                  <label
                    htmlFor="email_address"
                    className="label text-[var(--color-steel)]"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email_address"
                    name="email_address"
                    required
                    autoComplete="email"
                    className="h-[44px] px-[var(--space-3)] border border-[var(--color-rule)] bg-transparent text-[var(--color-ink)] font-[family-name:var(--font-body)] text-[var(--text-body)] focus-visible:outline focus-visible:outline-[2px] focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-[-1px]"
                    style={{ borderRadius: "var(--radius)" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary self-start disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-busy={status === "loading"}
                >
                  {status === "loading" ? "Sending..." : "Get Quote"}
                </button>
              </form>
            )}

            {/* Broker authority */}
            <div className="quote-authority border-t border-[var(--color-rule)] pt-[var(--space-6)]">
              <p className="data text-[var(--color-steel)]">
                MC #1592033 &middot; DOT #4102994 &middot; $75,000 Surety Bond: Active
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}