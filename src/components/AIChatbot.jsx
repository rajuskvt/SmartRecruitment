import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaRobot, FaTimes, FaPaperPlane, FaUser, FaSpinner } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'

const aiResponses = {
  greet: "Hello! I'm TalentBridge AI Assistant. I can help you with:\n\n• Finding job openings\n• Resume tips\n• Interview preparation\n• Salary insights\n• Company information\n\nHow can I help you today?",
  jobs: "Based on current market trends, here are hot roles:\n\n🔥 Full Stack Developer - ₹20-35 LPA\n🔥 Data Scientist - ₹18-30 LPA\n🔥 Product Manager - ₹25-40 LPA\n🔥 DevOps Engineer - ₹22-35 LPA\n\nWould you like me to find specific roles matching your skills?",
  resume: "Here are AI-powered resume tips:\n\n✅ Use action verbs (Led, Built, Optimized)\n✅ Quantify achievements (Increased revenue by 40%)\n✅ Tailor keywords to the job description\n✅ Keep it ATS-friendly with clean formatting\n✅ Include relevant certifications\n\nWant me to analyze your resume for improvements?",
  salary: "Based on our AI analysis of 50,000+ placements:\n\n📊 Tech (5+ yrs): ₹20-40 LPA\n📊 Product (5+ yrs): ₹25-45 LPA\n📊 Data Science (3+ yrs): ₹15-30 LPA\n📊 DevOps (4+ yrs): ₹18-35 LPA\n\nFactors: location, company size, skills, and negotiation can increase offers by 15-25%.",
  interview: "AI Interview Prep Tips:\n\n🎯 Research the company's recent news & products\n🎯 Practice STAR method for behavioral questions\n🎯 Prepare 3-5 questions to ask the interviewer\n🎯 Review the job description keywords\n🎯 Do mock interviews with AI tools\n\nI can also provide role-specific questions. What role are you preparing for?",
  default: "I understand you're looking for help. Let me think about this...\n\nBased on my analysis, I'd recommend:\n\n1. Browse our latest job openings tailored to your profile\n2. Upload your resume for AI-powered matching\n3. Check our success stories for inspiration\n\nIs there something specific I can help with? Try asking about jobs, resume tips, salary insights, or interview prep!"
}

function getAIResponse(message) {
  const lower = message.toLowerCase()
  if (lower.includes('hi') || lower.includes('hello') || lower.includes('hey')) return aiResponses.greet
  if (lower.includes('job') || lower.includes('opening') || lower.includes('position') || lower.includes('role')) return aiResponses.jobs
  if (lower.includes('resume') || lower.includes('cv') || lower.includes('profile')) return aiResponses.resume
  if (lower.includes('salary') || lower.includes('pay') || lower.includes('compensation') || lower.includes('ctc')) return aiResponses.salary
  if (lower.includes('interview') || lower.includes('prepare') || lower.includes('tips')) return aiResponses.interview
  return aiResponses.default
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'ai', text: aiResponses.greet, time: new Date() }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return

    const userMessage = { role: 'user', text: input, time: new Date() }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate AI thinking
    setTimeout(() => {
      const response = getAIResponse(input)
      setMessages(prev => [...prev, { role: 'ai', text: response, time: new Date() }])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000)
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform ${isOpen ? 'hidden' : ''}`}
        style={{ background: 'var(--gradient-accent)', boxShadow: '0 8px 30px rgb(var(--color-glow) / 0.4)' }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FaRobot className="text-2xl" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full" style={{ border: '2px solid rgb(var(--color-bg))' }} />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping" />
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] h-[560px] max-h-[calc(100vh-4rem)] rounded-3xl shadow-2xl flex flex-col overflow-hidden"
            style={{ backgroundColor: 'rgb(var(--color-bg-secondary))', border: '1px solid rgb(var(--color-border) / 0.5)' }}
          >
            {/* Header */}
            <div className="px-5 py-4 flex items-center justify-between flex-shrink-0" style={{ background: 'var(--gradient-accent)' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <HiSparkles className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">TalentBridge AI</h3>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-300 rounded-full" />
                    <span className="text-white/70 text-xs">Always online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/70 hover:text-white hover:bg-white/10 rounded-lg p-2 transition-colors"
              >
                <FaTimes />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0`}
                    style={{ background: msg.role === 'ai' ? 'var(--gradient-accent)' : 'rgb(var(--color-bg-elevated))' }}>
                    {msg.role === 'ai' ? <HiSparkles className="text-white text-xs" /> : <FaUser className="text-xs" style={{ color: 'rgb(var(--color-text-secondary))' }} />}
                  </div>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-3`}
                    style={msg.role === 'ai' 
                      ? { backgroundColor: 'rgb(var(--color-bg-card))', color: 'rgb(var(--color-text))' }
                      : { background: 'var(--gradient-accent)', color: 'white' }
                    }>
                    <p className="text-sm whitespace-pre-line leading-relaxed">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2"
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'var(--gradient-accent)' }}>
                    <HiSparkles className="text-white text-xs" />
                  </div>
                  <div className="rounded-2xl px-4 py-3" style={{ backgroundColor: 'rgb(var(--color-bg-card))' }}>
                    <div className="flex gap-1">
                      <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: 'rgb(var(--color-text-muted))', animationDelay: '0ms' }} />
                      <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: 'rgb(var(--color-text-muted))', animationDelay: '150ms' }} />
                      <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: 'rgb(var(--color-text-muted))', animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            <div className="px-4 pb-2 flex gap-2 overflow-x-auto flex-shrink-0">
              {['Find Jobs', 'Resume Tips', 'Salary Info', 'Interview Prep'].map((action) => (
                <button
                  key={action}
                  onClick={() => { setInput(action); }}
                  className="text-xs px-3 py-1.5 rounded-full whitespace-nowrap transition-colors"
                  style={{ backgroundColor: 'rgb(var(--color-bg-card))', color: 'rgb(var(--color-text-secondary))', border: '1px solid rgb(var(--color-border) / 0.5)' }}
                >
                  {action}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 pt-2 flex-shrink-0">
              <div className="flex gap-2 rounded-xl p-1.5" style={{ backgroundColor: 'rgb(var(--color-bg-card))', border: '1px solid rgb(var(--color-border) / 0.5)' }}>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-transparent text-sm px-3 py-2 outline-none"
                  style={{ color: 'rgb(var(--color-text))', '::placeholder': { color: 'rgb(var(--color-text-muted))' } }}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-white hover:opacity-90 transition-opacity disabled:opacity-30"
                  style={{ background: 'var(--gradient-accent)' }}
                >
                  <FaPaperPlane className="text-xs" />
                </button>
              </div>
              <p className="text-center text-[10px] mt-2" style={{ color: 'rgb(var(--color-text-muted))' }}>Powered by TalentBridge AI</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
