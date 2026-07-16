import type { ReactNode } from 'react'

function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-white/10 px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-heading text-4xl md:text-5xl text-white tracking-tight mb-10">
          {title}
        </h2>
        {children}
      </div>
    </section>
  )
}

export default Section
