# tech-with-phantom

Modern online course platform built with Next.js dan Prisma — starter kit untuk creator, bootcamp, dan tim product yang ingin meluncurkan kursus digital dengan cepat dan mudah diskalakan.

> Modern online course platform built with Next.js and Prisma, designed to easily scale and manage your digital education business.

---

## Ringkasan Bisnis

Apa yang diselesaikan
- Platform kursus online yang siap dipakai (landing page → course → dashboard peserta) untuk membantu creator dan institusi menjual kursus digital.

Nilai utama
- Launch cepat: template Next.js + Prisma dengan seed data untuk memulai.
- Pengelolaan peserta: autentikasi, dashboard, dan kontrol akses untuk materi kursus.
- Dapat dikembangkan: integrasi pembayaran, subscription, dan analytics.

Target pengguna
- Individual creators yang ingin menjual kursus berbayar.
- Sekolah atau bootcamp kecil.
- Tim produk yang butuh starter kit platform edukasi.

Monetisasi (opsional)
- One-time purchase, subscription, bundles, add-ons (sertifikat/coaching), affiliate.

---

## Ringkasan Teknis

Stack
- **Bahasa:** TypeScript
- **Framework / runtime:** Next.js (App Router)
- **Database / ORM:** PostgreSQL + Prisma
- **Package manager:** npm (package.json ada di repo)

Notable modules dan pola
- src/app — Next.js App Router (halaman, layout, API route handlers)
- src/actions — logic bisnis (auth.actions.ts, course.actions.ts)
- src/auth.ts, src/auth.config.ts — konfigurasi dan helper autentikasi
- src/lib/db.ts — Prisma client wrapper
- prisma/schema.prisma & prisma/seed.ts — model DB dan seed data
- skills/ — dokumen produk (design.md, prd.md, fullstack.md)

Bagaimana komponen berinteraksi
- Browser → Next.js App Router (src/app) → route handlers → src/actions/* → Prisma Client (src/lib/db.ts) → Postgres

---

## Diagram Arsitektur (Mermaid)

```mermaid
flowchart LR
  Browser -->|GET/POST| NextJS[(Next.js App Router)]
  NextJS -->|Route handlers / API| ServerLogic[Route Handlers / Actions (src/actions/*)]
  ServerLogic --> Prisma[Prisma Client]
  Prisma --> Postgres[(Postgres)]
  NextJS -->|Static assets| Public[/public/]
  NextJS -->|Auth| Auth[(src/auth.ts / auth.config.ts)]
  Auth --> Prisma

  subgraph Frontend
    Browser
  end

  subgraph Backend
    NextJS
    ServerLogic
    Prisma
    Postgres
  end
```

---

## Cara Menjalankan (Local development)

1. Install dependencies

```bash
npm install
```

2. Set environment variables (contoh):
- DATABASE_URL (Postgres)
- NEXTAUTH_URL (mis. http://localhost:3000)
- NEXTAUTH_SECRET
- NEXT_PUBLIC_SITE_URL
- PROVIDER credentials (jika memakai OAuth)

3. Prisma: generate & migrate

```bash
npx prisma generate
npx prisma migrate dev --name init
# jalankan seeder jika diperlukan
npx prisma db seed
```

4. Jalankan dev server

```bash
npm run dev
# atau pnpm dev / yarn dev
```

Buka http://localhost:3000

Catatan: periksa src/auth.config.ts dan prisma.config.ts untuk variabel environment yang spesifik.

---

## File & Modul Penting

- `src/app/layout.tsx` — global layout
- `src/app/page.tsx` — landing page
- `src/actions/course.actions.ts` — operasi course (create, fetch, enroll)
- `src/actions/auth.actions.ts` — logic autentikasi
- `src/auth.ts`, `src/auth.config.ts` — auth helper/config
- `src/lib/db.ts` — prisma client wrapper
- `prisma/schema.prisma`, `prisma/seed.ts`
- `skills/*.md` — dokumentasi produk & design

---

## Deployment

Rekomendasi: deploy ke Vercel untuk kemudahan Next.js. Gunakan managed Postgres (Supabase, Neon, RDS).

Langkah singkat:
- Pastikan env vars di Vercel (DATABASE_URL, NEXTAUTH_SECRET, dll)
- Jalankan migration sebelum atau sebagai bagian dari deploy pipeline

---

## Pengembangan & Kontribusi

- Lihat `skills/` untuk PRD dan keputusan desain.
- Gunakan branch feature, sertakan PR yang mengacu ke PRD bila relevan.
- Tambahkan test & CI (lint, typecheck, test) bila menambah fitur.

---

## Pertanyaan Tindak Lanjut

1. Apakah ingin saya menambahkan `CONTRIBUTING.md` dan `.env.example`?
2. Mau saya tambahkan contoh workflow GitHub Actions untuk CI (lint + build + migrate)?
3. Ingin saya buatkan skrip Docker Compose untuk Postgres dan menjalankan dev secara containerized?

---

README ini dibuat/diupdate otomatis oleh GitHub Copilot berdasarkan struktur repo pada saat commit.
