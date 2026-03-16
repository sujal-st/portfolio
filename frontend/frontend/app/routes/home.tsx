import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sujal Sthapit" },
    { name: "description", content: "Portfolio" },
  ];
}

export default function Home() {
  return <>Home</>;
}
