import { motion } from 'framer-motion'
import Section from './Section'
import { skillCategories } from '../data/content'

export default function Skills() {
  return (
    <Section id="skills" className="border-y border-zinc-800 bg-zinc-900/50 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-mono text-sm font-semibold uppercase tracking-widest text-violet-300">
          Skills
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-white">Technical stack</p>
        <p className="mt-2 max-w-2xl text-zinc-200">
          Grouped by domain — HDL/FPGA, embedded, simulation, and the web tooling behind this portfolio.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {skillCategories.map((cat, i) => (
            <motion.article
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-zinc-700 bg-zinc-950 p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
              <p className="mt-1 text-sm text-zinc-300">{cat.description}</p>
              <ul className="mt-6 space-y-4">
                {cat.items.map((item) => (
                  <li key={item.name}>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-zinc-200">{item.name}</span>
                      <span className="text-zinc-400">{item.level}%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-800">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-400"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  )
}
