import HeroSection from "~/components/HeroSection";
import ProjectSection from "~/components/ProjectSection";
import type { Route } from "./+types/home";
import ContactSection from "~/components/ContactSection";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sujal Sthapit" },
    { name: "description", content: "Portfolio" },
  ];
}

export default function Home() {
  return <>
    <HeroSection/>
    <ProjectSection/>
    <ContactSection/>
  </>;
}
