import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-white/50 text-sm">
        <span>© {new Date().getFullYear()} GeneScope. All rights reserved.</span>
        <div className="flex items-center gap-6">
          <Link to="/company" className="hover:text-white/80 transition-colors">
            Company
          </Link>
          <Link to="/contact" className="hover:text-white/80 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
