# Agents dan Arsitektur

Dokumen ini menjelaskan peran "agents" (proses/background jobs/service) yang relevan untuk repository ini, serta diagram arsitektur dan alur data yang sesuai untuk platform kursus online modern yang dibangun dengan Next.js + Prisma.

Catatan: saya menghapus isi lama yang berisi peringatan Next.js generik yang tidak sesuai dengan dokumentasi internal proyek.

## Tujuan
- Menyediakan gambaran ringkas tentang komponen arsitektur.
- Menjelaskan agen/background jobs utama dan tanggung jawabnya.
- Menyajikan diagram arsitektur tekstual yang mudah diperbarui.

## Komponen utama
- Frontend: Next.js (React, TypeScript) — Server Components / App Router atau Pages Router tergantung implementasi pada kode.
- API / Backend: Next.js API Routes atau endpoints (Serverless) yang menghubungkan ke Prisma.
- ORM: Prisma — akses ke database relasional (mis. PostgreSQL).
- Database: PostgreSQL (atau DB relasional lain) — menyimpan data pengguna, kursus, transaksi.
- Storage: Object storage (S3 / DigitalOcean Spaces / GCP Storage) — menyimpan aset besar seperti video, gambar.
- Cache / Queue: Redis — caching, session store, queue untuk background jobs.
- Workers / Agents: proses background yang menjalankan tugas asinkron (see Agents section).
- Authentication: NextAuth atau sistem auth custom.
- Search / Indexing: (opsional) Algolia / Meilisearch / Elastic — untuk pencarian kursus.
- Monitoring & Logging: Sentry, Prometheus, atau layanan serupa.
- Deployment: Vercel, Netlify, atau platform cloud (serverless / container).

## Diagram Arsitektur (tekstual)

  [Client (Browser / Mobile)]
                |
                v
          [Next.js Frontend]
                |
        Server-side rendering / API calls
                |
  +-------------+--------------------------+
  |                                    |
  v                                    v
[Next.js API / Server]             [CDN / Static Assets]
  |                                    |
  v                                    v
[Prisma] -> [PostgreSQL]           [Object Storage (S3)]
  |
  v
[Redis (cache / queue)] <---> [Workers / Agents]

Keterangan singkat:
- Frontend melakukan SSR/SSG dan request ke API untuk data dinamis.
- Prisma adalah lapisan akses data ke database relasional.
- Redis berfungsi sebagai store untuk cache, session, dan queue task.
- Workers/Agents membaca queue dari Redis untuk tugas latar (email, encoding video, indexing).
- Object Storage menyimpan file besar yang dilayani via CDN.

## Alur Data (contoh: upload video kursus)
1. Pengguna mengunggah video dari UI.
2. Frontend mengunggah file ke Object Storage (signed upload) atau lewat API yang meneruskan ke storage.
3. Setelah upload sukses, event (job) dimasukkan ke queue Redis: "process-video" dengan metadata file.
4. Worker mengambil job "process-video", memproses (transcoding/thumbnail), menyimpan hasil ke storage, lalu memperbarui record di database via Prisma.
5. Frontend/Notif dikabari via webhooks / push / polling bahwa video tersedia.

## Agents / Workers yang disarankan
- Email Sender
  - Mengirim email transaksional (konfirmasi pendaftaran, invoice, notifikasi kursus).
  - Mengambil job dari queue, retry pada kegagalan.
- Video Processor
  - Transcoding, pembuatan thumbnail, ekstraksi metadata.
  - Proses berat dijalankan di worker terdedikasi atau layanan encoding.
- Search Indexer
  - Mengindeks konten kursus ke search engine eksternal setelah data kursus berubah.
- Billing/Subscription Processor
  - Sinkronisasi status pembayaran, pengingat langganan, pengolahan webhook pembayaran.
- Analytics Exporter
  - Mengumpulkan event dan mengirim ke pipeline analytics.

## Praktik Operasional
- Gunakan queue (Redis / Bull / Bee-Queue / RSMQ) untuk orkestrasi job.
- Batasi beban di API: unggahan file besar dilakukan langsung ke object storage via signed URL.
- Selalu lakukan retry dan dead-letter queue untuk job yang gagal.
- Pertimbangkan pengukuran SLA untuk workers (time-to-process, throughput).

## Keamanan
- Simpan kredensial DB/Storage/Keys di secret manager / environment variables.
- Batasi akses ke object storage (signed URLs, private buckets).
- Validasi file upload (type, size) sebelum diterima.

## Catatan pemeliharaan
- Jika arsitektur nyata proyek berbeda (mis. menggunakan layanan encoding pihak ketiga, atau tidak memakai Redis), sesuaikan bagian "Workers / Queue" dan diagram di atas: hapus atau ubah komponen yang tidak dipakai.
- Untuk memperbarui diagram/arsitektur: edit file ini, sertakan diagram ASCII atau tambahkan link ke file gambar di repo (mis. diagrams/architecture.png).

---

Jika Anda ingin, saya bisa langsung:
- Mempersempit diagram dan daftar agents sesuai implementasi kode di repo (butuh akses ke file tertentu: next.config.js, prisma/schema.prisma, package.json, infra config), atau
- Menambahkan diagram gambar (PNG/SVG) ke folder diagrams/ dan memperbarui README untuk menampilkan gambar.


