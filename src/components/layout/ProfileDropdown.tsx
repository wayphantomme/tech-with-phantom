"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

interface ProfileDropdownProps {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export default function ProfileDropdown({ user }: ProfileDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const initials = user.name ? user.name.charAt(0).toUpperCase() : (user.email ? user.email.charAt(0).toUpperCase() : "U");

  return (
    <div className="profile-dropdown-container" ref={dropdownRef} style={{ position: "relative" }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: 0
        }}
      >
        <div 
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            backgroundColor: "var(--bg-alt)",
            border: "1px solid var(--border-subtle)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            color: "var(--text-primary)"
          }}
        >
          {initials}
        </div>
      </button>

      {isOpen && (
        <div 
          style={{
            position: "absolute",
            top: "calc(100% + 0.5rem)",
            right: 0,
            width: "240px",
            backgroundColor: "#FFFFFF",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            border: "1px solid var(--border-subtle)",
            overflow: "hidden",
            zIndex: 1000
          }}
        >
          {/* Header */}
          <div style={{ padding: "1rem", borderBottom: "1px solid var(--border-subtle)", backgroundColor: "var(--bg-base)" }}>
            <div style={{ fontWeight: 600, fontSize: "0.9375rem", color: "var(--text-primary)" }}>
              {user.name || "User"}
            </div>
            <div style={{ fontSize: "0.8125rem", color: "var(--text-secondary)", overflow: "hidden", textOverflow: "ellipsis" }}>
              {user.email}
            </div>
          </div>

          {/* Links */}
          <div style={{ padding: "0.5rem 0" }}>
            <Link 
              href="/profile"
              style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1rem", fontSize: "0.875rem", color: "var(--text-primary)", textDecoration: "none" }}
              onClick={() => setIsOpen(false)}
              className="dropdown-item"
            >
              <span>👤</span> Profile
            </Link>
            <Link 
              href="/courses"
              style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1rem", fontSize: "0.875rem", color: "var(--text-primary)", textDecoration: "none" }}
              onClick={() => setIsOpen(false)}
              className="dropdown-item"
            >
              <span>📚</span> My Courses
            </Link>
            <Link 
              href="/orders"
              style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1rem", fontSize: "0.875rem", color: "var(--text-primary)", textDecoration: "none" }}
              onClick={() => setIsOpen(false)}
              className="dropdown-item"
            >
              <span>💳</span> Orders History
            </Link>
            <Link 
              href="/memberships"
              style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1rem", fontSize: "0.875rem", color: "var(--text-primary)", textDecoration: "none" }}
              onClick={() => setIsOpen(false)}
              className="dropdown-item"
            >
              <span>🎟️</span> My Memberships
            </Link>
            <Link 
              href="/settings"
              style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.75rem 1rem", fontSize: "0.875rem", color: "var(--text-primary)", textDecoration: "none" }}
              onClick={() => setIsOpen(false)}
              className="dropdown-item"
            >
              <span>⚙️</span> Account Settings
            </Link>
          </div>

          {/* Logout */}
          <div style={{ padding: "0.5rem 0", borderTop: "1px solid var(--border-subtle)" }}>
            <button 
              onClick={() => signOut({ callbackUrl: "/" })}
              style={{
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                padding: "0.75rem 1rem",
                fontSize: "0.875rem",
                color: "var(--color-danger)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem"
              }}
              className="dropdown-item"
            >
              <span>🚪</span> Logout
            </button>
          </div>
        </div>
      )}

      <style>{`
        .dropdown-item:hover {
          background-color: var(--bg-alt);
        }
      `}</style>
    </div>
  );
}
