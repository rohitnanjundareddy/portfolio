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
  Car,
  MessageSquare,
  Activity,
  FileText
} from 'lucide-react'

type ProjectCategory = 'all' | 'ml' | 'cv' | 'robotics' | 'web'

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  category: string[]
  github?: string
  demo?: string
  icon: React.ReactNode
  date?: string
}

const projects: Project[] = [
  {
    title: 'Mammography Risk Prediction',
    description: 'Deep learning model for breast cancer risk prediction using multi-view mammography with self-attention modules for CC and MLO views and with rad-dino feature.',
    image: '/projects/mammography.jpg',
    tags: ['PyTorch', 'Medical AI', 'Attention', 'DICOM'],
    category: ['ml', 'cv'],
    github: 'https://github.com',
    icon: <Brain className="w-5 h-5" />,
  },
  {
    title: 'RAD-DINO Feature Extraction',
    description: 'Medical imaging pipeline using RAD-DINO foundation model for feature extraction and transfer learning on mammography datasets.',
    image: '/projects/rad-dino.jpg',
    tags: ['Foundation Models', 'Transfer Learning', 'VinDR-Mammo'],
    category: ['ml', 'cv'],
    github: 'https://github.com',
    icon: <Eye className="w-5 h-5" />,
  },
  {
    title: 'Misty II Tour Guide Robot',
    description: 'Social robotics project implementing speech recognition, navigation, and conversational AI for campus tour guide application.',
    image: '/projects/misty.jpg',
    tags: ['Robotics', 'Speech Recognition', 'Navigation', 'HRI'],
    category: ['robotics'],
    github: 'https://github.com',
    icon: <Bot className="w-5 h-5" />,
  },
  {
    title: 'Wumpus World RL Agent',
    description: 'Hybrid architecture combining rule-based logic with Deep Recurrent Q-Networks for intelligent agent navigation.',
    image: '/projects/wumpus.jpg',
    tags: ['Reinforcement Learning', 'DRQN', 'PyTorch'],
    category: ['ml'],
    github: 'https://github.com',
    icon: <Brain className="w-5 h-5" />,
  },
  {
    title: 'ML Production Systems',
    description: 'Anomaly detection and routing algorithms deployed at scale using Docker, Kubernetes, and TypeScript.',
    image: '/projects/production.jpg',
    tags: ['Docker', 'Kubernetes', 'TypeScript', 'React'],
    category: ['web', 'ml'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    icon: <Code className="w-5 h-5" />,
  },
  {
    title: 'Building LLM from Scratch',
    description: 'Developed an LLM pipeline on Amazon EMR/Hadoop and built a Spark sliding-window text generator. Also shipped a conversational agent integrating Bedrock + Ollama via AWS Lambda and gRPC for scalable interactions.',
    image: '/projects/llm-from-scratch.jpg',
    tags: ['AWS EMR', 'S3', 'Lambda', 'Hadoop', 'Apache Spark', 'gRPC', 'Ollama', 'Amazon Bedrock'],
    category: ['ml', 'web'],
    github: '',
    demo: '',
    icon: <Brain className="w-5 h-5" />,
    date: 'August 2024',
  },
  {
    title: 'Boston Housing Price Prediction',
    description: 'Designed and optimized a transformer-based (T5) model achieving 70.93% accuracy. Benchmarked Gradient Boosting and Random Forest—improving accuracy by 15% and reducing training time by 20%.',
    image: '/projects/boston-housing.jpg',
    tags: ['Python', 'PyTorch', 'T5', 'Transformers', 'Gradient Boosting', 'Random Forest'],
    category: ['ml'],
    github: '',
    demo: '',
    icon: <LineChart className="w-5 h-5" />,
    date: 'November 2024',
  },
  {
    title: 'Diabetic Retinopathy Detection',
    description: 'Built a deep learning model to classify retinopathy stages on 35,000 images, reaching 85% accuracy. Implemented image preprocessing that improved accuracy by 25% and flagged 90% of severe-risk cases correctly.',
    image: '/projects/retinopathy.jpg',
    tags: ['OpenCV', 'Keras', 'TensorFlow', 'Computer Vision', 'Medical Imaging'],
    category: ['ml', 'cv'],
    github: '',
    demo: '',
    icon: <Eye className="w-5 h-5" />,
    date: 'July 2019 - December 2019',
  },
  {
    title: 'Traffic Violation Model',
    description: 'Built a real-time traffic violation detection system using YOLO + OpenCV with 95% detection accuracy for speeding and lane-crossing scenarios. Extracted vehicle numbers using image processing and unique identifiers.',
    image: '/projects/traffic-violation.jpg',
    tags: ['OpenCV', 'YOLO', 'Real-time CV', 'Object Detection', 'Computer Vision'],
    category: ['ml', 'cv'],
    github: '',
    demo: '',
    icon: <Car className="w-5 h-5" />,
    date: 'November 2019',
  },
  {
    title: 'Sentiment Analysis Model',
    description: 'Developed NLP sentiment classification models (SVM + neural network) achieving 90% accuracy. Improved word-level performance using LSTM and Naive Bayes for robust sentiment prediction.',
    image: '/projects/sentiment-analysis.jpg',
    tags: ['PyTorch', 'Keras', 'LSTM', 'NLP', 'SVM', 'Naive Bayes'],
    category: ['ml', 'web'],
    github: '',
    demo: '',
    icon: <MessageSquare className="w-5 h-5" />,
    date: 'Jan 2019 - April 2019',
  },
  {
    title: 'Few-Shot & Transfer Learning for Medical Imaging',
    description: 'Built a data-efficient abnormality detection pipeline on CheXpert using few-shot + transfer learning with ResNet-18, DenseNet-121, and a medical-domain ViT (RAD-DINO). Used Prototypical Networks and diffusion-based augmentation.',
    image: '/projects/chexpert-fewshot.jpg',
    tags: ['PyTorch', 'CheXpert', 'Few-Shot Learning', 'Transfer Learning', 'ViT', 'RAD-DINO'],
    category: ['ml', 'cv'],
    github: '',
    demo: '',
    icon: <Activity className="w-5 h-5" />,
    date: 'Aug - Dec 2025',
  },
  {
    title: 'Intelligent Wumpus World Agent',
    description: 'Built an LLM-driven reasoning agent using a structured knowledge graph for environment understanding. Implemented belief-state search (POMDP-style) and LLM-based action planning, scoring 550/1000.',
    image: '/projects/wumpus-agent.jpg',
    tags: ['POMDP', 'Knowledge Graphs', 'LLM Reasoning', 'Belief-State Search', 'Planning'],
    category: ['ml'],
    github: '',
    demo: '',
    icon: <Bot className="w-5 h-5" />,
    date: 'Jan - May 2025',
  },
  {
    title: 'InsureEase',
    description: 'Developed an LLM-powered insurance document analysis system using RAG pipelines and a knowledge graph to compare policies, extract key insights, and generate personalized recommendations.',
    image: '/projects/insure-ease.jpg',
    tags: ['Sentence Transformers', 'RAG', 'Vector Databases', 'Neo4j', 'LLMs', 'Document AI'],
    category: ['web', 'ml'],
    github: '',
    demo: 'https://insure-ease-kappa.vercel.app',
    icon: <FileText className="w-5 h-5" />,
    date: 'Jan - May 2025',
  },
]

const categories = [
  { id: 'all' as ProjectCategory, label: 'All' },
  { id: 'ml' as ProjectCategory, label: 'Machine Learning' },
  { id: 'cv' as ProjectCategory, label: 'Computer Vision' },
  { id: 'robotics' as ProjectCategory, label: 'Robotics' },
  { id: 'web' as ProjectCategory, label: 'Web/Production' },
]

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all')

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'all' || project.category.includes(activeCategory)
  )

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Research and engineering projects spanning medical AI, computer vision, 
            robotics, and production machine learning systems.
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
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
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
