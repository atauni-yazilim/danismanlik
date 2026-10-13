import { Link } from "react-router";
import { LuArrowRight, LuExternalLink } from "react-icons/lu";
import KeyFacts from "../../components/KeyFacts/KeyFacts";
import { externalLinks, navGroups } from "../../data/navigation";
import "./Home.css";

const facts = [
    { value: "2.00", label: "Başarı baraj notu (AGNO)", to: "/egitim-ogretim-yonetmeligi#basarisizlik-durumu" },
    { value: "2.50", label: "Üst yarıyıldan ders almak için AGNO (tekrar dersi olmamalı)", to: "/egitim-ogretim-yonetmeligi#ders-alma-ve-birakma" },
    { value: "40 / 45", label: "Yarıyıllık en fazla AKTS (AGNO ≥ 2.50 ise 45)", to: "/egitim-ogretim-yonetmeligi#ders-alma-ve-birakma" },
    { value: "%80", label: "Derslere devam zorunluluğu", to: "/egitim-ogretim-yonetmeligi#devam-zorunlulugu" },
    { value: "İlk 2 hafta", label: "Danışman onayıyla ders bırakma süresi", to: "/egitim-ogretim-yonetmeligi#ders-alma-ve-birakma" },
    { value: "20 AKTS", label: "Yaz okulunda en fazla", to: "/yaz-okulu#ders-kaydi" },
    { value: "2.80", label: "Çift anadal başvurusu için AGNO", to: "/cift-anadal#basvuru-sartlari" },
    { value: "2.50", label: "Yandal başvurusu için AGNO", to: "/yandal#basvuru-sartlari" },
];

const Home = () => {
    return (
        <div className="home">
            <title>Atatürk Üniversitesi Yazılım Mühendisliği · Öğrenci Rehberi</title>

            <section className="home__hero">
                <p className="home__eyebrow">Atatürk Üniversitesi · Yazılım Mühendisliği</p>
                <h1 className="home__title">Öğrenci Rehberi</h1>
                <p className="home__lead">
                    Ders kaydı, sınavlar, yaz okulu, çift anadal ve yandal gibi konularda en sık sorulan
                    soruların cevapları yönetmeliklerden derlenerek bu sayfada toplandı. Her konunun altında
                    resmi metnin PDF'i de bulunuyor.
                </p>
                <div className="home__actions">
                    <Link to="/egitim-ogretim-yonetmeligi" className="button">
                        Eğitim-Öğretim Yönetmeliği
                        <LuArrowRight aria-hidden="true" />
                    </Link>
                    <Link to="/obs-ders-alma" className="button button--ghost">
                        ÖBS’de nasıl ders seçerim?
                    </Link>
                </div>
            </section>

            <section className="home__section" aria-labelledby="facts-title">
                <h2 className="home__section-title" id="facts-title">Sık sorulan sınırlar</h2>
                <KeyFacts facts={facts} />
            </section>

            {navGroups.map(group => (
                <section className="home__section" key={group.title} aria-labelledby={`group-${group.title}`}>
                    <h2 className="home__section-title" id={`group-${group.title}`}>{group.title}</h2>
                    <ul className="topic-grid">
                        {group.items.map(({ path, label, description, icon: Icon }) => (
                            <li key={path}>
                                <Link to={path} className="topic-card">
                                    <span className="topic-card__icon" aria-hidden="true"><Icon /></span>
                                    <span className="topic-card__title">{label}</span>
                                    <span className="topic-card__description">{description}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}

            <section className="home__section" aria-labelledby="links-title">
                <h2 className="home__section-title" id="links-title">Faydalı bağlantılar</h2>
                <ul className="topic-grid">
                    {externalLinks.map(({ href, label, description }) => (
                        <li key={href}>
                            <a href={href} target="_blank" rel="noopener noreferrer" className="topic-card">
                                <span className="topic-card__icon" aria-hidden="true"><LuExternalLink /></span>
                                <span className="topic-card__title">{label}</span>
                                <span className="topic-card__description">{description}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default Home;
