const painPoints = [
  {
    title: "Bingung Mulai dari Mana",
    desc: "Tutorial di YouTube ribuan, tapi gak ada yang jelasin urutan yang bener. Belajar sana-sini tapi gak nyambung.",
  },
  {
    title: "Tutorial Berantakan & Outdated",
    desc: "Nyari tutorial, eh udah outdated atau setengah-setengah. Stuck di error yang gak ada jawabannya.",
  },
  {
    title: "Udah Lama Belajar Tapi Gak Income",
    desc: "Ngerasa udah effort banget, tapi gak tau cara dapet client atau gimana masuk industri tech yang real.",
  },
];

export default function ProblemSection() {
  return (
    <section
      id="problem"
      className="section bg-alt"
      style={{
        borderTop: "1px solid var(--border-subtle)",
        borderBottom: "1px solid var(--border-subtle)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 className="reveal text-balance">
            Banyak Developer yang Ngerasain Hal yang Sama
          </h2>
          <p
            className="reveal delay-100"
            style={{
              marginTop: "1rem",
              maxWidth: "600px",
              marginInline: "auto",
              color: "var(--text-primary)",
              fontSize: "1.125rem",
            }}
          >
            Kalau kamu ngerasa ini, kamu di tempat yang tepat. Masalah-masalah ini bisa diselesaikan dengan sistem yang benar.
          </p>
        </div>

        {/* Pain Point Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="problem-grid"
        >
          {painPoints.map((p, i) => (
            <div
              key={p.title}
              className={`card reveal delay-${(i + 1) * 100}`}
              style={{
                padding: "2rem 1.5rem",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h3
                style={{
                  fontSize: "1.125rem",
                  marginBottom: "0.5rem",
                  color: "var(--text-primary)",
                }}
              >
                {p.title}
              </h3>
              <p style={{ fontSize: "1rem", color: "var(--text-secondary)" }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .problem-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .problem-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
