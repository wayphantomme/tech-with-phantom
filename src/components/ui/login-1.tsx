import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import React from "react";

interface Login1Props {
  heading?: string;
  subheading?: string;
  buttonText?: string;
  googleText?: string;
  signupText?: string;
  signupUrl?: string;
  signupLinkText?: string;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  onGoogleLogin?: () => void;
  isPending?: boolean;
  isGooglePending?: boolean;
  error?: string;
  showName?: boolean;
  mode?: "login" | "register";
}

const Login1 = ({
  heading = "Selamat Datang Kembali",
  subheading = "Login ke akun Tech with Phantom kamu",
  buttonText = "Masuk",
  googleText = "Lanjutkan dengan Google",
  signupText = "Belum punya akun?",
  signupUrl = "/register",
  signupLinkText = "Daftar sekarang",
  onSubmit,
  onGoogleLogin,
  isPending = false,
  isGooglePending = false,
  error,
  showName = false,
  mode = "login",
}: Login1Props) => {
  return (
    <div style={{ display: "flex", minHeight: "100vh", fontFamily: "var(--font-body, 'Inter', sans-serif)" }}>

      {/* ─── Left Panel ─── */}
      <div
        className="auth-left-panel"
        style={{
          flex: "0 0 45%",
          background: "linear-gradient(145deg, #1a0533 0%, #3b0f8c 40%, #a435f0 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "3rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative blobs */}
        <div style={{
          position: "absolute", top: "-80px", right: "-80px",
          width: "300px", height: "300px",
          background: "rgba(255,255,255,0.06)",
          borderRadius: "50%",
        }} />
        <div style={{
          position: "absolute", bottom: "80px", left: "-60px",
          width: "200px", height: "200px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "50%",
        }} />
        <div style={{
          position: "absolute", bottom: "-40px", right: "60px",
          width: "150px", height: "150px",
          background: "rgba(164,53,240,0.3)",
          borderRadius: "50%",
          filter: "blur(40px)",
        }} />

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none", zIndex: 1 }}>
          <div style={{
            width: 40, height: 40, borderRadius: "8px",
            background: "rgba(255,255,255,0.15)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.2)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "1.25rem", fontWeight: 800, color: "#FFFFFF",
          }}>T</div>
          <span style={{ fontFamily: "var(--font-display, 'Plus Jakarta Sans', sans-serif)", fontWeight: 700, fontSize: "1.125rem", color: "#FFFFFF" }}>
            Tech with Phantom
          </span>
        </Link>

        {/* Center copy */}
        <div style={{ zIndex: 1, display: "flex", flexDirection: "column", justifyContent: "center", flex: 1, marginBlock: "3rem" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "999px",
            padding: "6px 16px",
            fontSize: "0.8125rem", color: "rgba(255,255,255,0.9)",
            marginBottom: "1.5rem",
            backdropFilter: "blur(8px)",
            width: "fit-content",
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#4ade80", display: "inline-block" }} />
            Platform kelas online terbaik
          </div>

          <h2 style={{
            fontSize: "2.5rem", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.25,
            fontFamily: "var(--font-display, 'Plus Jakarta Sans', sans-serif)",
            marginBottom: "1.25rem",
            whiteSpace: "pre-line",
          }}>
            {mode === "register" ? "Mulai perjalanan\nbelajarmu hari ini" : "Lanjutkan perjalanan\nbelajarmu"}
          </h2>
          <p style={{ color: "rgba(255,255,255,0.75)", lineHeight: 1.6, maxWidth: "380px", fontSize: "1rem" }}>
            {mode === "register"
              ? "Bergabung dengan ribuan pelajar yang sudah memulai karir di dunia teknologi bersama kami."
              : "Akses semua kelas Web Development dan AI yang sudah kamu beli. Belajar kapan saja, di mana saja."}
          </p>
        </div>

        {/* Bottom testimonial card */}
        <div style={{
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "16px",
          padding: "1.25rem",
          backdropFilter: "blur(12px)",
          zIndex: 1,
        }}>
          <div style={{ display: "flex", gap: "3px", marginBottom: "0.75rem" }}>
            {[...Array(5)].map((_, i) => (
              <span key={i} style={{ color: "#fbbf24", fontSize: "1rem" }}>★</span>
            ))}
          </div>
          <p style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1rem" }}>
            &ldquo;Materi sangat jelas dan terstruktur. Dalam 3 bulan saya sudah bisa bikin web sendiri!&rdquo;
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
            <div style={{
              width: 36, height: 36, borderRadius: "50%",
              background: "linear-gradient(135deg, #f9a8d4, #c084fc)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "0.875rem", fontWeight: 700, color: "#fff",
            }}>A</div>
            <div>
              <div style={{ color: "#FFFFFF", fontWeight: 600, fontSize: "0.875rem" }}>Andi Pratama</div>
              <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem" }}>Web Developer Graduate</div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Right Panel (Form) ─── */}
      <div style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FAFAFA",
        padding: "2rem",
      }}>
        <div style={{ width: "100%", maxWidth: "420px" }}>

          {/* Back link */}
          <Link
            href="/"
            style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              fontSize: "0.8125rem", color: "var(--text-muted, #6A6F73)",
              textDecoration: "none", marginBottom: "2rem",
              transition: "color 0.2s",
            }}
            className="auth-back-link"
          >
            ← Kembali ke Beranda
          </Link>

          {/* Heading */}
          <div style={{ marginBottom: "2rem" }}>
            <h1 style={{
              fontSize: "1.75rem", fontWeight: 800, color: "var(--text-primary, #1C1D1F)",
              fontFamily: "var(--font-display, 'Plus Jakarta Sans', sans-serif)",
              marginBottom: "0.375rem",
            }}>{heading}</h1>
            <p style={{ color: "var(--text-muted, #6A6F73)", fontSize: "0.9375rem" }}>{subheading}</p>
          </div>

          {/* Google Button */}
          <button
            onClick={onGoogleLogin}
            disabled={isPending || isGooglePending}
            type="button"
            style={{
              width: "100%",
              display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
              padding: "0.75rem 1rem",
              backgroundColor: "#FFFFFF",
              border: "1.5px solid #E2E8F0",
              borderRadius: "10px",
              fontSize: "0.9375rem", fontWeight: 500, color: "#374151",
              cursor: "pointer",
              boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
              transition: "all 0.2s ease",
              opacity: isGooglePending ? 0.7 : 1,
            }}
            className="google-auth-btn"
          >
            <FcGoogle size={20} />
            {isGooglePending ? "Mengarahkan..." : googleText}
          </button>

          {/* Divider */}
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", margin: "1.5rem 0" }}>
            <div style={{ flex: 1, height: "1px", backgroundColor: "#E2E8F0" }} />
            <span style={{ fontSize: "0.8125rem", color: "var(--text-muted, #6A6F73)", whiteSpace: "nowrap" }}>atau dengan email</span>
            <div style={{ flex: 1, height: "1px", backgroundColor: "#E2E8F0" }} />
          </div>

          {/* Error */}
          {error && (
            <div style={{
              background: "rgba(211,47,47,0.08)", color: "#D32F2F",
              border: "1px solid rgba(211,47,47,0.2)",
              padding: "0.75rem 1rem", borderRadius: "8px",
              fontSize: "0.875rem", marginBottom: "1rem",
            }}>
              ⚠️ {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {showName && (
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <label style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--text-primary, #1C1D1F)" }}>
                  Nama Lengkap
                </label>
                <input
                  id="name" name="name" type="text"
                  placeholder="Masukkan nama lengkap"
                  required disabled={isPending}
                  className="auth-input"
                  style={{
                    width: "100%", padding: "0.75rem 1rem",
                    border: "1.5px solid #E2E8F0", borderRadius: "10px",
                    fontSize: "0.9375rem", color: "var(--text-primary, #1C1D1F)",
                    backgroundColor: "#FFFFFF", outline: "none",
                    boxSizing: "border-box", transition: "border-color 0.2s",
                  }}
                />
              </div>
            )}

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--text-primary, #1C1D1F)" }}>
                Email
              </label>
              <input
                id="email" name="email" type="email"
                placeholder="nama@email.com"
                required disabled={isPending}
                className="auth-input"
                style={{
                  width: "100%", padding: "0.75rem 1rem",
                  border: "1.5px solid #E2E8F0", borderRadius: "10px",
                  fontSize: "0.9375rem", color: "var(--text-primary, #1C1D1F)",
                  backgroundColor: "#FFFFFF", outline: "none",
                  boxSizing: "border-box", transition: "border-color 0.2s",
                }}
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--text-primary, #1C1D1F)" }}>
                Password
              </label>
              <input
                id="password" name="password" type="password"
                placeholder="Minimal 6 karakter"
                required disabled={isPending} minLength={6}
                className="auth-input"
                style={{
                  width: "100%", padding: "0.75rem 1rem",
                  border: "1.5px solid #E2E8F0", borderRadius: "10px",
                  fontSize: "0.9375rem", color: "var(--text-primary, #1C1D1F)",
                  backgroundColor: "#FFFFFF", outline: "none",
                  boxSizing: "border-box", transition: "border-color 0.2s",
                }}
              />
            </div>

            <button
              type="submit"
              disabled={isPending || isGooglePending}
              style={{
                width: "100%", padding: "0.875rem",
                background: "linear-gradient(135deg, #a435f0 0%, #8710d8 100%)",
                color: "#FFFFFF", border: "none", borderRadius: "10px",
                fontSize: "0.9375rem", fontWeight: 600,
                cursor: "pointer", marginTop: "0.25rem",
                boxShadow: "0 4px 14px rgba(164,53,240,0.35)",
                transition: "all 0.2s ease",
                opacity: isPending ? 0.7 : 1,
              }}
              className="auth-submit-btn"
            >
              {isPending ? "Memproses..." : buttonText}
            </button>
          </form>

          {/* Signup link */}
          <p style={{ textAlign: "center", marginTop: "1.5rem", fontSize: "0.875rem", color: "var(--text-muted, #6A6F73)" }}>
            {signupText}{" "}
            <Link href={signupUrl} style={{ color: "var(--color-primary, #A435F0)", fontWeight: 600, textDecoration: "none" }} className="auth-signup-link">
              {signupLinkText}
            </Link>
          </p>
        </div>
      </div>

      <style>{`
        .auth-left-panel { display: flex !important; }
        .auth-back-link:hover { color: var(--text-primary, #1C1D1F) !important; }
        .google-auth-btn:hover:not(:disabled) { 
          box-shadow: 0 4px 12px rgba(0,0,0,0.1) !important; 
          border-color: #CBD5E1 !important;
          transform: translateY(-1px);
        }
        .auth-input:focus { border-color: #A435F0 !important; box-shadow: 0 0 0 3px rgba(164,53,240,0.1) !important; }
        .auth-submit-btn:hover:not(:disabled) { 
          box-shadow: 0 6px 20px rgba(164,53,240,0.45) !important; 
          transform: translateY(-1px); 
        }
        .auth-signup-link:hover { text-decoration: underline !important; }

        @media (max-width: 768px) {
          .auth-left-panel { display: none !important; }
        }
      `}</style>
    </div>
  );
};

export { Login1 };
