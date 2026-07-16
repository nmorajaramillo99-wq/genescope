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
    <div className="min-h-screen bg-black">
      <PageIntro eyebrow="About" title="My Story" />

      <Section id="story" index={1} title="How I got here">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="text-white/70 text-sm leading-relaxed space-y-4">
            <p className="text-white/40 italic">
              Placeholder — replace with your own story. A few prompts to get started:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>How did you get started in biotechnology?</li>
              <li>Why does public health interest you?</li>
              <li>How did you find your way into bioinformatics?</li>
              <li>What scientific questions do you want to answer?</li>
            </ul>
            <p>
              Write this as a narrative, not a CV — this is the place for the story behind the
              research, not just a list of credentials.
            </p>
          </div>
          <Figure
            src="images/about/lab-photo.jpg"
            alt="Naomi Mora working in the lab"
            caption="Add a photo of yourself working in the lab"
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
