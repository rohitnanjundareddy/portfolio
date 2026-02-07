'use client'

import { GraduationCap, Award, Microscope, Rocket } from 'lucide-react'

interface JourneyItem {
  year: string
  title: string
  subtitle?: string
  description: string
  icon: React.ReactNode
  highlight?: string
}

const journeyItems: JourneyItem[] = [
  {
    year: '2025',
    title: 'Active Research',
    subtitle: 'University of Illinois Chicago',
    description: 'LLM-based multi-agent systems in game theory using RL (GNN+RL+DQN) and 5-year breast cancer risk prediction from mammography.',
    icon: <Microscope className="w-5 h-5" />,
    highlight: 'Ongoing',
  },
  {
    year: '2024',
    title: 'Started MS in Computer Science',
    subtitle: 'University of Illinois Chicago',
    description: 'Pursuing advanced studies in Machine Learning, Computer Vision, and AI Systems.',
    icon: <GraduationCap className="w-5 h-5" />,
    highlight: 'GPA: 3.85/4.0',
  },
  {
    year: '2023',
    title: 'Promoted to Senior Data Scientist',
    subtitle: '247.ai',
    description: 'Led ML infrastructure initiatives, built anomaly detection systems reducing QA time by 40%.',
    icon: <Rocket className="w-5 h-5" />,
  },
  {
    year: '2020',
    title: 'Bachelor\'s in Computer Science',
    subtitle: 'Amrita School of Engineering, Bangalore',
    description: 'Graduated with focus on ML and Computer Vision. Built traffic violation detection and sentiment analysis systems.',
    icon: <GraduationCap className="w-5 h-5" />,
    highlight: 'GPA: 3.4/4.0',
  },
  {
    year: '2020',
    title: 'Started Career at 247.ai',
    subtitle: 'Data Scientist',
    description: 'Joined as Data Scientist building NLP models, speech-to-text systems, and workforce optimization tools.',
    icon: <Award className="w-5 h-5" />,
  },
]

export default function Journey() {
  return (
    <section id="journey" className="py-24 bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Key milestones in my academic and professional growth
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-cyan-500 to-indigo-500/20" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {journeyItems.map((item, index) => (
              <div
                key={`${item.year}-${item.title}`}
                className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-indigo-500 rounded-full transform -translate-x-1/2 border-4 border-gray-900 z-10" />

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="p-6 bg-gray-800 border border-gray-700 rounded-xl hover:border-indigo-500/30 transition-all group">
                    {/* Year badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-mono text-indigo-400">{item.year}</span>
                      {item.highlight && (
                        <span className="px-2 py-1 text-xs bg-indigo-500/10 text-indigo-300 rounded-full border border-indigo-500/20">
                          {item.highlight}
                        </span>
                      )}
                    </div>

                    {/* Icon + Title */}
                    <div className="flex items-start gap-3 mb-2">
                      <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400 shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white group-hover:text-indigo-400 transition-colors">
                          {item.title}
                        </h3>
                        {item.subtitle && (
                          <p className="text-sm text-gray-400">{item.subtitle}</p>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mt-3">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
