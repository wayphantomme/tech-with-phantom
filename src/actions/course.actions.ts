"use server";

import { db } from "@/lib/db";
import { auth } from "@/auth";

export async function getAllCourses() {
  return db.course.findMany({
    where: { is_published: true },
    include: {
      _count: { select: { lessons: true } },
    },
    orderBy: { title: "asc" },
  });
}

export async function getCourseBySlug(slug: string) {
  return db.course.findUnique({
    where: { slug, is_published: true },
    include: {
      lessons: { orderBy: { order: "asc" } },
    },
  });
}

export async function getLessonById(lessonId: string) {
  return db.lesson.findUnique({
    where: { id: lessonId },
    include: {
      course: {
        include: {
          lessons: { orderBy: { order: "asc" } },
        },
      },
    },
  });
}

export async function getEnrollmentStatus(courseId: string) {
  const session = await auth();
  if (!session?.user?.id) return false;

  const enrollment = await db.enrollment.findUnique({
    where: {
      userId_courseId: {
        userId: session.user.id,
        courseId,
      },
    },
  });

  return !!enrollment;
}

export async function enrollInCourse(courseId: string) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Not authenticated");

  return db.enrollment.upsert({
    where: {
      userId_courseId: {
        userId: session.user.id,
        courseId,
      },
    },
    update: {},
    create: {
      userId: session.user.id,
      courseId,
    },
  });
}

export async function getProgressForCourse(courseId: string) {
  const session = await auth();
  if (!session?.user?.id) return [];

  return db.progress.findMany({
    where: {
      userId: session.user.id,
      lesson: { courseId },
    },
    select: { lessonId: true, completed: true },
  });
}

export async function markLessonComplete(lessonId: string) {
  const session = await auth();
  if (!session?.user?.id) throw new Error("Not authenticated");

  return db.progress.upsert({
    where: {
      userId_lessonId: {
        userId: session.user.id,
        lessonId,
      },
    },
    update: { completed: true },
    create: {
      userId: session.user.id,
      lessonId,
      completed: true,
    },
  });
}

export async function getEnrolledCourses() {
  const session = await auth();
  if (!session?.user?.id) return [];

  return db.enrollment.findMany({
    where: { userId: session.user.id },
    include: {
      course: {
        include: {
          lessons: { select: { id: true } },
        },
      },
    },
    orderBy: { started_at: "desc" },
  });
}
