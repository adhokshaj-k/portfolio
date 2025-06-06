import Link from 'next/link'
import { getBlogPosts, type BlogPost } from '@/lib/blog'

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <div className="container mx-auto px-4 pt-16 md:pt-32 pb-8 md:pb-12">
      <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-12 text-white text-center">Writeups</h1>
      <div className="max-w-[280px] md:max-w-2xl mx-auto">
        <h2 className="text-xl md:text-3xl font-semibold mb-4 md:mb-8 text-white text-center">2025</h2>
        <ul className="space-y-4 md:space-y-6">
          {posts.map((post: BlogPost) => (
            <li key={post.slug} className="flex items-start gap-3 md:gap-4 justify-center">
              <time dateTime={post.date} className="text-gray-400 whitespace-nowrap text-sm md:text-lg">
                {post.date}
              </time>
              <Link href={`/blog/${post.slug}`} className="text-gray-300 hover:text-white transition-colors text-sm md:text-lg">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
} 