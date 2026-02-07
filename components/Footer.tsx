import { Github, Linkedin, Mail, Heart } from 'lucide-react'
import Link from 'next/link'

const socialLinks = [
  {
    icon: <Github size={18} />,
    href: 'https://github.com/yourusername',
    label: 'GitHub',
  },
  {
    icon: <Linkedin size={18} />,
    href: 'https://linkedin.com/in/yourusername',
    label: 'LinkedIn',
  },
  {
    icon: <Mail size={18} />,
    href: 'mailto:your@email.com',
    label: 'Email',
  },
]

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#journey', label: 'Journey' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <Link
              href="/"
              className="font-display text-2xl font-bold tracking-tight inline-block mb-2"
            >
              <span className="gradient-text">RO</span>
            </Link>
            <p className="text-text-secondary text-sm">
              ML Researcher & Engineer
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-text-muted hover:text-text-primary transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-text-muted hover:text-primary hover:bg-surface-light transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted">
          <p>
            © {currentYear} Ro. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500" /> using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
