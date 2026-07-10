import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://techwithphantom.com"),
  title: "Tech with Phantom — Belajar AI & Web Development sampai Dapat Client Global",
  description:
    "Platform online class untuk developer Indonesia. Belajar AI, Next.js, Fullstack Development dari nol sampai bisa freelance dan kerja remote global. Ribuan alumni sudah berhasil.",
  keywords: [
    "online class developer",
    "belajar web development",
    "belajar AI",
    "fullstack developer",
    "next.js course",
    "freelance developer",
    "tech with phantom",
  ],
  authors: [{ name: "Tech with Phantom" }],
  creator: "Tech with Phantom",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://techwithphantom.com",
    siteName: "Tech with Phantom",
    title: "Tech with Phantom — Belajar AI & Web Development sampai Dapat Client Global",
    description:
      "Dari nol sampai bisa freelance & kerja remote global. Kurikulum terstruktur, project real, komunitas aktif. Mulai dari Rp99.000/bulan.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tech with Phantom Online Class",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech with Phantom — Belajar Coding sampai Dapat Client Global",
    description: "Platform online class developer terbaik. Mulai dari Rp99.000/bulan.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
