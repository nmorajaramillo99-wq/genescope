import PageIntro from '../components/PageIntro'
import Section from '../components/Section'

const TIMELINE = [
  { year: '2026', role: 'Research Scientist', org: 'INSPI' },
  { year: '2024', role: 'Consultant', org: 'BioElite' },
  { year: '2021', role: 'Research Assistant', org: 'USFQ' },
]

const TALKS = [
  { conference: 'Placeholder conference', year: '20XX', place: 'City, Country' },
  { conference: 'Placeholder conference', year: '20XX', place: 'City, Country' },
]

function Experience() {
  return (
    <div className="min-h-screen bg-black">
      <PageIntro eyebrow="Career" title="Experience" />

      <Section id="timeline" index={1} title="Timeline">
        <div className="space-y-6">
          {TIMELINE.map((entry, i) => (
            <div key={entry.year} className="flex gap-6 items-start">
              <div className="flex flex-col items-center">
                <span className="font-heading text-white text-lg w-16 text-right">
                  {entry.year}
                </span>
              </div>
              <div className="flex flex-col items-center pt-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white" />
                {i < TIMELINE.length - 1 && <span className="w-px flex-1 bg-white/20 mt-1" />}
              </div>
              <div className="pb-6">
                <h3 className="text-white text-base font-semibold">{entry.role}</h3>
                <p className="text-white/50 text-sm">{entry.org}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="talks" index={2} title="Scientific Talks">
        <div className="grid md:grid-cols-2 gap-4">
          {TALKS.map((talk, i) => (
            <div key={i} className="liquid-glass rounded-2xl p-5">
              <h3 className="text-white text-sm font-semibold mb-1">{talk.conference}</h3>
              <p className="text-white/50 text-xs">
                {talk.year} · {talk.place}
              </p>
            </div>
          ))}
        </div>
        <p className="text-white/40 text-xs mt-6">
          Placeholder entries — replace with your actual conferences, years, and locations. A
          poster or slide deck link can go on each card.
        </p>
      </Section>
    </div>
  )
}

export default Experience
