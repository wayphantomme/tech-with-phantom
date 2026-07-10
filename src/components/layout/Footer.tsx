export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    "Tech with Phantom": [
      { label: "Kurikulum", href: "#kurikulum" },
      { label: "Pricing", href: "#pricing" },
      { label: "Testimoni", href: "#testimoni" },
      { label: "FAQ", href: "#faq" },
    ],
    "Legal & Support": [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Refund Policy", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  };

  return (
    <footer
      style={{
        background: "var(--text-primary)",
        color: "#FFFFFF",
        paddingTop: "3rem",
        paddingBottom: "2rem",
      }}
    >
      {/* CSS hover using global style tag */}
      <style>{`
        .footer-link { color: #FFFFFF; text-decoration: none; font-size: 0.875rem; }
        .footer-link:hover { text-decoration: underline; }
        .footer-lang-btn {
          background: transparent;
          border: 1px solid #FFFFFF;
          color: #FFFFFF;
          padding: 0.5rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          font-family: var(--font-body);
          font-size: 1rem;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2rem !important;
          }
          .footer-grid > div:last-child {
            grid-column: 1 / -1;
            justify-content: flex-start !important;
          }
        }
      `}</style>

      <div className="container">
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 2fr",
            gap: "2rem",
            marginBottom: "4rem",
          }}
        >
          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="footer-link">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Language Selector */}
          <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-start" }}>
            <button className="footer-lang-btn">
              <span>🌐</span> Bahasa Indonesia
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "1.25rem",
            }}
          >
            <div
              style={{
                width: 32,
                height: 32,
                backgroundColor: "var(--color-primary)",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.25rem",
                fontWeight: 700,
                fontFamily: "var(--font-body)",
              }}
            >
              T
            </div>
            Tech with Phantom
          </div>
          <p style={{ fontSize: "0.75rem", color: "#FFFFFF" }}>
            © {currentYear} Tech with Phantom, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
