import { useState, type FormEvent } from 'react'
import PageIntro from '../components/PageIntro'

const SHEET_ENDPOINT = import.meta.env.VITE_CONTACT_SHEET_URL as string | undefined

type Status = 'idle' | 'sending' | 'sent' | 'error'

function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!SHEET_ENDPOINT) {
      setStatus('error')
      return
    }

    const form = event.currentTarget
    setStatus('sending')
    try {
      await fetch(SHEET_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        body: new FormData(form),
      })
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <PageIntro
        eyebrow="Get in touch"
        title="Contact"
        lede="Questions about my research, collaboration proposals, or speaking invitations — reach out."
      />
      <div className="px-6 pb-24">
        <form
          onSubmit={handleSubmit}
          className="liquid-glass max-w-lg mx-auto rounded-[2.5rem] p-8 md:p-10 flex flex-col gap-4"
        >
          <label className="text-white/70 text-sm flex flex-col gap-1">
            Name
            <input
              name="name"
              required
              className="bg-white/5 rounded-lg px-4 py-2 text-white text-sm outline-none"
            />
          </label>
          <label className="text-white/70 text-sm flex flex-col gap-1">
            Email address
            <input
              type="email"
              name="email"
              required
              className="bg-white/5 rounded-lg px-4 py-2 text-white text-sm outline-none"
            />
          </label>
          <label className="text-white/70 text-sm flex flex-col gap-1">
            Leave a message
            <textarea
              name="message"
              rows={4}
              required
              className="bg-white/5 rounded-lg px-4 py-2 text-white text-sm outline-none"
            />
          </label>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="liquid-glass rounded-full px-6 py-2 text-white text-sm self-start disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending…' : 'Submit'}
          </button>
          {status === 'sent' && (
            <p className="text-white/60 text-xs">Thanks — I'll be in touch.</p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-xs">
              Something went wrong. Please email me directly.
            </p>
          )}
        </form>
      </div>
    </div>
  )
}

export default Contact
