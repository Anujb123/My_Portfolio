import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiArrowDownTray, HiArrowRight } from 'react-icons/hi2'
import { profile } from '../data/content'

export default function Hero() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 pt-24 pb-12 sm:px-6 sm:pb-16"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1fr_minmax(260px,420px)] lg:gap-8">
        <div className="order-2 flex flex-col justify-center lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-4 font-mono text-sm text-violet-300"
          >
            Hi, I&apos;m
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12 }}
            className="mt-3 text-xl text-zinc-200 sm:text-2xl"
          >
            {profile.role}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-200"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.28 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              type="button"
              onClick={() => go('projects')}
              className="inline-flex items-center gap-2 rounded-xl bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-400"
            >
              View projects
              <HiArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go('contact')}
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-600 bg-zinc-900 px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-violet-400/60 hover:text-white"
            >
              Contact me
            </button>
            <a
              href={profile.resumePath}
              download
              className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-zinc-200 underline-offset-4 hover:text-violet-300 hover:underline"
            >
              <HiArrowDownTray className="h-4 w-4" />
              Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex items-center gap-4"
          >
            <span className="text-sm text-zinc-400">Connect</span>
            <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-zinc-500 to-transparent" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="mt-4 flex gap-3"
          >
            {[
              { href: profile.github, icon: FaGithub, label: 'GitHub' },
              { href: profile.linkedin, icon: FaLinkedin, label: 'LinkedIn' },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-600 bg-zinc-900 text-zinc-200 transition hover:border-violet-400/50 hover:text-violet-300"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-1 flex justify-center lg:order-2 lg:justify-end"
        >
          <div className="relative w-full max-w-[420px] lg:max-w-none">
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-6 left-1/2 h-32 w-[85%] -translate-x-1/2 rounded-[100%] bg-violet-500/15 blur-3xl"
              aria-hidden
            />
            <img
              src={profile.heroImage}
              alt={`${profile.name} — portrait`}
              width={800}
              height={1200}
              className="relative z-[1] mx-auto h-[min(380px,52vh)] w-auto max-w-full object-contain object-bottom [filter:drop-shadow(0_28px_48px_rgba(0,0,0,0.55))] sm:h-[min(440px,58vh)] lg:h-[min(560px,78vh)]"
              loading="eager"
              decoding="async"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
