'use client'

import { useEffect, useRef } from 'react'

type ConfettiProps = {
  density?: number
  colors?: string[]
  size?: number
  gravity?: number
}

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  rotation: number
  vr: number
  color: string
  shape: 'rect' | 'circle'
}

export default function CanvasConfetti({
  density = 160,
  colors = ['#fb7185', '#60a5fa', '#34d399', '#fbbf24', '#a78bfa', '#f97316'],
  size = 4,
  gravity = 0.002,
}: ConfettiProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const particlesRef = useRef<Particle[]>([])
  const rafRef = useRef<number | null>(null)

  const createParticle = (width: number, height: number): Particle => ({
    x: Math.random() * width,
    y: -Math.random() * height,
    vx: (Math.random() - 0.5) * 0.2,
    vy: Math.random() * 1.2 + 0.3,
    size: size * (0.6 + Math.random()),
    rotation: Math.random() * Math.PI,
    vr: (Math.random() - 0.5) * 0.1,
    color: colors[Math.floor(Math.random() * colors.length)],
    shape: Math.random() > 0.5 ? 'rect' : 'circle',
  })

  const initParticles = (width: number, height: number) => {
    if (particlesRef.current.length === 0) {
      const count = Math.max(40, Math.round(density))
      particlesRef.current = Array.from({ length: count }).map(() =>
        createParticle(width, height),
      )
    }
  }

  const update = (width: number, height: number) => {
    const particles = particlesRef.current

    for (const p of particles) {
      p.vy += gravity
      p.x += p.vx
      p.y += p.vy
      p.rotation += p.vr

      if (p.y > height + 20) {
        p.y = -10
        p.x = Math.random() * width
        p.vy = Math.random() * 1.2 + 0.3
      }
    }

    const targetCount = Math.max(40, Math.round(density))
    while (particles.length < targetCount) {
      particles.push(createParticle(width, height))
    }
  }

  const draw = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
  ) => {
    ctx.clearRect(0, 0, width, height)

    for (const p of particlesRef.current) {
      ctx.save()
      ctx.translate(p.x, p.y)
      ctx.rotate(p.rotation)
      ctx.fillStyle = p.color

      if (p.shape === 'rect') {
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.8)
      } else {
        ctx.beginPath()
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2)
        ctx.fill()
      }

      ctx.restore()
    }
  }

  // ✅ ✅ ✅ FIX ICI : plus de width/height figés
  const loop = (ctx: CanvasRenderingContext2D) => {
    const width = ctx.canvas.width
    const height = ctx.canvas.height

    update(width, height)
    draw(ctx, width, height)

    rafRef.current = requestAnimationFrame(() => loop(ctx))
  }

  useEffect(() => {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let lastWidth = window.innerWidth
    let lastHeight = window.innerHeight

    const resizeCanvas = () => {
      const dpr = Math.max(1, window.devicePixelRatio || 1)
      const width = window.innerWidth
      const height = window.innerHeight

      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      const dx = width - lastWidth
      const dy = height - lastHeight

      const particles = particlesRef.current

      if (dx > 0) {
        const countX = Math.round((density * dx) / lastWidth)
        for (let i = 0; i < countX; i++) {
          const p = createParticle(width, height)
          p.x = lastWidth + Math.random() * dx
          p.y = -Math.random() * height
          particles.push(p)
        }
      }

      if (dy > 0) {
        const countY = Math.round((density * dy) / lastHeight)
        for (let i = 0; i < countY; i++) {
          const p = createParticle(width, height)
          p.x = Math.random() * width
          p.y = -Math.random() * dy
          particles.push(p)
        }
      }

      lastWidth = width
      lastHeight = height

      if (particles.length === 0) {
        initParticles(width, height)
      }
    }

    resizeCanvas()
    rafRef.current = requestAnimationFrame(() => loop(ctx))

    window.addEventListener('resize', resizeCanvas)

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [density, colors.join('|'), size, gravity])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden
    />
  )
}
