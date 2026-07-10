import "dotenv/config";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@prisma/client";

const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Seeding database...");

  // ── Course 1: Web Foundations ──────────────────────────────────────────
  const course1 = await prisma.course.upsert({
    where: { slug: "web-foundations" },
    update: {},
    create: {
      title: "Web Foundations: HTML, CSS & JavaScript",
      description:
        "Mulai dari nol, pelajari dasar web modern. Kamu akan belajar semantic HTML5, CSS Flexbox/Grid, dan JavaScript ES6+ untuk membangun tampilan web yang responsif.",
      slug: "web-foundations",
      is_published: true,
      lessons: {
        create: [
          { title: "Intro: Setup Environment (VS Code, Node.js)", order: 1, is_preview: true },
          { title: "HTML5 Semantics & Document Structure", order: 2, is_preview: true },
          { title: "CSS Box Model, Flexbox, dan Grid", order: 3 },
          { title: "JavaScript Variables, Functions, DOM", order: 4 },
          { title: "ES6+: Arrow Functions, Destructuring, Modules", order: 5 },
          { title: "Project: Build a Responsive Portfolio Page", order: 6 },
        ],
      },
    },
  });

  // ── Course 2: TypeScript & Next.js ─────────────────────────────────────
  const course2 = await prisma.course.upsert({
    where: { slug: "typescript-nextjs" },
    update: {},
    create: {
      title: "TypeScript & Next.js 16 App Router",
      description:
        "Masuk ke dunia React yang lebih aman dan scalable. Kamu akan belajar TypeScript dari dasar, lalu langsung membangun aplikasi fullstack menggunakan Next.js 16 App Router.",
      slug: "typescript-nextjs",
      is_published: true,
      lessons: {
        create: [
          { title: "TypeScript Basics: Types, Interfaces, Generics", order: 1, is_preview: true },
          { title: "Next.js 16 App Router vs Pages Router", order: 2 },
          { title: "Server Components vs Client Components", order: 3 },
          { title: "Data Fetching & Caching Strategies", order: 4 },
          { title: "Route Handlers & API Routes", order: 5 },
          { title: "Project: Build a Blog with MDX", order: 6 },
        ],
      },
    },
  });

  // ── Course 3: Fullstack with Auth, DB & Payment ─────────────────────────
  const course3 = await prisma.course.upsert({
    where: { slug: "fullstack-auth-payment" },
    update: {},
    create: {
      title: "Fullstack: Auth, Database & Stripe Payment",
      description:
        "Level terakhir sebelum deploy ke production. Kamu akan mengintegrasikan sistem autentikasi (Auth.js), database PostgreSQL dengan Prisma, dan sistem pembayaran menggunakan Stripe.",
      slug: "fullstack-auth-payment",
      is_published: true,
      lessons: {
        create: [
          { title: "Setup PostgreSQL di Neon & Prisma Schema", order: 1, is_preview: true },
          { title: "Auth.js v5: Credentials & Google OAuth", order: 2 },
          { title: "Protected Routes & Middleware", order: 3 },
          { title: "Stripe Checkout & Webhooks", order: 4 },
          { title: "Subscription Management", order: 5 },
          { title: "Deploy ke Vercel & Best Practices", order: 6 },
        ],
      },
    },
  });

  console.log(`✅ Seeded courses:
  - ${course1.title}
  - ${course2.title}
  - ${course3.title}
  `);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
