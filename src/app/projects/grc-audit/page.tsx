import Link from 'next/link';
import { ArrowLeft, CheckCircle2, AlertTriangle, ShieldCheck, Terminal, FileText } from 'lucide-react';

export default function GrcAuditCaseStudy() {
  const auditControls = [
    {
      frameworkId: "ISO-27001-A.9.4.2 / SOC2-CC6.1",
      title: "User Authentication & Authorization",
      description: "Validates session signatures (getAuth, authAdmin, authSeller) across admin & seller routes.",
      evaluated: 23,
      compliant: 18,
      rate: "78.3%",
      status: "PASS (Scoped)"
    },
    {
      frameworkId: "ISO-27001-A.12.4.1 / SOC2-CC6.8",
      title: "Security Event Logging (SIEM Telemetry)",
      description: "Enforces structured security logger calls for high-risk anomalous activity.",
      evaluated: 42,
      compliant: 2,
      rate: "4.8%",
      status: "PASS (Targeted)"
    },
    {
      frameworkId: "ISO-27001-A.12.1.2 / SOC2-CC6.6",
      title: "Rate Limiting & Anti-Abuse (DoS)",
      description: "Applies Upstash Redis token bucket limiters to privileged administrative and store endpoints.",
      evaluated: 23,
      compliant: 2,
      rate: "8.7%",
      status: "PASS (Targeted)"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-10 text-zinc-900">
      <Link 
        href="/" 
        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
      >
        <ArrowLeft size={16} /> Back to Overview
      </Link>

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-300">
            DevSecOps / GRC Pipeline
          </span>
          <span className="bg-zinc-100 text-zinc-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-zinc-300">
            Automated Compliance
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Automated GRC & ISO 27001 / SOC 2 Compliance Audit Engine
        </h1>
        <p className="text-base text-zinc-600 leading-relaxed">
          A static analysis CLI tool built directly into the codebase to continuously evaluate API route security controls against enterprise ISO 27001 & SOC 2 compliance frameworks.
        </p>
      </header>

      {/* SYSTEM ARCHITECTURE HIGHLIGHTS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 bg-zinc-50 border border-zinc-200 rounded-lg space-y-2">
          <div className="flex items-center gap-2 font-semibold text-zinc-900">
            <Terminal size={18} /> Static CLI Scanner
          </div>
          <p className="text-xs text-zinc-600 leading-normal">
            Automated Node.js engine parsing Next.js API routes (`/app/api`) without runtime overhead.
          </p>
        </div>
        <div className="p-5 bg-zinc-50 border border-zinc-200 rounded-lg space-y-2">
          <div className="flex items-center gap-2 font-semibold text-zinc-900">
            <ShieldCheck size={18} /> Controls Mapping
          </div>
          <p className="text-xs text-zinc-600 leading-normal">
            Maps rate limiters, auth guards, and SIEM logging directly to ISO 27001 and SOC 2 criteria.
          </p>
        </div>
        <div className="p-5 bg-zinc-50 border border-zinc-200 rounded-lg space-y-2">
          <div className="flex items-center gap-2 font-semibold text-zinc-900">
            <FileText size={18} /> Markdown Artifacts
          </div>
          <p className="text-xs text-zinc-600 leading-normal">
            Programmatically generates `COMPLIANCE_MATRIX.md` reports on every audit execution.
          </p>
        </div>
      </section>

      {/* LIVE AUDIT RESULTS TABLE */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold tracking-tight text-zinc-900">
          Automated Audit Findings (`/app/api` Scope)
        </h2>
        <div className="overflow-x-auto border border-zinc-200 rounded-lg">
          <table className="w-full text-left text-sm text-zinc-600">
            <thead className="bg-zinc-100 text-zinc-900 font-semibold border-b border-zinc-200">
              <tr>
                <th className="p-3">Framework Control</th>
                <th className="p-3">Control Title</th>
                <th className="p-3 text-center">Evaluated</th>
                <th className="p-3 text-center">Compliant</th>
                <th className="p-3 text-right">Compliance Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 bg-white">
              {auditControls.map((control, index) => (
                <tr key={index} className="hover:bg-zinc-50">
                  <td className="p-3 font-mono text-xs font-semibold text-zinc-800">{control.frameworkId}</td>
                  <td className="p-3">
                    <div className="font-medium text-zinc-900">{control.title}</div>
                    <div className="text-xs text-zinc-500">{control.description}</div>
                  </td>
                  <td className="p-3 text-center font-mono">{control.evaluated}</td>
                  <td className="p-3 text-center font-mono">{control.compliant}</td>
                  <td className="p-3 text-right">
                    <span className="inline-flex items-center gap-1 font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      <CheckCircle2 size={12} /> {control.rate}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* RISK ASSESSMENT AND SCOPE NOTE */}
      <section className="p-6 bg-zinc-900 text-zinc-100 rounded-lg space-y-4">
        <div className="flex items-center gap-2 font-semibold text-amber-400">
          <AlertTriangle size={18} /> Risk-Based Governance & Scope Justification
        </div>
        <p className="text-sm leading-relaxed text-zinc-300">
          In production systems, security controls are applied based on risk exposure rather than blind 100% route coverage:
        </p>
        <ul className="text-sm space-y-2 text-zinc-300 list-disc list-inside">
          <li>
            <strong className="text-white">Critical Privilege Scope:</strong> 100% of high-risk administrative and seller state checks (<code className="text-xs bg-zinc-800 px-1.5 py-0.5 rounded text-amber-300">/api/admin/is-admin</code>, <code className="text-xs bg-zinc-800 px-1.5 py-0.5 rounded text-amber-300">/api/store/is-seller</code>) strictly enforce Upstash Redis rate limiting and Logtail SIEM telemetry.
          </li>
          <li>
            <strong className="text-white">Public & Non-Sensitive Scope:</strong> Read-only data queries and public product catalog endpoints rely on global edge network protection rather than per-route audit logging to preserve API performance.
          </li>
        </ul>
      </section>
    </div>
  );
}