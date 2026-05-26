import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaLinkedin, FaTwitter, FaInstagram, FaPaperPlane, FaChevronDown } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'
import toast from 'react-hot-toast'
import AnimatedSection from '../components/AnimatedSection'
import ParticlesBg from '../components/ParticlesBg'

const faqs = [
  { q: 'How does AI matching work?', a: 'Our AI analyzes 50+ data points from your resume including skills, experience, and career trajectory, then matches against our database of opportunities using neural networks trained on 15,000+ successful placements.' },
  { q: 'Is my data safe?', a: 'Absolutely. We use enterprise-grade encryption (AES-256), comply with GDPR, and never share your data with third parties without consent.' },
  { q: 'How long does the process take?', a: 'AI matching is instant. Average time from application to placement is 12 days for active candidates.' },
  { q: 'What if the AI match isn\'t accurate?', a: 'Our AI has 95% accuracy, but if you disagree with a match, our human recruitment consultants review and refine recommendations.' },
  { q: 'Is there a cost for job seekers?', a: 'Never. Our services are 100% free for candidates. Companies pay for our recruitment solutions.' },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [openFaq, setOpenFaq] = useState(null)
  const [sending, setSending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSending(true)
    setTimeout(() => {
      setSending(false)
      toast.success('Message sent successfully! We\'ll respond within 24 hours.')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 1500)
  }

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="noise-overlay">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden vignette">
        <ParticlesBg variant="stars" id="contact-hero-particles" />
        <div className="absolute inset-0 spotlight-hero" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="gradient-orb w-60 h-60 top-20 right-20" style={{ backgroundColor: 'rgb(var(--color-accent-1) / 0.1)' }} />
          <div className="gradient-orb w-80 h-80 bottom-10 left-40" style={{ backgroundColor: 'rgb(var(--color-accent-2) / 0.1)', animationDelay: '3s' }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-6" style={{ backgroundColor: 'rgb(var(--color-accent-1) / 0.1)', border: '1px solid rgb(var(--color-accent-1) / 0.2)' }}>
              <HiSparkles style={{ color: 'rgb(var(--color-accent-1))' }} />
              <span className="text-sm" style={{ color: 'rgb(var(--color-accent-1))' }}>Get in Touch</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold theme-text mb-6">
              Let's Start a <span className="theme-gradient-text">Conversation</span>
            </h1>
            <p className="text-lg theme-text-secondary max-w-2xl mx-auto">Whether you're looking for talent or your next opportunity, we're here to help 24/7.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding pt-8 theme-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <AnimatedSection>
              <div className="space-y-6">
                {[
                  { icon: FaMapMarkerAlt, title: 'Visit Us', info: 'TalentBridge AI Tower, Koramangala, Bangalore, India 560034', color: 'from-blue-500 to-cyan-500' },
                  { icon: FaPhone, title: 'Call Us', info: '+91 80 4567 8900', color: 'from-green-500 to-teal-500' },
                  { icon: FaEnvelope, title: 'Email Us', info: 'hello@talentbridge.ai', color: 'from-purple-500 to-pink-500' },
                  { icon: FaClock, title: 'Working Hours', info: 'Mon - Sat: 9:00 AM - 7:00 PM IST', color: 'from-orange-500 to-red-500' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 theme-card rounded-2xl p-5 transition-all">
                    <div className={`w-11 h-11 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <item.icon className="text-white text-sm" />
                    </div>
                    <div>
                      <p className="theme-text font-semibold text-sm">{item.title}</p>
                      <p className="theme-text-secondary text-sm">{item.info}</p>
                    </div>
                  </div>
                ))}
                <div className="theme-card rounded-2xl p-5">
                  <p className="theme-text font-semibold text-sm mb-3">Follow Us</p>
                  <div className="flex gap-3">
                    {[FaLinkedin, FaTwitter, FaInstagram].map((Icon, i) => (
                      <a key={i} href="#" className="w-10 h-10 rounded-xl flex items-center justify-center theme-text-secondary transition-all" style={{ backgroundColor: 'rgb(var(--color-bg-elevated))', border: '1px solid rgb(var(--color-border))' }}>
                        <Icon />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.2} className="lg:col-span-2">
              <div className="theme-card rounded-3xl p-8">
                <h2 className="text-2xl font-display font-bold theme-text mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required
                      className="theme-input w-full rounded-xl px-4 py-3.5" />
                    <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required
                      className="theme-input w-full rounded-xl px-4 py-3.5" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange}
                      className="theme-input w-full rounded-xl px-4 py-3.5" />
                    <select name="subject" value={formData.subject} onChange={handleChange} required
                      className="theme-input w-full rounded-xl px-4 py-3.5 appearance-none">
                      <option value="" style={{ backgroundColor: 'rgb(var(--color-bg-card))' }}>Select Subject</option>
                      <option value="hiring" style={{ backgroundColor: 'rgb(var(--color-bg-card))' }}>I want to hire talent</option>
                      <option value="job" style={{ backgroundColor: 'rgb(var(--color-bg-card))' }}>I'm looking for a job</option>
                      <option value="partnership" style={{ backgroundColor: 'rgb(var(--color-bg-card))' }}>Business partnership</option>
                      <option value="other" style={{ backgroundColor: 'rgb(var(--color-bg-card))' }}>Other inquiry</option>
                    </select>
                  </div>
                  <textarea name="message" placeholder="Your Message..." rows="5" value={formData.message} onChange={handleChange} required
                    className="theme-input w-full rounded-xl px-4 py-3.5 resize-none" />
                  <button type="submit" disabled={sending}
                    className="btn-primary w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-semibold transform hover:scale-[1.02] transition-all disabled:opacity-50">
                    {sending ? 'Sending...' : <><FaPaperPlane /> Send Message</>}
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding theme-bg-secondary">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold theme-text mb-4">Frequently Asked <span className="theme-gradient-text">Questions</span></h2>
          </AnimatedSection>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.08}>
                <div className="theme-card rounded-2xl overflow-hidden transition-all">
                  <button onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left">
                    <span className="theme-text font-medium pr-4">{faq.q}</span>
                    <FaChevronDown className={`theme-text-muted flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} style={openFaq === index ? { color: 'rgb(var(--color-accent-1))' } : {}} />
                  </button>
                  <motion.div initial={false} animate={{ height: openFaq === index ? 'auto' : 0 }} className="overflow-hidden">
                    <p className="px-5 pb-5 theme-text-secondary text-sm leading-relaxed">{faq.a}</p>
                  </motion.div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="section-padding pt-0 theme-bg">
        <div className="max-w-7xl mx-auto">
          <div className="theme-card rounded-3xl h-80 flex items-center justify-center overflow-hidden">
            <div className="text-center">
              <FaMapMarkerAlt className="text-4xl mx-auto mb-3" style={{ color: 'rgb(var(--color-accent-1))' }} />
              <p className="theme-text font-semibold">TalentBridge AI Tower</p>
              <p className="theme-text-secondary text-sm">Koramangala, Bangalore, India</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
