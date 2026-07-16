import { asset } from '../lib/asset'

function Figure({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="liquid-glass rounded-2xl overflow-hidden">
      <img src={asset(src)} alt={alt} className="w-full h-auto block" />
      {caption && (
        <figcaption className="px-4 py-3 text-white/50 text-xs">{caption}</figcaption>
      )}
    </figure>
  )
}

export default Figure
