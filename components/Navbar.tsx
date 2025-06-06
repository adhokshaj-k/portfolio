'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/') {
      e.preventDefault()
      const contactSection = document.getElementById('contact')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 nav-container">
        <div className="flex justify-center items-center h-16">
          <div className="flex gap-8 nav-links">
            <Link
              href="/"
              className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 nav-link ${
                pathname === '/'
                  ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.5)]'
                  : 'text-gray-300 hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]'
              }`}
            >
              Home
            </Link>
            <Link
              href="/blog"
              className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 nav-link ${
                pathname === '/blog'
                  ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.5)]'
                  : 'text-gray-300 hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]'
              }`}
            >
              Blog
            </Link>
            <Link
              href="/projects"
              className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 nav-link ${
                pathname === '/projects'
                  ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.5)]'
                  : 'text-gray-300 hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]'
              }`}
            >
              Projects
            </Link>
            <Link
              href="/#contact"
              onClick={handleContactClick}
              className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 nav-link ${
                pathname === '/contact'
                  ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.5)]'
                  : 'text-gray-300 hover:bg-white hover:text-black hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]'
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 