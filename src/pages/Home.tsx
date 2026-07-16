import { Link } from 'react-router-dom'
import { asset } from '../lib/asset'

const METRICS = [
  { label: 'Publications', value: '15' },
  { label: 'Projects', value: '9' },
  { label: 'Countries Collaborated', value: '6' },
  { label: 'Conference Talks', value: '12' },
  { label: 'Students Mentored', value: '8' },
]

function Home() {
  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden bg-black">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        src={asset('hero.mp4')}
      />

      <div className="absolute inset-0 bg-black/45 z-[5]" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-10" />

      <div className="relative z-10 flex flex-col items-center h-full text-center px-6 pt-24 md:pt-28 pb-10">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-3">
          Naomi Mora
        </h1>
        <p className="text-white/85 text-base md:text-lg max-w-2xl leading-relaxed mb-1">
          Biotechnology Engineer | MSc in Bioinformatics
        </p>
        <p className="text-white/70 text-sm md:text-base max-w-2xl leading-relaxed mb-1">
          Researcher in Genomics, Molecular Epidemiology, One Health and Pathogen Surveillance
        </p>
        <p className="text-white/60 text-sm max-w-xl leading-relaxed mb-5">
          I develop molecular and bioinformatics tools for infectious disease surveillance in
          Latin America.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <Link to="/research" className="liquid-glass rounded-full px-6 py-2 text-white text-sm">
            View Research
          </Link>
          <Link to="/about" className="text-white/80 hover:text-white text-sm transition-colors">
            About Me
          </Link>
          <Link to="/contact" className="text-white/80 hover:text-white text-sm transition-colors">
            Contact
          </Link>
        </div>

        <div className="liquid-glass rounded-3xl px-6 py-5 grid grid-cols-2 md:grid-cols-5 gap-6 max-w-3xl w-full">
          {METRICS.map((metric) => (
            <div key={metric.label}>
              <div className="font-heading text-2xl md:text-3xl text-white">{metric.value}</div>
              <div className="text-white/50 text-[11px] uppercase tracking-wide mt-1">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Home
