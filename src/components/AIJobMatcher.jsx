import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiSparkles } from 'react-icons/hi'
import { FaBrain, FaMapMarkerAlt, FaRupeeSign, FaBolt } from 'react-icons/fa'

const matchedJobs = [
  { title: 'Senior React Developer', company: 'TechVista', match: 95, salary: '₹30-40 LPA', location: 'Hyderabad' },
  { title: 'Full Stack Engineer', company: 'InnovateCo', match: 89, salary: '₹25-35 LPA', location: 'Bangalore' },
  { title: 'Frontend Architect', company: 'DesignHub', match: 84, salary: '₹35-45 LPA', location: 'Remote' },
  { title: 'Tech Lead', company: 'CloudFirst', match: 78, salary: '₹40-50 LPA', location: 'Pune' },
]

export default function AIJobMatcher({ skills = [], experience = '' }) {
  const [matching, setMatching] = useState(true)
  const [results, setResults] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setMatching(false)
      setResults(matchedJobs)
    }, 2500)
    return () => clearTimeout(timer)
  }, [skills, experience])

  return (
    <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-700/50 overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-700/50 flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
          <FaBrain className="text-white text-sm" />
        </div>
        <div>
          <h3 className="text-white font-bold text-sm">AI Job Matcher</h3>
          <p className="text-gray-500 text-[10px]">Real-time skill-based matching</p>
        </div>
        <div className="ml-auto">
          <HiSparkles className="text-cyan-400 animate-pulse" />
        </div>
      </div>

      <div className="p-4">
        {matching ? (
          <div className="text-center py-6">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              className="w-10 h-10 border-3 border-cyan-500/30 border-t-cyan-500 rounded-full mx-auto mb-3"
            />
            <p className="text-gray-400 text-sm">Finding your perfect matches...</p>
          </div>
        ) : (
          <div className="space-y-3">
            {results.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                className="bg-gray-800/50 rounded-xl p-3 border border-gray-700/30 hover:border-primary-500/30 transition-colors cursor-pointer group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-white text-sm font-medium group-hover:text-primary-400 transition-colors">{job.title}</h4>
                    <p className="text-gray-500 text-xs">{job.company}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-gray-400 text-[10px] flex items-center gap-1">
                        <FaMapMarkerAlt className="text-[8px]" /> {job.location}
                      </span>
                      <span className="text-gray-400 text-[10px] flex items-center gap-1">
                        <FaRupeeSign className="text-[8px]" /> {job.salary}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold ${
                      job.match >= 90 ? 'bg-green-500/20 text-green-400' :
                      job.match >= 80 ? 'bg-blue-500/20 text-blue-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      <FaBolt className="text-[8px]" />
                      {job.match}% match
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            <p className="text-center text-gray-600 text-[10px] mt-2">Based on AI analysis of your profile</p>
          </div>
        )}
      </div>
    </div>
  )
}
