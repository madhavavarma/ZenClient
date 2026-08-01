import { Outlet } from "react-router-dom"
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

export default function MainLayout() {
    return (
        <div className="app-shell">
            <a href="#main-content" className="skip-link">Skip to content</a>
            <Navbar />

            <main id="main-content" tabIndex={-1} className="flex flex-col flex-1 items-center justify-between pt-[160px] md:pt-24 px-6">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}