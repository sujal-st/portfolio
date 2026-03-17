import { createContext, useState, useEffect,useContext } from "react";

export type Theme = "dark" | "light";

type ThemeContextType = {
    portTheme: Theme;
    toggleTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const PortThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [portTheme, setTheme] = useState<Theme>("dark");

    useEffect(() => {

        const root = window.document.documentElement;

        root.classList.toggle("light", portTheme === "light");
        root.classList.toggle("dark", portTheme === "dark");

        localStorage.setItem("theme", portTheme);
        
        console.log(JSON.stringify(localStorage.getItem("theme")))

    }, [portTheme]);



    const toggleTheme = (t:Theme) => {
        setTheme(t);
    }

    return (
        <ThemeContext.Provider value={{ portTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
export { ThemeContext, PortThemeProvider };