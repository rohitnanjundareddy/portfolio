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
    title: 'Graduate Research Assistant – AI / Machine Learning Engineer',
    company: 'University of Illinois Chicago',
    location: 'Chicago, IL',
    period: 'May 2025 - Present',
    type: 'research',
    highlights: [
      'Built an NLP pipeline to convert unstructured documents into structured datasets, enabling downstream machine learning workflows and knowledge graph construction using LangExtract, achieving 95% extraction accuracy on held-out data.',
      'Designed a scalable deep learning framework using transformer-based embeddings to process over 100k+ data samples efficiently across a distributed cluster, reducing training time by 40%',
      'Architected a gene expression prediction model using self-attention–based transformer embeddings (Prov-GigaPath) with an MLP classifier, achieving 99% accuracy and 0.953 AUROC.',
      'Developed a Vision Transformer (ViT)-based image classification model using advanced data augmentation, achieving 0.93 AUROC on highly imbalanced data with a very low positive class rate.',
    ],
  },
  {
    title: 'Senior Data Scientist / Senior Machine Learning Engineer',
    company: '24/7.ai',
    location: 'Bangalore, India',
    period: 'May 2023 - August 2024',
    type: 'full-time',
    highlights: [
      'Designed and deployed a CLIP-based real-time screen compliance monitoring system detecting agent misuse and policy violations through zero-shot visual understanding, reducing QA review time by 40%.',
      'Architected a GPT-powered real-time agent assistance system using RAG to retrieve relevant conversation history and generate context-aware response suggestions, improving first-call resolution by 25%.',
      'Built real-time multimodal ETL pipelines using Apache Beam and Spark to extract live chat, voice, and document data at sub-ms latency, structured into PostgreSQL and dynamically scaled via Kubernetes and Docker.',
      'Owned 50+ production ML models at 99.7% uptime through monitoring, drift detection, alerting, and governance.',
    ],
  },
  {
    title: 'Data Scientist / Machine Learning Engineer',
    company: '24/7.ai',
    location: 'Bangalore, India',
    period: 'July 2020 - April 2023',
    type: 'full-time',
    highlights: [
      'Implemented a client-facing conversational AI triage system using NLP-driven intent classification to dynamically generate personalized dialogue flows from real-time page context and behavioral signals.',
      'Developed a hybrid agent selection engine combining dense vector embeddings (Pinecone) and Neo4j knowledge graph traversal to match customer intent to the most suitable agent, enabling semantically aware routing.',
      'Built a real-time agent performance system using BiLSTM with attention-based conversation scoring and a LightGBM model generating 30m and 1hr forecasts, improving agent utilization by 15% and CSAT by 20%.',
      'Implemented CNN/BiLSTM models for real-time sentiment analysis achieving 94.2% accuracy, supporting agents during live chat sessions at scale.',
      'Migrated legacy preprocessing and streaming pipelines to Spring Boot, deploying on GCP/AWS with Docker/Kubernetes for high availability and dynamic scaling.',
    ],
  },
  {
    title: 'Software Development Intern',
    company: '24/7.ai',
    location: 'Bangalore, India',
    period: 'Jan 2020 - June 2020',
    type: 'full-time',
    highlights: [
      'Developed performance metrics (e.g., queue traffic, customer ratings) to track and evaluate agent efficiency',
      'Built a data pipeline to extract and process data from MySQL, enabling real-time visualization of agent performance through frontend dashboards',
      'Designed and implemented UI components to display performance insights in the AssistOps application',
      'Diagnosed and resolved production issues, improving system reliability and debugging across distributed services',
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
            5+ years building production-grade ML, LLM, and data systems across vision, language, and multimodal domains.
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
