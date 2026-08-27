import Link from "next/link";
import { ArrowLeft, Smartphone, ShieldCheck, Zap, Layers } from "lucide-react";

export default function MobileAppShowcase() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-16">
      {/* NAVIGATION BACK */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
      >
        <ArrowLeft size={16} /> Back to Overview
      </Link>

      {/* HEADER SECTION */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono bg-blue-50 text-blue-700 px-3 py-1 rounded border border-blue-200 uppercase tracking-wider font-medium">
            Mobile Client Architecture
          </span>
          <span className="text-xs font-mono text-zinc-600 bg-zinc-100 px-2.5 py-1 rounded border border-zinc-200">
            Expo / React Native
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900">
          Expo E-Commerce Mobile Client
        </h1>

        <p className="text-zinc-600 text-lg leading-relaxed">
          A cross-platform mobile shopping experience built with Expo and React Native, featuring secure token persistence, offline state management, and optimized product discovery components.
        </p>

        {/* METADATA BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-zinc-200 text-sm">
          <div>
            <span className="text-zinc-400 block text-xs font-mono uppercase">Framework</span>
            <span className="font-medium text-zinc-800">React Native (Expo)</span>
          </div>
          <div>
            <span className="text-zinc-400 block text-xs font-mono uppercase">State & Cache</span>
            <span className="font-medium text-zinc-800">Redux Toolkit / Query</span>
          </div>
          <div>
            <span className="text-zinc-400 block text-xs font-mono uppercase">Secure Storage</span>
            <span className="font-medium text-zinc-800">Expo SecureStore</span>
          </div>
          <div>
            <span className="text-zinc-400 block text-xs font-mono uppercase">Target Platforms</span>
            <span className="font-medium text-zinc-800">iOS & Android</span>
          </div>
        </div>
      </section>

      {/* UI MOCKUP PLACEHOLDERS GRID */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">Application Interface</h2>
          <p className="text-sm text-zinc-500">Device frames and key workflow previews</p>
        </div>

        {/* Mobile Mockup Frames (Placeholders until design graphics are ready) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
          {/* Screen 1 Placeholder */}
          <div className="aspect-[9/16] bg-zinc-100 border border-zinc-300 rounded-2xl flex flex-col items-center justify-center p-6 text-center shadow-sm hover:border-zinc-400 transition-colors">
            <Smartphone size={32} className="text-zinc-400 mb-3" />
            <span className="text-sm font-semibold text-zinc-700">Product Discovery</span>
            <span className="text-xs text-zinc-400 mt-1">[ Image Placeholder: Home & Catalog Screen ]</span>
          </div>

          {/* Screen 2 Placeholder */}
          <div className="aspect-[9/16] bg-zinc-100 border border-zinc-300 rounded-2xl flex flex-col items-center justify-center p-6 text-center shadow-sm hover:border-zinc-400 transition-colors">
            <Smartphone size={32} className="text-zinc-400 mb-3" />
            <span className="text-sm font-semibold text-zinc-700">Checkout Flow</span>
            <span className="text-xs text-zinc-400 mt-1">[ Image Placeholder: Cart & Payment Screen ]</span>
          </div>

          {/* Screen 3 Placeholder */}
          <div className="aspect-[9/16] bg-zinc-100 border border-zinc-300 rounded-2xl flex flex-col items-center justify-center p-6 text-center shadow-sm hover:border-zinc-400 transition-colors">
            <Smartphone size={32} className="text-zinc-400 mb-3" />
            <span className="text-sm font-semibold text-zinc-700">User Account</span>
            <span className="text-xs text-zinc-400 mt-1">[ Image Placeholder: Orders & Profile Screen ]</span>
          </div>
        </div>
      </section>

      {/* TECHNICAL HIGHLIGHTS */}
      <section className="space-y-6 pt-6 border-t border-zinc-200">
        <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">Key Mobile Engineering Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-zinc-200 rounded-lg p-5 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-zinc-900">
              <ShieldCheck size={18} className="text-blue-600" /> Token Persistence
            </div>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Implemented encrypted session storage using Expo SecureStore to retain auth state across device reboots safely.
            </p>
          </div>

          <div className="border border-zinc-200 rounded-lg p-5 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-zinc-900">
              <Zap size={18} className="text-blue-600" /> Optimistic Rendering
            </div>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Applied optimistic UI updates for cart modifications and wishlist toggles to deliver immediate feedback on mobile network latency.
            </p>
          </div>

          <div className="border border-zinc-200 rounded-lg p-5 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-zinc-900">
              <Layers size={18} className="text-blue-600" /> Universal Layouts
            </div>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Structured screen components using platform-agnostic styling to ensure pixel-perfect consistency on iOS and Android.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}