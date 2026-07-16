function PageIntro({
  eyebrow,
  title,
  lede,
}: {
  eyebrow?: string
  title: string
  lede?: string
}) {
  return (
    <div className="pt-40 md:pt-48 pb-10 px-6 max-w-5xl mx-auto text-center">
      {eyebrow && (
        <span className="block font-heading text-white/40 text-sm tracking-[0.4em] mb-4">
          {eyebrow}
        </span>
      )}
      <h1 className="font-heading text-5xl md:text-7xl text-white tracking-tighter mb-6">
        {title}
      </h1>
      {lede && (
        <p className="text-white/70 text-base max-w-2xl mx-auto leading-relaxed">{lede}</p>
      )}
    </div>
  )
}

export default PageIntro
