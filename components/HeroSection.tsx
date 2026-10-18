export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:pt-20">
        <div className="flex flex-col justify-center">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-300">
            Available for freelance &amp; full-time roles
          </p>
          <h1 className="max-w-2xl text-4xl font-black leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-7xl">
            I design and build digital experiences that feel premium, polished, and memorable.
          </h1>
          <div className="mt-5 text-xl font-medium text-slate-700 dark:text-slate-300 sm:text-2xl">
            I&apos;m <span className="text-cyan-700 dark:text-cyan-300">Shubham Mishra</span>
            <span className="ml-2 text-slate-900 dark:text-white">Front-end Developer</span>
          </div>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
            I create fast, user-focused web applications with clean interfaces, modern design systems,
            and product-minded engineering that helps brands grow.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500"
            >
              View projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-cyan-500 hover:text-cyan-700 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:text-cyan-300"
            >
              View my resume
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-cyan-500 hover:text-cyan-700 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:text-cyan-300"
            >
              Contact me
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-600 dark:text-slate-300">
            <div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">4+</p>
              <p>Years experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">20+</p>
              <p>Projects shipped</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white">99%</p>
              <p>Client satisfaction</p>
            </div>
          </div>
        </div>

        <div className="relative mt-8 lg:mt-0">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-purple-500/10 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white/90 p-5 shadow-xl shadow-cyan-500/10 dark:border-slate-800 dark:bg-slate-900/80">
            <div className="mb-6 flex items-center justify-between">
              <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-300">
                Online
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">Based in India</span>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 dark:border-slate-700 dark:bg-slate-950/80">
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-lg font-bold text-white">
                  &lt;/&gt;
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900 dark:text-white">Shubham Mishra</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Product-focused developer</p>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  ['Front-end', 'Next.js, React, TypeScript'],
                  ['Design', 'Tailwind, Figma, UX'],
                  ['Back-end', 'Node.js, APIs, Databases'],
                ].map(([title, detail]) => (
                  <div key={title} className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{title}</p>
                    <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
