import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mary Dada — Full-Stack & Security Engineer",
  description: "Portfolio of Mary Dada, featuring Relgil, mobile systems, and SOC infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-zinc-900 selection:bg-zinc-100">
        <Navbar />
        {children}
      </body>
    </html>
  );
}