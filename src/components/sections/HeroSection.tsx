"use client";

export default function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: "var(--bg-base)",
        paddingTop: "72px", // navbar height
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left — Copy */}
          <div style={{ maxWidth: "560px" }}>
            {/* Headline */}
            <h1
              className="reveal text-balance"
              style={{ marginBottom: "1rem" }}
            >
              Belajar AI & Web Development sampai Dapat Client Global
            </h1>

            {/* Subheadline */}
            <p
              className="reveal delay-100"
              style={{
                fontSize: "1.125rem",
                color: "var(--text-primary)",
                marginBottom: "2rem",
                lineHeight: 1.6,
              }}
            >
              Tanpa bingung roadmap. Langsung praktek project real dan siap freelance atau kerja remote.
            </p>

            {/* CTAs */}
            <div
              className="reveal delay-200"
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <a
                href="#pricing"
                id="hero-cta-primary"
                className="btn btn-primary"
              >
                Mulai Belajar Sekarang
              </a>
              <a
                href="#kurikulum"
                id="hero-cta-secondary"
                className="btn btn-secondary"
              >
                Lihat Kurikulum
              </a>
            </div>
          </div>

          {/* Right — Image Placeholder */}
          <div
            className="reveal delay-200 hero-visual"
            style={{ position: "relative", display: "flex", justifyContent: "flex-end" }}
          >
            <div
              style={{
                width: "100%",
                maxWidth: "480px",
                aspectRatio: "4/3",
                backgroundColor: "#F7F9FA",
                border: "1px solid var(--border-subtle)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 4px rgba(0,0,0,0.08)",
              }}
            >
              <div style={{ textAlign: "center", color: "var(--text-muted)" }}>
                <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🖼️</div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>Hero Image Placeholder</div>
                <div style={{ fontSize: "0.875rem" }}>e.g. Photo of instructor or students</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            padding-block: 3rem;
          }
          .hero-visual {
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
}
