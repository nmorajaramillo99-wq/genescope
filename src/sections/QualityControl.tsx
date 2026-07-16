import Section from '../components/Section'
import Figure from '../components/Figure'

function QualityControl() {
  return (
    <Section id="qc" title="Quality Control (QC)">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="text-white/70 text-sm leading-relaxed space-y-4">
          <p>
            The integrity of your bioinformatics analysis is only as strong
            as your initial data. Whether you are using Illumina or Oxford
            Nanopore, we provide rigorous QC metrics to ensure your
            sequences meet the highest industry standards.
          </p>
          <div>
            <p className="text-white font-semibold mb-2">Why QC Matters:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <span className="text-white">Prevent Downstream Bias:</span>{' '}
                identify and remove adapter contamination or low-quality
                reads before they skew your assembly or variant calling.
              </li>
              <li>
                <span className="text-white">Resource Efficiency:</span>{' '}
                don't waste computational hours (or budget) processing data
                that isn't viable.
              </li>
              <li>
                <span className="text-white">Scientific Validity:</span>{' '}
                ensure your findings are reproducible and ready for
                peer-reviewed publication.
              </li>
            </ul>
          </div>
          <p>
            <span className="text-white font-semibold">Remember:</span>{' '}
            garbage in, garbage out. If you want to make a real impact, you
            cannot afford to build your research on a shaky foundation. Let
            us validate your data before you begin.
          </p>
        </div>
        <Figure
          src="images/qc/fastqc-report.png"
          alt="FastQC per-base sequence quality report"
          caption="Per-base sequence quality report"
        />
      </div>
    </Section>
  )
}

export default QualityControl
