import { Outlet } from "react-router-dom"
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

export default function MainLayout() {
    return (
        <div className="app-shell">
            <a href="#main-content" className="skip-link">Skip to content</a>
            <Navbar />

            <main id="main-content" tabIndex={-1} className="flex flex-col flex-1 items-stretch w-full px-4 sm:px-6 lg:px-0 pt-50 sm:pt-24 lg:pt-0">
                <Outlet />
            </main>

            <Footer />
        </div>
    )
}