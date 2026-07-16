import PageIntro from '../components/PageIntro'
import Section from '../components/Section'
import Figure from '../components/Figure'

const SKILLS = [
  { label: 'NGS', level: 100 },
  { label: 'Laboratory', level: 90 },
  { label: 'Bioinformatics', level: 90 },
  { label: 'Scientific Writing', level: 90 },
  { label: 'R', level: 80 },
  { label: 'Python', level: 70 },
]

const COLLABORATIONS = ['INSPI', 'USFQ', 'Imperial College', 'Johns Hopkins', 'BioElite', 'UDLA']

function About() {
  return (
    <div className="min-h-screen">
      <PageIntro eyebrow="About" title="My Story" />

      <Section id="story" index={1} title="How I got here">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="text-white/70 text-sm leading-relaxed space-y-4">
            <p>
              I'm a biotechnology engineer and bioinformatician passionate about applying genomics to solve public health challenges. My work combines molecular biology, next-generation sequencing, and computational analysis to better understand infectious diseases and strengthen genomic surveillance.
            </p>
            <p>
              My research has taken me from the laboratory to large-scale genomic data analysis, where I discovered that answering biological questions requires both experimental and computational approaches. Today, I focus on developing practical genomic solutions that support disease surveillance through a One Health perspective.
            </p>
          </div>
          <Figure
            src="images/about/lab-photo.png"
            alt="Naomi Mora working in the lab"
          />
        </div>
      </Section>

      <Section id="skills" index={2} title="Skills">
        <div className="max-w-2xl space-y-5">
          {SKILLS.map((skill) => (
            <div key={skill.label}>
              <div className="flex items-baseline justify-between mb-1.5">
                <span className="text-white text-sm">{skill.label}</span>
                <span className="text-white/40 text-xs">{skill.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full bg-white/70"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="collaborations" index={3} title="Collaborations">
        <div className="flex flex-wrap gap-3">
          {COLLABORATIONS.map((name) => (
            <span
              key={name}
              className="liquid-glass rounded-full px-5 py-2.5 text-white/80 text-sm"
            >
              {name}
            </span>
          ))}
        </div>
        <p className="text-white/40 text-xs mt-4">
          Placeholder — swap these for real logos once available.
        </p>
      </Section>
    </div>
  )
}

export default About
