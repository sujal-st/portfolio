import Navbar from "~/components/Navbar"
import { Outlet } from "react-router"
import Footer from "~/components/Footer"

function MainLayout() {
    return (
        <div className="min-h-screen">
            <Navbar/>
            <main className="flex-1">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}

export default MainLayout
