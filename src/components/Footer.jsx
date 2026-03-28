import { navLinks, profile } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row md:items-start">
        <div className="text-center md:text-left">
          <p className="font-mono text-sm font-semibold text-white">{profile.name}</p>
          <p className="mt-1 text-sm text-zinc-300">{profile.role}</p>
          <p className="mt-4 text-xs text-zinc-400">© {year} {profile.name}. All rights reserved.</p>
        </div>
        <nav aria-label="Footer">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-400">Quick links</p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 md:justify-end">
            {navLinks.map((l) => (
              <li key={l.id}>
                <button
                  type="button"
                  onClick={() => go(l.id)}
                  className="text-sm text-zinc-300 transition hover:text-violet-300"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
