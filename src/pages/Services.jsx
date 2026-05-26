import { motion } from 'framer-motion'
import { FaSearch, FaUserTie, FaLaptopCode, FaHandshake, FaChartLine, FaGraduationCap, FaCheckCircle, FaArrowRight, FaBrain } from 'react-icons/fa'
import { HiLightningBolt, HiSparkles } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedBackground from '../components/AnimatedBackground'
import ParticlesBg from '../components/ParticlesBg'
import Card3D from '../components/Card3D'

const services = [
  { icon: FaSearch, title: 'AI Executive Search', description: 'AI identifies and secures top-tier leadership talent using predictive success modeling.', features: ['Board-level appointments', 'AI candidate scoring', 'Succession planning', 'Confidential AI search'], color: 'from-blue-500 to-cyan-500' },
  { icon: FaUserTie, title: 'Smart Permanent Staffing', description: 'End-to-end AI recruitment for full-time positions across all industries.', features: ['Culture fit AI', 'Skills verification', 'Personality matching', 'Offer optimization'], color: 'from-purple-500 to-pink-500' },
  { icon: FaLaptopCode, title: 'Tech Talent AI', description: 'Specialized AI recruitment for software, data, cloud, and emerging tech.', features: ['Code assessment AI', 'Tech stack matching', 'GitHub analysis', 'Remote-ready scoring'], color: 'from-orange-500 to-red-500' },
  { icon: FaHandshake, title: 'Contract Intelligence', description: 'AI-optimized flexible workforce solutions with predictive demand planning.', features: ['Demand forecasting', 'Compliance AI', 'Scalable teams', 'Project matching'], color: 'from-green-500 to-teal-500' },
  { icon: FaChartLine, title: 'HR Analytics Suite', description: 'AI-powered strategic HR advisory with data-driven workforce insights.', features: ['Compensation AI', 'Attrition prediction', 'Org optimization', 'Market intelligence'], color: 'from-indigo-500 to-violet-500' },
  { icon: FaGraduationCap, title: 'Campus AI Recruit', description: 'AI screening of graduates through aptitude analysis and potential prediction.', features: ['Potential scoring', 'Bulk AI screening', '200+ universities', 'Career path prediction'], color: 'from-amber-500 to-orange-500' },
]

const process = [
  { step: '01', title: 'Requirement Analysis', description: 'AI deep-dives into your needs, culture, and role requirements.' },
  { step: '02', title: 'AI Talent Sourcing', description: 'Neural networks source from 500K+ candidates database.' },
  { step: '03', title: 'Smart Screening', description: 'AI evaluates skills, culture fit, and potential.' },
  { step: '04', title: 'Interview Optimization', description: 'AI-coordinated interviews with top shortlisted candidates.' },
  { step: '05', title: 'Offer & Onboarding', description: 'AI-optimized offers and seamless onboarding support.' },
]

export default function Services() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="noise-overlay">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden vignette">
        <ParticlesBg variant="fireflies" id="services-hero-particles" />
        <div className="absolute inset-0 spotlight-hero" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="gradient-orb w-80 h-80 top-20 left-20" style={{ backgroundColor: 'rgb(var(--color-accent-1) / 0.1)' }} />
          <div className="gradient-orb w-60 h-60 bottom-10 right-10" style={{ backgroundColor: 'rgb(var(--color-accent-2) / 0.1)', animationDelay: '3s' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6" style={{ backgroundColor: 'rgb(var(--color-accent-1) / 0.1)', border: '1px solid rgb(var(--color-accent-1) / 0.2)' }}>
              <FaBrain style={{ color: 'rgb(var(--color-accent-1))' }} />
              <span className="text-sm" style={{ color: 'rgb(var(--color-accent-1))' }}>AI-Powered Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold theme-text mb-6">
              Intelligent{' '}<span className="theme-gradient-text">Recruitment Solutions</span>
            </h1>
            <p className="text-lg theme-text-secondary max-w-2xl mx-auto">From AI executive search to campus hiring, we offer end-to-end AI-driven talent acquisition.</p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding theme-bg relative overflow-hidden">
        <AnimatedBackground variant="grid" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1} variant="spring">
                <div className="group pro-card card-lift-3d rounded-2xl p-7 h-full flex flex-col transition-all duration-500 shine-hover">
                  <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    <service.icon className="text-white text-xl relative z-10" />
                  </div>
                  <h3 className="text-xl font-bold theme-text mb-3">{service.title}</h3>
                  <p className="theme-text-secondary mb-6">{service.description}</p>
                  <ul className="space-y-2 mt-auto">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm theme-text-muted">
                        <FaCheckCircle className="text-green-500 flex-shrink-0 text-xs" /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding theme-bg-secondary relative overflow-hidden">
        <AnimatedBackground variant="dots" />
        <div className="max-w-7xl mx-auto relative">
          <AnimatedSection variant="blur" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold theme-text mb-4">How AI <span className="theme-gradient-text">Delivers Results</span></h2>
            <p className="theme-text-secondary max-w-2xl mx-auto">Our proven AI-enhanced 5-step process.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-5 gap-4">
            {process.map((step, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="relative text-center group">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 float-3d shadow-lg" style={{ background: 'var(--gradient-accent)' }}>
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  {index < process.length - 1 && <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5" style={{ background: 'linear-gradient(to right, rgb(var(--color-accent-1) / 0.3), rgb(var(--color-accent-2) / 0.3))' }} />}
                  <h3 className="font-bold theme-text mb-2 text-sm">{step.title}</h3>
                  <p className="theme-text-muted text-xs">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding theme-bg">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="relative theme-card rounded-3xl p-12 text-center overflow-hidden" style={{ background: 'linear-gradient(to right, rgb(var(--color-accent-1) / 0.1), rgb(var(--color-accent-2) / 0.1))' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-1" style={{ background: 'var(--gradient-accent)' }} />
              <div className="relative">
                <HiLightningBolt className="text-yellow-400 text-4xl mx-auto mb-4" />
                <h2 className="text-3xl font-display font-bold theme-text mb-4">Need a Custom AI Solution?</h2>
                <p className="theme-text-secondary mb-8 max-w-lg mx-auto">We tailor our AI services to match your unique requirements.</p>
                <Link to="/contact" className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold transform hover:scale-105 transition-all duration-300">
                  Get in Touch <FaArrowRight />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  )
}
