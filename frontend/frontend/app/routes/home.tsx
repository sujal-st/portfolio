import HeroSection from "~/components/HeroSection";
import ProjectSection from "~/components/ProjectSection";
import type { Route } from "./+types/home";
import ContactSection from "~/components/ContactSection";
import TechStack from "~/components/TechStack";
import type { project, strapiProject } from "~/components/ProjectCard";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Sujal Sthapit" },
    { name: "description", content: "Portfolio" },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  let retries = 5;

  while (retries > 0) {

    try{

      const projectRes = await fetch(`${import.meta.env.VITE_API_URL}/api/projects?populate=*`);
      
      if (!projectRes) throw new Error("Failed to fetch projects")
        
        const projectJson = await projectRes.json();
        
        const projects: project[] = projectJson.data.map((d: strapiProject) => (
          {
            id: d.id,
            title: d.title,
            description: d.description,
            tech: d.tech.map((t: string) => t),
            url: d.url,
            img: d.img?.url ? `${d.img.url}` : '',
          }
        ));
        return { projects }
    }catch{
      retries--;
      await new Promise((res)=> setTimeout(res, 3000));
    }
  }
  throw new Error("Server failed to wake up in time.")
}

export default function Home({ loaderData }: Route.ComponentProps) {

  const { projects } = loaderData;
  return <>
    <HeroSection />
    <TechStack />
    <ProjectSection projects={projects} />
    <ContactSection />
  </>;
}
