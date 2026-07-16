import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro'

function NotFound() {
  return (
    <div className="min-h-screen">
      <PageIntro eyebrow="404" title="Page not found" />
      <div className="text-center pb-24">
        <Link to="/" className="text-white/70 hover:text-white text-sm underline">
          Back to home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
