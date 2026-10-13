import { Link } from "react-router";
import { LuArrowLeft } from "react-icons/lu";
import "./NotFound.css";

const NotFound = () => {
    return (
        <div className="not-found">
            <title>Sayfa bulunamadı · Atatürk Üniversitesi Yazılım Mühendisliği</title>
            <p className="not-found__code">404</p>
            <h1>Aradığınız sayfa bulunamadı</h1>
            <p className="not-found__text">Bağlantı hatalı olabilir ya da sayfa taşınmış olabilir. Konulara yan menüden veya ana sayfadan ulaşabilirsiniz.</p>
            <Link to="/" className="button">
                <LuArrowLeft aria-hidden="true" />
                Ana sayfaya dön
            </Link>
        </div>
    );
};

export default NotFound;
