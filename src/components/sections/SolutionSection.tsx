const differentiators = [
  {
    icon: "🗺️",
    title: "Roadmap Terstruktur",
    desc: "Kurikulum disusun dari nol dengan urutan yang logis. Gak ada loncatan. Tiap lesson nyambung ke lesson berikutnya.",
  },
  {
    icon: "🔨",
    title: "Project Real dari Awal",
    desc: "Kamu langsung bangun project yang bisa dipakai di portfolio — bukan TO-DO list atau counter app.",
  },
  {
    icon: "💼",
    title: "Fokus ke Income",
    desc: "Setiap modul ada sesi career: cara dapet client, cara bikin proposal, cara masuk ke job market global.",
  },
];

const outcomes = [
  "Build fullstack app dari scratch",
  "Deploy ke production (Vercel + Neon)",
  "Integrate payment dengan Stripe",
  "Auth system yang proper (OAuth + JWT)",
  "Portfolio siap dipamerin ke client",
  "Teknik cari client freelance global",
];

export default function SolutionSection() {
  return (
    <section id="solution" className="section">
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 className="reveal text-balance">
            Kenalkan — Tech with Phantom
          </h2>
          <p
            className="reveal delay-100"
            style={{
              marginTop: "1rem",
              maxWidth: "600px",
              marginInline: "auto",
              fontSize: "1.125rem",
              color: "var(--text-secondary)",
            }}
          >
            Platform online class yang didesain khusus untuk membantumu dari nol sampai bisa freelance, dengan kurikulum outcome-focused dan project real.
          </p>
        </div>

        {/* Main grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "stretch",
          }}
          className="solution-grid"
        >
          {/* Left — Differentiators */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {differentiators.map((d, i) => (
              <div
                key={d.title}
                className={`card reveal delay-${(i + 1) * 100}`}
                style={{
                  padding: "1.5rem",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    backgroundColor: "rgba(164, 53, 240, 0.1)", /* Light purple */
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    flexShrink: 0,
                  }}
                >
                  {d.icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 700,
                      color: "var(--text-primary)",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {d.title}
                  </h3>
                  <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                    {d.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right — Outcomes */}
          <div className="reveal-right" style={{ display: "flex" }}>
            <div
              className="card"
              style={{
                padding: "2.5rem 2rem",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                backgroundColor: "var(--bg-alt)", /* Slightly different background */
              }}
            >
              <h3
                style={{
                  fontWeight: 700,
                  fontSize: "1.25rem",
                  color: "var(--text-primary)",
                  marginBottom: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span>🎯</span> Yang Akan Kamu Bisa
              </h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem", flex: 1 }}>
                {outcomes.map((o) => (
                  <li
                    key={o}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      fontSize: "1rem",
                      color: "var(--text-primary)",
                    }}
                  >
                    <span
                      style={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        backgroundColor: "var(--color-primary)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.75rem",
                        flexShrink: 0,
                        color: "#FFFFFF",
                        marginTop: "2px",
                      }}
                    >
                      ✓
                    </span>
                    {o}
                  </li>
                ))}
              </ul>

              {/* CTA inline */}
              <div
                style={{
                  marginTop: "2rem",
                  paddingTop: "1.5rem",
                  borderTop: "1px solid var(--border-subtle)",
                }}
              >
                <a
                  href="#pricing"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Saya Mau Bisa Semua Ini
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .solution-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
