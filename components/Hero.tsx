'use client'

import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/15 rounded-full blur-[128px] animate-float animation-delay-300" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--text-muted) 1px, transparent 1px),
                           linear-gradient(90deg, var(--text-muted) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-mono text-sm tracking-wider opacity-0 animate-fade-in">
                Hello, I&apos;m
              </p>
              <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight opacity-0 animate-slide-up animation-delay-100">
                <span className="gradient-text">Rohit Nanjundareddy</span>
              </h1>
              <h2 className="font-display text-2xl md:text-3xl text-text-secondary font-medium opacity-0 animate-slide-up animation-delay-200">
                ML Researcher & Engineer
              </h2>
            </div>

            <p className="text-text-secondary text-lg leading-relaxed max-w-lg opacity-0 animate-slide-up animation-delay-300">
              Graduate Research Assistant at UIC building medical AI for breast cancer risk prediction from mammograms. Previously shipped production ML systems at 24/7.ai, from anomaly detection to recommendation workflows.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 opacity-0 animate-slide-up animation-delay-400">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-light text-white font-medium rounded-lg transition-all hover:shadow-lg hover:shadow-primary/25"
              >
                View Projects
              </Link>
              <Link
                href="/resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-primary/50 text-text-primary font-medium rounded-lg transition-all hover:bg-surface-light"
              >
                Download Resume
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 opacity-0 animate-slide-up animation-delay-500">
              <a
                href="https://github.com/rohitnanjundareddy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-surface hover:bg-surface-light border border-border hover:border-primary/30 text-text-secondary hover:text-primary transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/rohit-nanjundareddy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-surface hover:bg-surface-light border border-border hover:border-primary/30 text-text-secondary hover:text-primary transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:rnanj@uic.edu"
                className="p-3 rounded-lg bg-surface hover:bg-surface-light border border-border hover:border-primary/30 text-text-secondary hover:text-primary transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end opacity-0 animate-fade-in animation-delay-300">
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-2xl scale-110" />
              
              {/* Image container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden border-2 border-border glow-box">
                {/* Placeholder - replace with your actual image */}
                {/* <div className="w-full h-full bg-gradient-to-br from-surface to-surface-light flex items-center justify-center">
                  <span className="font-display text-8xl font-bold gradient-text">R</span>
                </div> */}
                { 
                <img
                  src="/profile.jpg"
                  alt="Rohit Nanjundareddy"
                  className="w-full h-auto rounded-2xl"
                />
                }
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-surface border border-border rounded-lg shadow-xl animate-float">
                <span className="text-sm font-medium">🎓 UIC</span>
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-surface border border-border rounded-lg shadow-xl animate-float animation-delay-200">
                <span className="text-sm font-medium">🧠 Medical AI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in animation-delay-500">
          <Link
            href="#projects"
            className="flex flex-col items-center gap-2 text-text-muted hover:text-text-secondary transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown size={20} className="animate-bounce" />
          </Link>
        </div>
      </div>
    </section>
  )
}
