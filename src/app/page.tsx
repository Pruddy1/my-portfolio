import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-24">
      {/* HERO SECTION */}
      <section className="space-y-6 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
          Full-Stack Software Engineer building multi-vendor platforms and security systems.
        </h1>
        <p className="text-zinc-600 text-lg leading-relaxed">
          I design scalable web services, mobile clients, and practical security operations infrastructure. Currently focused on multi-vendor e-commerce architecture and SOC logging pipelines.
        </p>
        <div className="pt-2 flex flex-wrap gap-4 text-sm font-medium">
          <Link
            href="/projects/relgil"
            className="inline-flex items-center gap-1.5 bg-zinc-900 text-white px-5 py-2.5 rounded-md hover:bg-zinc-800 transition-colors"
          >
            Relgil Case Study <ArrowUpRight size={16} />
          </Link>
          <a
            href="#security"
            className="inline-flex items-center gap-1.5 border border-zinc-300 text-zinc-800 px-5 py-2.5 rounded-md hover:bg-zinc-50 transition-colors"
          >
            Security & SOC Lab
          </a>
        </div>
      </section>

      {/* FEATURED WORK */}
      <section id="work" className="space-y-8 pt-8 border-t border-zinc-200">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-zinc-900">Featured Projects</h2>
          <p className="text-sm text-zinc-500">Core architectural implementations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Relgil */}
          <div className="border border-zinc-200 rounded-lg p-6 flex flex-col justify-between hover:border-zinc-400 transition-colors">
            <div className="space-y-3">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Web Architecture</span>
              <h3 className="text-lg font-semibold text-zinc-900">Relgil Platform</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Multi-vendor e-commerce platform built with Node.js, PostgreSQL, and Next.js. Features automated inventory syncing and integrated SOC audit trails.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/projects/relgil"
                className="inline-flex items-center gap-1 text-sm font-semibold text-zinc-900 hover:underline"
              >
                View Architecture Breakdown <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          {/* Expo Mobile App */}
          <div className="border border-zinc-200 rounded-lg p-6 flex flex-col justify-between hover:border-zinc-400 transition-colors">
            <div className="space-y-3">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Mobile Client</span>
              <h3 className="text-lg font-semibold text-zinc-900">Expo E-Commerce Client</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Cross-platform mobile application with secure token storage (Expo SecureStore), offline state caching, and responsive UI flows.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/projects/mobile-app"
                className="inline-flex items-center gap-1 text-sm font-semibold text-zinc-900 hover:underline"
              >
                View Mobile Showcase <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECURITY LAB PREVIEW */}
      <section id="security" className="space-y-6 pt-8 border-t border-zinc-200">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-zinc-900">SOC & Security Lab</h2>
          <p className="text-sm text-zinc-500">Practical incident detection and SIEM monitoring</p>
        </div>

        <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-6 space-y-4">
          <h3 className="font-semibold text-zinc-900">Relgil Threat Monitoring & Log Pipeline</h3>
          <p className="text-sm text-zinc-600 leading-relaxed">
            Integrated Winston structured logging into backend API gateways, capturing failed authentication triggers and rate-limit threshold breaches, streaming real-time event telemetry to Better Stack dashboards for incident alert routing and audit trails.
          </p>
        </div>
      </section>
    </main>
  );
}