import { useContext, useEffect } from "react";
import { ThemeContext } from "~/contexts/themeContext";
import HeroSection from "~/components/HeroSection";
import type { Route } from "./+types/home";
import type { Theme } from "~/contexts/themeContext";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Sujal Sthapit" },
    { name: "description", content: "Portfolio" },
  ];
}

export default function Home() {
  const context = useContext(ThemeContext);
  if(!context) throw new Error("Outside the provider");
  const {toggleTheme}= context;

  useEffect(() => {
    const theme= (localStorage.getItem("theme") ?? "dark") as Theme;
    toggleTheme(theme);
  }, [])
  return <>
    <HeroSection/>
  </>;
}
