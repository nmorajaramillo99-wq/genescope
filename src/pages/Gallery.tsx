import PageIntro from '../components/PageIntro'
import Section from '../components/Section'
import Figure from '../components/Figure'

const PHOTOS = [
  { file: 'lab-1.jpg', caption: 'Laboratory' },
  { file: 'fieldwork-1.jpg', caption: 'Fieldwork' },
  { file: 'congress-1.jpg', caption: 'Congress' },
  { file: 'sequencing-1.jpg', caption: 'Sequencing' },
  { file: 'poster-1.jpg', caption: 'Poster session' },
  { file: 'fieldwork-2.jpg', caption: 'Fieldwork' },
]

function Gallery() {
  return (
    <div className="min-h-screen">
      <PageIntro
        eyebrow="Gallery"
        title="Gallery"
        lede="Lab work, fieldwork, conferences, sequencing runs, and posters."
      />

      <Section id="gallery" index={1} title="Photos">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {PHOTOS.map((photo) => (
            <Figure
              key={photo.file}
              src={`images/gallery/${photo.file}`}
              alt={photo.caption}
              caption={photo.caption}
            />
          ))}
        </div>
        <p className="text-white/40 text-xs mt-6">
          Drop photos into <code>public/images/gallery/</code> using the filenames above (or
          edit them in <code>src/pages/Gallery.tsx</code>).
        </p>
      </Section>
    </div>
  )
}

export default Gallery
