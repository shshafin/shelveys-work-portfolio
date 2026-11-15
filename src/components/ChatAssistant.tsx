import { useMemo, useState } from 'react'
import type { FormEvent } from 'react'
import { Bot, X } from 'lucide-react'
import { profile } from '../data/profile'

type ChatMessage = { role: 'assistant' | 'user'; content: string }

const faq: Record<string, string> = {
  'view services':
    'I offer web development, mobile apps, ERP & business systems, SaaS/custom software, automation, dashboards, digital marketing, lead generation, brand work, and ongoing support.',
  'how does the process work':
    'My process follows 6 structured phases: Discovery & Research, Analysis & R&D, Current State Breakdown, Growth Plan Design, Survey & Validation, and Execution & Delivery.',
  'check my eligibility':
    "I work with businesses of all sizes — from startups to established companies. If you need help with digital solutions, technology systems, or growth strategy, we're likely a great fit.",
  'contact shelvey': `You can reach Shelvey at ${profile.contact.email}. He's currently available for new projects!`,
}

const chips = ['View Services', 'How does the process work?', 'Check my eligibility', 'Contact Shelvey']

function replyFor(input: string) {
  const t = input.toLowerCase()
  for (const [key, value] of Object.entries(faq)) {
    if (t.includes(key) || key.split(' ').every((w) => t.includes(w))) return value
  }
  if (t.includes('pric') || t.includes('cost') || t.includes('rate')) {
    return `Pricing varies based on project scope. Reach out directly at ${profile.contact.email} for a quote.`
  }
  return "Thanks for your question! I can help with information about Shelvey's services, process, or how to get started."
}

export function ChatAssistant() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: "Hi! I'm Shelvey's assistant. Want to learn about services, process, or how to get in touch?",
    },
  ])

  const title = useMemo(() => 'Shelvey Assistant', [])

  const send = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed) return
    setMessages((m) => [
      ...m,
      { role: 'user', content: trimmed },
      { role: 'assistant', content: replyFor(trimmed) },
    ])
    setInput('')
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    send(input)
  }

  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      {open ? (
        <div
          className="mb-3 flex h-[420px] w-[min(92vw,360px)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-gold"
          role="dialog"
          aria-label={title}
        >
          <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-3">
            <div className="flex items-center gap-2">
              <Bot className="text-brand-blue" size={18} />
              <span className="font-body text-sm font-semibold text-slate-900">{title}</span>
            </div>
            <button
              type="button"
              aria-label="Close assistant"
              className="rounded-md p-1 text-slate-500 hover:bg-blue-50 hover:text-slate-900"
              onClick={() => setOpen(false)}
            >
              <X size={18} />
            </button>
          </div>
          <div className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((m, i) => (
              <div
                key={`${m.role}-${i}`}
                className={`max-w-[85%] rounded-xl px-3.5 py-2.5 font-body text-[13px] leading-6 ${
                  m.role === 'assistant'
                    ? 'bg-slate-100 text-slate-700'
                    : 'ml-auto bg-brand-blue text-white'
                }`}
              >
                {m.content}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 border-t border-slate-100 px-3 py-2">
            {chips.map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => send(chip)}
                className="rounded-full border border-slate-200 px-2.5 py-1 font-body text-[10px] text-slate-600 hover:border-brand-blue/40 hover:text-brand-blue"
              >
                {chip}
              </button>
            ))}
          </div>
          <form onSubmit={onSubmit} className="flex gap-2 border-t border-slate-200 p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 font-body text-sm outline-none focus:border-brand-blue focus:bg-white"
              aria-label="Chat message"
            />
            <button
              type="submit"
              className="rounded-lg bg-brand-blue px-3 py-2 font-body text-xs font-semibold text-white"
            >
              Send
            </button>
          </form>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close AI assistant' : 'Open AI assistant'}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue text-white shadow-md shadow-blue-500/30 transition hover:scale-105 hover:bg-blue-700"
      >
        <Bot size={24} />
        <span className="absolute right-1 top-1 h-3 w-3 rounded-full border-2 border-background bg-green-400" />
      </button>
    </div>
  )
}
