import { ArrowRight } from 'lucide-react'
import { asset } from '../lib/asset'

function Home() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        src={asset('hero.mp4')}
      />

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-10" />

      <div className="relative z-10 flex flex-col items-center h-full text-center px-6 pt-16 md:pt-20">
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-80">
          Transforming genomic data into scientific and clinical insights.
        </h1>

        <form className="liquid-glass rounded-full flex items-center pl-6 pr-2 py-2 w-full max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-transparent text-white placeholder-white/50 text-sm outline-none"
          />
          <button
            type="submit"
            aria-label="Submit"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-white text-black shrink-0"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  )
}

export default Home
