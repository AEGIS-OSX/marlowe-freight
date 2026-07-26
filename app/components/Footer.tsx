export default function Footer() {
  return (
    <footer className="site-footer border-t border-[var(--color-rule)] bg-[var(--color-canvas)]">
      <div className="container footer-inner flex flex-col md:flex-row items-center justify-between py-[var(--space-8)] gap-[var(--space-4)] md:gap-0">
        <span className="footer-brand font-[family-name:var(--font-display)] text-[var(--text-secondary)] text-[var(--color-ink)]">
          Marlowe Freight.
        </span>
        <a
          href="tel:+18885127704"
          className="footer-phone font-[family-name:var(--font-mono)] text-[var(--text-data)] text-[var(--color-ink)] hover:text-[var(--color-rust)] hover:transition-[color] hover:duration-150 hover:ease-[var(--ease-out)] focus-visible:outline focus-visible:outline-[2px] focus-visible:outline-[var(--color-focus)] focus-visible:outline-offset-[2px]"
        >
          (888) 512-7704
        </a>
        <p className="footer-authority data font-[family-name:var(--font-mono)] text-[var(--text-data)] text-[var(--color-steel)]">
          MC #1592033 &middot; DOT #4102994 &middot; $75,000 Surety Bond
        </p>
      </div>
      <div className="container">
        <p className="footer-copyright text-[var(--text-data)] text-[var(--color-muted)] pb-[var(--space-8)]">
          &copy; 2026 Marlowe Freight LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
