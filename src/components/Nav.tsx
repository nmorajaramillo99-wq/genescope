import { Dna } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Platform', to: '/platform' },
  { label: 'Science', to: '/science' },
  { label: 'Clinical', to: '/clinical' },
  { label: 'Company', to: '/company' },
]

function Nav() {
  return (
    <nav className="liquid-glass rounded-full max-w-5xl w-[calc(100%-2rem)] mx-auto mt-6 px-6 py-3 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2 text-white font-semibold text-lg">
        <Dna className="w-5 h-5" />
        GeneScope
      </Link>

      <div className="hidden md:flex items-center gap-8 text-white/80 text-sm">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive ? 'text-white' : 'hover:text-white transition-colors'
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Link to="/contact" className="text-white text-sm">
          Sign in
        </Link>
        <Link
          to="/contact"
          className="liquid-glass rounded-full px-6 py-2 text-white text-sm"
        >
          Request a demo
        </Link>
      </div>
    </nav>
  )
}

export default Nav
