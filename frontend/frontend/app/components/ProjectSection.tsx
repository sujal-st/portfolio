

function ProjectSection() {

  const projects = [
    {
      title: 'Vektor',
      description: 'A responsive ecommerce website',
      tech: ['React', 'Python', "MongoDB", 'Tailwind CSS', 'Framer Motion'],
      img: '/images/vektor.png',
      url: 'https://vektor-delta.vercel.app/',
    },
    {
      title: 'ShopCart UI',
      description: 'An e-commerce product listing page with real-time search filtering, category tabs, add-to-cart functionality, and an animated slide-out cart drawer.',
      tech: ['Next.js', 'TypeScript', 'Zustand'],
      img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop',
      url: 'https://github.com/example/shopcart-ui',
    },
    {
      title: 'TaskFlow',
      description: 'A Kanban-style task management board with drag-and-drop columns, priority badges, due-date indicators, and local storage persistence.',
      tech: ['React', 'DnD Kit', 'CSS Modules'],
      img: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&auto=format&fit=crop',
      url: 'https://github.com/example/taskflow',
    },
    {
      title: 'TaskFlow',
      description: 'A Kanban-style task management board with drag-and-drop columns, priority badges, due-date indicators, and local storage persistence.',
      tech: ['React', 'DnD Kit', 'CSS Modules'],
      img: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&auto=format&fit=crop',
      url: 'https://github.com/example/taskflow',
    },
    {
      title: 'TaskFlow',
      description: 'A Kanban-style task management board with drag-and-drop columns, priority badges, due-date indicators, and local storage persistence.',
      tech: ['React', 'DnD Kit', 'CSS Modules'],
      img: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&auto=format&fit=crop',
      url: 'https://github.com/example/taskflow',
    },
    {
      title: 'TaskFlow',
      description: 'A Kanban-style task management board with drag-and-drop columns, priority badges, due-date indicators, and local storage persistence.',
      tech: ['React', 'DnD Kit', 'CSS Modules'],
      img: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&auto=format&fit=crop',
      url: 'https://github.com/example/taskflow',
    },

  ]

  return (
    <section id="projects" className='max-w-5xl mx-auto mt-30'>
      <h2 className='text-5xl text-primary text-center font-semibold mb-11'>Projects</h2>
      <div className="px-8 md:px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <a href={p.url} target="_blank" key={p.title} className="bg-nav-main-bg overflow-clip rounded-lg flex flex-col
              hover:scale-[1.02] hover:shadow-lg transition-all duration-200">
            <div className="h-48 w-full shrink-0 overflow-hidden">
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="px-5 py-4 flex flex-col gap-3">
              <h3 className="font-semibold text-primary text-xl">{p.title}</h3>
              <p className="text-ternary line-clamp-2">{p.description}</p>
              <div className="flex flex-wrap gap-2 flex-1">
                {p.tech.map((t) => (
                  <span className="bg-main-bg px-2 py-1 rounded-sm text-xs">{t}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default ProjectSection
