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
          <div style={{ maxWidth: "560px" }} className="hero-copy">
            {/* Headline */}
            <h1
              className="reveal text-balance"
              style={{ marginBottom: "1rem" }}
            >
              Belajar AI & Web Development sampai Dapat Client Global
            </h1>

            {/* Subheadline */}
            <p
              className="reveal delay-100 hero-subheadline"
              style={{
                fontSize: "1rem",
                color: "var(--text-secondary)",
                marginBottom: "2rem",
                lineHeight: 1.6,
              }}
            >
              Tanpa bingung roadmap. Langsung praktek project real dan siap freelance atau kerja remote.
            </p>

            {/* CTAs */}
            <div
              className="reveal delay-200 hero-ctas"
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

          {/* Right — Image */}
          <div
            className="reveal delay-200 hero-visual"
            style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", width: "100%", maxWidth: "480px", marginInline: "auto" }}
          >
            {/* Soft Radial Background Glow */}
            <div
              style={{
                position: "absolute",
                width: "120%",
                height: "120%",
                background: "radial-gradient(circle, rgba(164, 53, 240, 0.18) 0%, rgba(255,255,255,0) 70%)",
                zIndex: 0,
                pointerEvents: "none",
              }}
              className="glow-pulse-anim"
            />

            {/* Profile Image Wrapper */}
            <div
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "1/1",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                zIndex: 10,
              }}
            >
              <img
                src="https://res.cloudinary.com/dwsapeq3m/image/upload/v1782827137/Phantom_Profile_PNG_tj3wpz.png"
                alt="Phantom Profile"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  zIndex: 10,
                }}
              />
              
              {/* Floating Badge TypeScript (In front) */}
              <div
                style={{
                  position: "absolute",
                  top: "12%",
                  right: "-2%",
                  width: "56px",
                  height: "56px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "16px",
                  border: "1px solid var(--border-subtle)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 20,
                  transition: "transform 0.2s ease",
                  cursor: "pointer",
                }}
                className="float-anim-slow hover-scale"
                title="TypeScript"
              >
                <svg viewBox="0 0 100 100" width="32" height="32"><rect width="100" height="100" fill="#3178c6" rx="12"/><text x="80" y="80" fill="#fff" font-family="sans-serif" font-weight="bold" font-size="50" text-anchor="end">TS</text></svg>
              </div>

              {/* Floating Badge HTML5 (Behind profile slightly) */}
              <div
                style={{
                  position: "absolute",
                  top: "22%",
                  left: "-4%",
                  width: "56px",
                  height: "56px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "16px",
                  border: "1px solid var(--border-subtle)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 5,
                  transition: "transform 0.2s ease",
                  cursor: "pointer",
                }}
                className="float-anim-medium hover-scale"
                title="HTML5"
              >
                <svg viewBox="0 0 512 512" width="28" height="28" fill="#E34F26"><path d="M71,101 114,484 256,512 398,484 441,101 71,101z M372,204 153,204 159,252 367,252 355,386 256,413 157,386 150,314 199,314 202,347 256,362 310,347 317,272 135,272 118,121 380,121 372,204z"/></svg>
              </div>

              {/* Floating Badge Stripe (In front) */}
              <div
                style={{
                  position: "absolute",
                  bottom: "18%",
                  left: "2%",
                  width: "56px",
                  height: "56px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "16px",
                  border: "1px solid var(--border-subtle)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 20,
                  transition: "transform 0.2s ease",
                  cursor: "pointer",
                }}
                className="float-anim-slow hover-scale"
                title="Stripe"
              >
                <svg viewBox="0 0 24 24" width="26" height="26" fill="#635BFF"><path d="M13.962 10.42c0-1.05-.722-1.464-1.942-1.464-1.547 0-3.32.61-3.32 2.343 0 2.473 6.945 1.298 6.945 5.673 0 3.385-2.846 4.708-6.19 4.708-1.92 0-3.95-.595-5.455-1.478v-3.79c1.6.93 3.75 1.48 5.27 1.48 1.42 0 2.18-.54 2.18-1.4 0-2.6-6.945-1.436-6.945-5.69 0-3.23 2.766-4.6 5.962-4.6 1.768 0 3.525.46 4.545 1.066v3.744z"/></svg>
              </div>

              {/* Floating Badge GitHub (In front) */}
              <div
                style={{
                  position: "absolute",
                  bottom: "22%",
                  right: "-2%",
                  width: "56px",
                  height: "56px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "16px",
                  border: "1px solid var(--border-subtle)",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 20,
                  transition: "transform 0.2s ease",
                  cursor: "pointer",
                }}
                className="float-anim-medium hover-scale"
                title="GitHub"
              >
                <svg viewBox="0 0 24 24" width="28" height="28" fill="#181717"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              </div>

              {/* Mentor Status Badge (Covers cut-off edge) */}
              <div
                style={{
                  position: "absolute",
                  bottom: "4%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  backgroundColor: "rgba(255, 255, 255, 0.9)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "9999px",
                  padding: "0.5rem 1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  zIndex: 25,
                  whiteSpace: "nowrap",
                }}
              >
                <span style={{ fontSize: "1rem" }}>💻</span>
                <span style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--text-primary)", fontFamily: "var(--font-display)" }}>
                  Mentor: Wayan Phantom
                </span>
                <span style={{ color: "#1D9BF0", fontSize: "0.875rem" }}>✓</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(2deg); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(-2deg); }
        }
        @keyframes glow-pulse {
          0%, 100% { transform: scale(0.95); opacity: 0.7; }
          50% { transform: scale(1.05); opacity: 0.9; }
        }
        .float-anim-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .float-anim-medium {
          animation: float-medium 4.5s ease-in-out infinite;
        }
        .glow-pulse-anim {
          animation: glow-pulse 4s ease-in-out infinite;
        }
        .hover-scale:hover {
          transform: scale(1.15) !important;
          box-shadow: 0 12px 40px rgba(164, 53, 240, 0.25) !important;
          border-color: var(--color-primary) !important;
        }
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            padding-block: 3rem;
          }
          .hero-copy {
            max-width: 100% !important;
            text-align: center;
          }
          .hero-ctas {
            justify-content: center;
          }
          .hero-visual {
            justify-content: center !important;
            margin-top: 2rem;
            max-width: 320px !important;
            margin-inline: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
