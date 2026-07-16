import Section from '../components/Section'
import Figure from '../components/Figure'

function RnaSeq() {
  return (
    <Section id="rna-seq" title="RNA-seq">
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="text-white/70 text-sm leading-relaxed space-y-4">
          <p>
            Unlock the secrets of gene expression. Our RNA-seq pipeline
            goes beyond simple counting, using robust statistical
            frameworks to identify the key drivers of biological change in
            your samples.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <span className="text-white">
                Differential Expression (DGE):
              </span>{' '}
              precise identification of up- and down-regulated genes using
              industry-standard tools (DESeq2/EdgeR).
            </li>
            <li>
              <span className="text-white">Sample Clarity:</span>{' '}
              dimensionality reduction via PCA to visualize group clusters
              and identify outliers or batch effects.
            </li>
            <li>
              <span className="text-white">Biological Signatures:</span>{' '}
              functional enrichment analysis (GO/KEGG) to tell you which
              biological pathways are actually being activated.
            </li>
            <li>
              <span className="text-white">Publication-Ready Visuals:</span>{' '}
              high-resolution Volcano Plots, Heatmaps, and MA plots that
              translate complex data into clear stories.
            </li>
          </ul>
          <p>
            We don't just deliver a gene list; we provide the statistical
            confidence you need to validate your hypotheses and discover
            new biomarkers.
          </p>
        </div>
        <div className="grid gap-6">
          <Figure
            src="images/rnaseq/volcano-plot.png"
            alt="Volcano plot of differentially expressed genes"
            caption="Differential expression — volcano plot"
          />
          <Figure
            src="images/rnaseq/pca-plot.png"
            alt="PCA plot of RNA-seq sample clusters"
            caption="Sample clustering — PCA plot"
          />
        </div>
      </div>
    </Section>
  )
}

export default RnaSeq
