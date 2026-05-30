import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
});

const dm = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm",
});

export const metadata: Metadata = {
  title: "Alaa Elnily — Frontend Developer",
  description:
    "Frontend Developer with 5+ years crafting high-performance web experiences for UAE governments, enterprises, and global events.",
  keywords: ["Frontend Developer", "React", "Next.js", "UAE", "Web Development"],
  authors: [{ name: "Alaa Elnily" }],
  openGraph: {
    title: "Alaa Elnily — Frontend Developer",
    description:
      "Frontend Developer with 5+ years crafting high-performance web experiences for UAE governments, enterprises, and global events.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dm.variable}`}>
      <body>{children}</body>
    </html>
  );
}
