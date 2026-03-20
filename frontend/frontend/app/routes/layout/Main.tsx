import Navbar from "~/components/Navbar"
import { Outlet } from "react-router"
import Footer from "~/components/Footer"
import { useState, useEffect, useContext } from "react"
import Particles from "~/components/Particles"
import { ThemeContext } from "~/contexts/themeContext"

export function useServerWakeup() {
    const [isWaking, setIsWaking] = useState(true);

    useEffect(() => {
        const ping = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_URL}/api/projects?populate=*`);
                if (res.ok) setIsWaking(false);
                else setTimeout(ping, 3000);
            }
            catch {
                setTimeout(ping, 3000);
            }
        };
        ping();
    }, []);
    return { isWaking };
}

function MainLayout() {
    const {portTheme} = useContext(ThemeContext);
    return (
        <div className="min-h-screen min-w-screen relative">
            {/* <LightRays className="absolute!" raysOrigin="top-left" raysSpeed={1} raysColor={theme==="dark"?"#904EE9":"#101828"} lightSpread={1}/> */}
            <Particles className="absolute! pointer-events-none" particleCount={10000} alphaParticles={true} particleColors={portTheme==="dark"?["#904EE9"]:["#101828"]}/>
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout
