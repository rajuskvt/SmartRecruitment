import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { TypeAnimation } from 'react-type-animation'
import { FaUsers, FaBuilding, FaGlobe, FaAward, FaArrowRight, FaHandshake, FaRocket, FaBrain, FaRobot, FaChartLine, FaLightbulb } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'
import AnimatedSection from '../components/AnimatedSection'
import AnimatedBackground from '../components/AnimatedBackground'
import Card3D from '../components/Card3D'
import ParticlesBg from '../components/ParticlesBg'

const stats = [
  { icon: FaUsers, value: 15000, suffix: '+', label: 'Candidates Placed' },
  { icon: FaBuilding, value: 500, suffix: '+', label: 'Partner Companies' },
  { icon: FaGlobe, value: 25, suffix: '+', label: 'Countries Served' },
  { icon: FaAward, value: 98, suffix: '%', label: 'Client Satisfaction' },
]

const features = [
  { icon: FaBrain, title: 'AI-Powered Matching', description: 'Neural networks analyze 50+ data points to match candidates with 95% accuracy.' },
  { icon: FaRobot, title: 'Smart Screening', description: 'AI chatbot conducts initial screenings 24/7, saving 70% recruiter time.' },
  { icon: FaChartLine, title: 'Predictive Analytics', description: 'ML models predict candidate success rates and cultural fit before interview.' },
  { icon: FaLightbulb, title: 'Career Intelligence', description: 'AI analyzes market trends for personalized career path recommendations.' },
  { icon: FaHandshake, title: 'Culture Fit Engine', description: 'NLP analysis of company culture and candidate values ensures lasting matches.' },
  { icon: FaRocket, title: '15-Day Placement', description: 'Automated workflows and AI screening cut average placement time by 67%.' },
]

const industries = [
  { name: 'Technology', icon: '\u{1F4BB}', jobs: '2,500+' },
  { name: 'Healthcare', icon: '\u{1F3E5}', jobs: '1,200+' },
  { name: 'Finance', icon: '\u{1F4B0}', jobs: '800+' },
  { name: 'Engineering', icon: '\u2699\uFE0F', jobs: '1,500+' },
  { name: 'Marketing', icon: '\u{1F4C8}', jobs: '600+' },
  { name: 'Education', icon: '\u{1F393}', jobs: '400+' },
]

const clients = ['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple', 'Netflix', 'Infosys', 'TCS']

function StatCounter({ icon: Icon, value, suffix, label }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })
  return (
    <div ref={ref} className="text-center group">
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 float-3d transition-all duration-300" style={{ backgroundColor: 'rgb(var(--color-accent-1) / 0.1)', border: '1px solid rgb(var(--color-accent-1) / 0.2)' }}>
        <Icon className="text-2xl" style={{ color: 'rgb(var(--color-accent-1))' }} />
      </div>
      <div className="text-4xl font-bold theme-text mb-1">
        {inView ? <CountUp end={value} duration={2.5} /> : '0'}{suffix}
      </div>
      <p className="theme-text-muted text-sm font-medium">{label}</p>
    </div>
  )
}

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="noise-overlay">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden vignette">
        <ParticlesBg variant="constellation" id="home-hero-particles" />
        <div className="absolute inset-0 spotlight-hero" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="gradient-orb w-[600px] h-[600px] top-[10%] -left-[10%]" style={{ backgroundColor: 'rgb(var(--color-accent-1) / 0.12)' }} />
          <div className="gradient-orb w-[500px] h-[500px] top-[20%] -right-[10%] animation-delay-2000" style={{ backgroundColor: 'rgb(var(--color-accent-2) / 0.1)', animationDelay: '3s' }} />
          <div className="gradient-orb w-[400px] h-[400px] bottom-[5%] left-[30%] animation-delay-4000" style={{ backgroundColor: 'rgb(var(--color-accent-1) / 0.06)', animationDelay: '5s' }} />
        </div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-8" style={{ backgroundColor: 'rgb(var(--color-accent-1) / 0.1)', border: '1px solid rgb(var(--color-accent-1) / 0.2)' }}>
                <HiSparkles className="animate-pulse" style={{ color: 'rgb(var(--color-accent-1))' }} />
                <span className="text-sm font-medium" style={{ color: 'rgb(var(--color-accent-1))' }}>AI-Powered Recruitment Platform</span>
              </motion.div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold theme-text leading-[1.1] mb-6">
                <span className="block">Find Your</span>
                <span className="block mt-2">
                  <TypeAnimation
                    sequence={['Dream Job', 2000, 'Perfect Talent', 2000, 'Next Career', 2000, 'Best Match', 2000]}
                    wrapper="span" speed={40} repeat={Infinity} className="theme-gradient-text"
                  />
                </span>
                <span className="block text-3xl sm:text-4xl lg:text-5xl mt-3 theme-text-secondary font-normal">with AI Intelligence</span>
              </h1>
              
              <p className="text-lg theme-text-secondary mb-10 max-w-lg leading-relaxed">
                Our AI analyzes <span className="theme-text font-semibold">millions of data points</span> to connect exceptional talent with forward-thinking companies in record time.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/jobs" className="btn-primary btn-3d group inline-flex items-center gap-3">
                  Find Opportunities <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/resume-upload" className="btn-secondary btn-3d inline-flex items-center gap-2">
                  <HiSparkles style={{ color: 'rgb(var(--color-accent-2))' }} /> AI Resume Analysis
                </Link>
              </div>

              <div className="mt-14 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1,2,3,4,5].map(i => (
                    <div key={i} className="w-11 h-11 rounded-full flex items-center justify-center text-white text-xs font-bold theme-gradient-bg" style={{ border: '2px solid rgb(var(--color-bg))' }}>
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="theme-text font-semibold">15,000+ placed</p>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(i => <span key={i} className="text-yellow-400 text-sm">{'\u2605'}</span>)}
                    <span className="theme-text-muted text-sm ml-1">4.9/5 rating</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hero Visual - AI Dashboard */}
            <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="hidden lg:block">
              <Card3D className="group" intensity={8}>
                <div className="pro-card rounded-3xl p-6 shadow-2xl shine-hover">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center theme-gradient-bg">
                      <FaBrain className="text-white" />
                    </div>
                    <div>
                      <p className="theme-text font-semibold text-sm">AI Matching Engine</p>
                      <p className="theme-text-muted text-xs">Processing 2,847 candidates...</p>
                    </div>
                    <span className="ml-auto w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  </div>
                  <div className="space-y-3 mb-5">
                    {[
                      { name: 'Senior React Dev', match: 96, company: 'TechVista' },
                      { name: 'Product Manager', match: 92, company: 'InnovateCo' },
                      { name: 'Data Scientist', match: 88, company: 'DataDriven' },
                    ].map((item, i) => (
                      <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 + i * 0.3 }}
                        className="rounded-xl p-3" style={{ backgroundColor: 'rgb(var(--color-bg-elevated) / 0.5)', border: '1px solid rgb(var(--color-border) / 0.2)' }}>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="theme-text text-sm font-medium">{item.name}</p>
                            <p className="theme-text-muted text-xs">{item.company}</p>
                          </div>
                          <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${item.match >= 95 ? 'bg-green-500/20 text-green-400' : item.match >= 90 ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'}`}>
                            {item.match}%
                          </span>
                        </div>
                        <div className="mt-2 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: 'rgb(var(--color-border) / 0.3)' }}>
                          <motion.div initial={{ width: 0 }} animate={{ width: `${item.match}%` }} transition={{ delay: 1.5 + i * 0.3, duration: 1 }}
                            className="h-full rounded-full theme-gradient-bg" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[{ label: 'Analyzed', value: '2.8K', icon: '\u{1F50D}' }, { label: 'Matched', value: '347', icon: '\u2728' }, { label: 'Placed', value: '89', icon: '\u{1F3AF}' }].map((stat, i) => (
                      <div key={i} className="rounded-xl p-3 text-center" style={{ backgroundColor: 'rgb(var(--color-bg-elevated) / 0.3)', border: '1px solid rgb(var(--color-border) / 0.15)' }}>
                        <p className="text-lg mb-1">{stat.icon}</p>
                        <p className="theme-text font-bold text-lg">{stat.value}</p>
                        <p className="theme-text-muted text-[10px]">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-6 -right-6 rounded-2xl p-4 shadow-xl" style={{ backgroundColor: 'rgb(var(--color-bg-card) / 0.95)', backdropFilter: 'blur(12px)', border: '1px solid rgb(var(--color-accent-1) / 0.3)' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center"><FaRocket className="text-green-400 text-sm" /></div>
                    <div><p className="theme-text text-xs font-semibold">New Placement!</p><p className="theme-text-muted text-[10px]">3 mins ago</p></div>
                  </div>
                </motion.div>
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-4 -left-6 rounded-2xl p-4 shadow-xl" style={{ backgroundColor: 'rgb(var(--color-bg-card) / 0.95)', backdropFilter: 'blur(12px)', border: '1px solid rgb(var(--color-accent-1) / 0.3)' }}>
                  <div className="flex items-center gap-2">
                    <HiSparkles style={{ color: 'rgb(var(--color-accent-1))' }} />
                    <span className="theme-text text-xs font-medium">AI Confidence: 96%</span>
                  </div>
                </motion.div>
              </Card3D>
            </motion.div>
          </div>
        </div>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 rounded-full flex justify-center pt-2" style={{ border: '2px solid rgb(var(--color-border) / 0.3)' }}><div className="w-1.5 h-3 rounded-full theme-gradient-bg" /></div>
        </motion.div>
      </section>

      {/* Client Logos */}
      <section className="py-12 theme-bg-secondary section-divider glow-border-bottom">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-center theme-text-muted text-sm mb-8 uppercase tracking-widest font-medium">Trusted by leading companies worldwide</p>
          <div className="flex items-center justify-center gap-12 flex-wrap">
            {clients.map((client, i) => (
              <motion.span key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 0.5 }} whileHover={{ opacity: 1, scale: 1.1 }} transition={{ delay: i * 0.1 }}
                className="theme-text-secondary font-bold text-xl font-display cursor-pointer transition-all">{client}</motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding theme-bg relative overflow-hidden section-divider">
        <AnimatedBackground variant="dots" />
        <div className="max-w-7xl mx-auto relative">
          <AnimatedSection variant="scaleUp"><div className="grid grid-cols-2 md:grid-cols-4 gap-8">{stats.map((stat, i) => <StatCounter key={i} {...stat} />)}</div></AnimatedSection>
        </div>
      </section>

      {/* AI Features */}
      <section className="section-padding relative overflow-hidden">
        <ParticlesBg variant="stars" id="home-features-particles" />
        <AnimatedBackground variant="aurora" />
        <div className="max-w-7xl mx-auto relative">
          <AnimatedSection variant="blur" className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-4 animate-glow-pulse" style={{ backgroundColor: 'rgb(var(--color-accent-1) / 0.1)', border: '1px solid rgb(var(--color-accent-1) / 0.2)' }}>
              <FaBrain className="text-sm" style={{ color: 'rgb(var(--color-accent-1))' }} />
              <span className="text-sm font-medium" style={{ color: 'rgb(var(--color-accent-1))' }}>AI-Powered Platform</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold theme-text mt-4 mb-4">
              Recruitment Powered by <span className="theme-gradient-text animate-text-shimmer" style={{ backgroundImage: 'linear-gradient(90deg, rgb(var(--color-accent-1)), rgb(var(--color-accent-2)), rgb(var(--color-accent-1)))', backgroundSize: '200% auto', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Artificial Intelligence</span>
            </h2>
            <p className="theme-text-secondary max-w-2xl mx-auto text-lg">Our proprietary AI engine transforms how companies hire and candidates find opportunities.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1} variant="spring">
                <div className="group pro-card card-lift-3d rounded-2xl p-7 h-full shine-hover">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 theme-gradient-bg relative overflow-hidden shadow-lg" style={{ boxShadow: '0 8px 20px rgb(var(--color-glow) / 0.3)' }}>
                    <feature.icon className="text-white text-xl relative z-10" />
                  </div>
                  <h3 className="text-xl font-bold theme-text mb-3">{feature.title}</h3>
                  <p className="theme-text-secondary leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How AI Works */}
      <section className="section-padding theme-bg-secondary relative overflow-hidden section-divider">
        <AnimatedBackground variant="grid" />
        <div className="max-w-7xl mx-auto relative">
          <AnimatedSection variant="blur" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold theme-text mb-4">How Our <span className="theme-gradient-text">AI Works</span></h2>
            <p className="theme-text-secondary max-w-2xl mx-auto">Three simple steps to transform your hiring or job search experience.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Upload & Analyze', description: 'Submit your resume or job description. Our AI parses and understands requirements in seconds.', icon: '\u{1F9E0}' },
              { step: '02', title: 'AI Matching', description: 'Neural networks analyze 50+ parameters to find perfect matches with 95% accuracy.', icon: '\u26A1' },
              { step: '03', title: 'Connect & Succeed', description: 'Get introduced to pre-vetted matches. AI continues to optimize throughout the process.', icon: '\u{1F3AF}' },
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.2} variant="scaleUp">
                <div className="relative text-center group">
                  <motion.div 
                    className="text-6xl mb-6 inline-block"
                    whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >{item.icon}</motion.div>
                  <div className="absolute top-0 right-0 text-7xl font-bold font-display" style={{ color: 'rgb(var(--color-border) / 0.3)' }}>{item.step}</div>
                  <h3 className="text-xl font-bold theme-text mb-3">{item.title}</h3>
                  <p className="theme-text-secondary">{item.description}</p>
                  {index < 2 && <div className="hidden md:block absolute top-10 -right-4 theme-text-muted"><FaArrowRight className="text-2xl" /></div>}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding relative overflow-hidden">
        <AnimatedBackground variant="orbs" />
        <div className="max-w-7xl mx-auto relative">
          <AnimatedSection variant="fadeDown" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold theme-text mb-4">Industries We <span className="theme-gradient-text">Serve</span></h2>
            <p className="theme-text-secondary max-w-2xl mx-auto">Deep expertise across sectors powered by industry-specific AI models.</p>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <AnimatedSection key={index} delay={index * 0.08} variant="spring">
                <motion.div 
                  whileHover={{ y: -8, rotateY: 8, rotateX: -5 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  style={{ perspective: '800px', transformStyle: 'preserve-3d' }}
                  className="pro-card rounded-2xl p-6 text-center cursor-pointer group relative overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: 'radial-gradient(circle at center, rgb(var(--color-accent-1) / 0.08), transparent 70%)' }} />
                  <div className="relative" style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d' }}>
                    <motion.div 
                      className="text-4xl mb-3"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.3 }}
                    >{industry.icon}</motion.div>
                    <h3 className="theme-text font-semibold text-sm mb-1">{industry.name}</h3>
                    <p className="theme-text-muted text-xs">{industry.jobs} openings</p>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <AnimatedBackground variant="mesh" />
        <div className="max-w-4xl mx-auto relative">
          <AnimatedSection variant="scaleUp">
            <div className="relative rounded-3xl p-12 md:p-16 text-center overflow-hidden animated-border" style={{ background: 'var(--gradient-hero)', border: '1px solid rgb(var(--color-border) / 0.3)' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-1" style={{ background: 'var(--gradient-accent)' }} />
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full blur-[80px] animate-glow-pulse" style={{ backgroundColor: 'rgb(var(--color-accent-1) / 0.15)' }} />
              <div className="absolute -bottom-20 -right-20 w-[200px] h-[200px] rounded-full blur-[60px] animate-float-slow" style={{ backgroundColor: 'rgb(var(--color-accent-2) / 0.1)' }} />
              <div className="relative">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="inline-block"
                >
                  <HiSparkles className="text-4xl mx-auto mb-6" style={{ color: 'rgb(var(--color-accent-1))' }} />
                </motion.div>
                <h2 className="text-3xl md:text-4xl font-display font-bold theme-text mb-4">Ready to Experience <span className="theme-gradient-text">AI Recruitment</span>?</h2>
                <p className="theme-text-secondary mb-10 max-w-lg mx-auto text-lg">Join 15,000+ professionals who transformed their careers with our AI-powered platform.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/jobs" className="btn-primary btn-3d group inline-flex items-center gap-2 relative overflow-hidden">
                    <span className="relative z-10">Get Started Free</span> <FaArrowRight className="group-hover:translate-x-1 transition-transform relative z-10" />
                  </Link>
                  <Link to="/contact" className="btn-secondary btn-3d inline-flex items-center gap-2">
                    Talk to Our Team
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </motion.div>
  )
}
