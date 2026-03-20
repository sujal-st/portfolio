import Navbar from "~/components/Navbar"
import { Outlet } from "react-router"
import Footer from "~/components/Footer"
import { useState, useEffect, useContext } from "react"

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
    return (
        <div className="min-h-screen">
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout
