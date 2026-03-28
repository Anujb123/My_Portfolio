import { motion } from 'framer-motion'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa'
import Section from './Section'
import { timeline } from '../data/content'

export default function Timeline() {
  return (
    <Section id="timeline" className="border-t border-zinc-800 bg-zinc-900/40 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-mono text-sm font-semibold uppercase tracking-widest text-violet-300">
          Journey
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-white">Education & experience</p>
        <p className="mt-2 max-w-2xl text-zinc-200">
          A single vertical timeline — internships, work, and degrees from your resume.
        </p>

        <div className="relative mt-14 pl-8 sm:pl-12">
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-500 via-zinc-500 to-cyan-500 sm:left-[15px]" />
          <ul className="space-y-12">
            {timeline.map((item, i) => (
              <motion.li
                key={`${item.title}-${i}`}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative"
              >
                <span
                  className={`absolute -left-8 flex h-8 w-8 items-center justify-center rounded-full border-2 border-zinc-900 shadow-md sm:-left-10 ${
                    item.type === 'work' ? 'bg-violet-500 text-white' : 'bg-cyan-500 text-white'
                  }`}
                >
                  {item.type === 'work' ? (
                    <FaBriefcase className="h-3.5 w-3.5" aria-hidden />
                  ) : (
                    <FaGraduationCap className="h-4 w-4" aria-hidden />
                  )}
                </span>
                <div className="rounded-2xl border border-zinc-700 bg-zinc-950 p-6 shadow-sm">
                  <p className="font-mono text-xs text-violet-300">{item.period}</p>
                  <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm font-medium text-zinc-200">
                    {item.org}
                    {item.location ? ` · ${item.location}` : ''}
                  </p>
                  <ul className="mt-4 list-inside list-disc space-y-1 text-sm text-zinc-200">
                    {item.details.map((d, j) => (
                      <li key={j}>{d}</li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
