"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link href="/" className="font-semibold text-zinc-900 text-lg tracking-tight">
          Mary Dada <span className="text-zinc-400 font-normal">/ Software Engineer</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          <Link href="/#work" className="hover:text-zinc-900 transition-colors">
            Work
          </Link>
          <Link href="/#security" className="hover:text-zinc-900 transition-colors">
            Security & SOC
          </Link>
          <Link href="/archive" className="hover:text-zinc-900 transition-colors">
            Archive
          </Link>
          <a
            href="https://github.com/Pruddy1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-zinc-900 transition-colors"
          >
            GitHub ↗
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-600 hover:text-zinc-900 rounded-md focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white border-b border-zinc-200 px-6 py-4 space-y-3 text-sm font-medium text-zinc-600">
          <Link
            href="/#work"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-zinc-900 py-1"
          >
            Work
          </Link>
          <Link
            href="/#security"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-zinc-900 py-1"
          >
            Security & SOC
          </Link>
          <Link
            href="/archive"
            onClick={() => setMobileMenuOpen(false)}
            className="block hover:text-zinc-900 py-1"
          >
            Archive
          </Link>
          <a
            href="https://github.com/Pruddy1"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-zinc-900 py-1"
          >
            GitHub ↗
          </a>
        </nav>
      )}
    </header>
  );
}