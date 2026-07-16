import Section from '../components/Section'
import Figure from '../components/Figure'

function WholeGenomeSequencing() {
  return (
    <Section id="wgs" index={3} title="Whole Genome Sequencing">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="text-white/70 text-sm leading-relaxed space-y-4">
          <p>
            Go beyond simple identification. Our end-to-end WGS pipeline
            provides a high-resolution map of the entire genome, revealing
            not just who an organism is, but exactly what it is capable of.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <span className="text-white">Precision Assembly:</span>{' '}
              high-quality de novo or reference-based reconstruction for
              bacteria and viruses.
            </li>
            <li>
              <span className="text-white">The Threat Profile:</span>{' '}
              comprehensive screening for Antimicrobial Resistance (AMR)
              genes and Virulence Factors.
            </li>
            <li>
              <span className="text-white">Strain-Level Identity:</span>{' '}
              definitive identification using ANI and phylogenomics to
              track outbreaks or evolutionary changes.
            </li>
          </ul>
        </div>
        <Figure
          src="images/wgs/phylogenomic-heatmap.png"
          alt="Phylogenomic tree with AMR gene and virulence factor heatmap"
          caption="Phylogenomic tree with AMR / virulence factor heatmap"
        />
      </div>
    </Section>
  )
}

export default WholeGenomeSequencing
