import Section from '../components/Section'
import Figure from '../components/Figure'

function SixteenSRrna() {
  return (
    <Section id="16s-rrna" index={2} title="16S rRNA">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="text-white/70 text-sm leading-relaxed space-y-4">
          <p className="text-white font-semibold">
            Our 16S Analysis Core Features:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <span className="text-white">Precision Taxonomy:</span> we use
              curated databases to ensure your bacterial identification is
              accurate and up-to-date.
            </li>
            <li>
              <span className="text-white">Diversity Deciphered:</span>{' '}
              beyond simple counts, we calculate Alpha (within-sample) and
              Beta (between-sample) diversity to reveal the true complexity
              of your environment.
            </li>
            <li>
              <span className="text-white">Visual Storytelling:</span> we
              don't just give you tables. We provide interactive Sunburst
              plots, PCoA plots, and Heatmaps that make your data
              publication-ready from day one.
            </li>
          </ul>
        </div>
        <div className="grid gap-6">
          <Figure
            src="images/16s-rrna/pcoa-plot.png"
            alt="PCoA plot of bacterial diversity clusters"
            caption="Beta diversity — PCoA plot"
          />
          <Figure
            src="images/16s-rrna/alpha-diversity.png"
            alt="Shannon and Simpson diversity index plots"
            caption="Alpha diversity — Shannon & Simpson index"
          />
        </div>
      </div>
    </Section>
  )
}

export default SixteenSRrna
