import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";

export default function ProjectArchive() {
  const archivedProjects = [
    {
      year: "2025",
      title: "Obiomaire E-Commerce",
      category: "Full-Stack Web",
      stack: ["Next.js", "React", "Node.js", "MongoDB"],
      description: "E-commerce platform build utilizing Next.js serverless architecture.",
      //link: "https://www.obiomaire.com",
      link: "https://paystackcom-5bkz.vercel.app",
    },
    {
      year: "2025",
      title: "Remotegetter",
      category: "Recruitment Portal",
      stack: ["React", "Express", "Node.js", "MongoDB"],
      description: "Recruitment web application designed to connect job seekers with employers.",
      //link: "https://www.remotegetter.com",
      link: "https://job-web-new.vercel.app",
    },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-12">
      {/* NAVIGATION BACK */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
      >
        <ArrowLeft size={16} /> Back to Overview
      </Link>

      {/* HEADER SECTION */}
      <section className="space-y-4">
        <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
          Complete History
        </span>
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900">
          Project Archive
        </h1>
        <p className="text-zinc-600 text-lg leading-relaxed max-w-2xl">
          An overview of earlier platforms, MVPs, and foundational web applications built prior to my current flagship architectures.
        </p>
      </section>

      {/* ARCHIVE TABLE */}
      <section className="pt-4">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-zinc-200 text-xs font-mono text-zinc-400 uppercase">
                <th className="py-3 pr-4 font-semibold">Year</th>
                <th className="py-3 px-4 font-semibold">Project</th>
                <th className="py-3 px-4 font-semibold hidden md:table-cell">Built With</th>
                <th className="py-3 pl-4 font-semibold text-right">Link</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {archivedProjects.map((project, index) => (
                <tr key={index} className="hover:bg-zinc-50/80 transition-colors">
                  <td className="py-4 pr-4 font-mono text-xs text-zinc-400">{project.year}</td>
                  <td className="py-4 px-4 font-semibold text-zinc-900">
                    <div>{project.title}</div>
                    <div className="text-xs font-normal text-zinc-500 md:hidden mt-0.5">
                      {project.description}
                    </div>
                  </td>
                  <td className="py-4 px-4 hidden md:table-cell">
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs font-mono bg-zinc-100 text-zinc-600 px-2 py-0.5 rounded border border-zinc-200/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 pl-4 text-right">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-zinc-700 hover:text-zinc-900 hover:underline"
                    >
                      Visit <ExternalLink size={12} />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}