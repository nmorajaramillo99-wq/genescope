import PageIntro from '../components/PageIntro'
import Section from '../components/Section'

const PROJECTS = [
  {
    title: 'Pandemic Potential Pathogens',
    focus: 'Molecular diagnostics',
    status: 'Ongoing',
  },
  {
    title: 'Foodborne Pathogens',
    focus: 'Nanopore sequencing',
    status: 'Ongoing',
  },
  {
    title: 'One Health Puerto Hondo',
    focus: 'One Health surveillance',
    status: 'Ongoing',
  },
]

function ResearchProjects() {
  return (
    <div className="min-h-screen bg-black">
      <PageIntro eyebrow="Research" title="Current Projects" />

      <Section id="projects" index={1} title="Active Work">
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <div key={project.title} className="liquid-glass rounded-2xl p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-white text-lg font-semibold">{project.title}</h3>
                <span className="flex items-center gap-1.5 text-xs text-white/60 shrink-0 mt-1">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  {project.status}
                </span>
              </div>
              <p className="text-white/60 text-sm mb-4">{project.focus}</p>
              <dl className="text-white/40 text-xs space-y-1">
                <div>
                  <dt className="inline text-white/50">Objective: </dt>
                  <dd className="inline italic">placeholder — add project objective</dd>
                </div>
                <div>
                  <dt className="inline text-white/50">Methodology: </dt>
                  <dd className="inline italic">placeholder — add methodology</dd>
                </div>
                <div>
                  <dt className="inline text-white/50">Collaborators: </dt>
                  <dd className="inline italic">placeholder — add collaborators</dd>
                </div>
                <div>
                  <dt className="inline text-white/50">Related publications: </dt>
                  <dd className="inline italic">placeholder — link related publications</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}

export default ResearchProjects
