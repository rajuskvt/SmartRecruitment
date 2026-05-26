import { motion } from 'framer-motion'

export default function AnimatedBackground({ variant = 'mesh' }) {
  if (variant === 'mesh') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full mesh-gradient opacity-40" />
        <div 
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full blur-[120px] animate-blob"
          style={{ backgroundColor: 'rgb(var(--color-accent-1) / 0.12)' }}
        />
        <div 
          className="absolute top-1/3 -right-32 w-[400px] h-[400px] rounded-full blur-[120px] animate-blob animation-delay-2000"
          style={{ backgroundColor: 'rgb(var(--color-accent-2) / 0.1)' }}
        />
        <div 
          className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] rounded-full blur-[150px] animate-blob animation-delay-4000"
          style={{ backgroundColor: 'rgb(var(--color-accent-1) / 0.08)' }}
        />
      </div>
    )
  }

  if (variant === 'aurora') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="aurora-bg absolute inset-0" />
        <div 
          className="absolute top-0 left-1/4 w-[800px] h-[600px] animate-morph"
          style={{ 
            background: 'radial-gradient(ellipse at center, rgb(var(--color-accent-1) / 0.1), transparent 60%)',
            filter: 'blur(60px)'
          }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-[600px] h-[500px] animate-morph animation-delay-4000"
          style={{ 
            background: 'radial-gradient(ellipse at center, rgb(var(--color-accent-2) / 0.08), transparent 60%)',
            filter: 'blur(60px)'
          }}
        />
      </div>
    )
  }

  if (variant === 'grid') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 grid-pattern" />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ 
            background: 'radial-gradient(circle, rgb(var(--color-accent-1) / 0.08), transparent 60%)',
            filter: 'blur(40px)'
          }}
        />
      </div>
    )
  }

  if (variant === 'dots') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 dots-pattern opacity-50" />
        <div 
          className="absolute top-20 right-20 w-[300px] h-[300px] rounded-full blur-[100px] animate-float"
          style={{ backgroundColor: 'rgb(var(--color-accent-1) / 0.1)' }}
        />
        <div 
          className="absolute bottom-20 left-20 w-[250px] h-[250px] rounded-full blur-[100px] animate-float-delayed"
          style={{ backgroundColor: 'rgb(var(--color-accent-2) / 0.08)' }}
        />
      </div>
    )
  }

  if (variant === 'orbs') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${150 + i * 50}px`,
              height: `${150 + i * 50}px`,
              top: `${10 + i * 15}%`,
              left: `${5 + i * 20}%`,
              background: `radial-gradient(circle, rgb(var(${i % 2 === 0 ? '--color-accent-1' : '--color-accent-2'}) / ${0.06 + i * 0.02}), transparent 70%)`,
              filter: 'blur(40px)',
            }}
            animate={{
              y: [0, -20 - i * 5, 0],
              x: [0, 10 + i * 3, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 5 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    )
  }

  if (variant === 'starfield') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Static stars layer */}
        {[...Array(50)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: 'rgb(var(--color-text) / 0.3)',
              animation: `twinkle ${2 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
        {/* Shooting stars */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`shoot-${i}`}
            className="absolute"
            style={{
              width: '100px',
              height: '1px',
              top: `${15 + i * 25}%`,
              left: '-100px',
              background: `linear-gradient(90deg, rgb(var(--color-accent-1) / 0.8), transparent)`,
              borderRadius: '2px',
              animation: `shooting-star ${3 + i * 2}s linear infinite`,
              animationDelay: `${i * 4}s`,
            }}
          />
        ))}
        {/* Gradient nebula */}
        <div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[400px] animate-morph"
          style={{ background: 'radial-gradient(ellipse, rgb(var(--color-accent-1) / 0.04), transparent 60%)', filter: 'blur(40px)' }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] animate-morph animation-delay-4000"
          style={{ background: 'radial-gradient(ellipse, rgb(var(--color-accent-2) / 0.03), transparent 60%)', filter: 'blur(40px)' }}
        />
      </div>
    )
  }

  if (variant === 'waves') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[200%] left-[-50%]"
            style={{
              bottom: `${-10 + i * 5}%`,
              height: '200px',
              background: `linear-gradient(180deg, transparent, rgb(var(--color-accent-${(i % 2) + 1}) / ${0.02 + i * 0.01}))`,
              borderRadius: '40%',
            }}
            animate={{
              x: ['-10%', '10%', '-10%'],
              rotate: [0, 1, 0],
            }}
            transition={{
              duration: 10 + i * 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    )
  }

  return null
}
