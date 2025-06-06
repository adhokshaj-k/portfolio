import Link from 'next/link'
import { getLatestBlogPosts } from '@/lib/blog'
import { getLatestProjects } from '@/lib/projects'
import Image from 'next/image'

interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  github: string;
  live: string;
  technologies: string[];
}

export default async function Home() {
  const latestPosts = await getLatestBlogPosts(3)
  const latestProjects = await getLatestProjects(3)

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center pt-2">
          <div className="absolute inset-0 bg-[url('/space-bg.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          <div className="relative z-10 text-center hero-content">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white hero-title">
              Hi, I'm <span className="text-blue-400">Adhokshaj Kulkarni</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed hero-description">
              I'm a cybersecurity student and passionate CTF player who loves hacking machines and building cool applications. When I'm not coding, I'm usually exploring emerging technologies or writing about the latest in tech and cybersecurity.
            </p>
            <div className="flex justify-center gap-4 social-links">
              <a href="https://github.com/adhokshaj-k" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors bg-white/10 p-3 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:bg-white/20 social-link">
                <Image src="/images/github-icon.png" alt="GitHub" width={24} height={24} className="social-icon" />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/adhokshaj-kulkarni/" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors bg-white/10 p-3 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:bg-white/20 social-link">
                <Image src="/images/linkedin-icon.png" alt="LinkedIn" width={24} height={24} className="social-icon" />
                LinkedIn
              </a>
              <a href="https://x.com/bratt_07" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors bg-white/10 p-3 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:bg-white/20 social-link">
                <Image src="/images/twitter-icon.png" alt="Twitter" width={24} height={24} className="social-icon" />
                Twitter
              </a>
              <a href="mailto:adhokshajk05@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors bg-white/10 p-3 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:bg-white/20 social-link">
                <Image src="/images/email-icon.png" alt="Email" width={24} height={24} className="social-icon" />
                Email
              </a>
            </div>
          </div>
        </section>

        {/* Latest Updates Section */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-white text-center">Latest Updates</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Blog Posts - 50% width */}
              <div className="lg:border-r lg:border-gray-700 lg:pr-8">
                <h3 className="text-xl font-semibold mb-6 text-white">Recent Writeups</h3>
                <ul className="space-y-4">
                  {latestPosts.map((post) => (
                    <li key={post.slug} className="flex items-start gap-4">
                      <time dateTime={post.date} className="text-gray-400 whitespace-nowrap">
                        {post.date}
                      </time>
                      <Link href={`/blog/${post.slug}`} className="text-gray-300 hover:text-white transition-colors">
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link
                    href="/blog"
                    className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center"
                  >
                    View all writeups
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Latest Project - 50% width */}
              <div className="lg:pl-8">
                <h3 className="text-xl font-semibold mb-6 text-white">Latest Project</h3>
                <div className="bg-gray-900 rounded-lg overflow-hidden max-w-lg mx-auto">
                  <div className="relative h-48">
                    <Image
                      src={latestProjects[0].image}
                      alt={latestProjects[0].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2 text-white">{latestProjects[0].title}</h4>
                    <p className="text-gray-300 mb-4 text-sm">{latestProjects[0].description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {latestProjects[0].technologies.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={latestProjects[0].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        View Source
                      </a>
                      <a
                        href={latestProjects[0].live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-white">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 skills-grid">
            {[
              { name: 'JavaScript', description: 'Web Development', icon: '/images/skills/javascript.png' },
              { name: 'TypeScript', description: 'Type Safety', icon: '/images/skills/typescript.png' },
              { name: 'React', description: 'UI Library', icon: '/images/skills/react.png' },
              { name: 'Node.js', description: 'Backend Runtime', icon: '/images/skills/nodejs.png' },
              { name: 'Python', description: 'General Purpose', icon: '/images/skills/python.png' }
              
            ].map((skill) => (
              <div key={skill.name} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)] skill-card">
                <div className="flex items-start gap-4">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={32}
                    height={32}
                    className="rounded-lg skill-icon"
                  />
                  <div>
                    <h3 className="text-white font-medium skill-name">{skill.name}</h3>
                    <p className="text-sm text-gray-400 skill-description">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="text-center py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold mb-12 text-white">Get in Touch</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="text-left">
                <h3 className="text-2xl font-semibold mb-6 text-white">Let's Connect</h3>
                <p className="text-gray-300 mb-8">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                      <Image src="/images/resume-icon.png" alt="Resume" width={24} height={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Resume</h4>
                      <a href="/resume.pdf" className="text-gray-300 hover:text-white transition-colors">
                        Download Resume
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                      <Image src="/images/email-icon.png" alt="Email" width={24} height={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Email</h4>
                      <a href="mailto:adhokshajk05@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                        adhokshajk05@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                      <Image src="/images/linkedin-icon.png" alt="LinkedIn" width={24} height={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">LinkedIn</h4>
                      <a href="https://linkedin.com/in/adhokshaj-kulkarni/" className="text-gray-300 hover:text-white transition-colors">
                        linkedin.com/in/adhokshaj-kulkarni
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                      <Image src="/images/github-icon.png" alt="GitHub" width={24} height={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">GitHub</h4>
                      <a href="https://github.com/adhokshaj-k" className="text-gray-300 hover:text-white transition-colors">
                        github.com/adhokshaj-k
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
                      <Image src="/images/twitter-icon.png" alt="Twitter" width={24} height={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Twitter</h4>
                      <a href="https://twitter.com/bratt_07" className="text-gray-300 hover:text-white transition-colors">
                        twitter.com/bratt_07
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feedback Form */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur-lg opacity-20"></div>
                <div className="relative bg-[#1a1a1a] p-8 rounded-lg border border-gray-700">
                  <h3 className="text-2xl font-semibold mb-6 text-white text-center">Feedback</h3>
                  <form className="space-y-6">
                    <div>
                      <textarea
                        id="feedback"
                        name="feedback"
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Share your thoughts..."
                        required
                      ></textarea>
                    </div>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        Send Feedback
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 