import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import SiteHeader from '../components/SiteHeader'
import HeroSection from '../components/HeroSection'

const projects = [
  {
    title: 'Fintech Dashboard',
    description: 'A high-conversion analytics dashboard for a finance platform with payment insights and account health tracking.',
    stack: ['Next.js', 'TypeScript', 'Tailwind'],
    accent: 'from-cyan-400 to-blue-600',
  },
  {
    title: 'SaaS Product Landing',
    description: 'A conversion-focused product marketing site with performance optimization and a streamlined onboarding journey.',
    stack: ['React', 'SEO', 'UX'],
    accent: 'from-violet-500 to-fuchsia-500',
  },
  {
    title: 'Marketplace Experience',
    description: 'A modern commerce interface built for fast browsing, trust-building, and customer retention.',
    stack: ['Node.js', 'Stripe', 'UX'],
    accent: 'from-emerald-500 to-teal-600',
  },
]

const skills = [
  'Next.js',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'REST APIs',
  'Figma',
  'UI/UX Design',
  'Responsive Design',
  'Performance Optimization',
]

const experience = [
  {
    period: '2023 — Present',
    title: 'Frontend Engineer',
    company: 'Independent / Client Work',
    description: 'Lead front-end architecture, UI systems, and marketing experiences for businesses seeking polished digital products.',
  },
  {
    period: '2021 — 2023',
    title: 'Full Stack Developer',
    company: 'Product Studio',
    description: 'Built web applications, dashboards, and integrations while collaborating closely with design and product teams.',
  },
  {
    period: '2019 — 2021',
    title: 'Web Developer',
    company: 'Digital Agency',
    description: 'Delivered responsive websites and landing pages focused on user engagement, accessibility, and conversion.',
  },
]

const certificates = [
  {
    title: 'Responsive Web Design',
    issuer: 'FreeCodeCamp',
    year: '2024',
  },
  {
    title: 'Modern JavaScript',
    issuer: 'Coursera',
    year: '2023',
  },
  {
    title: 'React Front-End Development',
    issuer: 'Udemy',
    year: '2022',
  },
]

const Home: NextPage = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const initialTheme = savedTheme ?? (prefersDark ? 'dark' : 'light')
    setTheme(initialTheme)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.classList.toggle('light', theme === 'light')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      <Head>
        <title>Shubham Mishra | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Shubham Mishra, a frontend developer building modern, accessible, and high-performing web experiences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <SiteHeader theme={theme} onToggleTheme={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))} />
      <main>
        <HeroSection />

        <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-300">
                About me
              </p>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Crafting thoughtful experiences for ambitious brands.</h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              <p>
                I&apos;m a developer who enjoys turning product ideas into elegant digital experiences.
                My work blends design thinking, front-end engineering, and a strong focus on usability,
                performance, and business outcomes.
              </p>
              <p>
                Whether I&apos;m building marketing pages, dashboards, or full product interfaces, I care about
                clarity, polish, and long-term scalability. Good design is not only about aesthetics — it is
                about helping people move through a product with ease.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="bg-slate-100/80 py-20 dark:bg-slate-900/60">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 flex items-end justify-between gap-4">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-300">Projects</p>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Selected work</h2>
              </div>
              <a href="#contact" className="hidden text-sm font-medium text-cyan-700 transition hover:text-cyan-600 dark:text-cyan-300 dark:hover:text-cyan-200 sm:inline-flex">
                Start a project →
              </a>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {projects.map((project) => (
                <article key={project.title} className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-cyan-500/40 dark:border-slate-800 dark:bg-slate-950/80">
                  <div className={`h-48 bg-gradient-to-br ${project.accent} p-5`}>
                    <div className="flex h-full items-end justify-between rounded-2xl border border-white/10 bg-slate-950/20 p-4 backdrop-blur-sm">
                      <span className="rounded-full bg-slate-950/50 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/90">
                        Case study
                      </span>
                      <span className="text-xl font-semibold text-white">01</span>
                    </div>
                  </div>
                  <div className="space-y-5 p-6">
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                      <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span key={item} className="rounded-full border border-slate-200 px-2.5 py-1 text-xs text-slate-700 dark:border-slate-700 dark:text-slate-300">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-300">Skills</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Tools and capabilities</h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-cyan-500/30 bg-cyan-500/5 px-4 py-2 text-sm text-cyan-700 dark:text-cyan-100">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="certificates" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-300">Certificates</p>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Recognitions and learning</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {certificates.map((certificate) => (
              <div key={certificate.title} className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950/80">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-xl text-cyan-600 dark:text-cyan-300">
                  ✓
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{certificate.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{certificate.issuer}</p>
                <span className="mt-4 inline-flex rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:text-slate-300">
                  {certificate.year}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="bg-slate-100/80 py-20 dark:bg-slate-900/60">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-300">Experience</p>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">Professional journey</h2>
            </div>

            <div className="space-y-6">
              {experience.map((role) => (
                <div key={role.title} className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950/80">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-cyan-700 dark:text-cyan-300">{role.period}</p>
                      <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{role.title}</h3>
                    </div>
                    <span className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700 dark:border-slate-700 dark:text-slate-300">
                      {role.company}
                    </span>
                  </div>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 dark:text-slate-300">{role.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-white to-slate-100 p-8 text-center dark:from-cyan-500/10 dark:via-slate-900 dark:to-slate-950 sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-600 dark:text-cyan-300">Let&apos;s build</p>
            <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white sm:text-5xl">Need a standout digital presence?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              I help founders and companies create beautiful, high-converting experiences that look as good as they perform.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a href="mailto:ssshubham.mishra@gmail.com" className="rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500">
                ssshubham.mishra@gmail.com
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-cyan-500 hover:text-cyan-700 dark:border-slate-600 dark:text-white dark:hover:text-cyan-300">
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        © 2026 Shubham Mishra. Designed and built with Next.js.
      </footer>
    </div>
  )
}

export default Home
