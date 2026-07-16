import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const RESEARCH_LINKS = [
  { label: 'Overview', to: '/research' },
  { label: 'Projects', to: '/research/projects' },
  { label: 'Publications', to: '/research/publications' },
  { label: 'Resources', to: '/research/resources' },
]

const NAV_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Experience', to: '/experience' },
  { label: 'Teaching', to: '/teaching' },
  { label: 'Blog', to: '/blog' },
  { label: 'News', to: '/news' },
  { label: 'Gallery', to: '/gallery' },
]

function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="liquid-glass fixed top-6 inset-x-0 z-50 rounded-full max-w-5xl w-[calc(100%-2rem)] mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="text-white font-semibold text-lg" onClick={() => setOpen(false)}>
          Naomi Mora
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden sm:block text-white/80 hover:text-white text-sm transition-colors">
            Contact
          </Link>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="liquid-glass rounded-full w-10 h-10 flex items-center justify-center text-white"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            {NAV_LINKS.slice(0, 1).map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-heading text-3xl md:text-4xl tracking-tight transition-colors ${isActive ? 'text-white' : 'text-white/60 hover:text-white'}`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="flex flex-col items-center gap-2 my-2">
              <span className="font-heading text-3xl md:text-4xl tracking-tight text-white/60">
                Research
              </span>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
                {RESEARCH_LINKS.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/research'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `text-sm tracking-wide transition-colors ${isActive ? 'text-white' : 'text-white/50 hover:text-white'}`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </div>

            {NAV_LINKS.slice(1).map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-heading text-3xl md:text-4xl tracking-tight transition-colors ${isActive ? 'text-white' : 'text-white/60 hover:text-white'}`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="liquid-glass rounded-full px-6 py-2 text-white text-sm mt-4"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Nav
