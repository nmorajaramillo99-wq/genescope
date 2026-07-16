import { useEffect, useRef, useState, type ReactNode } from 'react'

function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-[1200ms] ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      } ${className}`}
    >
      {children}
    </div>
  )
}

export default Reveal
