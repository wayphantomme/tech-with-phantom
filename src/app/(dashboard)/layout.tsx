import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import ProfileDropdown from "@/components/layout/ProfileDropdown";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--bg-alt)", display: "flex", flexDirection: "column" }}>
      {/* Dashboard Header */}
      <header style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid var(--border-subtle)", position: "sticky", top: 0, zIndex: 50 }}>
        <div className="container dashboard-header-inner" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "72px" }}>
          <Link href="/" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.25rem", color: "var(--text-primary)", display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
            <div style={{ width: 32, height: 32, backgroundColor: "var(--color-primary)", color: "#FFFFFF", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, borderRadius: "4px" }}>T</div>
            <span className="dashboard-logo-text">Tech with Phantom</span>
          </Link>
          <div className="dashboard-header-right" style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <Link 
              href="/courses" 
              className="dashboard-nav-link"
              style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--text-primary)", textDecoration: "none", transition: "color 0.2s" }}
            >
              My Courses
            </Link>
            <ProfileDropdown user={{ name: session.user?.name, email: session.user?.email, image: session.user?.image }} />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="container" style={{ paddingBlock: "2.5rem", flex: 1 }}>
        <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }} className="dashboard-layout-grid">
          {/* Sidebar */}
          <DashboardSidebar />

          {/* Page Content */}
          <div style={{ flex: 1, minWidth: 0 }}>
            {children}
          </div>
        </div>
      </main>

      <style>{`
        .dashboard-nav-link:hover { color: var(--color-primary) !important; }
        @media (max-width: 768px) {
          .dashboard-layout-grid { flex-direction: column !important; }
          .dashboard-logo-text { display: none !important; }
          .dashboard-header-inner {
            height: 60px !important;
            padding-inline: 1rem !important;
          }
          .dashboard-header-right {
            gap: 0.75rem !important;
          }
        }
      `}</style>
    </div>
  );
}
