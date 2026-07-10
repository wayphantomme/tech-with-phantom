"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [profileSaved, setProfileSaved] = useState(false);
  const [passwordSaved, setPasswordSaved] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Account Settings</h1>

      {/* Edit Profile */}
      <div className="card" style={{ padding: "1.75rem" }}>
        <h2 style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "0.25rem" }}>Edit Profile</h2>
        <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
          Perbarui informasi profil publik kamu.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setProfileSaved(true);
            setTimeout(() => setProfileSaved(false), 3000);
          }}
          style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="settings-grid">
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--text-primary)" }}>
                Nama Lengkap
              </label>
              <input
                type="text"
                defaultValue="Phantom Megaditha"
                className="form-input"
                style={{ width: "100%", padding: "0.75rem 1rem", border: "1px solid var(--border-subtle)", borderRadius: "6px", fontSize: "0.9375rem", color: "var(--text-primary)", backgroundColor: "#FFFFFF", boxSizing: "border-box" }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--text-primary)" }}>
                Nomor Telepon
              </label>
              <input
                type="tel"
                defaultValue="085013914711"
                className="form-input"
                style={{ width: "100%", padding: "0.75rem 1rem", border: "1px solid var(--border-subtle)", borderRadius: "6px", fontSize: "0.9375rem", color: "var(--text-primary)", backgroundColor: "#FFFFFF", boxSizing: "border-box" }}
              />
            </div>
          </div>
          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--text-primary)" }}>
              Alamat Email
            </label>
            <input
              type="email"
              defaultValue="phantom@techwithphantom.com"
              className="form-input"
              style={{ width: "100%", padding: "0.75rem 1rem", border: "1px solid var(--border-subtle)", borderRadius: "6px", fontSize: "0.9375rem", color: "var(--text-primary)", backgroundColor: "#FFFFFF", boxSizing: "border-box" }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <button
              type="submit"
              className="btn btn-primary"
            >
              Simpan Perubahan
            </button>
            {profileSaved && (
              <span style={{ fontSize: "0.875rem", color: "#1E824C", fontWeight: 600 }}>
                ✓ Profil berhasil disimpan!
              </span>
            )}
          </div>
        </form>
      </div>

      {/* Change Password */}
      <div className="card" style={{ padding: "1.75rem" }}>
        <h2 style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "0.25rem" }}>Change Password</h2>
        <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "1.5rem" }}>
          Gunakan kata sandi yang kuat dan unik untuk keamanan akunmu.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setPasswordSaved(true);
            setTimeout(() => setPasswordSaved(false), 3000);
          }}
          style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
        >
          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--text-primary)" }}>
              Password Lama
            </label>
            <input
              type="password"
              placeholder="Masukkan password lama"
              className="form-input"
              style={{ width: "100%", padding: "0.75rem 1rem", border: "1px solid var(--border-subtle)", borderRadius: "6px", fontSize: "0.9375rem", color: "var(--text-primary)", backgroundColor: "#FFFFFF", boxSizing: "border-box" }}
            />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }} className="settings-grid">
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--text-primary)" }}>
                Password Baru
              </label>
              <input
                type="password"
                placeholder="Masukkan password baru"
                className="form-input"
                style={{ width: "100%", padding: "0.75rem 1rem", border: "1px solid var(--border-subtle)", borderRadius: "6px", fontSize: "0.9375rem", color: "var(--text-primary)", backgroundColor: "#FFFFFF", boxSizing: "border-box" }}
              />
            </div>
            <div>
              <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem", color: "var(--text-primary)" }}>
                Konfirmasi Password Baru
              </label>
              <input
                type="password"
                placeholder="Ulangi password baru"
                className="form-input"
                style={{ width: "100%", padding: "0.75rem 1rem", border: "1px solid var(--border-subtle)", borderRadius: "6px", fontSize: "0.9375rem", color: "var(--text-primary)", backgroundColor: "#FFFFFF", boxSizing: "border-box" }}
              />
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <button type="submit" className="btn btn-primary">
              Ganti Password
            </button>
            {passwordSaved && (
              <span style={{ fontSize: "0.875rem", color: "#1E824C", fontWeight: 600 }}>
                ✓ Password berhasil diperbarui!
              </span>
            )}
          </div>
        </form>
      </div>

      {/* Danger Zone */}
      <div className="card" style={{ padding: "1.75rem", borderTop: "4px solid var(--color-danger, #e53e3e)" }}>
        <h2 style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "0.25rem", color: "var(--color-danger, #e53e3e)" }}>
          Danger Zone
        </h2>
        <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)", marginBottom: "1.25rem" }}>
          Tindakan di bawah ini tidak dapat dibatalkan. Harap berhati-hati.
        </p>
        <button
          style={{
            padding: "0.75rem 1.25rem",
            border: "1px solid var(--color-danger, #e53e3e)",
            borderRadius: "6px",
            backgroundColor: "transparent",
            color: "var(--color-danger, #e53e3e)",
            fontSize: "0.875rem",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Hapus Akun Saya
        </button>
      </div>

      <style>{`
        .form-input:focus {
          outline: none;
          border-color: var(--color-primary) !important;
          box-shadow: 0 0 0 3px rgba(164,53,240,0.1);
        }
        @media (max-width: 640px) {
          .settings-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
