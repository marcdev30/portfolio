"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Page() {
  const [activeExp, setActiveExp] = useState<number | null>(0);
  const [skillFilter, setSkillFilter] = useState<string>("all");
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    function onMove(e: MouseEvent) {
      const rect = el.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    }

    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  const resumeUrl = "/MarcColldefornsArmeroResume.pdf"; // replace with real hosted path

  const experiences = [
    {
      role: "CTO",
      company: "EASYWORLD",
      period: "03/2025 - Present",
      desc: "Leading development of an AI-based app to enhance English learning for users.",
      tags: ["AI", "Leadership", "Full-stack"],
    },
    {
      role: "Technology Lead",
      company: "Ibercasa Inmobiliaria",
      period: "05/2024 - 09/2024",
      desc: "Tech lead for full-stack redesign of a leading Spanish real estate company.",
      tags: ["Next.js", "React", "Architecture"],
    },
    {
      role: "Technology Lead",
      company: "Achieve.nl",
      period: "04/2020 - 01/2024",
      desc: "Tech lead of a Dutch digital agency — delivered multiple client projects and led engineering efforts.",
      tags: ["Team Lead", "Client-facing", "Node.js"],
    },
    {
      role: "Freelancer",
      company: "Fiverr",
      period: "03/2018 - 09/2020",
      desc: "Full-stack freelance projects across web and mobile.",
      tags: ["Freelance", "React Native", "API"],
    },
  ];

  const skills = [
    { name: "Node.js", tag: "backend" },
    { name: "React.js", tag: "frontend" },
    { name: "Next.js", tag: "frontend" },
    { name: "Express.js", tag: "backend" },
    { name: "SQL", tag: "db" },
    { name: "AI", tag: "ai" },
    { name: "Firebase", tag: "infra" },
    { name: "React Native", tag: "mobile" },
    { name: "AWS", tag: "infra" },
    { name: "Vercel", tag: "infra" },
    { name: "Project Management", tag: "soft" },
    { name: "API Design", tag: "backend" },
  ];

  const achievements = [
    { title: "Sales Growth", value: "+30% sales in 12 months" },
    { title: "Cost Reduction", value: "-15% operational costs" },
    {
      title: "Project Milestones",
      value: "5 major milestones ahead of schedule",
    },
    { title: "Customer Satisfaction", value: "+20% CSAT" },
  ];

  const languages = [
    { lang: "English", level: "Proficient" },
    { lang: "Spanish", level: "Native" },
  ];

  function filteredSkills() {
    if (skillFilter === "all") return skills;
    return skills.filter((s) => s.tag === skillFilter);
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 text-slate-100 font-sans">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header / Hero */}
        <section
          ref={heroRef}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-800/40 to-slate-700/30 p-8 mb-8 border border-slate-700/50"
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              transform: `translate3d(${(mousePos.x - 0.5) * 30}px, ${
                (mousePos.y - 0.5) * 20
              }px, 0)`,
            }}
            aria-hidden
          />

          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-2">
                Marc Colldeforns Armero
              </h1>
              <p className="text-slate-300 max-w-2xl">
                CTO · Full-stack developer — focused on AI, Next.js, and
                product-led engineering.
              </p>

              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={`mailto:marcc3004@gmail.com`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700/60 hover:bg-slate-700 transition"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M3 8.5v7A2.5 2.5 0 0 0 5.5 18h13A2.5 2.5 0 0 0 21 15.5v-7"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 8.5L12 13 3 8.5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Email
                </a>

                <a
                  href="https://linkedin.com/in/marc-colldeforns-643b56376"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-600 hover:border-slate-400 transition"
                >
                  LinkedIn
                </a>

                <a
                  href={resumeUrl}
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-600 text-black font-semibold hover:brightness-95 transition"
                >
                  Download Resume
                </a>
              </div>
            </div>

            <div className="mt-6 sm:mt-0 sm:ml-8 flex items-center">
              <div className="w-40 h-40 rounded-xl bg-gradient-to-tr from-emerald-500/20 to-sky-500/10 border border-slate-700 flex items-center justify-center">
                <img
                  className="w-40 h-40 rounded-xl"
                  src="Marc.jpg"
                  alt="Marc"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {achievements.map((a, i) => (
              <div
                key={i}
                className="p-3 rounded-lg bg-slate-800/40 border border-slate-700/40"
              >
                <div className="text-xs text-slate-400">{a.title}</div>
                <div className="text-sm font-semibold mt-1">{a.value}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Main content columns */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left column: Summary + Skills */}
          <aside className="md:col-span-1 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/40">
              <h2 className="text-xl font-semibold mb-2">Summary</h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                I am a full-stack developer with 5 years of experience working
                with Express.js, React, React Native and a variety of other
                frameworks. Recently focused on AI, participating in large-scale
                projects that leverage AI as a core technology.
              </p>

              <div className="mt-4">
                <h3 className="text-sm text-slate-400">Languages</h3>
                <ul className="mt-2 text-sm">
                  {languages.map((l, i) => (
                    <li key={i} className="flex justify-between">
                      <span>{l.lang}</span>
                      <span className="text-slate-400">{l.level}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/40">
              <h2 className="text-xl font-semibold mb-3">Skills</h2>

              <div className="mb-3 flex flex-wrap gap-2">
                {[
                  { id: "all", label: "All" },
                  { id: "frontend", label: "Frontend" },
                  { id: "backend", label: "Backend" },
                  { id: "infra", label: "Infra" },
                  { id: "ai", label: "AI" },
                  { id: "mobile", label: "Mobile" },
                ].map((f) => (
                  <button
                    key={f.id}
                    onClick={() => setSkillFilter(f.id)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      skillFilter === f.id
                        ? "bg-emerald-500 text-black"
                        : "bg-slate-700/40"
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2">
                {filteredSkills().map((s, i) => (
                  <div
                    key={i}
                    className="p-2 rounded-lg bg-slate-700/30 border border-slate-700/30 text-sm"
                  >
                    {s.name}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Right column: Experience & Projects */}
          <section className="md:col-span-2 space-y-6">
            <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/40">
              <h2 className="text-2xl font-semibold mb-4">Experience</h2>

              <div className="space-y-4">
                {experiences.map((e, idx) => (
                  <article
                    key={idx}
                    className={`p-4 rounded-lg border-l-4 ${
                      activeExp === idx
                        ? "border-emerald-500 bg-slate-800/50"
                        : "border-slate-700/20"
                    } transition-all cursor-pointer`}
                    onClick={() => setActiveExp(activeExp === idx ? null : idx)}
                    role="button"
                    tabIndex={0}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">
                          {e.role} — {e.company}
                        </h3>
                        <div className="text-xs text-slate-400">{e.period}</div>
                      </div>
                      <div className="text-sm text-slate-300">
                        {e.tags.join(" · ")}
                      </div>
                    </div>

                    <div
                      className={`mt-3 text-sm text-slate-300 ${
                        activeExp === idx ? "block" : "hidden"
                      }`}
                    >
                      {e.desc}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/40">
              <h2 className="text-2xl font-semibold mb-4">Key Achievements</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {achievements.map((a, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg bg-slate-700/20 border border-slate-700/20"
                  >
                    <div className="text-sm text-slate-300">{a.title}</div>
                    <div className="mt-2 font-semibold">{a.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/30 border border-slate-700/40">
              <h2 className="text-2xl font-semibold mb-4">Contact & Links</h2>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <a className="underline" href={`mailto:marcc3004@gmail.com`}>
                  marcc3004@gmail.com
                </a>
                <a
                  className="underline"
                  href="https://linkedin.com/in/marc-colldeforns-643b56376"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
                <a className="underline" href={resumeUrl} download>
                  Download Resume
                </a>
              </div>
            </div>
          </section>
        </div>

        <footer className="mt-12 text-center text-slate-400 text-sm">
          <div>Built with ❤️ by Marc</div>
        </footer>
      </div>

      {/* Inline styles for small animations */}
      <style>{`
        @keyframes floaty {
          0% { transform: translateY(0) }
          50% { transform: translateY(-6px) }
          100% { transform: translateY(0) }
        }

        main h1 { animation: floaty 6s ease-in-out infinite; }

        /* small focus-visible helper for keyboard users */
        :focus { outline: none; }
        [role="button"]:focus { box-shadow: 0 0 0 3px rgba(34,197,94,0.18); }

        /* Glassy gradient accents */
        .glow { box-shadow: 0 6px 30px rgba(56,189,248,0.06); }

        /* responsive tweaks */
        @media (max-width: 640px) {
          main h1 { font-size: 2rem; }
        }
      `}</style>
    </main>
  );
}
