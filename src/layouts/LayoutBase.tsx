import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function LayoutBase()
{
    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
        </div>
    );
}

