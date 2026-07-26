"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function Quote() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setTimeout(() => {
      setStatus("success")
    }, 1500)
  }

  return (
    <section id="quote" className="quote-section surface-dark bg-[var(--color-canvas)] py-[80px]">
      <div className="container mx-auto max-w-[1200px] px-[24px] md:px-[80px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-start text-left"
        >
          <h2 className="font-[family-name:var(--font-display)] text-[40px] md:text-[52px] leading-[1.1] tracking-[-0.02em] text-[var(--color-ink)] mb-[16px]">
            Request a rate.
          </h2>
          <p className="quote-subheadline font-[family-name:var(--font-body)] text-[18px] leading-[1.6] text-[var(--color-steel)] mb-[40px]">
            Response within 15 minutes during operating hours.
          </p>

          {status === "success" ? (
            <div 
              role="alert" 
              aria-live="polite" 
              className="w-full py-[40px] border-t border-[var(--color-rule-line)]"
            >
              <p className="font-[family-name:var(--font-body)] text-[18px] text-[var(--color-terminal-green)]">
                Your request has been received.
              </p>
            </div>
          ) : (
            <form className="quote-form w-full max-w-[600px] flex flex-col gap-[24px]" onSubmit={handleSubmit}>
              <div className="form-field flex flex-col gap-[8px]">
                <label 
                  htmlFor="pickup_terminal" 
                  className="font-[family-name:var(--font-body)] text-[12px] leading-[1.0] tracking-[0.08em] uppercase text-[var(--color-steel)]"
                >
                  Pickup Terminal
                </label>
                <input
                  type="text"
                  id="pickup_terminal"
                  name="pickup_terminal"
                  required
                  className="h-[44px] px-[12px] border-[1px] border-solid border-[var(--color-rule-line)] bg-transparent text-[var(--color-ink)] font-[family-name:var(--font-body)] text-[15px] focus:outline-none"
                />
                <p className="field-helper min-h-[1lh]" aria-live="polite"></p>
              </div>

              <div className="form-field flex flex-col gap-[8px]">
                <label 
                  htmlFor="delivery_zip" 
                  className="font-[family-name:var(--font-body)] text-[12px] leading-[1.0] tracking-[0.08em] uppercase text-[var(--color-steel)]"
                >
                  Delivery Zip
                </label>
                <input
                  type="text"
                  id="delivery_zip"
                  name="delivery_zip"
                  pattern="[0-9]{5}"
                  required
                  className="h-[44px] px-[12px] border-[1px] border-solid border-[var(--color-rule-line)] bg-transparent text-[var(--color-ink)] font-[family-name:var(--font-body)] text-[15px] focus:outline-none"
                />
                <p className="field-helper min-h-[1lh]" aria-live="polite"></p>
              </div>

              <div className="form-field flex flex-col gap-[8px]">
                <label 
                  htmlFor="equipment_type" 
                  className="font-[family-name:var(--font-body)] text-[12px] leading-[1.0] tracking-[0.08em] uppercase text-[var(--color-steel)]"
                >
                  Equipment Type
                </label>
                <select
                  id="equipment_type"
                  name="equipment_type"
                  required
                  className="h-[44px] px-[12px] border-[1px] border-solid border-[var(--color-rule-line)] bg-transparent text-[var(--color-ink)] font-[family-name:var(--font-body)] text-[15px] focus:outline-none appearance-none"
                >
                  <option value="">Select type</option>
                  <option value="20">20&apos; Container</option>
                  <option value="40">40&apos; Container</option>
                  <option value="40hc">40&apos; HC Container</option>
                  <option value="45">45&apos; Container</option>
                </select>
                <p className="field-helper min-h-[1lh]" aria-live="polite"></p>
              </div>

              <div className="form-field flex flex-col gap-[8px]">
                <label 
                  htmlFor="ready_date" 
                  className="font-[family-name:var(--font-body)] text-[12px] leading-[1.0] tracking-[0.08em] uppercase text-[var(--color-steel)]"
                >
                  Ready Date
                </label>
                <input
                  type="date"
                  id="ready_date"
                  name="ready_date"
                  required
                  className="h-[44px] px-[12px] border-[1px] border-solid border-[var(--color-rule-line)] bg-transparent text-[var(--color-ink)] font-[family-name:var(--font-body)] text-[15px] focus:outline-none"
                />
                <p className="field-helper min-h-[1lh]" aria-live="polite"></p>
              </div>

              <div className="form-field flex flex-col gap-[8px]">
                <label 
                  htmlFor="email" 
                  className="font-[family-name:var(--font-body)] text-[12px] leading-[1.0] tracking-[0.08em] uppercase text-[var(--color-steel)]"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="h-[44px] px-[12px] border-[1px] border-solid border-[var(--color-rule-line)] bg-transparent text-[var(--color-ink)] font-[family-name:var(--font-body)] text-[15px] focus:outline-none"
                />
                <p className="field-helper min-h-[1lh]" aria-live="polite"></p>
              </div>

              <button
                type="submit"
                className="btn-primary quote-submit h-[44px] px-[24px] bg-[var(--color-rust-signal)] text-[var(--color-canvas)] font-[family-name:var(--font-body)] font-medium rounded-[4px] transition-opacity duration-200"
                aria-disabled={status === "loading"}
                style={{ opacity: status === "loading" ? 0.55 : 1 }}
              >
                {status === "loading" ? "Sending..." : "Get Quote"}
              </button>
            </form>
          )}

          <p className="quote-authority data font-[family-name:var(--font-data)] text-[14px] leading-[1.4] text-[var(--color-steel)] mt-[40px] pt-[24px] border-t border-[var(--color-rule-line)] w-full">
            MC #1592033 · DOT #4102994 · $75,000 Surety Bond
          </p>
        </motion.div>
      </div>
    </section>
  )
}
