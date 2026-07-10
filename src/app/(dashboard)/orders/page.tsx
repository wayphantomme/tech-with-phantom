import { auth } from "@/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Orders History | Tech with Phantom",
};

export default async function OrdersPage() {
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

  const orders = [
    {
      id: "INV-2024-001",
      date: joinedDate,
      product: "Tech with Phantom Ultimate",
      description: "Paket akses lifetime ke seluruh kursus",
      status: "PAID",
      amount: "Rp299.000",
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: 700 }}>Orders History</h1>

      {orders.length === 0 ? (
        <div className="card" style={{ padding: "3rem", textAlign: "center" }}>
          <p style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📋</p>
          <p style={{ color: "var(--text-secondary)" }}>Belum ada riwayat transaksi.</p>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {orders.map((order) => (
            <div key={order.id} className="card" style={{ padding: "1.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
                {/* Left: Order Info */}
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <span
                      style={{
                        backgroundColor: "rgba(30,130,76,0.1)",
                        color: "#1E824C",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        padding: "0.25rem 0.75rem",
                        borderRadius: "9999px",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {order.status}
                    </span>
                    <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>{order.date}</span>
                  </div>
                  <h3 style={{ fontSize: "1.0625rem", fontWeight: 700, marginBottom: "0.25rem" }}>
                    {order.product}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--text-secondary)" }}>
                    {order.description}
                  </p>
                </div>

                {/* Right: Amount + Actions */}
                <div style={{ textAlign: "right", flexShrink: 0 }}>
                  <div style={{ fontSize: "1.375rem", fontWeight: 800, color: "var(--text-primary)", marginBottom: "0.75rem" }}>
                    {order.amount}
                  </div>
                  <button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.5rem 1rem",
                      border: "1px solid var(--border-subtle)",
                      borderRadius: "6px",
                      backgroundColor: "transparent",
                      color: "var(--text-primary)",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                    className="invoice-btn"
                  >
                    📄 Download Invoice
                  </button>
                </div>
              </div>

              {/* Divider + Order ID */}
              <div style={{ marginTop: "1.25rem", paddingTop: "1rem", borderTop: "1px solid var(--border-subtle)" }}>
                <span style={{ fontSize: "0.8125rem", color: "var(--text-muted)" }}>
                  Nomor Transaksi: <span style={{ fontFamily: "monospace", fontWeight: 600 }}>{order.id}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
      <style>{`
        .invoice-btn:hover {
          background-color: var(--bg-alt) !important;
          border-color: var(--border-muted) !important;
        }
      `}</style>
    </div>
  );
}
