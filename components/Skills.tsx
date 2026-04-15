import { 
  Brain, 
  MessageSquare,
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
      'XGBoost',
      'LightGBM',
      'TabNet',
      'Feature Engineering',
      'Model Evaluation',
    ],
  },
  {
    title: 'Deep Learning',
    icon: <Brain className="w-5 h-5" />,
    skills: [
      'CNN',
      'RNN/LSTM/BiLSTM',
      'Transformers (ViT, TFT)',
      'Attention Mechanisms',
      'Transfer Learning',
      'Reinforcement Learning',
      'Diffusion Models',
      'Meta-Learning',
    ],
  },
  {
    title: 'LLMs & AI Systems',
    icon: <MessageSquare className="w-5 h-5" />,
    skills: [
      'LangChain',
      'LangGraph',
      'RAG Pipelines',
      'Prompt Engineering',
      'Vector DBs (Pinecone)',
      'Knowledge Graphs',
      'Agent Workflows',
      'LLM Evaluation',
    ],
  },
  {
    title: 'Production & MLOps',
    icon: <Wrench className="w-5 h-5" />,
    skills: [
      'Kubernetes',
      'Docker',
      'Spark',
      'Airflow',
      'Kafka',
      'Apache Beam',
      'MLflow',
      'CI/CD',
    ],
  },
  {
    title: 'Data & Storage',
    icon: <Database className="w-5 h-5" />,
    skills: [
      'PostgreSQL',
      'BigQuery',
      'MongoDB',
      'DynamoDB',
      'Redis',
      'Pinecone',
      'Neo4j',
      'Cassandra',
    ],
  },
  {
    title: 'Programming & Cloud',
    icon: <Code className="w-5 h-5" />,
    skills: [
      'Python',
      'SQL',
      'C++',
      'Java',
      'JavaScript',
      'FastAPI',
      'gRPC',
      'AWS / GCP',
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
            Technical expertise spanning production ML systems, LLM pipelines, 
            and end-to-end AI infrastructure.
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
            Multi-Agent Systems, Temporal Fusion Transformers, LLM Evaluation Frameworks, and Production RAG Architectures
          </p>
        </div>
      </div>
    </section>
  )
}
