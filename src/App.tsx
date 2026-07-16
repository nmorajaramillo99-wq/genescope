import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ReactLenis } from 'lenis/react'
import 'lenis/dist/lenis.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import AmbientBackground from './components/AmbientBackground'
import Home from './pages/Home'
import About from './pages/About'
import Research from './pages/Research'
import ResearchProjects from './pages/ResearchProjects'
import ResearchPublications from './pages/ResearchPublications'
import ResearchResources from './pages/ResearchResources'
import Experience from './pages/Experience'
import Teaching from './pages/Teaching'
import Blog from './pages/Blog'
import News from './pages/News'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function AppShell() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <div className="relative bg-black">
        {location.pathname !== '/' && <AmbientBackground />}
        <Nav />
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/research/projects" element={<ResearchProjects />} />
            <Route path="/research/publications" element={<ResearchPublications />} />
            <Route path="/research/resources" element={<ResearchResources />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/teaching" element={<Teaching />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/news" element={<News />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  )
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ReactLenis root options={{ duration: 1.2, anchors: { offset: -96 } }}>
        <AppShell />
      </ReactLenis>
    </BrowserRouter>
  )
}

export default App
