import { 
  GraduationCap, 
  Briefcase, 
  FlaskConical, 
  Award,
  Brain,
  Bot
} from 'lucide-react'

interface TimelineItem {
  year: string
  type: string
  title: string
  organization?: string
  description: string
  icon: React.ReactNode
  highlights?: string[]
}

const timelineItems: TimelineItem[] = [
  {
    year: '2024-Present',
    type: 'Research',
    title: 'Mammography AI Research',
    organization: "Gene Ameen's Lab, UIC",
    description: 'Developing deep learning models for breast cancer risk prediction using multi-view mammography with self-attention mechanisms.',
    icon: <Brain className="w-5 h-5" />,
    highlights: ['PyTorch', 'RAD-DINO', 'Medical Imaging'],
  },
  {
    year: '2024',
    type: 'Research',
    title: 'Social Robotics & HRI',
    organization: 'CS 531, UIC',
    description: 'Built tour guide robot using Misty II with speech recognition, navigation, and conversational AI capabilities.',
    icon: <Bot className="w-5 h-5" />,
    highlights: ['Robotics', 'NLP', 'Navigation'],
  },
  {
    year: '2023-2024',
    type: 'Education',
    title: 'Graduate Studies',
    organization: 'University of Illinois Chicago',
    description: 'Advanced coursework in machine learning, computer vision, social robotics, and human-robot interaction.',
    icon: <GraduationCap className="w-5 h-5" />,
    highlights: ['ML', 'Computer Vision', 'HRI'],
  },
  {
    year: '2023',
    type: 'Research',
    title: 'Few-Shot Medical Imaging',
    organization: 'CS 512, UIC',
    description: 'Implemented transfer learning and prototypical networks for medical abnormality detection with limited training data.',
    icon: <FlaskConical className="w-5 h-5" />,
    highlights: ['Meta-Learning', 'CheXpert', 'Transfer Learning'],
  },
  {
    year: '2020-2023',
    type: 'Industry',
    title: 'Senior Data Scientist',
    organization: '247.ai',
    description: 'Built anomaly detection systems, routing algorithms, and production ML systems at scale using Docker, Kubernetes, React, and TypeScript.',
    icon: <Briefcase className="w-5 h-5" />,
    highlights: ['Production ML', 'Docker', 'Kubernetes'],
  },
  {
    year: '2022',
    type: 'Research',
    title: 'Reinforcement Learning Agent',
    description: 'Developed hybrid architecture combining rule-based logic with Deep Recurrent Q-Networks for Wumpus World navigation.',
    icon: <Award className="w-5 h-5" />,
    highlights: ['DRQN', 'Hybrid AI', 'PyTorch'],
  },
]

export default function Journey() {
  return (
    <section id="journey" className="py-24 bg-surface/50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Key milestones in my research and professional development
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 transform md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div
                key={`${item.year}-${item.title}`}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 border-4 border-background z-10" />

                {/* Content card */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="p-6 bg-surface border border-border rounded-xl hover:border-primary/30 transition-all group">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors shrink-0">
                        {item.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="text-xs font-mono text-primary">{item.year}</span>
                          <span className="text-xs px-2 py-0.5 bg-surface-light text-text-muted rounded-full">
                            {item.type}
                          </span>
                        </div>
                        <h3 className="font-display text-lg font-semibold text-text-primary">
                          {item.title}
                        </h3>
                        {item.organization && (
                          <p className="text-sm text-text-secondary">{item.organization}</p>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    {item.highlights && (
                      <div className="flex flex-wrap gap-2">
                        {item.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="px-2 py-1 bg-surface-light text-text-muted text-xs rounded-md border border-border"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}
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
