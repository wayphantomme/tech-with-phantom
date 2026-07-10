# 🚀 Landing Page — Tech with Phantom Online Class

Membuat landing page high-conversion untuk platform **Tech with Phantom** menggunakan **Next.js 16 App Router + Tailwind CSS v4**. Landing page ini berfungsi sebagai entry point utama yang mengubah visitor menjadi pembeli membership, mengikuti struktur 8-section dari dokumen `landing-page.md` dan visual style dari `design.md`.

---

## User Review Required

> [!IMPORTANT]
> Proyek ini menggunakan **Next.js 16.2.10** (bleeding-edge) dengan **Tailwind CSS v4** — ada perbedaan breaking change dari versi sebelumnya. Semua implementasi akan mengikuti API terbaru.

> [!WARNING]
> Landing page ini adalah **pure frontend MVP** (tanpa auth/database/payment). Scope dibatasi hanya pada halaman publik `/` yang bisa langsung di-deploy. Backend (Prisma, Stripe, NextAuth) akan dikerjakan di fase berikutnya.

---

## Open Questions

> [!IMPORTANT]
> **1. Foto Instructor** — Apakah ada foto nyata untuk instructor section, atau gunakan placeholder yang digenerate AI?

> [!IMPORTANT]
> **2. Video Preview** — Course preview section membutuhkan embed video. Apakah ada YouTube video ID yang siap dipakai, atau pakai thumbnail statis dulu?

> [!IMPORTANT]
> **3. Pricing Currency** — PRD menyebut harga dalam IDR (Rp99.000 / Rp149.000). Apakah landing page tampilkan IDR saja, atau dual currency IDR + USD?

> [!IMPORTANT]
> **4. Brand Color** — `design.md` menyebut Ungu/Biru (tech, trust). `landing-page.md` menyebut hitam/putih + accent biru/hijau. Pilih salah satu: **(A) Dark mode premium (hitam + aksen cyan/biru)** atau **(B) Light mode clean (putih + ungu/biru Udemy-style)**?

---

## Proposed Changes

### 🏗️ Foundation — Dependencies & Config

#### [MODIFY] [package.json](file:///Users/wayphantomme/Documents/phantom-online-class/package.json)
Tambah Google Fonts via `next/font` (sudah built-in Next.js, no install needed).

#### [MODIFY] [src/app/globals.css](file:///Users/wayphantomme/Documents/phantom-online-class/src/app/globals.css)
- Setup design token (CSS custom properties)
- Color palette: dark background `#0A0A0F`, accent ungu `#7C3AED`, aksen cyan `#06B6D4`
- Typography: Plus Jakarta Sans + Inter via `next/font/google`
- Animasi utility (fade-in, slide-up, shimmer)
- Tailwind v4 layer definitions

#### [MODIFY] [src/app/layout.tsx](file:///Users/wayphantomme/Documents/phantom-online-class/src/app/layout.tsx)
- Setup metadata (SEO: title, description, OG tags)
- Apply font variables ke `<body>`

---

### 📄 Landing Page — Main Page

#### [MODIFY] [src/app/page.tsx](file:///Users/wayphantomme/Documents/phantom-online-class/src/app/page.tsx)
Ganti boilerplate default dengan orchestration semua section component.

```tsx
// Render order:
<Navbar />
<HeroSection />
<ProblemSection />
<SolutionSection />
<BenefitsSection />
<CoursePreviewSection />
<PricingSection />
<SocialProofSection />
<FinalCTASection />
<Footer />
```

---

### 🧩 Components — Section by Section

Semua komponen dibuat di `src/components/sections/` dan `src/components/ui/`.

#### [NEW] [src/components/layout/Navbar.tsx](file:///Users/wayphantomme/Documents/phantom-online-class/src/components/layout/Navbar.tsx)
- Logo "Tech with Phantom" + navigasi anchor links
- Sticky navbar dengan glassmorphism backdrop blur
- CTA button "Mulai Sekarang" di kanan
- Mobile: hamburger menu

#### [NEW] [src/components/sections/HeroSection.tsx](file:///Users/wayphantomme/Documents/phantom-online-class/src/components/sections/HeroSection.tsx)
**Above the fold — Money Area 💰**
- Headline: *"Belajar AI & Web Development dari Nol sampai Bisa Dapat Client Global"*
- Subheadline: *"Tanpa bingung roadmap. Langsung praktek project real. Siap freelance & kerja remote."*
- 2 CTA: `"Mulai Belajar Sekarang"` (primary) + `"Lihat Kurikulum"` (secondary)
- Stats bar: ⭐ 4.8 · 👨‍🎓 10.000+ Students · ⏱️ 20+ Jam Konten · 🏆 3 Bahasa
- Visual: Mockup dashboard dengan floating card animasi
- Gradient mesh background dengan particle effect subtle

#### [NEW] [src/components/sections/ProblemSection.tsx](file:///Users/wayphantomme/Documents/phantom-online-class/src/components/sections/ProblemSection.tsx)
**"Ini gue banget" moment**
- 3 pain point card dengan icon:
  - 😵 *Bingung mulai dari mana, tutorial overmolded*
  - 📚 *Tutorial berantakan, gak ada struktur yang jelas*
  - 💸 *Udah belajar lama tapi gak dapet income*
- Transisi smooth ke solution section

#### [NEW] [src/components/sections/SolutionSection.tsx](file:///Users/wayphantomme/Documents/phantom-online-class/src/components/sections/SolutionSection.tsx)
**Positioning produk sebagai solusi**
- "Apa itu Tech with Phantom" — penjelasan singkat
- 3 keunggulan (kenapa beda dari yang lain)
- Outcome yang bisa didapat user
- Inline CTA mid-page

#### [NEW] [src/components/sections/BenefitsSection.tsx](file:///Users/wayphantomme/Documents/phantom-online-class/src/components/sections/BenefitsSection.tsx)
**What You'll Get**
- Grid 2x3 benefit card dengan icon + deskripsi
- ✅ Step-by-step structured learning path
- ✅ Build real projects (portfolio-ready)
- ✅ Siap freelance & kerja remote global
- ✅ Auth, Payment, Deploy ke Production
- ✅ Lifetime access ke semua update
- ✅ Community support + mentor Q&A

#### [NEW] [src/components/sections/CoursePreviewSection.tsx](file:///Users/wayphantomme/Documents/phantom-online-class/src/components/sections/CoursePreviewSection.tsx)
**Curriculum accordion**
- List 3 module dengan expand/collapse (pure CSS + useState)
  - Module 1: Foundation (HTML, CSS, JS, TypeScript)
  - Module 2: Backend (Next.js, PostgreSQL, Prisma, Auth)
  - Module 3: Fullstack Project (Build + Deploy + Payment)
- Screenshot mockup dashboard kelas
- CTA "Lihat Full Kurikulum"

#### [NEW] [src/components/sections/PricingSection.tsx](file:///Users/wayphantomme/Documents/phantom-online-class/src/components/sections/PricingSection.tsx)
**Conversion-critical section**
- Toggle billing: Bulanan / Tahunan (diskon 20%)
- 2 card: Basic vs Premium
  - Basic: ~~Rp199.000~~ → **Rp99.000/bln**
  - Premium: ~~Rp299.000~~ → **Rp149.000/bln** ← BEST VALUE badge
- Feature comparison per plan
- Urgency badge: "🔥 Promo terbatas — 47 slot tersisa"
- CTA besar per card

#### [NEW] [src/components/sections/SocialProofSection.tsx](file:///Users/wayphantomme/Documents/phantom-online-class/src/components/sections/SocialProofSection.tsx)
**Trust builder**
- Auto-scroll testimonial carousel (5 testimoni)
- Tiap card: foto, nama, hasil nyata (e.g., "Dapat client pertama 2 minggu setelah belajar")
- Stats bar: ⭐ 4.8/5 rating · 10.000+ alumni · 95% satisfaction rate

#### [NEW] [src/components/sections/FinalCTASection.tsx](file:///Users/wayphantomme/Documents/phantom-online-class/src/components/sections/FinalCTASection.tsx)
**Last push to convert**
- Headline urgency: *"Jangan Biarkan Teman Kamu Lebih Dulu"*
- Sub: *"Ribuan developer sudah mulai. Giliran kamu sekarang."*
- CTA besar: "Mulai Sekarang — Rp99.000/bln"
- Money-back guarantee badge (7-hari refund)

#### [NEW] [src/components/layout/Footer.tsx](file:///Users/wayphantomme/Documents/phantom-online-class/src/components/layout/Footer.tsx)
- Logo + tagline
- Links: About, Kurikulum, Pricing, FAQ
- Social media icons
- Copyright

---

### 🎨 UI Primitives

#### [NEW] [src/components/ui/Button.tsx](file:///Users/wayphantomme/Documents/phantom-online-class/src/components/ui/Button.tsx)
Reusable button dengan variant: `primary`, `secondary`, `ghost`.

#### [NEW] [src/components/ui/Badge.tsx](file:///Users/wayphantomme/Documents/phantom-online-class/src/components/ui/Badge.tsx)
Untuk label "BEST VALUE", "🔥 Promo Terbatas", dll.

#### [NEW] [src/components/ui/Card.tsx](file:///Users/wayphantomme/Documents/phantom-online-class/src/components/ui/Card.tsx)
Reusable glassmorphism card container.

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `#0A0A0F` (deep dark) |
| Surface | `#13131A` (card bg) |
| Primary | `#7C3AED` (violet/ungu) |
| Accent | `#06B6D4` (cyan) |
| CTA/Orange | `#F59E0B` (amber — CTA buttons) |
| Text Primary | `#F8FAFC` |
| Text Muted | `#94A3B8` |
| Font | Plus Jakarta Sans (headline) + Inter (body) |
| Border Radius | `12px` card, `8px` button |
| Shadow | Soft glow `0 0 40px rgba(124, 58, 237, 0.15)` |

**Visual Style**: Dark premium dengan glassmorphism cards, gradient mesh background di hero, micro-animasi fade-in + slide-up saat scroll.

---

## Verification Plan

### Automated
```bash
npm run build   # Pastikan zero TypeScript error & build success
npm run lint    # ESLint pass
```

### Manual Verification
- [ ] Desktop (1440px) — layout proporsional, semua section tampil
- [ ] Tablet (768px) — grid responsive collapse
- [ ] Mobile (375px) — hero, pricing card, testimonial fit di mobile
- [ ] CTA buttons clickable dan scroll ke pricing section
- [ ] Curriculum accordion expand/collapse berfungsi
- [ ] Pricing toggle Bulanan/Tahunan berfungsi
- [ ] Testimonial carousel auto-scroll
- [ ] Page load < 3s (Lighthouse performance)
- [ ] SEO: proper `<h1>`, meta description, OG tags

---

## 📋 Execution Order

1. `globals.css` — design tokens + animations
2. `layout.tsx` — fonts + SEO metadata
3. UI primitives (`Button`, `Badge`, `Card`)
4. Navbar + Footer
5. Section by section (Hero → Problem → Solution → Benefits → Preview → Pricing → Social Proof → Final CTA)
6. `page.tsx` — assembly semua section
7. Build & verify
