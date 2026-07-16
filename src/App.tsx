import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Platform from './pages/Platform'
import Science from './pages/Science'
import Clinical from './pages/Clinical'
import Company from './pages/Company'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/science" element={<Science />} />
        <Route path="/clinical" element={<Clinical />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
