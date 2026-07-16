import type { ReactNode } from 'react'
import Reveal from './Reveal'

function Section({
  id,
  index,
  title,
  children,
}: {
  id: string
  index: number
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24 px-6 py-10 md:py-14">
      <Reveal className="liquid-glass relative block max-w-5xl mx-auto rounded-[2.5rem] p-8 md:p-14 overflow-hidden">
        <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-white/5 blur-3xl" />

        <span className="relative block font-heading text-white/40 text-sm tracking-[0.4em] mb-4">
          {String(index).padStart(2, '0')}
        </span>
        <h2 className="relative font-heading text-5xl md:text-7xl text-white tracking-tighter mb-10">
          {title}
        </h2>
        <div className="relative">{children}</div>
      </Reveal>
    </section>
  )
}

export default Section
