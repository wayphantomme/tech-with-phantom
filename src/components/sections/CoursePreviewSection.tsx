"use client";

import { useState } from "react";

const curriculum = [
  {
    title: "Module 1: Foundation (HTML, CSS, JS, TypeScript)",
    lessons: [
      "Setup environment & basic tooling",
      "HTML5 & Semantic Web",
      "CSS Modern & Flexbox/Grid",
      "JavaScript DOM & ES6+",
      "TypeScript Basic & Type Safety",
    ],
  },
  {
    title: "Module 2: Backend (Next.js, PostgreSQL, Prisma, Auth)",
    lessons: [
      "Intro to Next.js App Router",
      "Server Components vs Client Components",
      "Setup PostgreSQL dengan Neon",
      "Database schema & Prisma ORM",
      "Authentication dengan NextAuth / Auth.js",
    ],
  },
  {
    title: "Module 3: Fullstack Project (Build, Deploy, Payment)",
    lessons: [
      "Membangun UI Dashboard",
      "Integrasi API & Server Actions",
      "Setup Stripe Payment Gateway",
      "Webhooks & Subscription Logic",
      "Deploy ke Vercel & Production Best Practices",
    ],
  },
];

export default function CoursePreviewSection() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section
      id="kurikulum"
      className="section"
    >
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 className="reveal text-balance">
            Intip Dalam Kelas
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
            Nggak ada lagi tutorial yang melompat-lompat. Semua disusun rapi dari awal sampai akhir.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "flex-start",
          }}
          className="preview-grid"
        >
          {/* Left: Video Placeholder */}
          <div className="reveal">
            <div
              style={{
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                border: "1px solid var(--border-subtle)",
                position: "relative",
                aspectRatio: "16/9",
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://res.cloudinary.com/dwsapeq3m/image/upload/v1783683580/full-stack-webdev_s062kv.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "1rem",
                boxShadow: "var(--shadow-sm)",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  background: "var(--color-primary)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "transform 0.2s ease",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                }}
                className="play-button"
              >
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "10px solid transparent",
                    borderBottom: "10px solid transparent",
                    borderLeft: "16px solid white",
                    marginLeft: "4px",
                  }}
                />
              </div>
              <div style={{ color: "#FFFFFF", fontWeight: 700, textShadow: "0 2px 4px rgba(0,0,0,0.6)" }}>Tonton Video Preview</div>
            </div>
            
            <div
              style={{
                marginTop: "1.5rem",
                display: "flex",
                justifyContent: "space-between",
                padding: "1.5rem",
                backgroundColor: "var(--bg-alt)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div style={{ textAlign: "center", flex: 1 }}>
                <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)" }}>40+</div>
                <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>Video Lessons</div>
              </div>
              <div style={{ textAlign: "center", flex: 1, borderLeft: "1px solid var(--border-subtle)", borderRight: "1px solid var(--border-subtle)" }}>
                <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)" }}>20+</div>
                <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>Jam Konten</div>
              </div>
              <div style={{ textAlign: "center", flex: 1 }}>
                <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)" }}>5</div>
                <div style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>Real Projects</div>
              </div>
            </div>
          </div>

          {/* Right: Accordion Curriculum */}
          <div className="reveal delay-100">
            <div style={{ display: "flex", flexDirection: "column", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", overflow: "hidden" }}>
              {curriculum.map((module, i) => (
                <div
                  key={i}
                  style={{
                    borderBottom: i < curriculum.length - 1 ? "1px solid var(--border-subtle)" : "none",
                    background: openIndex === i ? "var(--bg-alt)" : "var(--bg-surface)",
                  }}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                    style={{
                      width: "100%",
                      padding: "1.25rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      background: "transparent",
                      border: "none",
                      color: "var(--text-primary)",
                      fontFamily: "var(--font-body)",
                      fontWeight: 700,
                      fontSize: "1rem",
                      cursor: "pointer",
                      textAlign: "left",
                    }}
                  >
                    <span>{module.title}</span>
                    <span style={{ fontSize: "1.25rem", color: "var(--text-secondary)" }}>
                      {openIndex === i ? "−" : "+"}
                    </span>
                  </button>
                  
                  <div
                    style={{
                      maxHeight: openIndex === i ? "500px" : "0",
                      opacity: openIndex === i ? 1 : 0,
                      overflow: "hidden",
                      transition: "all 0.2s ease",
                      padding: openIndex === i ? "0 1.25rem 1.25rem 1.25rem" : "0 1.25rem",
                    }}
                  >
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "0.5rem" }}>
                      {module.lessons.map((lesson, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: "flex",
                            alignItems: "flex-start",
                            gap: "0.75rem",
                            fontSize: "0.9375rem",
                            color: "var(--text-secondary)",
                          }}
                        >
                          <span style={{ color: "var(--color-primary)", marginTop: "2px" }}>▶</span>
                          {lesson}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "1.5rem" }}>
              <a href="#" className="btn btn-secondary" style={{ width: "100%", justifyContent: "center" }}>
                Lihat Full Kurikulum
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .preview-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
