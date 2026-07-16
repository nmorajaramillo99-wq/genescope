import { Dna } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Quality Control', href: '#qc' },
  { label: '16S rRNA', href: '#16s-rrna' },
  { label: 'WGS', href: '#wgs' },
  { label: 'RNA-seq', href: '#rna-seq' },
]

function Nav() {
  return (
    <nav className="liquid-glass fixed top-6 inset-x-0 z-50 rounded-full max-w-5xl w-[calc(100%-2rem)] mx-auto px-6 py-3 flex items-center justify-between">
      <a href="#home" className="flex items-center gap-2 text-white font-semibold text-lg">
        <Dna className="w-5 h-5" />
        GeneScope
      </a>

      <div className="hidden md:flex items-center gap-8 text-white/80 text-sm">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className="hover:text-white transition-colors">
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a href="#contact" className="text-white text-sm">
          Sign in
        </a>
        <a href="#contact" className="liquid-glass rounded-full px-6 py-2 text-white text-sm">
          Request a demo
        </a>
      </div>
    </nav>
  )
}

export default Nav
