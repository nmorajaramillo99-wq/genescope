import PageShell from '../components/PageShell'

function Platform() {
  return (
    <PageShell>
      <h1 className="font-heading text-4xl md:text-5xl text-white tracking-tight mb-6">
        Platform
      </h1>
      <p className="text-white/70 text-sm max-w-2xl leading-relaxed">
        Describe the GeneScope platform here: pipeline architecture, data
        ingestion, analysis modules, and integrations.
      </p>
    </PageShell>
  )
}

export default Platform
