import { Linkedin, Github } from 'lucide-react'

const PROFILE_LINKS = [
  { label: 'LinkedIn', href: '#', icon: Linkedin },
  { label: 'GitHub', href: '#', icon: Github },
  { label: 'ORCID', href: '#' },
  { label: 'Google Scholar', href: '#' },
  { label: 'ResearchGate', href: '#' },
]

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-white/50 text-sm">
        <span>&copy; {new Date().getFullYear()} Naomi Mora. All rights reserved.</span>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {PROFILE_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-1.5 hover:text-white/80 transition-colors"
            >
              {link.icon && <link.icon className="w-4 h-4" />}
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <a href="tel:+593968438316" className="hover:text-white/80 transition-colors">
            +593 968438316
          </a>
          <a href="mailto:naomi26999@hotmail.com" className="hover:text-white/80 transition-colors">
            naomi26999@hotmail.com
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
