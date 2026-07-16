import type { ReactNode } from 'react'
import Nav from './Nav'
import Footer from './Footer'

function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Nav />
      <main className="flex-1 px-6 py-24 max-w-5xl mx-auto w-full">{children}</main>
      <Footer />
    </div>
  )
}

export default PageShell
