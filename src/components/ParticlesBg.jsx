import { useMemo } from 'react'
import Particles from '@tsparticles/react'

export default function ParticlesBg({ variant = 'default', id }) {
  const configs = useMemo(() => ({
    default: {
      particles: {
        number: { value: 60, density: { enable: true, area: 900 } },
        color: { value: ['#3b82f6', '#8b5cf6', '#06b6d4'] },
        shape: { type: 'circle' },
        opacity: { value: { min: 0.1, max: 0.5 }, animation: { enable: true, speed: 0.8, minimumValue: 0.1 } },
        size: { value: { min: 1, max: 3 } },
        move: {
          enable: true,
          speed: 0.6,
          direction: 'none',
          random: true,
          straight: false,
          outModes: { default: 'out' },
        },
        links: {
          enable: true,
          distance: 130,
          color: '#3b82f6',
          opacity: 0.12,
          width: 1,
          triangles: { enable: true, opacity: 0.02 },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'grab' },
        },
        modes: {
          grab: { distance: 180, links: { opacity: 0.35 } },
        },
      },
    },
    stars: {
      particles: {
        number: { value: 120, density: { enable: true, area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: { min: 0.1, max: 0.7 }, animation: { enable: true, speed: 1.2, minimumValue: 0.05, sync: false } },
        size: { value: { min: 0.3, max: 2.5 }, animation: { enable: true, speed: 2, minimumValue: 0.3 } },
        move: {
          enable: true,
          speed: 0.2,
          direction: 'none',
          random: true,
        },
      },
    },
    constellation: {
      particles: {
        number: { value: 80, density: { enable: true, area: 1000 } },
        color: { value: ['#60a5fa', '#a78bfa', '#34d399', '#f472b6'] },
        shape: { type: 'circle' },
        opacity: { value: { min: 0.2, max: 0.8 }, animation: { enable: true, speed: 0.5, minimumValue: 0.1, sync: false } },
        size: { value: { min: 1, max: 4 } },
        move: {
          enable: true,
          speed: 0.4,
          direction: 'none',
          random: true,
          straight: false,
          outModes: { default: 'bounce' },
          attract: { enable: true, rotateX: 600, rotateY: 1200 },
        },
        links: {
          enable: true,
          distance: 150,
          color: { value: '#60a5fa' },
          opacity: 0.15,
          width: 1,
          consent: false,
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'connect' },
        },
        modes: {
          connect: { distance: 200, radius: 250, links: { opacity: 0.4 } },
        },
      },
    },
    snow: {
      particles: {
        number: { value: 40, density: { enable: true, area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: { min: 0.1, max: 0.4 } },
        size: { value: { min: 1, max: 5 } },
        move: {
          enable: true,
          speed: 1,
          direction: 'bottom',
          straight: false,
          random: true,
          outModes: { default: 'out', top: 'none' },
          drift: { min: -1, max: 1 },
        },
      },
    },
    fireflies: {
      particles: {
        number: { value: 30, density: { enable: true, area: 1200 } },
        color: { value: ['#fbbf24', '#f59e0b', '#84cc16'] },
        shape: { type: 'circle' },
        opacity: { value: { min: 0, max: 0.8 }, animation: { enable: true, speed: 1.5, minimumValue: 0, sync: false } },
        size: { value: { min: 2, max: 5 }, animation: { enable: true, speed: 2, minimumValue: 1, sync: false } },
        move: {
          enable: true,
          speed: 0.8,
          direction: 'none',
          random: true,
          straight: false,
          outModes: { default: 'bounce' },
        },
        shadow: {
          enable: true,
          blur: 10,
          color: { value: '#fbbf24' },
        },
      },
    },
    bubbles: {
      particles: {
        number: { value: 25, density: { enable: true, area: 1200 } },
        color: { value: ['#3b82f6', '#8b5cf6', '#06b6d4', '#10b981'] },
        shape: { type: 'circle' },
        opacity: { value: { min: 0.05, max: 0.2 } },
        size: { value: { min: 20, max: 80 }, animation: { enable: true, speed: 3, minimumValue: 20, sync: false } },
        move: {
          enable: true,
          speed: 0.5,
          direction: 'top',
          straight: false,
          random: true,
          outModes: { default: 'out', bottom: 'none' },
        },
      },
    },
  }), [])

  return (
    <Particles
      id={id || `tsparticles-${variant}`}
      className="absolute inset-0"
      options={{
        fullScreen: false,
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        detectRetina: true,
        ...configs[variant],
      }}
    />
  )
}
