import { notFound } from "next/navigation";
import Link from "next/link";
import { getCourseBySlug } from "@/actions/course.actions";
import { auth } from "@/auth";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);
  if (!course) return {};
  return {
    title: `${course.title} | Tech with Phantom`,
    description: course.description ?? undefined,
  };
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [course, session] = await Promise.all([getCourseBySlug(slug), auth()]);

  if (!course) notFound();

  const previewLessons = course.lessons.filter((l: { is_preview: boolean }) => l.is_preview);
  const firstLesson = course.lessons[0];
  const isLoggedIn = !!session?.user?.id;

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--bg-base)" }}>
      {/* Hero Banner */}
      <div style={{ backgroundColor: "var(--text-primary)", color: "#FFFFFF", paddingBlock: "3rem" }}>
        <div className="container">
          <nav style={{ fontSize: "0.875rem", marginBottom: "1.5rem", display: "flex", gap: "0.5rem", alignItems: "center", color: "rgba(255,255,255,0.7)" }}>
            <Link href="/" style={{ color: "rgba(255,255,255,0.7)" }}>Beranda</Link>
            <span>/</span>
            <Link href="/courses" style={{ color: "rgba(255,255,255,0.7)" }}>Kursus</Link>
            <span>/</span>
            <span style={{ color: "#FFFFFF" }}>{course.title}</span>
          </nav>

          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "flex-start" }} className="course-hero-grid">
            <div style={{ maxWidth: "700px" }}>
              <h1 style={{ color: "#FFFFFF", marginBottom: "1rem" }}>{course.title}</h1>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.125rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                {course.description}
              </p>

              <div style={{ display: "flex", gap: "2rem", fontSize: "0.9375rem", color: "rgba(255,255,255,0.7)" }}>
                <span>📹 {course.lessons.length} lessons</span>
                <span>🎯 {previewLessons.length} preview gratis</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container" style={{ paddingBlock: "2.5rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "2.5rem", alignItems: "flex-start" }} className="course-body-grid">
          
          {/* Left: Curriculum */}
          <div>
            <h2 style={{ fontSize: "1.5rem", marginBottom: "1.5rem" }}>Kurikulum Kursus</h2>
            <div className="card" style={{ padding: 0, overflow: "hidden" }}>
              {course.lessons.map((lesson: { id: string; title: string; order: number; is_preview: boolean }, index: number) => (
                <div
                  key={lesson.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem 1.25rem",
                    borderBottom: index < course.lessons.length - 1 ? "1px solid var(--border-subtle)" : "none",
                    backgroundColor: lesson.is_preview ? "rgba(164,53,240,0.03)" : "transparent",
                  }}
                >
                  <div
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      backgroundColor: "var(--bg-alt)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: "0.875rem",
                      color: "var(--text-secondary)",
                      fontWeight: 700,
                    }}
                  >
                    {lesson.is_preview || isLoggedIn ? (
                      <span style={{ fontSize: "1rem" }}>▶</span>
                    ) : (
                      <span style={{ fontSize: "1rem" }}>🔒</span>
                    )}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: "0.9375rem", fontWeight: 500, color: "var(--text-primary)" }}>
                      {lesson.order}. {lesson.title}
                    </div>
                    {lesson.is_preview && (
                      <span style={{ fontSize: "0.75rem", color: "var(--color-primary)", fontWeight: 700 }}>
                        PREVIEW GRATIS
                      </span>
                    )}
                  </div>
                  {(lesson.is_preview || isLoggedIn) && (
                    <Link
                      href={`/courses/${course.slug}/lessons/${lesson.id}`}
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--color-primary)",
                        fontWeight: 700,
                        textDecoration: "none",
                      }}
                    >
                      Tonton →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Actions Card */}
          <div style={{ position: "sticky", top: "90px" }}>
            <div
              className="card"
              style={{
                padding: "1.5rem",
                borderTop: "4px solid var(--color-primary)",
              }}
            >
              <h3 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Mulai Belajar</h3>

              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                  marginBottom: "1.5rem",
                }}
              >
                {["Akses semua lesson", "Video placeholder (segera)", "Tracking progress", "Sertifikat penyelesaian"].map((f) => (
                  <li key={f} style={{ display: "flex", gap: "0.5rem", fontSize: "0.9375rem", color: "var(--text-secondary)" }}>
                    <span style={{ color: "var(--color-primary)" }}>✓</span> {f}
                  </li>
                ))}
              </ul>

              {isLoggedIn ? (
                firstLesson && (
                  <Link
                    href={`/courses/${course.slug}/lessons/${firstLesson.id}`}
                    className="btn btn-primary"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Lanjutkan Belajar →
                  </Link>
                )
              ) : (
                <Link href="/login" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Login untuk Mulai
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .course-hero-grid { grid-template-columns: 1fr !important; }
          .course-body-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
