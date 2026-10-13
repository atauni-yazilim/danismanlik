import { useEffect, useState } from "react";

const STORAGE_KEY = "selected-theme";
const darkQuery = "(prefers-color-scheme: dark)";

const readStoredTheme = () => {
    try {
        const theme = localStorage.getItem(STORAGE_KEY);
        return theme === "light" || theme === "dark" ? theme : null;
    } catch {
        return null;
    }
};

// İlk değer index.html'deki betiğin <html> üzerine yazdığı temadan okunur.
const getInitialTheme = () =>
    document.documentElement.dataset.theme === "dark" ? "dark" : "light";

const useTheme = () => {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    // Kullanıcı elle bir tema seçmediyse işletim sisteminin temasını takip et.
    useEffect(() => {
        const media = window.matchMedia(darkQuery);
        const handleChange = event => {
            if (!readStoredTheme()) setTheme(event.matches ? "dark" : "light");
        };

        media.addEventListener("change", handleChange);
        return () => media.removeEventListener("change", handleChange);
    }, []);

    const toggleTheme = () => {
        const next = theme === "dark" ? "light" : "dark";
        try {
            localStorage.setItem(STORAGE_KEY, next);
        } catch {
            // Gizli pencere vb. durumlarda tercih kaydedilemez; tema yine de değişir.
        }
        setTheme(next);
    };

    return { theme, toggleTheme };
};

export default useTheme;
