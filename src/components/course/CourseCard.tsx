import Link from "next/link";
import { Course } from "@prisma/client";

interface CourseCardProps {
  course: Course & { _count: { lessons: number } };
}

const courseIcons: Record<string, string> = {
  "web-foundations": "🌐",
  "typescript-nextjs": "⚡",
  "fullstack-auth-payment": "🔐",
};

const courseLevels: Record<string, string> = {
  "web-foundations": "Pemula",
  "typescript-nextjs": "Menengah",
  "fullstack-auth-payment": "Mahir",
};

const courseImages: Record<string, string> = {
  "web-foundations": "https://res.cloudinary.com/dwsapeq3m/image/upload/v1783683580/module-1_ivunci.png",
  "typescript-nextjs": "https://res.cloudinary.com/dwsapeq3m/image/upload/v1783683580/module-2_labhxu.png",
  "fullstack-auth-payment": "https://res.cloudinary.com/dwsapeq3m/image/upload/v1783683581/module-3_l9vh1u.png",
};

export default function CourseCard({ course }: CourseCardProps) {
  const icon = courseIcons[course.slug] || "📚";
  const level = courseLevels[course.slug] || "Semua Level";
  const imageUrl = courseImages[course.slug];

  return (
    <Link href={`/courses/${course.slug}`} style={{ textDecoration: "none", display: "block", height: "100%" }}>
      <div
        className="card course-card"
        style={{
          padding: 0,
          overflow: "hidden",
          transition: "box-shadow 0.2s ease, transform 0.2s ease",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          borderRadius: "12px", // Lebih rounded sesuai request
          border: "1px solid var(--border-subtle)",
          backgroundColor: "#FFFFFF",
        }}
      >
        {/* Course Thumbnail */}
        <div
          style={{
            width: "100%",
            aspectRatio: "16/9",
            backgroundColor: "var(--bg-alt)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "3.5rem",
            position: "relative",
            borderBottom: "1px solid var(--border-subtle)",
            overflow: "hidden",
          }}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={course.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <span>{icon}</span>
          )}
          <div
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              backgroundColor: "rgba(0,0,0,0.7)",
              color: "#FFFFFF",
              fontSize: "0.75rem",
              fontWeight: 600,
              padding: "0.25rem 0.75rem",
              borderRadius: "9999px",
              backdropFilter: "blur(4px)",
            }}
          >
            {level}
          </div>
        </div>

        {/* Card Body */}
        <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1 }}>
          <h3
            style={{
              fontSize: "1.125rem",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "0.75rem",
              lineHeight: 1.4,
            }}
          >
            {course.title}
          </h3>
          <p
            style={{
              fontSize: "0.875rem",
              color: "var(--text-secondary)",
              lineHeight: 1.6,
              marginBottom: "1.5rem",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              flex: 1,
            }}
          >
            {course.description}
          </p>

          {/* Metadata & CTA Container */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "1.25rem",
              borderTop: "1px solid var(--border-subtle)",
              marginTop: "auto",
            }}
          >
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              fontSize: "0.875rem",
              color: "var(--text-secondary)",
              fontWeight: 500,
            }}>
              <span>📹</span>
              <span>{course._count.lessons} Modul</span>
            </div>
            
            <div
              className="course-cta"
              style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--color-primary)",
                backgroundColor: "rgba(164,53,240,0.1)",
                padding: "0.5rem 1rem",
                borderRadius: "6px",
                transition: "background-color 0.2s ease",
              }}
            >
              Lihat Kelas
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .course-card:hover {
          box-shadow: 0 12px 24px rgba(0,0,0,0.08);
          transform: translateY(-4px);
          border-color: var(--border-muted);
        }
        .course-card:hover .course-cta {
          background-color: var(--color-primary) !important;
          color: #FFFFFF !important;
        }
      `}</style>
    </Link>
  );
}
