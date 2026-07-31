import { ProjectImage } from "@/app/components/ProjectImage";

const FALLBACK_TERMINAL_COUNT = 847;

async function getTerminalCount(): Promise<number> {
  if (!process.env.MARLOWE_COVERAGE_API_KEY) {
    throw new Error("MARLOWE_COVERAGE_API_KEY is required at build time");
  }
  try {
    const response = await fetch(
      "https://coverage.marlowefreight.internal/v1/terminals/active-count",
      {
        headers: {
          Authorization: `Bearer ${process.env.MARLOWE_COVERAGE_API_KEY}`,
        },
        cache: "force-cache",
      }
    );

    if (!response.ok) {
      return FALLBACK_TERMINAL_COUNT;
    }

    const data = await response.json();

    if (typeof data.count === "number") {
      return data.count;
    }

    return FALLBACK_TERMINAL_COUNT;
  } catch {
    return FALLBACK_TERMINAL_COUNT;
  }
}

export default async function Hero() {
  const terminalCount = await getTerminalCount();

  return (
    <section id="hero" className="hero-section bg-[var(--color-canvas)]">
      <div className="container">
        <div
          className="grid grid-cols-1 lg:grid-cols-[58%_42%] gap-[var(--space-16)] items-start"
          style={{
            paddingBlockStart: "var(--space-20)",
            paddingBlockEnd: "var(--space-32)",
          }}
        >
          {/* Left column: content */}
          <div className="hero-content flex flex-col items-start gap-[var(--space-6)]">
            <p className="label hero-eyebrow text-[var(--color-steel)]">
              MARLOWE FREIGHT
            </p>
            <h1
              className="hero-headline text-[var(--color-ink)] font-[family-name:var(--font-display)]"
              style={{
                fontSize: "52px",
                lineHeight: "1.1",
                letterSpacing: "-0.02em",
              }}
            >
              Inland drayage turnaround.
            </h1>
            <p className="hero-subheadline text-[var(--color-steel)] font-[family-name:var(--font-body)] text-[var(--text-body)] leading-[var(--lh-body)] max-w-[480px]">
              Direct terminal coverage and automated detention settlement for freight forwarders.
            </p>
            <div className="hero-metric flex flex-col gap-[var(--space-2)]">
              <span className="hero-metric-value font-[family-name:var(--font-mono)] text-[var(--text-h2)] leading-[1.1] text-[var(--color-ink)]">
                {terminalCount}
              </span>
              <span className="label hero-metric-label text-[var(--color-steel)]">
                ACTIVE TERMINALS
              </span>
            </div>
            <a
              href="#quote"
              className="btn-primary hero-cta"
            >
              Get Coverage
            </a>
            <p className="hero-secondary text-[var(--color-steel)] font-[family-name:var(--font-body)] text-[var(--text-secondary)] leading-[var(--lh-ui)]">
              Available 24/7:{" "}
              <a
                href="tel:+18885127704"
                className="text-[var(--color-ink)] no-underline hover:underline focus-visible:outline focus-visible:outline-[2px] focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-[2px]"
              >
                (888) 512-7704
              </a>
            </p>
          </div>

          {/* Right column: imagery */}
          <div className="hero-image-col flex flex-col gap-[var(--space-6)]">
            <div
              className="hero-image-primary overflow-hidden"
              style={{ borderRadius: "var(--radius)" }}
            >
              <ProjectImage
                id="hero"
                className="w-full h-auto object-cover block"
              />
            </div>
            <div className="hero-social-proof overflow-hidden border-t border-[var(--color-rule)] pt-[var(--space-4)]">
              <ProjectImage
                id="social_proof"
                className="w-full h-auto object-cover block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
