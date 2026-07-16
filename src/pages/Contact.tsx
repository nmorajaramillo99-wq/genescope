import PageShell from '../components/PageShell'

function Contact() {
  return (
    <PageShell>
      <h1 className="font-heading text-4xl md:text-5xl text-white tracking-tight mb-6">
        Contact
      </h1>
      <p className="text-white/70 text-sm max-w-2xl leading-relaxed mb-8">
        Reach the GeneScope team to request a demo or ask a question.
      </p>

      <form className="liquid-glass rounded-full flex items-center pl-6 pr-2 py-2 w-full max-w-md">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 bg-transparent text-white placeholder-white/50 text-sm outline-none"
        />
        <button
          type="submit"
          className="rounded-full bg-white text-black text-sm px-4 py-1.5 shrink-0"
        >
          Submit
        </button>
      </form>
    </PageShell>
  )
}

export default Contact
