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
              <li>My journey into biotechnology began with a simple fascination: understanding the invisible world that shapes life. I was captivated by how microorganisms, genes, and molecular interactions influence ecosystems, animal health, and human disease. That curiosity led me to pursue a degree in Biotechnology, where I discovered not only the power of molecular biology, but also the impact that scientific research can have beyond the laboratory.
                Early in my career, I joined Ecuador's National Institute of Public Health (INSPI), where I had the opportunity to work on infectious disease surveillance during a period of increasing public health challenges. There, science became more than experiments and protocols—it became a tool for understanding disease outbreaks, supporting decision-making, and ultimately protecting communities. Working on zoonotic diseases, pathogen surveillance, and outbreak investigations showed me how closely human, animal, and environmental health are connected, reinforcing my commitment to the One Health approach.
                As sequencing technologies became an increasingly important part of our work, I realized that generating genomic data was only the beginning. The real challenge—and opportunity—was transforming millions of sequencing reads into meaningful biological insights. This realization sparked my interest in bioinformatics. I pursued a Master's degree in Bioinformatics to bridge molecular biology with computational analysis, learning to combine genomics, programming, statistics, and data science to answer complex biological questions.
                Today, my research lies at the intersection of genomics, bioinformatics, and public health. I work with next-generation sequencing technologies, molecular diagnostics, and computational methods to investigate infectious diseases, characterize microbial communities, and strengthen genomic surveillance. I am particularly interested in developing practical genomic tools that can improve disease detection and support evidence-based public health strategies, especially in regions where these technologies are still emerging.
                Beyond research, I enjoy collaborating across disciplines, mentoring young scientists, and translating complex scientific concepts into accessible knowledge. I believe that impactful science is collaborative, reproducible, and driven by curiosity.
                As genomics becomes an essential component of global health, I hope to contribute to building stronger genomic surveillance systems and advancing research that helps countries better prepare for emerging infectious diseases. Every project I undertake is guided by the same question that first inspired me to study biotechnology: how can we use science to better understand—and ultimately improve—the health of people, animals, and our shared environment?</li>
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
