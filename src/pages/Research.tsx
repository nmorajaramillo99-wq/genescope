import { Link } from 'react-router-dom'
import PageIntro from '../components/PageIntro'
import Section from '../components/Section'

const INTERESTS = [
  {
    emoji: '🦠',
    title: 'Infectious Diseases',
    items: ['Leptospira', 'Bartonella', 'Arboviruses', 'Histoplasma'],
  },
  {
    emoji: '🧬',
    title: 'Genomics',
    items: ['Nanopore sequencing', 'Illumina', 'Metagenomics', 'Whole Genome Sequencing'],
  },
  {
    emoji: '💻',
    title: 'Bioinformatics',
    items: ['Phylogenetics', 'Microbiome', 'R', 'Python', 'Genome assembly'],
  },
  {
    emoji: '🌎',
    title: 'One Health',
    items: ['Animal surveillance', 'Environmental surveillance', 'Public Health'],
  },
]

const SUB_PAGES = [
  { to: '/research/projects', label: 'Projects', description: 'Current and ongoing research' },
  { to: '/research/publications', label: 'Publications', description: 'Peer-reviewed articles' },
  { to: '/research/resources', label: 'Resources', description: 'Protocols, scripts, pipelines' },
]

function Research() {
  return (
    <div className="min-h-screen">
      <PageIntro
        eyebrow="Research"
        title="Research Interests"
        lede="My work sits at the intersection of genomics, bioinformatics, and public health surveillance."
      />

      <Section id="interests" index={1} title="Focus Areas">
        <div className="grid md:grid-cols-2 gap-6">
          {INTERESTS.map((group) => (
            <div key={group.title} className="liquid-glass rounded-2xl p-6">
              <h3 className="text-white text-lg font-semibold mb-4">
                <span className="mr-2">{group.emoji}</span>
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-white/70 text-xs"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="explore" index={2} title="Explore">
        <div className="grid md:grid-cols-3 gap-6">
          {SUB_PAGES.map((page) => (
            <Link
              key={page.to}
              to={page.to}
              className="liquid-glass rounded-2xl p-6 block hover:scale-[1.02] transition-transform"
            >
              <h3 className="text-white text-lg font-semibold mb-2">{page.label}</h3>
              <p className="text-white/60 text-sm">{page.description}</p>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  )
}

export default Research
