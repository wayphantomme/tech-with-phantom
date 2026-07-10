"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/profile", label: "Profile Information", icon: "👤" },
  { href: "/orders", label: "Orders History", icon: "💳" },
  { href: "/memberships", label: "My Memberships", icon: "🎟️" },
  { href: "/settings", label: "Account Settings", icon: "⚙️" },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside style={{ width: "260px", flexShrink: 0 }} className="dashboard-sidebar">
      <div className="card" style={{ padding: "1rem" }}>
        <nav style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.75rem 1rem",
                  borderRadius: "6px",
                  fontSize: "0.9375rem",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "var(--color-primary)" : "var(--text-primary)",
                  backgroundColor: isActive ? "rgba(164,53,240,0.08)" : "transparent",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                className="dashboard-nav-item"
              >
                <span>{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
      <style>{`
        .dashboard-nav-item:hover {
          background-color: var(--bg-alt);
        }
        @media (max-width: 768px) {
          .dashboard-sidebar {
            width: 100% !important;
            margin-bottom: 1.5rem;
          }
        }
      `}</style>
    </aside>
  );
}
