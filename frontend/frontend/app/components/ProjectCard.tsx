import React from 'react'

export type strapiProject={
  id:string;
  documentId?:string;
  title:string;
  description:string;
  tech: string[];
  url:string;
  img: {
    url:string;
  };
}

export type project={
  id:string;
  documentId?:string;
  title:string;
  description:string;
  tech: string[];
  url:string;
  img: string;
}

function ProjectCard({p}:{p:project}) {
  return (
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
            <span key={t} className="bg-main-bg px-2 py-1 rounded-sm text-xs">{t}</span>
          ))}
        </div>
      </div>
    </a>
  )
}

export default ProjectCard
