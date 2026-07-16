function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-white/50 text-sm">
        <span>© {new Date().getFullYear()} GeneScope. All rights reserved.</span>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <a href="tel:+593968438316" className="hover:text-white/80 transition-colors">
            Tel: +593 968438316
          </a>
          <a href="mailto:naomi26999@hotmail.com" className="hover:text-white/80 transition-colors">
            naomi26999@hotmail.com
          </a>
          <a href="#contact" className="hover:text-white/80 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
