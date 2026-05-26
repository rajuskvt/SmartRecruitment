import { motion } from 'framer-motion'
import { FaLinkedin, FaAward, FaUsers, FaGlobe, FaHeart, FaBrain } from 'react-icons/fa'
import { HiLightningBolt, HiShieldCheck, HiEye, HiSparkles } from 'react-icons/hi'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedBackground from '../components/AnimatedBackground'
import ParticlesBg from '../components/ParticlesBg'
import Card3D from '../components/Card3D'

const team = [
  { name: 'Priya Sharma', role: 'CEO & Founder', avatar: '👩‍💼' },
  { name: 'Rahul Mehta', role: 'Head of AI/ML', avatar: '👨‍💼' },
  { name: 'Anita Desai', role: 'Tech Recruitment Lead', avatar: '👩‍💻' },
  { name: 'Vikram Singh', role: 'Client Relations', avatar: '🧑‍💼' },
]

const values = [
  { icon: HiShieldCheck, title: 'Integrity', description: 'Transparent and ethical AI-driven decisions.', color: 'from-blue-500 to-cyan-500' },
  { icon: HiLightningBolt, title: 'Innovation', description: 'Cutting-edge AI for faster, better results.', color: 'from-purple-500 to-pink-500' },
  { icon: FaHeart, title: 'Passion', description: 'Genuinely invested in every success story.', color: 'from-red-500 to-orange-500' },
  { icon: HiEye, title: 'Vision', description: 'Forward-thinking AI-first approach.', color: 'from-green-500 to-teal-500' },
]

const milestones = [
  { year: '2015', title: 'Founded', description: 'Started with a vision to transform recruitment.' },
  { year: '2017', title: '1000 Placements', description: 'Reached first major milestone.' },
  { year: '2019', title: 'Global Expansion', description: 'Opened offices in 5 countries.' },
  { year: '2021', title: 'AI Integration', description: 'Launched AI-powered matching engine.' },
  { year: '2023', title: '10K+ Placements', description: 'A decade of successful connections.' },
  { year: '2025', title: 'AI Industry Leader', description: '#1 AI recruitment platform in Asia.' },
]

export default function About() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="noise-overlay">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden vignette">
        <ParticlesBg variant="stars" id="about-hero-particles" />
        <div className="absolute inset-0 spotlight-hero" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="gradient-orb w-80 h-80 top-20 right-20" style={{ backgroundColor: 'rgb(var(--color-accent-2) / 0.1)' }} />
          <div className="gradient-orb w-60 h-60 bottom-10 left-10" style={{ backgroundColor: 'rgb(var(--color-accent-1) / 0.1)', animationDelay: '3s' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6" style={{ backgroundColor: 'rgb(var(--color-accent-1) / 0.1)', border: '1px solid rgb(var(--color-accent-1) / 0.2)' }}>
              <HiSparkles style={{ color: 'rgb(var(--color-accent-1))' }} />
              <span className="text-sm" style={{ color: 'rgb(var(--color-accent-1))' }}>About TalentBridge</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold theme-text mb-6">
              Building Careers with{' '}
              <span className="theme-gradient-text">AI Intelligence</span>
            </h1>
            <p className="text-lg theme-text-secondary max-w-2xl mx-auto">
              Since 2015, we've been pioneering AI-driven recruitment, connecting exceptional talent with visionary organizations worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding theme-bg relative overflow-hidden">
        <AnimatedBackground variant="dots" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection variant="fadeLeft">
              <span className="font-semibold text-sm uppercase tracking-wider" style={{ color: 'rgb(var(--color-accent-1))' }}>Our Story</span>
              <h2 className="text-3xl md:text-4xl font-display font-bold theme-text mt-2 mb-6">A Decade of AI-Powered Transformation</h2>
              <div className="space-y-4 theme-text-secondary leading-relaxed">
                <p>TalentBridge was founded with a belief: AI can make recruitment more human, not less. What started as a small team has grown into a global AI recruitment platform.</p>
                <p>Our approach combines deep industry expertise with proprietary AI models. We don't just fill positions — our neural networks build lasting partnerships that drive growth.</p>
                <p>Today, with 15,000+ successful placements across 25 countries and AI accuracy of 95%, we're redefining recruitment for the AI age.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2} variant="fadeRight">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: FaUsers, label: 'Team Members', value: '200+' },
                  { icon: FaGlobe, label: 'Countries', value: '25+' },
                  { icon: FaAward, label: 'Awards Won', value: '50+' },
                  { icon: FaBrain, label: 'AI Accuracy', value: '95%' },
                ].map((item, i) => (
                  <div key={i} className="theme-card rounded-2xl p-6 text-center">
                    <item.icon className="text-3xl mx-auto mb-3" style={{ color: 'rgb(var(--color-accent-1))' }} />
                    <p className="text-3xl font-bold theme-text">{item.value}</p>
                    <p className="theme-text-muted text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding theme-bg-secondary relative overflow-hidden">
        <AnimatedBackground variant="aurora" />
        <div className="max-w-7xl mx-auto relative">
          <AnimatedSection variant="blur" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold theme-text mb-4">What Drives Us Forward</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1} variant="spring">
                <div className="pro-card card-lift-3d rounded-2xl p-6 h-full group shine-hover">
                  <div className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-4`}>
                    <value.icon className="text-white text-xl" />
                  </div>
                  <h3 className="text-lg font-bold theme-text mb-2">{value.title}</h3>
                  <p className="theme-text-secondary text-sm">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding theme-bg">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold theme-text">Our <span className="theme-gradient-text">Journey</span></h2>
          </AnimatedSection>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 hidden md:block" style={{ background: 'var(--gradient-accent)' }} />
            <div className="space-y-8">
              {milestones.map((m, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'} hidden md:block`}>
                      <div className={`inline-block theme-card rounded-xl p-6 ${index % 2 === 0 ? 'mr-4' : 'ml-4'}`}>
                        <p className="font-bold text-lg" style={{ color: 'rgb(var(--color-accent-1))' }}>{m.year}</p>
                        <h3 className="font-bold theme-text">{m.title}</h3>
                        <p className="theme-text-secondary text-sm">{m.description}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 rounded-full flex-shrink-0 hidden md:block z-10" style={{ backgroundColor: 'rgb(var(--color-accent-1))', border: '4px solid rgb(var(--color-bg))' }} />
                    <div className="flex-1 hidden md:block" />
                    <div className="md:hidden theme-card rounded-xl p-6 w-full">
                      <p className="font-bold text-lg" style={{ color: 'rgb(var(--color-accent-1))' }}>{m.year}</p>
                      <h3 className="font-bold theme-text">{m.title}</h3>
                      <p className="theme-text-secondary text-sm">{m.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding theme-bg-secondary relative overflow-hidden">
        <AnimatedBackground variant="orbs" />
        <div className="max-w-7xl mx-auto relative">
          <AnimatedSection variant="blur" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold theme-text mb-4">Meet the Leadership</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <AnimatedSection key={index} delay={index * 0.1} variant="scaleUp">
                <div className="pro-card card-lift-3d rounded-2xl p-6 text-center group shine-hover">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl group-hover:scale-110 transition-transform" style={{ backgroundColor: 'rgb(var(--color-accent-1) / 0.1)', border: '1px solid rgb(var(--color-accent-1) / 0.2)' }}>
                    {member.avatar}
                  </div>
                  <h3 className="font-bold theme-text">{member.name}</h3>
                  <p className="theme-text-muted text-sm mb-3">{member.role}</p>
                  <a href="#" className="transition-colors" style={{ color: 'rgb(var(--color-accent-1))' }}><FaLinkedin className="mx-auto text-xl" /></a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
