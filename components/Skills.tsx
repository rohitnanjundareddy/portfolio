import { 
  Brain, 
  Eye, 
  Database, 
  Code, 
  Wrench,
  Cloud
} from 'lucide-react'

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Machine Learning',
    icon: <Brain className="w-5 h-5" />,
    skills: [
      'PyTorch',
      'TensorFlow',
      'Scikit-learn',
      'Deep Learning',
      'Reinforcement Learning',
      'Meta-Learning',
      'Attention Mechanisms',
      'Transfer Learning',
    ],
  },
  {
    title: 'Computer Vision',
    icon: <Eye className="w-5 h-5" />,
    skills: [
      'Medical Imaging',
      'DICOM Processing',
      'Image Classification',
      'Object Detection',
      'Feature Extraction',
      'OpenCV',
      'Mammography Analysis',
      'Foundation Models',
    ],
  },
  {
    title: 'Data & Databases',
    icon: <Database className="w-5 h-5" />,
    skills: [
      'Python',
      'Pandas',
      'NumPy',
      'SQL',
      'PostgreSQL',
      'MongoDB',
      'Data Pipelines',
      'Jupyter',
    ],
  },
  {
    title: 'Programming',
    icon: <Code className="w-5 h-5" />,
    skills: [
      'Python',
      'TypeScript',
      'JavaScript',
      'C++',
      'Java',
      'React',
      'Node.js',
      'REST APIs',
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: <Cloud className="w-5 h-5" />,
    skills: [
      'Docker',
      'Kubernetes',
      'AWS',
      'GCP',
      'CI/CD',
      'Linux',
      'Git',
      'MLOps',
    ],
  },
  {
    title: 'Tools & Practices',
    icon: <Wrench className="w-5 h-5" />,
    skills: [
      'VS Code',
      'Weights & Biases',
      'Hugging Face',
      'Agile/Scrum',
      'Research Methods',
      'Technical Writing',
      'Code Review',
      'Testing',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Technical expertise spanning machine learning research, production systems, 
            and full-stack development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="p-6 bg-surface border border-border rounded-xl hover:border-primary/30 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  {category.icon}
                </div>
                <h3 className="font-display text-lg font-semibold">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-surface-light text-text-secondary text-sm rounded-lg border border-border hover:border-primary/30 hover:text-text-primary transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Highlight */}
        <div className="mt-12 p-6 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-xl text-center">
          <p className="text-text-secondary">
            <span className="text-text-primary font-medium">Currently exploring:</span>{' '}
            Vision Transformers, Diffusion Models, Multi-modal Learning, and LLM Applications in Healthcare
          </p>
        </div>
      </div>
    </section>
  )
}
