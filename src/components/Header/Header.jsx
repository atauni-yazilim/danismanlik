import { Link } from "react-router";
import { LuMenu, LuMoon, LuSun, LuX } from "react-icons/lu";
import useTheme from "../../hooks/useTheme";
import "./Header.css";

const Header = ({ isMenuOpen, onMenuToggle }) => {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";

    return (
        <header className="header">
            <div className="header__inner">
                <button
                    type="button"
                    className="icon-button header__menu-button"
                    onClick={onMenuToggle}
                    aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
                    aria-expanded={isMenuOpen}
                    aria-controls="sidebar"
                >
                    {isMenuOpen ? <LuX /> : <LuMenu />}
                </button>

                <Link to="/" className="header__brand">
                    <img src={`${import.meta.env.BASE_URL}favicon.ico`} alt="" className="header__logo" width="40" height="40" />
                    <span className="header__titles">
                        <span className="header__university">Atatürk Üniversitesi</span>
                        <span className="header__title">Yazılım Mühendisliği</span>
                    </span>
                </Link>

                <button
                    type="button"
                    className="icon-button"
                    onClick={toggleTheme}
                    aria-label={isDark ? "Açık temaya geç" : "Koyu temaya geç"}
                    title={isDark ? "Açık tema" : "Koyu tema"}
                >
                    {isDark ? <LuSun /> : <LuMoon />}
                </button>
            </div>
        </header>
    );
};

export default Header;
