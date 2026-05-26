import { motion } from 'framer-motion'
import { FaQuoteLeft, FaStar, FaArrowUp, FaBuilding, FaUsers, FaClock, FaBrain } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'
import AnimatedSection from '../components/AnimatedSection'
import ParticlesBg from '../components/ParticlesBg'

const testimonials = [
  { name: 'Arun Kumar', role: 'Engineering Manager, Google', quote: 'TalentBridge AI found me a perfect role in 10 days. Their matching accuracy was incredible — 96% culture fit score!', rating: 5, photo: '👨‍💻', result: 'Placed in 10 days' },
  { name: 'Sneha Patel', role: 'HR Director, Infosys', quote: 'The AI screening saved us 70% recruiter time. Quality of candidates was exceptional. Our retention rate improved by 40%.', rating: 5, photo: '👩‍💼', result: '40% better retention' },
  { name: 'David Chen', role: 'CTO, Startup Vista', quote: 'Built our entire engineering team of 15 through TalentBridge. Every hire was a perfect cultural and technical fit.', rating: 5, photo: '🧑‍💼', result: '15-person team built' },
  { name: 'Megha Iyer', role: 'Product Lead, Microsoft', quote: 'AI resume analysis gave me insights I never considered. Landed my dream role with 92% match score.', rating: 5, photo: '👩‍🔬', result: 'Dream role secured' },
  { name: 'Rajesh Nair', role: 'VP Engineering, TCS', quote: 'Reduced our time-to-hire from 45 days to 12 days. The predictive analytics for candidate success is game-changing.', rating: 5, photo: '👨‍🔬', result: '73% faster hiring' },
  { name: 'Lisa Wang', role: 'Data Scientist, Amazon', quote: 'The career intelligence recommendations were spot-on. AI matched me with opportunities I never knew existed.', rating: 5, photo: '👩‍💻', result: '50% salary growth' },
]

const caseStudies = [
  { company: 'TechVista Solutions', industry: 'Technology', challenge: 'Needed 50+ engineers in 3 months for a new product.', solution: 'AI sourcing identified 200+ matched candidates from passive pools.', result: 'Hired 52 engineers, 95% still retained after 1 year.', metrics: { hires: 52, time: '8 weeks', retention: '95%' }, icon: '💻' },
  { company: 'MediCare Group', industry: 'Healthcare', challenge: 'Urgent staffing for new hospital chain expansion.', solution: 'Predictive AI matched specialized medical professionals.', result: 'Staffed 3 hospitals with 200+ professionals in record time.', metrics: { hires: 200, time: '6 weeks', retention: '92%' }, icon: '🏥' },
  { company: 'FinEdge Capital', industry: 'Finance', challenge: 'Finding compliance experts post regulatory changes.', solution: 'AI identified niche talent with regulatory expertise.', result: 'Placed 25 compliance experts, zero regulatory incidents.', metrics: { hires: 25, time: '4 weeks', retention: '100%' }, icon: '💰' },
]

export default function SuccessStories() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="noise-overlay">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden vignette">
        <ParticlesBg variant="constellation" id="stories-hero-particles" />
        <div className="absolute inset-0 spotlight-hero" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="gradient-orb w-80 h-80 top-20 left-40" style={{ backgroundColor: 'rgb(var(--color-accent-2) / 0.1)' }} />
          <div className="gradient-orb w-60 h-60 bottom-10 right-20" style={{ backgroundColor: 'rgb(var(--color-accent-1) / 0.1)', animationDelay: '3s' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 rounded-full px-4 py-2 mb-6">
              <FaStar className="text-yellow-400" />
              <span className="text-yellow-300 text-sm">15,000+ Success Stories</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold theme-text mb-6">
              Stories of <span className="theme-gradient-text">AI-Powered Success</span>
            </h1>
            <p className="text-lg theme-text-secondary max-w-2xl mx-auto">Real results from real people. See how AI transformed careers and companies.</p>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 theme-bg-secondary" style={{ borderTop: '1px solid rgb(var(--color-border))', borderBottom: '1px solid rgb(var(--color-border))' }}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '15K+', label: 'Placements', icon: FaUsers, color: 'var(--color-accent-1)' },
              { value: '95%', label: 'AI Accuracy', icon: FaBrain, color: '34 197 94' },
              { value: '12 days', label: 'Avg. Placement', icon: FaClock, color: '6 182 212' },
              { value: '500+', label: 'Companies', icon: FaBuilding, color: 'var(--color-accent-2)' },
            ].map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <stat.icon className="text-2xl mx-auto mb-2" style={{ color: `rgb(${stat.color})` }} />
                <p className="text-2xl font-bold theme-text">{stat.value}</p>
                <p className="theme-text-muted text-sm">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding theme-bg">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold theme-text mb-4">What They Say About <span className="theme-gradient-text">Our AI</span></h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="theme-card rounded-2xl p-6 card-hover h-full flex flex-col">
                  <FaQuoteLeft className="text-2xl mb-4" style={{ color: 'rgb(var(--color-accent-1) / 0.3)' }} />
                  <p className="theme-text-secondary italic mb-6 flex-1 leading-relaxed">"{t.quote}"</p>
                  <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgb(var(--color-border))' }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl" style={{ backgroundColor: 'rgb(var(--color-accent-1) / 0.1)', border: '1px solid rgb(var(--color-accent-1) / 0.2)' }}>{t.photo}</div>
                    <div className="flex-1">
                      <p className="font-bold theme-text text-sm">{t.name}</p>
                      <p className="theme-text-muted text-xs">{t.role}</p>
                    </div>
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg px-2 py-1">
                      <p className="text-green-400 text-[10px] font-bold flex items-center gap-1"><FaArrowUp className="text-[8px]" />{t.result}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-3">{[...Array(t.rating)].map((_, i) => <FaStar key={i} className="text-yellow-400 text-xs" />)}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding theme-bg-secondary">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold theme-text mb-4">Enterprise <span className="theme-gradient-text">Case Studies</span></h2>
            <p className="theme-text-secondary">Deep dives into our most impactful partnerships.</p>
          </AnimatedSection>
          <div className="space-y-8">
            {caseStudies.map((cs, index) => (
              <AnimatedSection key={index} delay={index * 0.15}>
                <div className="theme-card rounded-2xl p-8 transition-all">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-3xl">{cs.icon}</span>
                        <div>
                          <h3 className="font-bold theme-text">{cs.company}</h3>
                          <p className="theme-text-muted text-sm">{cs.industry}</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="text-red-400 text-xs font-semibold uppercase mb-1">Challenge</p>
                          <p className="theme-text-secondary text-sm">{cs.challenge}</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <p className="text-xs font-semibold uppercase mb-1" style={{ color: 'rgb(var(--color-accent-1))' }}>AI Solution</p>
                        <p className="theme-text-secondary text-sm">{cs.solution}</p>
                      </div>
                      <div className="mt-4">
                        <p className="text-green-400 text-xs font-semibold uppercase mb-1">Result</p>
                        <p className="theme-text text-sm font-medium">{cs.result}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="grid grid-cols-3 gap-4 w-full">
                        <div className="text-center rounded-xl p-3" style={{ backgroundColor: 'rgb(var(--color-bg-elevated))', border: '1px solid rgb(var(--color-border))' }}>
                          <p className="theme-text font-bold text-lg">{cs.metrics.hires}</p>
                          <p className="theme-text-muted text-[10px]">Hires</p>
                        </div>
                        <div className="text-center rounded-xl p-3" style={{ backgroundColor: 'rgb(var(--color-bg-elevated))', border: '1px solid rgb(var(--color-border))' }}>
                          <p className="theme-text font-bold text-lg">{cs.metrics.time}</p>
                          <p className="theme-text-muted text-[10px]">Timeline</p>
                        </div>
                        <div className="text-center rounded-xl p-3" style={{ backgroundColor: 'rgb(var(--color-bg-elevated))', border: '1px solid rgb(var(--color-border))' }}>
                          <p className="theme-text font-bold text-lg">{cs.metrics.retention}</p>
                          <p className="theme-text-muted text-[10px]">Retention</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
