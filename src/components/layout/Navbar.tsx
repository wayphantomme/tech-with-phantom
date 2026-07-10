"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Session } from "next-auth";
import ProfileDropdown from "./ProfileDropdown";

export default function Navbar({ session }: { session?: Session | null }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = session
    ? [{ label: "My Courses", href: "/courses" }]
    : [
        { label: "Kurikulum", href: "/#kurikulum" },
        { label: "Pricing", href: "/#pricing" },
        { label: "Testimoni", href: "/#testimoni" },
      ];

  return (
    <nav
      id="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: "#FFFFFF",
        borderBottom: "1px solid var(--border-subtle)",
        boxShadow: scrolled ? "0 2px 4px rgba(0,0,0,0.08)" : "none",
        transition: "box-shadow 0.2s ease",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          id="navbar-logo"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "1.25rem",
            color: "var(--text-primary)",
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "4px",
              backgroundColor: "var(--color-primary)",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.25rem",
              fontWeight: 700,
              fontFamily: "var(--font-body)",
            }}
          >
            T
          </div>
          <span>Tech with Phantom</span>
        </Link>

        {/* Desktop Nav */}
        <div
          className="desktop-nav"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: "0.875rem",
                fontWeight: 400,
                color: "var(--text-primary)",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "var(--color-primary)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "var(--text-primary)";
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            {session ? (
              <ProfileDropdown user={{ name: session.user?.name, email: session.user?.email, image: session.user?.image }} />
            ) : (
              <>
                <Link
                  href="/login"
                  className="btn btn-secondary btn-sm"
                  style={{ padding: "0.5rem 1rem", borderRadius: "0" }}
                >
                  Log in
                </Link>
                <Link
                  href="/register"
                  className="btn btn-primary btn-sm"
                  style={{ padding: "0.5rem 1rem", borderRadius: "0" }}
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          id="navbar-mobile-toggle"
          aria-label="Toggle mobile menu"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "var(--text-primary)",
            cursor: "pointer",
            padding: "8px",
          }}
          className="mobile-toggle-btn"
        >
          {mobileOpen ? (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          id="navbar-mobile-menu"
          style={{
            backgroundColor: "#FFFFFF",
            borderTop: "1px solid var(--border-subtle)",
            padding: "1rem 1.5rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                color: "var(--text-primary)",
                fontSize: "1rem",
                padding: "0.5rem 0",
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "1rem" }}>
            {session ? (
              <Link
                href="/profile"
                onClick={() => setMobileOpen(false)}
                className="btn btn-primary"
                style={{ textAlign: "center", borderRadius: "0" }}
              >
                Profile
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="btn btn-secondary"
                  style={{ textAlign: "center", borderRadius: "0" }}
                >
                  Log in
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMobileOpen(false)}
                  className="btn btn-primary"
                  style={{ textAlign: "center", borderRadius: "0" }}
                >
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
