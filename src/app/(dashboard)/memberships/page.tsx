import { auth } from "@/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export const metadata = {
  title: "My Memberships | Tech with Phantom",
};

export default async function MembershipsPage() {
  const session = await auth();
  if (!session?.user?.id) {
    redirect("/login");
  }

  const user = await db.user.findUnique({
    where: { id: session.user.id },
    select: { createdAt: true },
  });

  const joinedDate = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

  const membership = {
    name: "Tech with Phantom Ultimate",
    status: "ACTIVE",
    period: "Lifetime",
    startDate: joinedDate,
    features: [
      "Akses penuh ke semua kursus",
      "Update konten seumur hidup",
      "Akses komunitas Discord eksklusif",
      "Sertifikat penyelesaian kursus",
      "Prioritas support dari mentor",
    ],
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>My Memberships</h1>

      {/* Active Membership Card */}
      <div
        className="card"
        style={{
          padding: "1.75rem",
          borderTop: "4px solid var(--color-primary)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decoration */}
        <div
          style={{
            position: "absolute",
            top: "-30px",
            right: "-30px",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            backgroundColor: "rgba(164,53,240,0.06)",
          }}
        />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
              <span
                style={{
                  backgroundColor: "rgba(30,130,76,0.1)",
                  color: "#1E824C",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  padding: "0.3rem 0.875rem",
                  borderRadius: "9999px",
                  letterSpacing: "0.06em",
                }}
              >
                ✓ {membership.status}
              </span>
            </div>
            <h2 style={{ fontSize: "1.375rem", fontWeight: 800, marginBottom: "0.25rem", color: "var(--text-primary)" }}>
              {membership.name}
            </h2>
            <p style={{ fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
              Aktif sejak {membership.startDate}
            </p>
          </div>

          <div
            style={{
              textAlign: "center",
              padding: "1rem 1.5rem",
              backgroundColor: "var(--bg-alt)",
              borderRadius: "8px",
            }}
          >
            <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--color-primary)" }}>
              {membership.period}
            </div>
            <div style={{ fontSize: "0.8125rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
              Masa Berlaku
            </div>
          </div>
        </div>

        {/* Features */}
        <div style={{ marginTop: "1.75rem", paddingTop: "1.5rem", borderTop: "1px solid var(--border-subtle)" }}>
          <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text-secondary)" }}>
            YANG KAMU DAPATKAN
          </h3>
          <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.625rem" }} className="features-grid">
            {membership.features.map((feat) => (
              <li key={feat} style={{ display: "flex", alignItems: "center", gap: "0.625rem", fontSize: "0.9375rem", color: "var(--text-primary)" }}>
                <span style={{ color: "var(--color-primary)", fontWeight: 700, flexShrink: 0 }}>✓</span>
                {feat}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .features-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
