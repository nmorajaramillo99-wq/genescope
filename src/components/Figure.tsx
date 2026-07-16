import { asset } from '../lib/asset'

function Figure({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
  return (
    <figure className="group rounded-2xl overflow-hidden border border-white/10 bg-white/5">
      <div className="overflow-hidden">
        <img
          src={asset(src)}
          alt={alt}
          className="w-full h-auto block grayscale scale-100 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
        />
      </div>
      {caption && (
        <figcaption className="px-4 py-3 text-white/50 text-xs tracking-wide">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

export default Figure
