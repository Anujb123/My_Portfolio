import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import Section from './Section'
import { projectFilters, projects } from '../data/content'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filtered = useMemo(() => {
    if (filter === 'all') return projects
    return projects.filter((p) => p.tags.includes(filter))
  }, [filter])

  return (
    <Section id="projects" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-mono text-sm font-semibold uppercase tracking-widest text-violet-300">
          Portfolio
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-white">Selected projects</p>
        <p className="mt-2 max-w-2xl text-zinc-200">
          Filter by focus area. Links point to your GitHub — add live demos when you deploy.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {projectFilters.map((f) => (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                filter === f.id
                  ? 'bg-violet-500 text-white shadow-md shadow-violet-500/25'
                  : 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <motion.ul layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.li
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="group flex flex-col rounded-2xl border border-zinc-700 bg-zinc-950 p-6 shadow-sm transition hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-lg"
              >
                <div className="mb-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-zinc-800 px-2 py-0.5 text-xs font-medium uppercase tracking-wide text-zinc-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-200">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border border-zinc-600 px-2 py-1 text-xs text-zinc-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3 border-t border-zinc-800 pt-4">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-violet-300 hover:underline"
                  >
                    <FaGithub className="h-4 w-4" /> Code
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-violet-300"
                    >
                      <FaExternalLinkAlt className="h-3.5 w-3.5" /> Live
                    </a>
                  )}
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </Section>
  )
}
