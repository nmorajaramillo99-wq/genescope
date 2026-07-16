import PageIntro from '../components/PageIntro'
import Section from '../components/Section'

const CATEGORIES = [
  { title: 'Workshops', description: 'Placeholder — list workshops you have led.' },
  { title: 'Courses', description: 'Placeholder — list courses you have taught.' },
  { title: 'Training', description: 'Placeholder — list training sessions you have delivered.' },
  { title: 'Mentored Students', description: 'Placeholder — list students you have mentored.' },
  { title: 'Conferences', description: 'Placeholder — list conferences you have organized or chaired.' },
]

function Teaching() {
  return (
    <div className="min-h-screen">
      <PageIntro eyebrow="Teaching" title="Teaching & Mentoring" />

      <Section id="teaching" index={1} title="Activities">
        <div className="grid md:grid-cols-2 gap-6">
          {CATEGORIES.map((category) => (
            <div key={category.title} className="liquid-glass rounded-2xl p-6">
              <h3 className="text-white text-lg font-semibold mb-2">{category.title}</h3>
              <p className="text-white/50 text-sm italic">{category.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}

export default Teaching
