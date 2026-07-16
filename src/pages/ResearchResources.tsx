import PageIntro from '../components/PageIntro'
import Section from '../components/Section'

const RESOURCES = [
  { title: 'Leptospira qPCR protocol', type: 'Protocol' },
  { title: 'Nanopore pipeline', type: 'Pipeline' },
  { title: 'R scripts', type: 'Scripts' },
  { title: 'Phylogenetic workflow', type: 'Pipeline' },
  { title: 'Primer design guide', type: 'Protocol' },
  { title: 'Metagenomics workflow', type: 'Pipeline' },
]

function ResearchResources() {
  return (
    <div className="min-h-screen">
      <PageIntro
        eyebrow="Research"
        title="Resources"
        lede="Protocols, scripts, notebooks, pipelines, presentations, and datasets I share with the community."
      />

      <Section id="resources" index={1} title="Downloads">
        <div className="grid md:grid-cols-2 gap-4">
          {RESOURCES.map((resource) => (
            <a
              key={resource.title}
              href="#"
              className="liquid-glass rounded-2xl p-5 flex items-center justify-between hover:scale-[1.02] transition-transform"
            >
              <span className="text-white text-sm">{resource.title}</span>
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-white/50 text-xs shrink-0 ml-4">
                {resource.type}
              </span>
            </a>
          ))}
        </div>
        <p className="text-white/40 text-xs mt-6">
          Placeholder links — attach the real files or repo URLs when ready.
        </p>
      </Section>
    </div>
  )
}

export default ResearchResources
