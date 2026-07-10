"use client";

const testimonials = [
  {
    name: "Rizky Firmansyah",
    role: "Freelance Web Developer",
    text: "Baru belajar 2 minggu langsung paham konsep React dan Next.js. Sekarang udah dapat client pertama dari Upwork. Kurikulumnya daging semua!",
    avatar: "RF",
    rating: 5,
  },
  {
    name: "Sarah Amanda",
    role: "Frontend Engineer @ Startup",
    text: "Dulu pusing belajar sendiri lewat YouTube. Di Tech with Phantom, alurnya terstruktur banget. Bisa nanya mentor juga kalau error. Recommended!",
    avatar: "SA",
    rating: 5,
  },
  {
    name: "Bima Putra",
    role: "Mahasiswa Informatika",
    text: "Project akhirnya bener-bener kepake buat portfolio kampus dan lamar magang. UI/UX nya juga diajarin biar keliatan pro.",
    avatar: "BP",
    rating: 5,
  },
];

export default function SocialProofSection() {
  return (
    <section
      id="testimoni"
      className="section"
      style={{
        borderTop: "1px solid var(--border-subtle)",
        backgroundColor: "var(--bg-base)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <h2 className="reveal text-balance">
            Mereka Sudah Buktikan
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
            Lebih dari 10.000 alumni sudah bergabung dan mendapatkan karir impian mereka.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="testi-grid"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`card reveal delay-${(i + 1) * 100}`}
              style={{
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div style={{ display: "flex", gap: "2px", color: "#B4690E" }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>{i < t.rating ? "★" : "☆"}</span>
                ))}
              </div>
              <p style={{ fontSize: "1rem", color: "var(--text-primary)", lineHeight: 1.6, flex: 1 }}>
                &quot;{t.text}&quot;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "1rem" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "50%",
                    background: "var(--color-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "1rem",
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)" }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          .testi-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 769px) and (max-width: 1024px) {
          .testi-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
