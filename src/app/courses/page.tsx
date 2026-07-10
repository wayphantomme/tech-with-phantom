import { getAllCourses } from "@/actions/course.actions";
import CoursesList from "@/components/course/CoursesList";
import Navbar from "@/components/layout/Navbar";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Semua Kursus | Tech with Phantom",
  description: "Jelajahi semua kursus Web Development dan AI dari Tech with Phantom.",
};

export default async function CoursesPage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const courses = await getAllCourses();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--bg-base)", paddingTop: "72px" }}>
      <Navbar session={session} />

      {/* Main Container */}
      <div className="container" style={{ paddingBlock: "3rem" }}>
        <CoursesList initialCourses={courses} />
      </div>
    </div>
  );
}
