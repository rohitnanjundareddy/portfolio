import { MapPin, Building2, GraduationCap, Briefcase } from 'lucide-react'

const highlights = [
  {
    icon: <GraduationCap className="w-5 h-5" />,
    label: 'Education',
    value: 'University of Illinois Chicago',
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    label: 'Research',
    value: 'AI & NLP Research, UIC',
  },
  {
    icon: <Briefcase className="w-5 h-5" />,
    label: 'Experience',
    value: 'Senior Data Scientist @ 247.ai',
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    label: 'Location',
    value: 'Chicago, IL',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-surface/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Background decoration */}
              <div className="absolute inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              
              {/* Main image container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border bg-surface">
                <div className="w-full h-full bg-gradient-to-br from-surface-light to-surface flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <span className="font-display text-6xl font-bold gradient-text">ROHIT NANJUNDA REDDY</span>
                    <p className="text-text-muted text-sm">AI/ML Engineer</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-primary/30 rounded-tl-2xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-accent/30 rounded-br-2xl" />
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              
              <div className="space-y-4 text-text-secondary leading-relaxed">
                <p>
                  I&apos;m an AI/ML Engineer with 5+ years of experience building and deploying
                  production machine learning systems at scale. Currently pursuing my MS in
                  Computer Science at UIC while working as a Graduate Research Assistant
                  on NLP and deep learning research.
                </p>
                <p>
                  At 24/7.ai, I designed and deployed a CLIP-based real-time screen compliance
                  monitoring system using zero-shot visual understanding, built a GPT-powered
                  RAG agent assistance system that improved first-call resolution by 25%, and
                  engineered multimodal ETL pipelines with Apache Beam and Spark processing
                  live chat, voice, and document data at sub-ms latency — all dynamically
                  scaled via Kubernetes and Docker.
                </p>
                <p>
                  My research work spans NLP pipelines, ViT-based classification models with
                  diffusion-based augmentation, and distributed transformer embedding pipelines
                  processing 100k+ data points. I also build LLM-powered applications — from
                  multi-agent RAG systems for real-time stock forecasting to knowledge
                  graph-based document analyzers.
                </p>
                <p>
                  I like owning projects end to end — from data pipelines and model training
                  to deployment, monitoring, and governance — using Python, PyTorch, Docker,
                  Kubernetes, Spark, and cloud platforms to build systems people can rely on.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="p-4 bg-surface border border-border rounded-xl hover:border-primary/30 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2 text-primary">
                    {item.icon}
                    <span className="text-xs uppercase tracking-wider text-text-muted">
                      {item.label}
                    </span>
                  </div>
                  <p className="font-medium text-text-primary text-sm">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Focus Areas */}
            <div>
              <h3 className="font-display text-lg font-semibold mb-3 text-text-primary">
                Focus Areas
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'Production ML Systems',
                  'LLM & RAG Pipelines',
                  'Multi-Agent Systems',
                  'Deep Learning',
                  'Computer Vision',
                  'NLP',
                  'MLOps & Infrastructure',
                  'Reinforcement Learning',
                ].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1.5 bg-primary/10 text-primary text-sm rounded-lg border border-primary/20"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
