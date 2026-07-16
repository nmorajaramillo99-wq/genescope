import { ReactLenis } from 'lenis/react'
import 'lenis/dist/lenis.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import QualityControl from './sections/QualityControl'
import SixteenSRrna from './sections/SixteenSRrna'
import WholeGenomeSequencing from './sections/WholeGenomeSequencing'
import RnaSeq from './sections/RnaSeq'
import Contact from './sections/Contact'

function App() {
  return (
    <ReactLenis root options={{ duration: 1.2, anchors: { offset: -96 } }}>
      <div className="bg-black">
        <Nav />
        <Home />
        <QualityControl />
        <SixteenSRrna />
        <WholeGenomeSequencing />
        <RnaSeq />
        <Contact />
        <Footer />
      </div>
    </ReactLenis>
  )
}

export default App
