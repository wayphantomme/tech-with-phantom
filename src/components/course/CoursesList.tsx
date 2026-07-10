"use client";

import { useState, useMemo } from "react";
import { Course } from "@prisma/client";
import CourseCard from "./CourseCard";

interface CoursesListProps {
  initialCourses: (Course & { _count: { lessons: number } })[];
}

const courseLevels: Record<string, string> = {
  "web-foundations": "Pemula",
  "typescript-nextjs": "Menengah",
  "fullstack-auth-payment": "Mahir",
};

export default function CoursesList({ initialCourses }: CoursesListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const categories = ["Semua", "Pemula", "Menengah", "Mahir"];

  const filteredCourses = useMemo(() => {
    return initialCourses.filter((course) => {
      const level = courseLevels[course.slug] || "Semua Level";
      
      const matchesCategory =
        selectedCategory === "Semua" || level === selectedCategory;

      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (course.description &&
          course.description.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [initialCourses, searchQuery, selectedCategory]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
      {/* Search & Category Filter Section */}
      <div 
        style={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: "1.25rem",
          backgroundColor: "#FFFFFF",
          padding: "1.5rem",
          borderRadius: "12px",
          border: "1px solid var(--border-subtle)",
        }}
      >
        {/* Search Input */}
        <div style={{ position: "relative", width: "100%" }}>
          <span 
            style={{ 
              position: "absolute", 
              left: "1rem", 
              top: "50%", 
              transform: "translateY(-50%)", 
              fontSize: "1.125rem",
              color: "var(--text-secondary)"
            }}
          >
            🔍
          </span>
          <input
            type="text"
            placeholder="Cari materi atau kursus yang kamu inginkan..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%",
              padding: "0.875rem 1rem 0.875rem 2.75rem",
              border: "1px solid var(--border-subtle)",
              borderRadius: "8px",
              fontSize: "0.9375rem",
              color: "var(--text-primary)",
              backgroundColor: "var(--bg-alt)",
              outline: "none",
              boxSizing: "border-box",
              transition: "border-color 0.2s ease"
            }}
            className="search-input"
          />
        </div>

        {/* Category Buttons */}
        <div 
          style={{ 
            display: "flex", 
            gap: "0.5rem", 
            overflowX: "auto", 
            paddingBottom: "4px",
            scrollbarWidth: "none"
          }}
        >
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: "0.5rem 1.25rem",
                  borderRadius: "9999px",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  border: "1px solid",
                  borderColor: isActive ? "var(--color-primary)" : "var(--border-subtle)",
                  backgroundColor: isActive ? "var(--color-primary)" : "#FFFFFF",
                  color: isActive ? "#FFFFFF" : "var(--text-secondary)",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s ease"
                }}
                className="category-btn"
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Courses Grid */}
      {filteredCourses.length === 0 ? (
        <div style={{ textAlign: "center", paddingBlock: "4rem" }}>
          <p style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔍</p>
          <h3 style={{ fontSize: "1.125rem", fontWeight: 700, marginBottom: "0.25rem" }}>Tidak menemukan hasil</h3>
          <p style={{ color: "var(--text-secondary)" }}>Coba cari dengan kata kunci lain atau pilih kategori berbeda.</p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="courses-grid"
        >
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}

      <style>{`
        .search-input:focus {
          border-color: var(--color-primary) !important;
          background-color: #FFFFFF !important;
        }
        .category-btn:hover {
          border-color: var(--color-primary);
          color: var(--color-primary);
        }
        .category-btn:active {
          transform: scale(0.95);
        }
        @media (max-width: 1024px) {
          .courses-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .courses-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
