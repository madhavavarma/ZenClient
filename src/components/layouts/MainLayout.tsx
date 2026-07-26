import { Outlet } from "react-router-dom"
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

export default function MainLayout() {
    return (
        <>
            <Navbar />

            <main className="flex flex-col items-center justify-between p-24">
                <Outlet />
            </main>

            <Footer />
        </>
    )
}