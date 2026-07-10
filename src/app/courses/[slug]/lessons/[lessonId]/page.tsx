import { notFound, redirect } from "next/navigation";
import { getLessonById, getProgressForCourse, markLessonComplete } from "@/actions/course.actions";
import { auth } from "@/auth";
import VideoPlaceholder from "@/components/course/VideoPlaceholder";
import LessonSidebar from "@/components/course/LessonSidebar";
import Link from "next/link";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string; lessonId: string }>;
}) {
  const { slug, lessonId } = await params;
  const [lessonData, session] = await Promise.all([getLessonById(lessonId), auth()]);

  if (!lessonData) notFound();

  const { course, ...lesson } = lessonData;

  // Gate: must be logged in OR lesson is a free preview
  if (!lesson.is_preview) {
    if (!session?.user?.id) redirect(`/login?callbackUrl=/courses/${slug}/lessons/${lessonId}`);
  }

  const completedProgress = session?.user?.id ? await getProgressForCourse(course.id) : [];
  const completedIds = completedProgress.filter((p) => p.completed).map((p) => p.lessonId);

  const currentIndex = course.lessons.findIndex((l) => l.id === lessonId);
  const nextLesson = course.lessons[currentIndex + 1];
  const prevLesson = course.lessons[currentIndex - 1];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "var(--bg-base)",
      }}
    >
      {/* Top Navbar */}
      <header
        style={{
          height: "60px",
          backgroundColor: "var(--text-primary)",
          display: "flex",
          alignItems: "center",
          paddingInline: "1.5rem",
          gap: "1.5rem",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <Link
          href={`/courses/${slug}`}
          style={{
            color: "rgba(255,255,255,0.8)",
            fontSize: "0.875rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
          }}
        >
          ← Kembali
        </Link>
        <span style={{ color: "rgba(255,255,255,0.3)" }}>|</span>
        <span
          style={{
            color: "#FFFFFF",
            fontSize: "0.9375rem",
            fontWeight: 700,
            flex: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {course.title}
        </span>
      </header>

      {/* Main Layout */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }} className="lesson-layout">

        {/* Content */}
        <main style={{ flex: 1, overflowY: "auto", padding: "0" }}>
          {/* Video Area */}
          {lesson.video_url ? (
            <div style={{ aspectRatio: "16/9", backgroundColor: "#000" }}>
              <iframe
                src={lesson.video_url}
                allow="autoplay; fullscreen"
                style={{ width: "100%", height: "100%", border: "none" }}
                title={lesson.title}
              />
            </div>
          ) : (
            <VideoPlaceholder
              title={lesson.title}
              lessonNumber={lesson.order}
              isPreview={lesson.is_preview}
            />
          )}

          {/* Info Bar */}
          <div
            style={{
              padding: "1.5rem 2rem",
              borderBottom: "1px solid var(--border-subtle)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem" }}>
              <div>
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: "0.25rem" }}>
                  Lesson {lesson.order} dari {course.lessons.length}
                </p>
                <h1 style={{ fontSize: "1.5rem" }}>{lesson.title}</h1>
              </div>

              {/* Mark Complete */}
              {session?.user?.id && (
                <form
                  action={async () => {
                    "use server";
                    await markLessonComplete(lessonId);
                  }}
                >
                  <button
                    type="submit"
                    className="btn"
                    style={{
                      border: "1px solid var(--border-subtle)",
                      backgroundColor: completedIds.includes(lessonId) ? "#1E824C" : "transparent",
                      color: completedIds.includes(lessonId) ? "#FFFFFF" : "var(--text-primary)",
                    }}
                  >
                    {completedIds.includes(lessonId) ? "✓ Selesai" : "Tandai Selesai"}
                  </button>
                </form>
              )}
            </div>

            {/* Prev / Next navigation */}
            <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
              {prevLesson && (
                <Link
                  href={`/courses/${slug}/lessons/${prevLesson.id}`}
                  className="btn btn-secondary"
                  style={{ fontSize: "0.875rem" }}
                >
                  ← Sebelumnya
                </Link>
              )}
              {nextLesson && (
                <Link
                  href={`/courses/${slug}/lessons/${nextLesson.id}`}
                  className="btn btn-primary"
                  style={{ fontSize: "0.875rem" }}
                >
                  Selanjutnya →
                </Link>
              )}
            </div>
          </div>

          {/* About lesson placeholder */}
          <div style={{ padding: "2rem" }}>
            <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Tentang Lesson Ini</h2>
            <div className="card" style={{ padding: "1.5rem", backgroundColor: "var(--bg-alt)" }}>
              <p style={{ color: "var(--text-secondary)" }}>
                Deskripsi lesson dan materi tambahan (resources, links, catatan) akan tersedia di sini setelah konten video diunggah.
              </p>
            </div>
          </div>
        </main>

        {/* Sidebar */}
        <LessonSidebar
          course={course}
          currentLessonId={lessonId}
          completedLessonIds={completedIds}
        />
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .lesson-layout { flex-direction: column !important; }
        }
      `}</style>
    </div>
  );
}
