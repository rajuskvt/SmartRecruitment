import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaSearch, FaMapMarkerAlt, FaBriefcase, FaClock, FaDollarSign, FaBookmark, FaArrowRight, FaBrain, FaFilter } from 'react-icons/fa'
import { HiSparkles, HiLightningBolt } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import AIJobMatcher from '../components/AIJobMatcher'
import ParticlesBg from '../components/ParticlesBg'

const allJobs = [
  { id: 1, title: 'Senior React Developer', company: 'TechVista Solutions', location: 'Bangalore, IN (Remote)', salary: '₹25-35 LPA', type: 'Full-time', posted: '2 hours ago', skills: ['React', 'TypeScript', 'Node.js', 'AWS'], match: 96, hot: true },
  { id: 2, title: 'Product Manager', company: 'InnovateCo', location: 'Mumbai, IN (Hybrid)', salary: '₹30-40 LPA', type: 'Full-time', posted: '5 hours ago', skills: ['Strategy', 'Agile', 'Analytics', 'Leadership'], match: 92, hot: true },
  { id: 3, title: 'Data Scientist', company: 'DataDriven AI', location: 'Hyderabad, IN (Remote)', salary: '₹22-30 LPA', type: 'Full-time', posted: '1 day ago', skills: ['Python', 'ML', 'TensorFlow', 'Statistics'], match: 88, hot: false },
  { id: 4, title: 'UX/UI Designer', company: 'DesignFirst', location: 'Pune, IN (On-site)', salary: '₹18-25 LPA', type: 'Full-time', posted: '1 day ago', skills: ['Figma', 'Research', 'Prototyping', 'Design Systems'], match: 85, hot: false },
  { id: 5, title: 'DevOps Engineer', company: 'CloudScale Inc', location: 'Delhi, IN (Remote)', salary: '₹20-28 LPA', type: 'Full-time', posted: '2 days ago', skills: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD'], match: 82, hot: false },
  { id: 6, title: 'AI/ML Engineer', company: 'NeuralTech Labs', location: 'Bangalore, IN (Remote)', salary: '₹28-38 LPA', type: 'Full-time', posted: '3 hours ago', skills: ['Python', 'PyTorch', 'NLP', 'LLMs'], match: 94, hot: true },
  { id: 7, title: 'Marketing Director', company: 'BrandForce', location: 'Mumbai, IN (Hybrid)', salary: '₹35-45 LPA', type: 'Full-time', posted: '3 days ago', skills: ['Strategy', 'Digital', 'Leadership', 'Analytics'], match: 78, hot: false },
  { id: 8, title: 'Full Stack Developer', company: 'BuildFast.io', location: 'Chennai, IN (Remote)', salary: '₹20-28 LPA', type: 'Contract', posted: '4 hours ago', skills: ['Next.js', 'Python', 'PostgreSQL', 'Docker'], match: 90, hot: true },
]

const categories = ['All', 'Technology', 'Product', 'Design', 'Marketing', 'Engineering']

export default function Jobs() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showAIMatcher, setShowAIMatcher] = useState(false)

  const filteredJobs = allJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.company.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesSearch
  })

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="noise-overlay">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden vignette">
        <ParticlesBg variant="constellation" id="jobs-hero-particles" />
        <div className="absolute inset-0 spotlight-hero" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="gradient-orb w-60 h-60 top-20 right-40" style={{ backgroundColor: 'rgb(var(--color-accent-1) / 0.1)' }} />
          <div className="gradient-orb w-80 h-80 bottom-10 left-20" style={{ backgroundColor: 'rgb(var(--color-accent-2) / 0.1)', animationDelay: '3s' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
              <HiLightningBolt className="text-green-400" />
              <span className="text-green-300 text-sm">{allJobs.length} Active Openings • AI-Matched for You</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold theme-text mb-6">
              AI-Curated <span className="theme-gradient-text">Job Opportunities</span>
            </h1>
            <p className="text-lg theme-text-secondary max-w-2xl mx-auto mb-10">Our AI analyzes your skills and preferences to surface the most relevant opportunities.</p>
          </motion.div>

          {/* Search */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto">
            <div className="relative flex items-center theme-card rounded-2xl p-2">
              <div className="flex-1 flex items-center gap-3 px-4">
                <FaSearch className="theme-text-muted" />
                <input type="text" placeholder="Search roles, companies, or skills..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-transparent border-none outline-none theme-text w-full py-3" style={{ '--tw-placeholder-opacity': 1 }} />
              </div>
              <button onClick={() => setShowAIMatcher(!showAIMatcher)}
                className="btn-primary flex items-center gap-2 px-6 py-3 rounded-xl font-semibold">
                <FaBrain /> AI Match
              </button>
            </div>
          </motion.div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${selectedCategory === cat ? 'theme-gradient-bg text-white' : 'theme-card theme-text-secondary'}`}
                style={selectedCategory === cat ? { background: 'var(--gradient-accent)' } : {}}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* AI Matcher Panel */}
      <AnimatePresence>
        {showAIMatcher && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
              <AIJobMatcher />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Jobs List */}
      <section className="section-padding pt-8 theme-bg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <p className="theme-text-secondary"><span className="theme-text font-semibold">{filteredJobs.length}</span> jobs found</p>
            <div className="flex items-center gap-2 text-sm theme-text-muted">
              <FaFilter className="theme-text-muted" /> Sorted by AI Match Score
            </div>
          </div>

          <div className="space-y-4">
            {filteredJobs.sort((a, b) => b.match - a.match).map((job, index) => (
              <AnimatedSection key={job.id} delay={index * 0.05}>
                <div className="group pro-card card-lift-3d rounded-2xl p-6 shine-hover">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold theme-text transition-colors">{job.title}</h3>
                        {job.hot && (
                          <span className="bg-orange-500/10 text-orange-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-orange-500/20">🔥 HOT</span>
                        )}
                      </div>
                      <p className="theme-text-secondary mb-3">{job.company}</p>
                      <div className="flex flex-wrap items-center gap-4 text-sm theme-text-muted">
                        <span className="flex items-center gap-1"><FaMapMarkerAlt className="text-xs" /> {job.location}</span>
                        <span className="flex items-center gap-1"><FaDollarSign className="text-xs" /> {job.salary}</span>
                        <span className="flex items-center gap-1"><FaBriefcase className="text-xs" /> {job.type}</span>
                        <span className="flex items-center gap-1"><FaClock className="text-xs" /> {job.posted}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {job.skills.map((skill, i) => (
                          <span key={i} className="text-xs px-2.5 py-1 rounded-lg theme-text-secondary" style={{ backgroundColor: 'rgb(var(--color-bg-elevated))', border: '1px solid rgb(var(--color-border))' }}>{skill}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-3">
                      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold ${job.match >= 90 ? 'bg-green-500/10 text-green-400 border border-green-500/20' : job.match >= 80 ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : ''}`}
                        style={job.match < 80 ? { backgroundColor: 'rgb(var(--color-bg-elevated))', color: 'rgb(var(--color-text-secondary))', border: '1px solid rgb(var(--color-border))' } : {}}>
                        <HiSparkles className="text-xs" /> {job.match}% Match
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 rounded-xl theme-text-muted transition-all" style={{ backgroundColor: 'rgb(var(--color-bg-elevated))', border: '1px solid rgb(var(--color-border))' }}>
                          <FaBookmark className="text-sm" />
                        </button>
                        <Link to="/contact" className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all" style={{ backgroundColor: 'rgb(var(--color-accent-1) / 0.1)', border: '1px solid rgb(var(--color-accent-1) / 0.2)', color: 'rgb(var(--color-accent-1))' }}>
                          Apply <FaArrowRight className="text-xs" />
                        </Link>
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
