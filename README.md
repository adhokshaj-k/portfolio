# Personal Portfolio Website

A modern portfolio website built with Next.js and Tailwind CSS.

## Features

- Responsive design with dark mode support
- Blog system with Markdown support
- Projects showcase
- Contact form
- SEO optimized

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- MDX for blog posts
- Gray Matter for frontmatter parsing

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create the required directories:
```bash
mkdir -p content/blog content/projects public/images
```

4. Add some sample blog posts in `content/blog`:
```markdown
---
title: My First Blog Post
date: '2024-02-20'
description: This is my first blog post
tags: ['web development', 'next.js']
---

Your blog post content here...
```

5. Add some sample projects in `content/projects`:
```markdown
---
title: Project Name
description: Project description
image: /images/project.jpg
github: https://github.com/username/project
live: https://project-demo.com
technologies: ['React', 'Node.js', 'MongoDB']
---
```

6. Run the development server:
```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── blog/           # Blog pages
│   ├── projects/       # Projects page
│   ├── contact/        # Contact page
│   └── page.tsx        # Home page
├── components/         # React components
├── content/           # Content files
│   ├── blog/         # Blog posts (MDX)
│   └── projects/     # Project data (MDX)
├── lib/              # Utility functions
├── public/           # Static files
│   └── images/      # Image assets
└── styles/          # Global styles
```

## Deployment

The site can be easily deployed to Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy!

## License

MIT 