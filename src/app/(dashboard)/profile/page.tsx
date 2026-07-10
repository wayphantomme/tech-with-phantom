import { auth } from "@/auth";
import { getAllCourses } from "@/actions/course.actions";
import { db } from "@/lib/db";

export const metadata = {
  title: "Profile | Tech with Phantom",
};

export default async function DashboardPage() {
  const session = await auth();
  const courses = await getAllCourses();

  const user = session?.user?.id ? await db.user.findUnique({
    where: { id: session.user.id },
    select: { createdAt: true },
  }) : null;

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

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Profile Information</h1>

      {/* Avatar + Name */}
      <div className="card" style={{ padding: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.25rem", marginBottom: "1.75rem" }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              backgroundColor: "var(--color-primary)",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2rem",
              fontWeight: 700,
              flexShrink: 0,
            }}
          >
            {session?.user?.name ? session.user.name.charAt(0).toUpperCase() : "U"}
          </div>
          <div>
            <div style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text-primary)" }}>
              {session?.user?.name || "User"}
            </div>
            <div style={{ fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
              {session?.user?.email}
            </div>
          </div>
        </div>

        {/* Info Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }} className="profile-stats-grid">
          <div
            style={{
              padding: "1.25rem",
              backgroundColor: "var(--bg-alt)",
              borderRadius: "8px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100px",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--color-primary)" }}>
              {courses.length}
            </div>
            <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", marginTop: "0.5rem", fontWeight: 500 }}>
              Kelas Tersedia
            </div>
          </div>
          <div
            style={{
              padding: "1.25rem",
              backgroundColor: "var(--bg-alt)",
              borderRadius: "8px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100px",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#1E824C" }}>
              ACTIVE
            </div>
            <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", marginTop: "0.5rem", fontWeight: 500 }}>
              Status Akun
            </div>
          </div>
          <div
            style={{
              padding: "1.25rem",
              backgroundColor: "var(--bg-alt)",
              borderRadius: "8px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100px",
              border: "1px solid var(--border-subtle)",
            }}
          >
            <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--text-primary)" }}>
              Lifetime
            </div>
            <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", marginTop: "0.5rem", fontWeight: 500 }}>
              Masa Akses
            </div>
          </div>
        </div>
      </div>

      {/* Detail Info */}
      <div className="card" style={{ padding: "1.5rem" }}>
        <h2 style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "1.25rem" }}>Detail Akun</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            { label: "Nama Lengkap", value: session?.user?.name || "—" },
            { label: "Alamat Email", value: session?.user?.email || "—" },
            { label: "Bergabung Sejak", value: joinedDate },
            { label: "Role", value: "Student" },
          ].map(({ label, value }) => (
            <div
              key={label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBlock: "0.875rem",
                borderBottom: "1px solid var(--border-subtle)",
              }}
            >
              <span style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>{label}</span>
              <span style={{ fontSize: "0.9375rem", fontWeight: 500, color: "var(--text-primary)" }}>{value}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .profile-stats-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
