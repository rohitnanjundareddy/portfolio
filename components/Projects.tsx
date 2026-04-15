'use client'

import { useState } from 'react'
import { 
  ExternalLink, 
  Github, 
  Brain, 
  Eye, 
  Bot, 
  Code,
  LineChart,
  MessageSquare,
  Activity,
  FileText,
  Calendar,
  TrendingUp,
  Zap
} from 'lucide-react'

type ProjectCategory = 'featured' | 'all' | 'ml' | 'llm' | 'cv' | 'web'

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  category: string[]
  github?: string
  demo?: string
  icon: React.ReactNode
  date: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: 'Real-Time Stock Forecasting with Multi-Agent RAG',
    description: 'Multi-agent AI system integrating live market data, company signals, and financial news using LLM-based extraction and RAG pipelines. Leverages Temporal Fusion Transformer (TFT), FinBERT sentiment modeling, and TabNet forecasting for intraday and 30-day predictions, achieving 68% accuracy.',
    image: '/projects/stock-forecasting.jpg',
    tags: ['LangChain', 'RAG', 'TFT', 'FinBERT', 'TabNet', 'Multi-Agent'],
    category: ['ml', 'llm'],
    github: '',
    icon: <TrendingUp className="w-5 h-5" />,
    date: 'May 2025 - Feb 2026',
    featured: true,
  },
  {
    title: 'Deep RL for Sequential Decision Optimization',
    description: 'Reinforcement learning agent using hybrid rule-based planning and deep Q-learning (DRQN) to optimize decisions under uncertainty. Demonstrates techniques applicable to risk management and portfolio optimization.',
    image: '/projects/rl-agent.jpg',
    tags: ['PyTorch', 'DRQN', 'Deep RL', 'Planning', 'Risk Management'],
    category: ['ml'],
    github: 'https://github.com/rohitnanjundareddy/RLagent',
    icon: <Zap className="w-5 h-5" />,
    date: 'Jan 2025 - Aug 2025',
    featured: true,
  },
  {
    title: 'InsureEase',
    description: 'LLM-powered insurance document analyzer using RAG + a Neo4j knowledge graph to compare policies, extract structured insights, and generate document-based recommendations. Processes uploads in 8s and returns results in 2s.',
    image: '/projects/insure-ease.jpg',
    tags: ['RAG', 'Vector DBs', 'Neo4j', 'LLMs', 'Sentence Transformers'],
    category: ['web', 'llm'],
    github: 'https://github.com/rohitnanjundareddy/InsuranceMarketplace',
    demo: 'https://insure-ease-kappa.vercel.app',
    icon: <FileText className="w-5 h-5" />,
    date: 'Jan 2025 - May 2025',
    featured: true,
  },
  {
    title: 'Medical Image Classification with Limited Data (Few-Shot Learning)',
    description: 'Data-efficient abnormality detection using few-shot + transfer learning with ResNet-18, DenseNet-121, and ViT-based foundation models. Achieved 50.5% accuracy in 10-shot settings via prototypical networks.',
    image: '/projects/chexpert-fewshot.jpg',
    tags: ['PyTorch', 'Few-Shot Learning', 'ViT', 'Prototypical Networks'],
    category: ['ml', 'cv'],
    github: 'https://github.com/rohitnanjundareddy/advancedML',
    demo: '',
    icon: <Activity className="w-5 h-5" />,
    date: 'Aug 2024 - Dec 2024',
    featured: true,
  },
  {
    title: 'Building LLM from Scratch',
    description: 'End-to-end LLM training workflow on Amazon EMR/Hadoop with Spark sliding-window text generator. Built conversational agent integrating Bedrock + Ollama via AWS Lambda and gRPC.',
    image: '/projects/llm-from-scratch.jpg',
    tags: ['AWS EMR', 'Spark', 'Lambda', 'gRPC', 'Ollama', 'Bedrock'],
    category: ['ml', 'llm'],
    github: '',
    demo: '',
    icon: <Brain className="w-5 h-5" />,
    date: 'Aug 2024 - Dec 2024',
    featured: true,
  },
  {
    title: 'Intelligent Wumpus World Agent',
    description: 'LLM-driven reasoning agent using structured knowledge graph for environment understanding. Implemented belief-state search (POMDP-style) and LLM-based action planning, scoring 550/1000.',
    image: '/projects/wumpus-agent.jpg',
    tags: ['POMDP', 'Knowledge Graphs', 'LLM Reasoning', 'Planning'],
    category: ['ml', 'llm'],
    github: 'https://github.com/rohitnanjundareddy/llm_wumpus',
    demo: '',
    icon: <Bot className="w-5 h-5" />,
    date: 'Jan 2025 - May 2025',
    featured: true,
  },
  {
    title: 'Early Breast Cancer Risk Detection Using AI',
    description: 'Deep learning model for breast cancer risk prediction using multi-view mammography with self-attention modules for CC and MLO views and RAD-DINO features.',
    image: '/projects/mammography.jpg',
    tags: ['PyTorch', 'Medical AI', 'ViT', 'DICOM'],
    category: ['ml', 'cv'],
    github: 'https://github.com/rohitnanjundareddy/breast_cancer_predictor',
    icon: <Brain className="w-5 h-5" />,
    date: 'Jan 2025 - Present',
    featured: false,
  },
  {
    title: 'Boston Housing Price Prediction',
    description: 'Transformer-based (T5) model achieving 70.93% accuracy. Benchmarked Gradient Boosting and Random Forest — improving accuracy by 15% and reducing training time by 20%.',
    image: '/projects/boston-housing.jpg',
    tags: ['PyTorch', 'T5', 'Transformers', 'Gradient Boosting'],
    category: ['ml'],
    github: 'https://github.com/rohitnanjundareddy/Boston_house_price_prediction',
    demo: 'https://bostonhousepriceprediction-murkum3ebg7d6ufuzthgmn.streamlit.app/',
    icon: <LineChart className="w-5 h-5" />,
    date: 'Oct 2024 - Nov 2024',
    featured: false,
  },
  {
    title: 'Real-Time Object Detection System',
    description: 'Real-time detection system using YOLO + OpenCV with 95% detection accuracy for multi-class scenarios in video streams.',
    image: '/projects/object-detection.jpg',
    tags: ['OpenCV', 'YOLO', 'Object Detection', 'Real-time CV'],
    category: ['ml', 'cv'],
    github: '',
    demo: '',
    icon: <Eye className="w-5 h-5" />,
    date: 'Sep 2019 - Nov 2019',
    featured: false,
  },
  {
    title: 'Misty II Autonomous Tour Guide Robot',
    description: 'Built an end-to-end Human-Robot Interaction (HRI) system on the Misty II platform, integrating real-time speech recognition, NLP-based intent parsing, and autonomous navigation to guide users through a campus environment. Designed a conversational AI pipeline using RAG and GPT models to process continuous audio input, generate context-aware responses, and convert them into speech for real-time interaction. Implemented SLAM-based navigation with predefined maps and path routing, along with radar-based obstacle detection and fallback mechanisms for operator intervention, enabling safe and reliable autonomous movement.',
    image: '/projects/misty.jpg',
    tags: ['Robotics', 'Speech Recognition', 'SLAM', 'NLP', 'HRI'],
    category: ['ml', 'llm'],
    github: 'https://github.com/rohitnanjundareddy/campus_guide_robot',
    icon: <Bot className="w-5 h-5" />,
    date: 'Aug 2024 - Dec 2024',
    featured: false,
  },
  {
    title: 'Sentiment Analysis Engine',
    description: 'Built an LSTM and Naive Bayes pipeline to classify sentiment on Twitter data, achieving ~90% accuracy. Compared sequential deep learning and probabilistic approaches for short-text NLP classification.',
    image: '/projects/sentiment-analysis.jpg',
    tags: ['LSTM', 'Naive Bayes', 'NLP', 'Twitter Data'],
    category: ['ml', 'llm'],
    github: '',
    demo: '',
    icon: <MessageSquare className="w-5 h-5" />,
    date: 'Jan 2019 - Apr 2019',
    featured: false,
  },
  {
    title: 'RAD-DINO Feature Extraction',
    description: 'Medical imaging pipeline using RAD-DINO foundation model for feature extraction and transfer learning on mammography datasets.',
    image: '/projects/rad-dino.jpg',
    tags: ['Foundation Models (RAD-DINO)', 'Transfer Learning', 'VinDR-Mammo'],
    category: ['ml', 'cv'],
    github: 'https://github.com/rohitnanjundareddy/breast_cancer_predictor',
    icon: <Eye className="w-5 h-5" />,
    date: 'Sep 2024 - Dec 2024',
    featured: false,
  },
  {
    title: 'ML Production Infrastructure',
    description: 'Production ML platform supporting 50+ models at 99.7% uptime with monitoring, drift detection, and automated alerting at 24/7.ai.',
    image: '/projects/production.jpg',
    tags: ['Docker', 'Kubernetes', 'MLflow', 'Spark', 'CI/CD'],
    category: ['web', 'ml'],
    github: '',
    demo: '',
    icon: <Code className="w-5 h-5" />,
    date: 'May 2023 - Aug 2024',
    featured: false,
  },
]

const categories = [
  { id: 'featured' as ProjectCategory, label: 'Highlights' },
  { id: 'all' as ProjectCategory, label: 'All' },
  { id: 'ml' as ProjectCategory, label: 'Machine Learning' },
  { id: 'llm' as ProjectCategory, label: 'LLMs & Agents' },
  { id: 'cv' as ProjectCategory, label: 'Computer Vision' },
  { id: 'web' as ProjectCategory, label: 'Production Systems' },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('featured')

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'featured') return project.featured
    if (activeCategory === 'all') return true
    return project.category.includes(activeCategory)
  })

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            End-to-end AI/ML projects spanning LLM pipelines, multi-agent systems, 
            deep learning, and production machine learning infrastructure.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-800 border border-gray-700 text-gray-400 hover:text-white hover:border-indigo-500/30'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <article
              key={project.title}
              className="group bg-gray-800 border border-gray-700 rounded-xl overflow-hidden hover:border-indigo-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/5"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                    {project.icon}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 text-xs font-medium bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30">
                      ★ Highlight
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  {/* Date */}
                  <div className="flex items-center gap-1.5 mt-1 text-gray-500 text-sm">
                    <Calendar size={14} />
                    <span>{project.date}</span>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md border border-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-1 text-gray-500 text-xs">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 pt-2">
                  {project.github && project.github !== '' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors text-sm"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  )}
                  {project.demo && project.demo !== '' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
