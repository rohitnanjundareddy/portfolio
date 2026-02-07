'use client'

import { useState } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (response.ok) {
        setStatus('sent')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-gray-400">
            Feel free to reach out for collaborations or just a chat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                <p className="text-sm text-gray-400">Email</p>
                <a href="mailto:rnanj@uic.com" className="text-white hover:text-indigo-400">
                  rnanj@uic.edu
                </a>
              </div>
              
              <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                <p className="text-sm text-gray-400">GitHub</p>
                <a href="https://github.com/rohitnanjundareddy" className="text-white hover:text-indigo-400">
                  github.com/rohitnanjundareddy
                </a>
              </div>
              
              <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                <p className="text-sm text-gray-400">LinkedIn</p>
                <a href="https://www.linkedin.com/in/rohit-nanjundareddy/" className="text-white hover:text-indigo-400">
                  linkedin.com/in/rohit-nanjundareddy
                </a>
              </div>
              
              <div className="p-4 bg-gray-800 rounded-lg border border-gray-700">
                <p className="text-sm text-gray-400">Location</p>
                <p className="text-white">Chicago, IL</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-6 bg-gray-800 rounded-xl border border-gray-700">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>

            {status === 'sent' ? (
              <div className="text-center py-8">
                <div className="text-green-400 text-5xl mb-4">✓</div>
                <h4 className="text-xl font-semibold mb-2">Message Sent!</h4>
                <p className="text-gray-400 mb-4">I will get back to you soon.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-indigo-400 hover:text-indigo-300"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-indigo-500"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-indigo-500 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {status === 'error' && (
                  <div className="p-3 bg-red-900/50 border border-red-500 rounded-lg text-red-300 text-sm">
                    Failed to send message. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
