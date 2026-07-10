"use client";

export default function FinalCTASection() {
  return (
    <section className="section" style={{ backgroundColor: "var(--text-primary)", color: "#FFFFFF" }}>
      <div className="container">
        <div
          className="reveal"
          style={{
            maxWidth: "800px",
            marginInline: "auto",
            textAlign: "center",
          }}
        >
          <h2 className="text-balance" style={{ marginBottom: "1.5rem", color: "#FFFFFF" }}>
            Mulai Hari Ini, Bangun Karirmu
          </h2>
          
          <p
            style={{
              fontSize: "1.25rem",
              color: "#D1D7DC",
              marginBottom: "2.5rem",
              maxWidth: "600px",
              marginInline: "auto",
            }}
          >
            Ribuan developer sudah mulai membangun karir dan mendapatkan client global. Giliran kamu sekarang.
          </p>

          <a href="#pricing" className="btn btn-primary btn-lg" style={{ width: "100%", maxWidth: "300px" }}>
            Mulai Sekarang
          </a>

          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              color: "#D1D7DC",
              fontSize: "1rem",
            }}
          >
            <span style={{ color: "#FFFFFF" }}>✓</span>
            7-Hari Garansi Uang Kembali
          </div>
        </div>
      </div>
    </section>
  );
}
