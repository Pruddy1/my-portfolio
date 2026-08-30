

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Zap, Layers, X, ZoomIn } from "lucide-react";

export default function MobileAppShowcase() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    title: string;
  } | null>(null);

  const screens = [
    {
      title: "Product Discovery",
      subtitle: "Catalog & Home Screen",
      src: "/images/IMG_3110.jpg",
      alt: "Expo App Product Discovery Screen",
    },
    {
      title: "Checkout Flow",
      subtitle: "Cart & Payment Calculation",
      src: "/images/IMG_3111.jpg",
      alt: "Expo App Cart & Checkout Screen",
    },
    {
      title: "User Account & Tracking",
      subtitle: "Order Details & Status Trail",
      src: "/images/IMG_3115.jpg",
      alt: "Expo App Order Tracking Screen",
    },
  ];

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

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
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

      {/* UI MOCKUPS / SCREENSHOTS SHOWCASE */}
      {/* UI MOCKUPS / SCREENSHOTS SHOWCASE */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">Application Interface</h2>
          <p className="text-sm text-zinc-500 font-mono">Key workflow previews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
          {screens.map((screen, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-3 group">
              {/* Clean Framed Container */}
              <div
                onClick={() => setSelectedImage(screen)}
                className="relative w-full max-w-[280px] aspect-[9/19.5] bg-white rounded-2xl overflow-hidden border border-zinc-200 shadow-md hover:shadow-xl cursor-pointer transition-all duration-300 group-hover:-translate-y-1"
              >
                <img
                  src={screen.src}
                  alt={screen.alt}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                />
                
                {/* Hover Overlay Icon */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-zinc-900/90 text-white p-2.5 rounded-full shadow-md">
                    <ZoomIn size={18} />
                  </span>
                </div>
              </div>

              {/* Labels */}
              <div className="text-center space-y-0.5">
                <h3 className="text-sm font-semibold text-zinc-900">{screen.title}</h3>
                <p className="text-xs font-mono text-zinc-500">{screen.subtitle}</p>
              </div>
            </div>
          ))}
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

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-sm w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-2xl flex flex-col items-center space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 text-zinc-400 hover:text-white bg-zinc-800/80 hover:bg-zinc-700 rounded-full p-2 transition-colors z-10"
              aria-label="Close Preview"
            >
              <X size={16} />
            </button>
            <div className="text-center pt-2">
              <h4 className="text-zinc-100 text-sm font-semibold">{selectedImage.title}</h4>
              <p className="text-zinc-400 text-xs font-mono">{selectedImage.alt}</p>
            </div>
            <div className="max-h-[75vh] overflow-y-auto rounded-xl">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}


