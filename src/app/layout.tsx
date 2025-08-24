import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Corey — Software Developer & Creator",
  description: "From the open road to the digital world, I specialize in building web applications that make life easier, smarter, and more enjoyable. Expertise in TypeScript, React, Next.js, and Node.js.",
  keywords: ["Software Developer", "Full Stack Developer", "TypeScript", "React", "Next.js", "Node.js", "MongoDB", "Supabase", "Web Development"],
  authors: [{ name: "Corey" }],
  creator: "Corey",
  openGraph: {
    title: "Corey — Software Developer & Creator",
    description: "From the open road to the digital world, I specialize in building web applications that make life easier, smarter, and more enjoyable.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corey — Software Developer & Creator",
    description: "From the open road to the digital world, I specialize in building web applications that make life easier, smarter, and more enjoyable.",
  },
  robots: "index, follow",
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
