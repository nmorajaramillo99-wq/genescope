import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'

function NotFound() {
  return (
    <PageShell>
      <h1 className="font-heading text-4xl md:text-5xl text-white tracking-tight mb-6">
        Page not found
      </h1>
      <Link to="/" className="text-white/70 hover:text-white text-sm underline">
        Back to home
      </Link>
    </PageShell>
  )
}

export default NotFound
