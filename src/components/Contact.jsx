import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Section from './Section'
import { profile } from '../data/content'

const serviceId = String(import.meta.env.VITE_EMAILJS_SERVICE_ID ?? '').trim()
const templateId = String(import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? '').trim()
const publicKey = String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? '').trim()

const hasEmailJs = Boolean(serviceId && templateId && publicKey)

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [errorDetail, setErrorDetail] = useState('')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorDetail('')

    if (!hasEmailJs) {
      window.location.href = `mailto:${profile.email}?subject=Portfolio%20contact%20from%20${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message + '\n\nFrom: ' + form.email)}`
      setStatus('sent')
      return
    }

    setStatus('sending')
    try {
      /** Match names in your EmailJS template ({{name}}, {{email}}, etc.) — common aliases included */
      const templateParams = {
        name: form.name,
        from_name: form.name,
        user_name: form.name,
        email: form.email,
        user_email: form.email,
        reply_to: form.email,
        from_email: form.email,
        message: form.message,
        user_message: form.message,
        to_email: profile.email,
      }

      await emailjs.send(serviceId, templateId, templateParams, { publicKey })
      setStatus('sent')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
      const text = typeof err?.text === 'string' ? err.text : err?.message || String(err)
      const code = err?.status != null ? ` (${err.status})` : ''
      setErrorDetail(`${text}${code}`)
      if (import.meta.env.DEV) {
        console.error('[EmailJS]', err)
      }
    }
  }

  return (
    <Section id="contact" className="px-4 py-20 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-mono text-sm font-semibold uppercase tracking-widest text-violet-300">
            Contact
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white">Let&apos;s talk</p>
          <p className="mt-4 text-zinc-200">
            For opportunities in VLSI, embedded hardware, or internships — send a message or reach out directly.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-block text-lg font-medium text-violet-300 hover:underline"
          >
            {profile.email}
          </a>
          <p className="mt-2 text-sm text-zinc-300">{profile.phone}</p>
          <div className="mt-8 flex gap-3">
            {[
              { href: profile.github, icon: FaGithub, label: 'GitHub' },
              { href: profile.linkedin, icon: FaLinkedin, label: 'LinkedIn' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-600 bg-zinc-900 text-zinc-200 transition hover:border-violet-400/50 hover:text-violet-300"
                aria-label={label}
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-zinc-700 bg-zinc-950 p-6 shadow-sm"
        >
          <label className="block text-sm font-medium text-zinc-200">
            Name
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-xl border border-zinc-600 bg-zinc-900 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 outline-none ring-violet-500/0 transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
            />
          </label>
          <label className="mt-4 block text-sm font-medium text-zinc-200">
            Email
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="mt-2 w-full rounded-xl border border-zinc-600 bg-zinc-900 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
            />
          </label>
          <label className="mt-4 block text-sm font-medium text-zinc-200">
            Message
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="mt-2 w-full resize-none rounded-xl border border-zinc-600 bg-zinc-900 px-4 py-3 text-zinc-100 placeholder:text-zinc-500 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
            />
          </label>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-6 w-full rounded-xl bg-violet-500 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition hover:bg-violet-400 disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
          {status === 'sent' && (
            <p className="mt-3 text-center text-sm text-emerald-400">Thanks — message sent.</p>
          )}
          {status === 'error' && (
            <div className="mt-3 space-y-2 text-center text-sm text-red-400">
              <p>Could not send via EmailJS. Use email above or try again.</p>
              {errorDetail && (
                <p className="break-words rounded-lg bg-red-950/50 px-2 py-2 text-xs text-red-300">{errorDetail}</p>
              )}
            </div>
          )}
          {!hasEmailJs && (
            <p className="mt-3 text-center text-xs text-zinc-400">
              Add EmailJS keys in <code className="rounded bg-zinc-800 px-1 text-zinc-200">.env</code> — until then,
              submit opens your mail client.
            </p>
          )}
        </motion.form>
      </div>
    </Section>
  )
}
