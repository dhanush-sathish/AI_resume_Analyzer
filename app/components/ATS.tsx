import React from 'react'

interface Suggestion {
  type: 'good' | 'improve'
  tip: string
}

interface ATSProps {
  score: number
  suggestion: Suggestion[]
}

const ATS: React.FC<ATSProps> = ({ score, suggestion }) => {
  // Determine gradient background based on score
  const getGradientBg = () => {
    if (score > 69) return 'from-green-100'
    if (score > 49) return 'from-yellow-100'
    return 'from-red-100'
  }

  // Determine icon based on score
  const getIcon = () => {
    if (score > 69) return '/icons/ats-good.svg'
    if (score > 49) return '/icons/ats-warning.svg'
    return '/icons/ats-bad.svg'
  }

  // Determine description text based on score
  const getDescription = () => {
    if (score > 69) return 'Your resume is optimized for ATS systems'
    if (score > 49) return 'Your resume needs some ATS optimization'
    return 'Your resume requires significant ATS improvements'
  }

  // Determine subtitle based on score
  const getSubtitle = () => {
    if (score > 69) return 'Great ATS Compatibility'
    if (score > 49) return 'Good ATS Compatibility'
    return 'Poor ATS Compatibility'
  }

  return (
    <div className={`bg-gradient-to-br ${getGradientBg()} to-white rounded-lg shadow-lg p-6 border border-gray-200`}>
      {/* Top Section with Icon and Headline */}
      <div className="flex items-center gap-4 mb-6">
        <img src={getIcon()} alt="ATS Score" className="w-12 h-12" />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">ATS Score</h2>
          <p className="text-lg font-semibold text-gray-700">{score}/100</p>
        </div>
      </div>

      {/* Description Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{getSubtitle()}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{getDescription()}</p>
      </div>

      {/* Suggestions List */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-800 mb-3">Suggestions</h4>
        <ul className="space-y-2">
          {suggestion.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <img
                src={item.type === 'good' ? '/icons/checks.svg' : '/icons/warning.svg'}
                alt={item.type}
                className="w-5 h-5 mt-0.5 flex-shrink-0"
              />
              <span className="text-gray-700 text-sm">{item.tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Closing Line */}
      <div className="text-center">
        <p className="text-sm text-gray-600 font-medium">
          Keep improving your resume for better ATS compatibility! 🚀
        </p>
      </div>
    </div>
  )
}

export default ATS