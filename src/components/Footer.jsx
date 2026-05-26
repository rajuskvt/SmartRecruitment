import { Link } from 'react-router-dom'
import { FaBrain, FaLinkedin, FaTwitter, FaGithub, FaDiscord } from 'react-icons/fa'
import { HiMail, HiPhone, HiLocationMarker, HiSparkles } from 'react-icons/hi'

export default function Footer() {
  return (
    <footer className="theme-bg-secondary relative overflow-hidden section-divider" style={{ borderTop: `1px solid rgb(var(--color-border) / 0.3)` }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="gradient-orb w-[400px] h-[400px] -bottom-48 -left-32" style={{ backgroundColor: 'rgb(var(--color-accent-1) / 0.04)' }} />
        <div className="gradient-orb w-[300px] h-[300px] -bottom-32 -right-20" style={{ backgroundColor: 'rgb(var(--color-accent-2) / 0.03)', animationDelay: '4s' }} />
      </div>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'var(--gradient-accent)' }}>
                <FaBrain className="text-white text-lg" />
              </div>
              <span className="font-display font-bold text-xl theme-text">
                Talent<span className="theme-gradient-text">Bridge</span>
              </span>
            </Link>
            <p className="theme-text-muted text-sm leading-relaxed">
              AI-powered recruitment platform connecting exceptional talent with world-class companies. The future of hiring is here.
            </p>
            <div className="flex gap-3">
              {[FaLinkedin, FaTwitter, FaGithub, FaDiscord].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 theme-text-muted hover:theme-accent" style={{ backgroundColor: `rgb(var(--color-bg-card))`, border: `1px solid rgb(var(--color-border) / 0.3)` }}>
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="theme-text font-semibold text-lg mb-4">Platform</h3>
            <ul className="space-y-3">
              {[
                { to: '/jobs', label: 'AI Job Matching' },
                { to: '/resume-upload', label: 'AI Resume Analysis' },
                { to: '/services', label: 'Our Services' },
                { to: '/success-stories', label: 'Success Stories' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="theme-text-muted text-sm transition-colors hover:opacity-80">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Features */}
          <div>
            <h3 className="theme-text font-semibold text-lg mb-4">AI Features</h3>
            <ul className="space-y-3">
              {['Smart Matching Engine', 'Resume Parser & Scorer', 'Culture Fit Analysis', 'Salary Predictor', 'Career Path AI', 'Interview Coach'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <HiSparkles style={{ color: `rgb(var(--color-accent-1))` }} className="text-xs" />
                  <span className="theme-text-muted text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="theme-text font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <HiLocationMarker style={{ color: `rgb(var(--color-accent-1))` }} className="mt-1 flex-shrink-0" />
                <span className="theme-text-muted text-sm">123 Business District, Tech Park, Hyderabad, India</span>
              </li>
              <li className="flex items-center gap-3">
                <HiPhone style={{ color: `rgb(var(--color-accent-1))` }} className="flex-shrink-0" />
                <span className="theme-text-muted text-sm">+91 9876 543 210</span>
              </li>
              <li className="flex items-center gap-3">
                <HiMail style={{ color: `rgb(var(--color-accent-1))` }} className="flex-shrink-0" />
                <span className="theme-text-muted text-sm">careers@talentbridge.ai</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: `1px solid rgb(var(--color-border) / 0.2)` }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="theme-text-muted text-sm">© 2026 TalentBridge AI. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="theme-text-muted text-sm transition-colors hover:opacity-80">Privacy</a>
            <a href="#" className="theme-text-muted text-sm transition-colors hover:opacity-80">Terms</a>
            <a href="#" className="theme-text-muted text-sm transition-colors hover:opacity-80">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
