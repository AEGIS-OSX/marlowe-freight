import { ProjectImage } from "@/app/components/ProjectImage";

export default function Nav() {
  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: "var(--color-canvas)",
        borderBottom: "1px solid var(--color-rule)",
      }}
    >
      <div className="container nav-inner">
        <ProjectImage id="logo" className="nav-logo" />
        <ul className="nav-links">
          <li><a href="#coverage">Coverage</a></li>
          <li><a href="#carriers">Carriers</a></li>
          <li><a href="#detention">Detention</a></li>
          <li><a href="#quote">Quote</a></li>
        </ul>
        <a href="tel:+18885127704" className="nav-phone">(888) 512-7704</a>
      </div>
      <style>{`
        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 56px;
        }
        .nav-logo {
          height: 28px;
          width: auto;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .nav-links a {
          font-family: var(--font-body);
          font-size: var(--text-secondary);
          color: var(--color-ink);
          text-decoration: none;
          white-space: nowrap;
        }
        .nav-links a:hover {
          color: var(--color-rust);
          transition: color 150ms var(--ease-out);
        }
        .nav-links a:focus-visible {
          outline: 2px solid var(--color-focus);
          outline-offset: 2px;
        }
        .nav-phone {
          font-family: var(--font-mono);
          font-size: var(--text-data);
          color: var(--color-ink);
          text-decoration: none;
          white-space: nowrap;
        }
        .nav-phone:hover {
          color: var(--color-rust);
          transition: color 150ms var(--ease-out);
        }
        .nav-phone:focus-visible {
          outline: 2px solid var(--color-focus);
          outline-offset: 2px;
        }
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}
