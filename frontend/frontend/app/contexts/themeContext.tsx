import { createContext, useState, useEffect,useContext } from "react";

type Theme = "dark" | "light"

type ThemeContextType = {
    portTheme: Theme;
    toggleTheme: (t:Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const PortThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [portTheme, setTheme] = useState<Theme>(
        ()=>(typeof window!=="undefined"
            ? localStorage.getItem("theme") ?? "dark" 
            : "dark") as Theme
    );

    useEffect(()=>{
        document.documentElement.classList.toggle("light", portTheme==="light");
        document.documentElement.classList.toggle("dark", portTheme==="dark");
        localStorage.setItem("theme",portTheme);
    },[portTheme])

    const toggleTheme=(t:Theme)=>{
        setTheme(t);
    }

    return (
        <ThemeContext.Provider value={{ portTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
export { ThemeContext, PortThemeProvider };