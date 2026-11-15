import { useState } from 'react'
import type { FormEvent } from 'react'
import { Globe2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { profile } from '../../data/profile'
import { SectionHeading } from '../ui/SectionHeading'

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

const initial: FormState = { name: '', email: '', subject: '', message: '' }

export function Contact() {
  const [form, setForm] = useState<FormState>(initial)
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )
    const subject = encodeURIComponent(form.subject || 'Project Inquiry')
    window.location.href = `mailto:${profile.contact.email}?subject=${subject}&body=${body}`
    setStatus('sent')
    setTimeout(() => {
      setStatus('idle')
      setForm(initial)
    }, 2500)
  }

  const details = [
    { icon: Mail, label: 'Email', value: profile.contact.email, href: `mailto:${profile.contact.email}` },
    { icon: Phone, label: 'Mobile', value: profile.contact.phone[0], href: `tel:${profile.contact.phone[0]}` },
    { icon: MapPin, label: 'Office', value: profile.contact.address },
    { icon: Globe2, label: 'Service Area', value: 'Available Globally' },
  ]

  return (
    <section id="contact" className="section-shell scroll-mt-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          title={
            <>
              Elevate Your <span className="text-brand-blue">Business</span>
            </>
          }
          subtitle="Ready to scale? Let's build something extraordinary with ShelveysWork."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <h3 className="font-display text-xl font-semibold tracking-tight text-slate-900">
              Contact Information
            </h3>
            <p className="mt-3 max-w-md font-body text-[14px] leading-7 text-slate-700">
              Whether it's a new digital product, ERP workflow, website, or growth plan — I'm here to help.
            </p>
            <ul className="mt-8 space-y-5">
              {details.map((item) => {
                const Icon = item.icon
                const content = (
                  <div className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                      <Icon size={17} />
                    </span>
                    <div>
                      <p className="font-display text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                        {item.label}
                      </p>
                      <p className="mt-1 font-body text-sm text-slate-800">{item.value}</p>
                    </div>
                  </div>
                )
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a href={item.href} className="transition hover:opacity-90">
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                )
              })}
            </ul>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            noValidate
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block font-body text-xs font-medium text-slate-600">
                Full Name
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-brand-blue focus:bg-white"
                />
              </label>
              <label className="block font-body text-xs font-medium text-slate-600">
                Email Address
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="john@example.com"
                  className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-brand-blue focus:bg-white"
                />
              </label>
            </div>
            <label className="mt-4 block font-body text-xs font-medium text-slate-600">
              Subject
              <input
                required
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="Project Inquiry"
                className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-brand-blue focus:bg-white"
              />
            </label>
            <label className="mt-4 block font-body text-xs font-medium text-slate-600">
              Message
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Your vision..."
                className="mt-2 w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-brand-blue focus:bg-white"
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-blue px-5 py-3.5 font-body text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              <Send size={16} />
              {status === 'sent' ? 'Opening Mail…' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
