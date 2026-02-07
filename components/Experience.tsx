'use client'

import { Building2, Calendar, MapPin } from 'lucide-react'

interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  type: 'full-time' | 'research'
  highlights: string[]
}

const experiences: ExperienceItem[] = [
  {
    title: 'Graduate Research Assistant',
    company: 'University of Illinois Chicago',
    location: 'Chicago, IL',
    period: 'May 2025 - Present',
    type: 'research',
    highlights: [
      'Implemented multi-MLP gene expression model using Prov-GigaPath embeddings',
      'Developed ViT-based breast cancer prediction model using mammograms with diffusion-based data augmentation',
      'Built scalable histopathology pipelines handling 100k+ tiles',
    ],
  },
  {
    title: 'Senior Data Scientist',
    company: '247.ai',
    location: 'Bangalore, India',
    period: 'May 2023 - August 2024',
    type: 'full-time',
    highlights: [
      'Built deep-learning anomaly & misuse detection (ResNet + Python), reducing QA review time by 40%',
      'Designed chat-routing recommendation engine using agent-behavior embeddings, improving first-call resolution by 25%',
      'Engineered scalable ETL and ML pipelines using Docker, Kubernetes, Spark, speeding model iteration cycles by 30%',
    ],
  },
  {
    title: 'Data Scientist',
    company: '247.ai',
    location: 'Bangalore, India',
    period: 'July 2020 - April 2023',
    type: 'full-time',
    highlights: [
      'Developed sentiment analysis and speech-to-text models (CNN, BiLSTM) achieving 92% and 94.2% accuracy',
      'Built predictive workforce optimization system using Gradient Boosting + Time-Series Forecasting, improving productivity by 15%',
      'Created React/TypeScript dashboards enabling faster decision-making across support teams',
      'Built NLP/RNN-based agent-feedback learning systems raising CSAT by 20%',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            4+ years building production-grade ML and LLM systems across vision, language, and multimodal domains.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={`${exp.company}-${exp.title}`}
              className="group relative bg-gray-800 border border-gray-700 rounded-xl p-6 md:p-8 hover:border-indigo-500/30 transition-all"
            >
              {/* Type Badge */}
              <div className="absolute top-6 right-6">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  exp.type === 'research' 
                    ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20' 
                    : 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20'
                }`}>
                  {exp.type === 'research' ? 'Research' : 'Industry'}
                </span>
              </div>

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-indigo-400 transition-colors">
                  {exp.title}
                </h3>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-gray-400">
                  <span className="flex items-center gap-2">
                    <Building2 size={16} className="text-indigo-400" />
                    {exp.company}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={16} className="text-indigo-400" />
                    {exp.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar size={16} className="text-indigo-400" />
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <ul className="space-y-3">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <span className="mt-2 w-1.5 h-1.5 bg-indigo-400 rounded-full shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Decorative line on left */}
              <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-indigo-500 to-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
