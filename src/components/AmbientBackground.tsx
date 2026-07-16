import { asset } from '../lib/asset'

function AmbientBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src={asset('sections-bg.mp4')}
      />
      <div className="absolute inset-0 bg-black/55" />
    </div>
  )
}

export default AmbientBackground
