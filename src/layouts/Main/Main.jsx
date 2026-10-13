import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Main.css";

const Main = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { pathname, hash } = useLocation();

    // Sayfa değişince en üste, #bölüm bağlantısında ilgili bölüme kaydır.
    useEffect(() => {
        const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
        if (target) target.scrollIntoView();
        else window.scrollTo(0, 0);
    }, [pathname, hash]);

    useEffect(() => {
        if (!isMenuOpen) return;
        const closeOnEscape = event => event.key === "Escape" && setIsMenuOpen(false);
        document.addEventListener("keydown", closeOnEscape);
        return () => document.removeEventListener("keydown", closeOnEscape);
    }, [isMenuOpen]);

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <div className="app">
            <Header
                isMenuOpen={isMenuOpen}
                onMenuToggle={() => setIsMenuOpen(open => !open)}
            />
            <div className="app__body">
                <Sidebar isOpen={isMenuOpen} onNavigate={closeMenu} />
                <div
                    className="app__backdrop"
                    data-visible={isMenuOpen}
                    onClick={closeMenu}
                    aria-hidden="true"
                />
                <main className="app__main" id="content">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Main;
