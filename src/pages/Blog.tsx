import PageIntro from '../components/PageIntro'
import Section from '../components/Section'

const DRAFT_POSTS = [
  'How Nanopore sequencing is transforming public health',
  'What is metagenomics?',
  'How we investigated the leptospirosis outbreak in Ecuador',
  'Bioinformatics tutorials',
  'R tips',
  'Python for genomics',
  'One Health explained',
]

function Blog() {
  return (
    <div className="min-h-screen">
      <PageIntro
        eyebrow="Writing"
        title="Blog"
        lede="Explaining the science, one post at a time."
      />

      <Section id="posts" index={1} title="Draft Ideas">
        <div className="grid md:grid-cols-2 gap-4">
          {DRAFT_POSTS.map((title) => (
            <div key={title} className="liquid-glass rounded-2xl p-5 flex items-center justify-between gap-4">
              <span className="text-white text-sm">{title}</span>
              <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-white/40 text-xs shrink-0">
                Draft
              </span>
            </div>
          ))}
        </div>
        <p className="text-white/40 text-xs mt-6">
          These are topic ideas, not published posts yet — write them up and they'll go live
          here.
        </p>
      </Section>
    </div>
  )
}

export default Blog
