import { ProjectImage } from "@/app/components/ProjectImage"

async function getTerminalCount(): Promise<number | null> {
  try {
    const response = await fetch(
      "https://coverage.marlowe-freight.com/api/v1/terminals/active-count",
      {
        headers: {
          Authorization: `Bearer ${process.env.MARLOWE_COVERAGE_API_KEY}`,
        },
        cache: "force-cache",
      }
    )

    if (!response.ok) {
      return null
    }

    const data = await response.json()

    if (typeof data.count === "number") {
      return data.count
    }

    return null
  } catch {
    return null
  }
}

export default async function Hero() {
  const terminalCount = await getTerminalCount()

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div
          className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-[var(--space-16)]"
          style={{
            paddingBlockStart: "var(--space-20)",
            paddingBlockEnd: "var(--space-32)",
          }}
        >
          <div className="hero-content flex flex-col items-start gap-[var(--space-6)]">
            <p className="label hero-eyebrow">
              <ProjectImage id="logo" />
            </p>
            <h1 className="hero-headline text-[var(--color-ink)]">
              Inland drayage turnaround.
            </h1>
            <p className="hero-subheadline text-[var(--color-steel)]">
              Direct terminal coverage and automated detention settlement for freight forwarders.
            </p>
            <div
              className="hero-metric flex flex-col gap-[var(--space-2)]"
              aria-hidden={terminalCount === null ? "true" : undefined}
            >
              <span className="hero-metric-value font-[family-name:var(--font-mono)] text-[var(--text-h2)] text-[var(--color-ink)]">
                {terminalCount !== null ? terminalCount : "—"}
              </span>
              <span className="hero-metric-label label">ACTIVE TERMINALS</span>
            </div>
            <a
              href="#quote"
              className="btn-primary hero-cta inline-block px-[var(--space-6)] py-[var(--space-3)] rounded-[var(--radius)] font-medium no-underline"
            >
              Get Coverage
            </a>
            <p className="hero-secondary text-[var(--color-steel)]">
              Available 24/7:{" "}
              <a
                href="tel:+18885127704"
                className="text-[var(--color-ink)] no-underline hover:underline"
              >
                (888) 512-7704
              </a>
            </p>
          </div>
          <div className="hero-image-col">
            <ProjectImage id="hero" className="hero-image w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
