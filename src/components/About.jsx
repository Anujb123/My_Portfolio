import { useState } from 'react'
import { motion } from 'framer-motion'
import Section from './Section'
import { about, profile } from '../data/content'

export default function About() {
  const [imgOk, setImgOk] = useState(true)

  return (
    <Section id="about" className="px-4 py-20 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_300px] md:items-center">
        <div>
          <h2 className="font-mono text-sm font-semibold uppercase tracking-widest text-violet-300">
            About
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white">Background</p>
          <div className="mt-6 space-y-4 text-zinc-200">
            {about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto aspect-[3/4] w-full max-w-[300px]"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/25 to-cyan-500/15 blur-2xl" />
          <div className="relative flex h-full w-full overflow-hidden rounded-3xl border border-zinc-600 bg-zinc-900 ring-1 ring-white/10">
            {imgOk ? (
              <img
                src={profile.aboutImage}
                alt={`${profile.name} — profile`}
                className="h-full w-full object-cover object-[center_15%]"
                onError={() => setImgOk(false)}
                loading="lazy"
                decoding="async"
              />
            ) : (
              <div
                className="flex h-full w-full items-center justify-center bg-gradient-to-br from-violet-600 to-indigo-700 text-5xl font-bold text-white"
                role="img"
                aria-label={profile.name}
              >
                {profile.name
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
