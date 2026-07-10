"use client";

import { useState } from "react";

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="section bg-alt" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2 className="reveal text-balance">
            Investasi Leher ke Atas
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
            Pilih paket yang sesuai dengan kebutuhanmu. Batalkan kapan saja.
          </p>
        </div>

        {/* Toggle Billing */}
        <div
          className="reveal delay-200"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          <span style={{ color: !isAnnual ? "var(--text-primary)" : "var(--text-muted)", fontWeight: 700 }}>
            Bulanan
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            style={{
              width: "56px",
              height: "32px",
              borderRadius: "999px",
              background: isAnnual ? "var(--color-primary)" : "var(--text-secondary)",
              border: "none",
              position: "relative",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            aria-label="Toggle annual billing"
          >
            <div
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "50%",
                background: "#FFFFFF",
                position: "absolute",
                top: "4px",
                left: isAnnual ? "28px" : "4px",
                transition: "all 0.2s ease",
              }}
            />
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ color: isAnnual ? "var(--text-primary)" : "var(--text-muted)", fontWeight: 700 }}>
              Tahunan
            </span>
            <span className="badge badge-primary">Hemat 20%</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            maxWidth: "900px",
            marginInline: "auto",
          }}
          className="pricing-grid"
        >
          {/* Basic Plan */}
          <div
            className="card reveal delay-200"
            style={{
              padding: "2.5rem 2rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ fontSize: "1.5rem", color: "var(--text-primary)", marginBottom: "0.5rem" }}>Basic</h3>
              <p style={{ fontSize: "1rem", color: "var(--text-secondary)" }}>
                Cocok untuk pemula yang ingin mulai belajar.
              </p>
            </div>
            <div style={{ marginBottom: "2rem", display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
              <span style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--text-primary)" }}>
                Rp{isAnnual ? "79.000" : "99.000"}
              </span>
              <span style={{ fontSize: "1rem", color: "var(--text-secondary)" }}>/bln</span>
            </div>
            
            <a href="#" className="btn btn-secondary" style={{ width: "100%", justifyContent: "center", marginBottom: "2rem", padding: "1rem" }}>
              Pilih Basic
            </a>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem", marginTop: "auto" }}>
              {[
                "Akses semua modul dasar",
                "2 project portfolio",
                "Akses forum komunitas",
                "Sertifikat penyelesaian",
              ].map((feature, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "1rem", color: "var(--text-secondary)" }}>
                  <span style={{ color: "var(--text-primary)", marginTop: "2px" }}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Premium Plan */}
          <div
            className="card reveal delay-300"
            style={{
              padding: "2.5rem 2rem",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              borderTop: "4px solid var(--color-primary)",
              boxShadow: "var(--shadow-hover)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                background: "var(--color-primary)",
                color: "#FFFFFF",
                padding: "0.25rem 1rem",
                borderBottomLeftRadius: "var(--radius-md)",
                fontSize: "0.875rem",
                fontWeight: 700,
              }}
            >
              BEST VALUE
            </div>
            
            <div style={{ marginBottom: "1.5rem" }}>
              <h3 style={{ fontSize: "1.5rem", color: "var(--text-primary)", marginBottom: "0.5rem" }}>Premium</h3>
              <p style={{ fontSize: "1rem", color: "var(--text-secondary)" }}>
                Akses lengkap untuk jadi fullstack developer pro.
              </p>
            </div>
            <div style={{ marginBottom: "2rem", display: "flex", alignItems: "baseline", gap: "0.5rem" }}>
              <span style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--text-primary)" }}>
                Rp{isAnnual ? "119.000" : "149.000"}
              </span>
              <span style={{ fontSize: "1rem", color: "var(--text-secondary)" }}>/bln</span>
            </div>
            
            <a href="#" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", marginBottom: "2rem", padding: "1rem" }}>
              Pilih Premium
            </a>

            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem", marginTop: "auto" }}>
              {[
                "Semua fitur di Basic",
                "Akses ke modul Advanced & Fullstack",
                "5 real-world project siap portfolio",
                "Modul persiapan karir & freelance",
                "Priority Q&A mentor support",
                "Akses kode sumber lengkap",
              ].map((feature, i) => (
                <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "1rem", color: "var(--text-primary)" }}>
                  <span style={{ color: "var(--color-primary)", marginTop: "2px" }}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
