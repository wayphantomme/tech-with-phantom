import Link from "next/link";
import { Course, Lesson } from "@prisma/client";

interface LessonSidebarProps {
  course: Course & { lessons: Lesson[] };
  currentLessonId: string;
  completedLessonIds?: string[];
}

export default function LessonSidebar({ course, currentLessonId, completedLessonIds = [] }: LessonSidebarProps) {
  return (
    <aside
      style={{
        width: "320px",
        flexShrink: 0,
        borderLeft: "1px solid var(--border-subtle)",
        backgroundColor: "#FFFFFF",
        height: "100%",
        overflowY: "auto",
      }}
      className="lesson-sidebar"
    >
      {/* Course title */}
      <div
        style={{
          padding: "1.25rem",
          borderBottom: "1px solid var(--border-subtle)",
          backgroundColor: "var(--bg-alt)",
        }}
      >
        <Link
          href={`/courses/${course.slug}`}
          style={{
            fontSize: "0.75rem",
            color: "var(--color-primary)",
            textDecoration: "none",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            marginBottom: "0.5rem",
          }}
        >
          ← Kembali ke Kursus
        </Link>
        <h2
          style={{
            fontSize: "0.9375rem",
            fontWeight: 700,
            color: "var(--text-primary)",
            lineHeight: 1.4,
          }}
        >
          {course.title}
        </h2>
      </div>

      {/* Lesson list */}
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {course.lessons.map((lesson) => {
          const isCurrent = lesson.id === currentLessonId;
          const isCompleted = completedLessonIds.includes(lesson.id);

          return (
            <li key={lesson.id}>
              <Link
                href={`/courses/${course.slug}/lessons/${lesson.id}`}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "0.75rem",
                  padding: "1rem 1.25rem",
                  textDecoration: "none",
                  backgroundColor: isCurrent ? "rgba(164,53,240,0.08)" : "transparent",
                  borderLeft: isCurrent ? "3px solid var(--color-primary)" : "3px solid transparent",
                  transition: "background-color 0.15s ease",
                }}
                className="lesson-link"
              >
                {/* Status icon */}
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    backgroundColor: isCompleted
                      ? "#1E824C"
                      : isCurrent
                        ? "var(--color-primary)"
                        : "transparent",
                    border: isCompleted || isCurrent ? "none" : "2px solid var(--border-subtle)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "1px",
                  }}
                >
                  {isCompleted && <span style={{ color: "#FFFFFF", fontSize: "0.75rem" }}>✓</span>}
                  {isCurrent && !isCompleted && (
                    <div
                      style={{
                        width: 0,
                        height: 0,
                        borderTop: "5px solid transparent",
                        borderBottom: "5px solid transparent",
                        borderLeft: "8px solid white",
                        marginLeft: "2px",
                      }}
                    />
                  )}
                </div>

                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: isCurrent ? 700 : 400,
                      color: isCurrent ? "var(--color-primary)" : "var(--text-primary)",
                      lineHeight: 1.4,
                    }}
                  >
                    {lesson.order}. {lesson.title}
                  </div>
                  {lesson.is_preview && (
                    <span
                      style={{
                        fontSize: "0.6875rem",
                        fontWeight: 700,
                        color: "var(--color-primary)",
                        marginTop: "0.25rem",
                        display: "block",
                      }}
                    >
                      PREVIEW GRATIS
                    </span>
                  )}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      <style>{`
        .lesson-link:hover {
          background-color: rgba(0,0,0,0.03) !important;
        }
        @media (max-width: 768px) {
          .lesson-sidebar {
            width: 100% !important;
            height: auto !important;
            border-left: none !important;
            border-top: 1px solid var(--border-subtle) !important;
          }
        }
      `}</style>
    </aside>
  );
}
