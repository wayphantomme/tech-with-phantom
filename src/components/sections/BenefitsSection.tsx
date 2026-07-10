"use client";

const benefits = [
  {
    icon: "🗺️",
    title: "Step-by-step Learning Path",
    desc: "Mulai dari dasar sampai advanced. Gak perlu pusing mikir besok harus belajar apa.",
  },
  {
    icon: "💼",
    title: "Portfolio-ready Projects",
    desc: "Build aplikasi real-world yang bisa kamu tunjukin ke calon client atau HRD.",
  },
  {
    icon: "🌍",
    title: "Siap Kerja & Freelance Global",
    desc: "Belajar skill tech yang laku di market internasional, dibayar pakai USD.",
  },
  {
    icon: "⚙️",
    title: "Auth, Payment & Deploy",
    desc: "Bukan cuma koding lokal. Kamu diajarin sampai deploy ke production dan bisa terima duit.",
  },
  {
    icon: "🔄",
    title: "Lifetime Access to Updates",
    desc: "Tech stack berubah? Tenang, modul akan selalu diupdate tanpa perlu bayar lagi.",
  },
  {
    icon: "🤝",
    title: "Community & Mentor Q&A",
    desc: "Mentok error? Tanya di Discord khusus alumni dan langsung dibantu mentor.",
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="section bg-alt" style={{ borderBottom: "1px solid var(--border-subtle)" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 className="reveal text-balance">
            Kenapa Tech with Phantom Berbeda?
          </h2>
          <p
            className="reveal delay-100"
            style={{
              marginTop: "1rem",
              maxWidth: "600px",
              marginInline: "auto",
              color: "var(--text-secondary)",
              fontSize: "1.125rem",
            }}
          >
            Kami nggak sekadar ngajarin sintaks. Kami ngajarin cara build product dan dapet income.
          </p>
        </div>

        {/* Benefits Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="benefits-grid"
        >
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`card reveal delay-${((i % 3) + 1) * 100}`}
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  backgroundColor: "rgba(164, 53, 240, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.5rem",
                }}
              >
                {b.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                }}
              >
                {b.title}
              </h3>
              <p style={{ fontSize: "1rem", color: "var(--text-secondary)", lineHeight: 1.5 }}>
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .benefits-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .benefits-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
