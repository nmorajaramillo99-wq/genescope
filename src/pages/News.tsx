import PageIntro from '../components/PageIntro'
import Section from '../components/Section'

function News() {
  return (
    <div className="min-h-screen bg-black">
      <PageIntro eyebrow="Updates" title="News" />

      <Section id="news" index={1} title="Announcements">
        <div className="liquid-glass rounded-2xl p-8 text-center">
          <p className="text-white/50 text-sm italic">
            No announcements yet — grants, awards, new publications, and other news will appear
            here.
          </p>
        </div>
      </Section>
    </div>
  )
}

export default News
