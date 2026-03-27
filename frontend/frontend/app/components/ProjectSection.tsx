import ProjectCard from "./ProjectCard"
import type { project, strapiProject } from "./ProjectCard"

function ProjectSection({projects}:{projects:project[]}) {
  
  return (
    <section id="projects" className='max-w-5xl mx-auto mt-30'>
      <h2 className='text-5xl text-primary text-center font-semibold mb-11'>Projects</h2>
      <div className="px-8 mx-auto md:px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(auto-fit,350px)] justify-center gap-8">
        {projects.map((p:project) => (
          <ProjectCard key={p.id} p={p}/>
        ))}
      </div>
    </section>
  )
}

export default ProjectSection
