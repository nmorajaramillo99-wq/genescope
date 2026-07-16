import PageIntro from '../components/PageIntro'
import Section from '../components/Section'

const PUBLICATIONS = [
  {
    title: 'High prevalence of Histoplasma capsulatum…',
    journal: 'Frontiers in Veterinary Science',
    year: '2025',
    role: 'Co-author',
    abstract: 'Placeholder — add the short abstract for this paper.',
    verified: false,
  },
]

function ResearchPublications() {
  return (
    <div className="min-h-screen bg-black">
      <PageIntro
        eyebrow="Research"
        title="Publications"
        lede="Peer-reviewed articles and preprints."
      />

      <Section id="publications" index={1} title="All Publications">
        <div className="space-y-6">
          {PUBLICATIONS.map((pub) => (
            <div key={pub.title} className="liquid-glass rounded-2xl p-6">
              {!pub.verified && (
                <p className="text-amber-300/80 text-xs mb-3">
                  Placeholder entry — verify the full title, DOI, and abstract before this goes
                  live.
                </p>
              )}
              <h3 className="text-white text-lg font-semibold mb-1">{pub.title}</h3>
              <p className="text-white/50 text-sm mb-3">
                {pub.journal} ({pub.year}) · {pub.role}
              </p>
              <p className="text-white/60 text-sm italic mb-4">{pub.abstract}</p>
              <div className="flex flex-wrap gap-2">
                {['DOI', 'PDF', 'Dataset', 'GitHub'].map((label) => (
                  <a
                    key={label}
                    href="#"
                    className="rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-white/70 text-xs hover:text-white hover:border-white/30 transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-white/40 text-xs mt-6">
          Only one publication is seeded so far — add the rest of your bibliography here, and
          flag your 3–4 best as "Featured" once the list grows.
        </p>
      </Section>
    </div>
  )
}

export default ResearchPublications
