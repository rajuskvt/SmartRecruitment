import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useDropzone } from 'react-dropzone'
import { FaCloudUploadAlt, FaFileAlt, FaCheckCircle, FaUser, FaEnvelope, FaPhone, FaBriefcase, FaSpinner, FaBrain, FaRobot } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'
import AnimatedSection from '../components/AnimatedSection'
import AIResumeAnalyzer from '../components/AIResumeAnalyzer'
import ParticlesBg from '../components/ParticlesBg'

export default function ResumeUpload() {
  const [file, setFile] = useState(null)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', position: '' })
  const [uploading, setUploading] = useState(false)
  const [showAnalysis, setShowAnalysis] = useState(false)
  const [uploadComplete, setUploadComplete] = useState(false)

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) setFile(acceptedFiles[0])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'], 'application/msword': ['.doc'], 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'] },
    maxFiles: 1,
    maxSize: 10 * 1024 * 1024
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!file) return
    setUploading(true)
    setTimeout(() => {
      setUploading(false)
      setUploadComplete(true)
      setTimeout(() => setShowAnalysis(true), 500)
    }, 2000)
  }

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="noise-overlay">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden vignette">
        <ParticlesBg variant="bubbles" id="resume-hero-particles" />
        <div className="absolute inset-0 spotlight-hero" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="gradient-orb w-60 h-60 top-20 left-20" style={{ backgroundColor: 'rgb(var(--color-accent-2) / 0.1)' }} />
          <div className="gradient-orb w-80 h-80 bottom-10 right-40" style={{ backgroundColor: 'rgb(var(--color-accent-1) / 0.1)', animationDelay: '3s' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6" style={{ backgroundColor: 'rgb(var(--color-accent-2) / 0.1)', border: '1px solid rgb(var(--color-accent-2) / 0.2)' }}>
              <FaBrain style={{ color: 'rgb(var(--color-accent-2))' }} />
              <span className="text-sm" style={{ color: 'rgb(var(--color-accent-2))' }}>AI Resume Analysis</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold theme-text mb-6">
              Upload Resume, Get{' '}<span className="theme-gradient-text">AI Insights</span>
            </h1>
            <p className="text-lg theme-text-secondary max-w-2xl mx-auto">Our AI analyzes your resume in seconds — scoring ATS compatibility, impact metrics, and matching you with relevant positions.</p>
          </motion.div>
        </div>
      </section>

      {/* Upload Form */}
      <section className="section-padding pt-8 theme-bg">
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {!showAnalysis ? (
              <motion.div key="form" exit={{ opacity: 0, y: -20 }}>
                <AnimatedSection>
                  <form onSubmit={handleSubmit} className="theme-card rounded-3xl p-8 md:p-12">
                    {/* Dropzone */}
                    <div {...getRootProps()}
                      className={`border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 mb-8 ${isDragActive ? 'border-[rgb(var(--color-accent-1))]' : file ? 'border-green-500/50 bg-green-500/5' : ''}`}
                      style={!isDragActive && !file ? { borderColor: 'rgb(var(--color-border))', backgroundColor: 'transparent' } : isDragActive ? { borderColor: 'rgb(var(--color-accent-1))', backgroundColor: 'rgb(var(--color-accent-1) / 0.05)' } : {}}>
                      <input {...getInputProps()} />
                      {file ? (
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-4">
                            <FaCheckCircle className="text-green-400 text-3xl" />
                          </div>
                          <p className="theme-text font-semibold mb-1">{file.name}</p>
                          <p className="theme-text-muted text-sm">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                          <p className="text-sm mt-2 cursor-pointer" style={{ color: 'rgb(var(--color-accent-1))' }}>Click to replace</p>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center">
                          <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgb(var(--color-accent-1) / 0.1)', border: '1px solid rgb(var(--color-accent-1) / 0.2)' }}>
                            <FaCloudUploadAlt className="text-3xl" style={{ color: 'rgb(var(--color-accent-1))' }} />
                          </div>
                          <p className="theme-text font-semibold mb-1">
                            {isDragActive ? 'Drop your resume here' : 'Drag & drop your resume'}
                          </p>
                          <p className="theme-text-muted text-sm">or click to browse (PDF, DOC, DOCX — max 10MB)</p>
                          <div className="flex items-center gap-2 mt-4 rounded-lg px-4 py-2" style={{ backgroundColor: 'rgb(var(--color-bg-elevated))', border: '1px solid rgb(var(--color-border))' }}>
                            <FaRobot className="text-sm" style={{ color: 'rgb(var(--color-accent-1))' }} />
                            <span className="theme-text-muted text-xs">AI will analyze your resume instantly</span>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Form Fields */}
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                      {[
                        { icon: FaUser, name: 'name', placeholder: 'Full Name', type: 'text' },
                        { icon: FaEnvelope, name: 'email', placeholder: 'Email Address', type: 'email' },
                        { icon: FaPhone, name: 'phone', placeholder: 'Phone Number', type: 'tel' },
                        { icon: FaBriefcase, name: 'position', placeholder: 'Desired Position', type: 'text' },
                      ].map((field) => (
                        <div key={field.name} className="relative">
                          <field.icon className="absolute left-4 top-1/2 -translate-y-1/2 theme-text-muted" />
                          <input type={field.type} name={field.name} placeholder={field.placeholder} value={formData[field.name]} onChange={handleChange} required
                            className="theme-input w-full rounded-xl pl-12 pr-4 py-3.5" />
                        </div>
                      ))}
                    </div>

                    <button type="submit" disabled={!file || uploading}
                      className="btn-primary w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-semibold transform hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100">
                      {uploading ? (
                        <><FaSpinner className="animate-spin" /> AI is Analyzing...</>
                      ) : uploadComplete ? (
                        <><FaCheckCircle /> Analysis Complete!</>
                      ) : (
                        <><HiSparkles /> Upload & Get AI Analysis</>
                      )}
                    </button>

                    <p className="text-center theme-text-muted text-xs mt-4">Your data is encrypted and handled per GDPR guidelines.</p>
                  </form>
                </AnimatedSection>
              </motion.div>
            ) : (
              <motion.div key="analysis" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <AIResumeAnalyzer />
                <div className="text-center mt-8">
                  <button onClick={() => { setShowAnalysis(false); setFile(null); setUploadComplete(false); setFormData({ name: '', email: '', phone: '', position: '' }) }}
                    className="font-medium transition-colors" style={{ color: 'rgb(var(--color-accent-1))' }}>
                    ← Upload Another Resume
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding theme-bg-secondary">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold theme-text mb-4">What Our AI <span className="theme-gradient-text">Analyzes</span></h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '📄', title: 'ATS Compatibility', description: 'Checks formatting and keyword optimization for ATS systems.' },
              { icon: '🎯', title: 'Impact Score', description: 'Evaluates action verbs and quantifiable achievements.' },
              { icon: '🔑', title: 'Keyword Match', description: 'Matches skills against industry demand and job requirements.' },
              { icon: '✨', title: 'Suggestions', description: 'AI-generated improvements and missing skill recommendations.' },
            ].map((feature, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="theme-card rounded-2xl p-6 text-center card-hover">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="font-bold theme-text mb-2">{feature.title}</h3>
                  <p className="theme-text-secondary text-sm">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}
