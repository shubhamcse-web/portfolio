import { SocialIcon } from 'react-social-icons'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

type HeaderProps = {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

export default function SiteHeader({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="Shubham Mishra home">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-500/60 bg-cyan-500/10 text-sm font-bold text-cyan-600 dark:border-cyan-400/60 dark:text-cyan-300">
            &lt;/&gt;
          </div>
          <span className="text-base font-semibold tracking-tight text-slate-900 dark:text-white">
            Shubham Mishra
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-slate-600 transition hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <SocialIcon
            url="https://github.com"
            fgColor={theme === 'dark' ? '#cbd5e1' : '#475569'}
            bgColor="transparent"
            target="_blank"
            rel="noreferrer"
            style={{ height: 28, width: 28 }}
          />
          <SocialIcon
            url="https://www.linkedin.com"
            fgColor={theme === 'dark' ? '#cbd5e1' : '#475569'}
            bgColor="transparent"
            target="_blank"
            rel="noreferrer"
            style={{ height: 28, width: 28 }}
          />
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle light and dark mode"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-slate-100 text-base text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-cyan-300"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <a
            href="mailto:ssshubham.mishra@gmail.com"
            className="hidden rounded-full border border-cyan-500/50 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700 transition hover:border-cyan-600 hover:bg-cyan-500/20 dark:border-cyan-400/50 dark:bg-cyan-500/10 dark:text-cyan-300 sm:inline-flex"
          >
            Let&apos;s talk
          </a>
        </div>
      </div>
    </header>
  )
}
