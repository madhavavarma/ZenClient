import { Outlet } from "react-router-dom"
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

export default function MainLayout() {
    return (
        <>
            <Navbar />

            <main className="flex flex-col flex-1 items-center justify-between pt-[240px] md:pt-24 px-6">
                <Outlet />
            </main>

            <Footer />
        </>
    )
}