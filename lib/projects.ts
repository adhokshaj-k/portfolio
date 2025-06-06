import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const projectsDirectory = path.join(process.cwd(), 'content/projects')

export type Project = {
  slug: string
  title: string
  description: string
  image: string
  github: string
  live: string
  technologies: string[]
}

export function getProjectSlugs() {
  return fs.readdirSync(projectsDirectory)
}

export function getProjectBySlug(slug: string): Project {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = path.join(projectsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data } = matter(fileContents)

  return {
    slug: realSlug,
    title: data.title,
    description: data.description,
    image: data.image,
    github: data.github,
    live: data.live,
    technologies: data.technologies,
  }
}

export function getAllProjects() {
  const slugs = getProjectSlugs()
  const projects = slugs.map((slug) => getProjectBySlug(slug))
  return projects
}

export function getLatestProjects(count: number) {
  const projects = getAllProjects()
  return projects.slice(0, count)
} 