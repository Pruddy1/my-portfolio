

"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ExternalLink, ShieldCheck, Server, Database, Activity, X } from "lucide-react";

export default function RelgilCaseStudy() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

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
          <span className="text-xs font-mono bg-zinc-100 text-zinc-700 px-3 py-1 rounded border border-zinc-200 uppercase tracking-wider">
            Flagship Case Study
          </span>
          <span className="text-xs font-mono text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 font-medium">
            Production Released
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900">
          Relgil Multi-Vendor E-Commerce & SOC Infrastructure
        </h1>

        <p className="text-zinc-600 text-lg leading-relaxed">
          An end-to-end multi-vendor marketplace architecture designed for scalable transaction management, automated inventory synchronization, and an integrated SOC logging pipeline for real-time threat monitoring.
        </p>

        {/* METADATA BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-zinc-200 text-sm">
          <div>
            <span className="text-zinc-400 block text-xs font-mono uppercase">Role</span>
            <span className="font-medium text-zinc-800">Lead Engineer & Architect</span>
          </div>
          <div>
            <span className="text-zinc-400 block text-xs font-mono uppercase">Stack</span>
            <span className="font-medium text-zinc-800">PERN / Next.js / Redis</span>
          </div>
          <div>
            <span className="text-zinc-400 block text-xs font-mono uppercase">Security Lab</span>
            <span className="font-medium text-zinc-800">Better Stack / Winston / Redis</span>
          </div>
          <div>
            <span className="text-zinc-400 block text-xs font-mono uppercase">Live Link</span>
            <a
              href="https://relgil.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-zinc-900 hover:underline inline-flex items-center gap-1"
            >
              relgil.com <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </section>

      {/* SYSTEM ARCHITECTURE OVERVIEW */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">System Architecture Overview</h2>
        <p className="text-zinc-600 leading-relaxed">
          Relgil was designed to handle complex multi-vendor workflows: isolated vendor dashboards, custom order fulfillment pipelines, and high-frequency database operations without sacrificing security or system responsiveness.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="border border-zinc-200 rounded-lg p-5 bg-zinc-50/50 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-zinc-900">
              <Server size={18} className="text-zinc-700" /> Web & API Layer
            </div>
            <p className="text-xs text-zinc-600 leading-normal">
              Next.js frontend communicating with Node.js/Express API gateways behind strict CORS and Redis-backed rate limiters.
            </p>
          </div>

          <div className="border border-zinc-200 rounded-lg p-5 bg-zinc-50/50 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-zinc-900">
              <Database size={18} className="text-zinc-700" /> Database & State
            </div>
            <p className="text-xs text-zinc-600 leading-normal">
              PostgreSQL relational database running Prisma ORM with connection pooling to safely execute parallel vendor operations.
            </p>
          </div>

          <div className="border border-zinc-200 rounded-lg p-5 bg-zinc-50/50 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-zinc-900">
              <ShieldCheck size={18} className="text-zinc-700" /> Security Pipeline
            </div>
            <p className="text-xs text-zinc-600 leading-normal">
              Centralized Winston logger emitting structured JSON telemetry to Better Stack for real-time log ingestion, alert routing, and incident monitoring.
            </p>
          </div>
        </div>
      </section>

      {/* SOC & SECURITY LAB SECTION */}
      <section className="space-y-6 pt-6 border-t border-zinc-200">
        <div className="flex items-center gap-2">
          <Activity size={20} className="text-emerald-600" />
          <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">SOC Telemetry & Rate-Limit Incident Response</h2>
        </div>

        <p className="text-zinc-600 leading-relaxed">
          Engineered an end-to-end security telemetry pipeline for Relgil. Integrated Redis-backed API rate limiting with structured security logging, streaming real-time event alerts to Better Stack, and executing full SOC post-mortem workflows for rate-limit violations.
        </p>

        {/* BETTER STACK EVIDENCE DASHBOARD CARD */}
        <div className="bg-zinc-900 text-zinc-100 p-6 rounded-lg space-y-4">
          <div className="flex items-center justify-between text-zinc-400 border-b border-zinc-800 pb-3">
            <span className="text-xs font-mono">// Live Alert Telemetry (Better Stack Incident #1008070356)</span>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/50 px-2 py-0.5 rounded border border-emerald-800">
              VERIFIED & RESOLVED
            </span>
          </div>

          {/* Screenshot Display Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="space-y-2">
              <span className="text-xs text-zinc-400 block font-mono">
                1. Detection & Threshold Spike <span className="text-zinc-500">(Click to expand)</span>
              </span>
              <div 
                onClick={() => setSelectedImage({
                  src: "/images/betterstack-graph.jpg",
                  alt: "Better Stack Rate Limit Metric Spike"
                })}
                className="border border-zinc-800 rounded overflow-hidden bg-zinc-950 p-2 cursor-zoom-in hover:border-emerald-500/50 transition-colors group"
              >
                <img 
                  src="/images/betterstack-graph.jpg" 
                  alt="Better Stack Rate Limit Metric Spike" 
                  className="rounded w-full object-cover group-hover:scale-[1.01] transition-transform duration-200"
                />
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs text-zinc-400 block font-mono">
                2. SOC Post-Mortem & Audit Trail <span className="text-zinc-500">(Click to expand)</span>
              </span>
              <div 
                onClick={() => setSelectedImage({
                  src: "/images/betterstack-comment.jpg",
                  alt: "Better Stack SOC Closing Comment"
                })}
                className="border border-zinc-800 rounded overflow-hidden bg-zinc-950 p-2 cursor-zoom-in hover:border-emerald-500/50 transition-colors group"
              >
                <img 
                  src="/images/betterstack-comment.jpg" 
                  alt="Better Stack SOC Closing Comment" 
                  className="rounded w-full object-cover group-hover:scale-[1.01] transition-transform duration-200"
                />
              </div>
            </div>
          </div>

          {/* Incident Triage Snippet */}
          <div className="pt-2 font-mono text-xs bg-zinc-950 p-4 rounded border border-zinc-800 text-zinc-300 space-y-1">
            <p className="text-zinc-500">// SOC Investigation Record</p>
            <p><span className="text-zinc-400">Target Endpoint:</span> /api/admin/is-admin</p>
            <p><span className="text-zinc-400">Trigger Threshold:</span> Value &gt; 2 (Recorded Peak: 8 events)</p>
            <p><span className="text-zinc-400">Action Taken:</span> HTTP 429 Block + Auto-Resolution Verification</p>
            <p><span className="text-zinc-400">Classification:</span> Closed - False Positive (Authorized Simulation)</p>
          </div>
        </div>

        <div className="space-y-4 pt-2">
          <h3 className="text-lg font-semibold text-zinc-900">Security Operations Key Takeaways</h3>
          <ul className="list-disc list-inside text-zinc-600 space-y-2 text-sm leading-relaxed">
            <li><strong>Structured Event Transport:</strong> Implemented centralized security loggers to broadcast `RATE_LIMIT_EXCEEDED` events with contextual metadata (IP, route, user agent).</li>
            <li><strong>Automated Alert Escalation:</strong> Configured instant email triggers when burst traffic violates system thresholds.</li>
            <li><strong>End-to-End Triage Workflow:</strong> Simulated attack bursts using local PowerShell scripts, verified 429 edge blocks, and logged post-mortem findings in the incident dashboard.</li>
          </ul>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-5xl w-full bg-zinc-900 border border-zinc-800 rounded-xl p-2 shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white bg-zinc-800/80 hover:bg-zinc-700 rounded-full p-2 transition-colors z-10"
              aria-label="Close Preview"
            >
              <X size={18} />
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
   

    
      
      
      {/*<section className="space-y-6 pt-6 border-t border-zinc-200">
        <div className="flex items-center gap-2">
          <Activity size={20} className="text-emerald-600" />
          <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">SOC & Cybersecurity Implementation</h2>
        </div>
        
        <p className="text-zinc-600 leading-relaxed">
          To build security into the application layer, Relgil includes custom security operations monitoring designed to ingest log telemetry, detect authentication anomaly spikes, and trace suspicious API requests.
        </p>

        <div className="bg-zinc-900 text-zinc-100 p-6 rounded-lg font-mono text-xs space-y-4">
          <div className="flex items-center justify-between text-zinc-400 border-b border-zinc-800 pb-3">
            <span>// SOC Audit Trail Log Snippet (Winston Structured Output)</span>
            <span className="text-emerald-400">STATUS: MONITORED</span>
          </div>
          <pre className="overflow-x-auto text-zinc-300 leading-relaxed">
{`{
  "timestamp": "2026-08-27T17:00:00Z",
  "level": "WARN",
  "event": "AUTH_RATE_LIMIT_EXCEEDED",
  "ip": "192.168.1.104",
  "user_agent": "Mozilla/5.0...",
  "details": {
    "attempts": 6,
    "windowSeconds": 60,
    "targetAccount": "vendor_admin"
  },
  "action_taken": "TEMPORARY_IP_BLOCK_REDIS"
}`}
          </pre>
        </div>

        <div className="space-y-4 pt-2">
          <h3 className="text-lg font-semibold text-zinc-900">Security Engineering Highlights</h3>
          <ul className="list-disc list-inside text-zinc-600 space-y-2 text-sm leading-relaxed">
            <li><strong>Structured JSON Logging:</strong> Replaced default standard console logs with Winston formatters to pass contextual IP and route data to ELK/Grafana Loki.</li>
            <li><strong>SIEM Detection Rules:</strong> Configured logic rules to alert on repeated failed login thresholds and authorization token reuse attempts.</li>
            <li><strong>Immutable Audit Trail:</strong> Written dedicated middleware to mirror critical actions (payout requests, inventory overrides, password resets) into a protected DB table.</li>
          </ul>
        </div>
      </section>*/}
    </main>
  );
}