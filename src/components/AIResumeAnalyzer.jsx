import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiSparkles } from 'react-icons/hi'
import { FaCheckCircle, FaExclamationTriangle, FaLightbulb, FaChartBar } from 'react-icons/fa'

const analysisResults = {
  score: 82,
  strengths: [
    'Strong technical skills section',
    'Quantified achievements present',
    'Clean professional formatting',
    'Relevant work experience',
  ],
  improvements: [
    'Add more action verbs in descriptions',
    'Include LinkedIn profile URL',
    'Add a professional summary section',
    'Optimize keywords for ATS systems',
  ],
  aiSuggestions: [
    { label: 'ATS Compatibility', score: 78, color: 'from-yellow-400 to-orange-500' },
    { label: 'Impact Statements', score: 85, color: 'from-green-400 to-emerald-500' },
    { label: 'Keyword Density', score: 72, color: 'from-blue-400 to-cyan-500' },
    { label: 'Formatting', score: 92, color: 'from-purple-400 to-pink-500' },
  ],
  matchedJobs: 12,
}

export default function AIResumeAnalyzer({ file, onClose }) {
  const [analyzing, setAnalyzing] = useState(true)
  const [result, setResult] = useState(null)

  // Simulate AI analysis
  useState(() => {
    if (file) {
      setTimeout(() => {
        setAnalyzing(false)
        setResult(analysisResults)
      }, 3000)
    }
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="bg-gray-900 rounded-2xl border border-gray-700/50 overflow-hidden"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-600/20 to-accent-600/20 border-b border-gray-700/50 px-6 py-4 flex items-center gap-3">
        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
          <HiSparkles className="text-white" />
        </div>
        <div>
          <h3 className="text-white font-bold">AI Resume Analysis</h3>
          <p className="text-gray-400 text-xs">Powered by TalentBridge AI Engine</p>
        </div>
      </div>

      <div className="p-6">
        {analyzing ? (
          <div className="text-center py-8">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="w-16 h-16 border-4 border-primary-500/30 border-t-primary-500 rounded-full mx-auto mb-4"
            />
            <motion.p
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-gray-300 font-medium"
            >
              AI is analyzing your resume...
            </motion.p>
            <div className="mt-4 space-y-2 max-w-xs mx-auto">
              {['Parsing content...', 'Checking keywords...', 'Evaluating structure...', 'Generating insights...'].map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.7 }}
                  className="flex items-center gap-2 text-sm text-gray-500"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ delay: i * 0.7, duration: 0.5 }}
                  >
                    <FaCheckCircle className="text-green-500 text-xs" />
                  </motion.div>
                  {step}
                </motion.div>
              ))}
            </div>
          </div>
        ) : result && (
          <div className="space-y-6">
            {/* Score */}
            <div className="text-center">
              <div className="relative w-28 h-28 mx-auto">
                <svg className="w-28 h-28 -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#1f2937" strokeWidth="8" />
                  <motion.circle
                    cx="50" cy="50" r="42" fill="none"
                    stroke="url(#scoreGradient)" strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${result.score * 2.64} 264`}
                    initial={{ strokeDasharray: '0 264' }}
                    animate={{ strokeDasharray: `${result.score * 2.64} 264` }}
                    transition={{ duration: 1.5, ease: 'easeOut' }}
                  />
                  <defs>
                    <linearGradient id="scoreGradient">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#d946ef" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                      className="text-3xl font-bold text-white"
                    >
                      {result.score}
                    </motion.p>
                    <p className="text-xs text-gray-400">/ 100</p>
                  </div>
                </div>
              </div>
              <p className="text-green-400 font-medium text-sm mt-2">Good Resume Score!</p>
            </div>

            {/* Sub-scores */}
            <div className="grid grid-cols-2 gap-3">
              {result.aiSuggestions.map((item, i) => (
                <div key={i} className="bg-gray-800 rounded-xl p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-400 text-xs">{item.label}</span>
                    <span className="text-white text-sm font-bold">{item.score}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.score}%` }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                      className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Strengths */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <FaCheckCircle className="text-green-400" /> Strengths
              </h4>
              <div className="space-y-2">
                {result.strengths.map((s, i) => (
                  <p key={i} className="text-gray-400 text-xs flex items-start gap-2">
                    <span className="text-green-400 mt-0.5">•</span> {s}
                  </p>
                ))}
              </div>
            </div>

            {/* Improvements */}
            <div>
              <h4 className="text-white font-semibold text-sm mb-3 flex items-center gap-2">
                <FaLightbulb className="text-yellow-400" /> AI Suggestions
              </h4>
              <div className="space-y-2">
                {result.improvements.map((s, i) => (
                  <p key={i} className="text-gray-400 text-xs flex items-start gap-2">
                    <span className="text-yellow-400 mt-0.5">•</span> {s}
                  </p>
                ))}
              </div>
            </div>

            {/* Match */}
            <div className="bg-gradient-to-r from-primary-600/20 to-accent-600/20 rounded-xl p-4 border border-primary-500/20">
              <div className="flex items-center gap-3">
                <FaChartBar className="text-primary-400" />
                <div>
                  <p className="text-white font-semibold text-sm">AI Job Matching</p>
                  <p className="text-gray-400 text-xs">Found <span className="text-primary-400 font-bold">{result.matchedJobs}</span> jobs matching your profile</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}
