import { Link } from "react-router";
import DocumentCard from "../DocumentCard/DocumentCard";
import KeyFacts from "../KeyFacts/KeyFacts";
import "./InfoPage.css";

/**
 * Bilgi sayfalarının ortak iskeleti.
 * sections: [{ id, title, content, className? }] — `id` içindekiler bağlantısı ve URL'deki #bölüm için kullanılır;
 *   `className` bölüme sayfaya özel stil vermek için isteğe bağlıdır.
 */
const InfoPage = ({ category, title, lead, document, facts, intro, sections }) => {
    const showToc = sections.length > 3;

    return (
        <article className="info-page">
            <title>{`${title} · Atatürk Üniversitesi Yazılım Mühendisliği`}</title>

            <header className="info-page__header">
                <nav className="info-page__breadcrumb" aria-label="Konum">
                    <Link to="/">Ana Sayfa</Link>
                    <span aria-hidden="true">/</span>
                    <span>{category}</span>
                </nav>
                <h1 className="info-page__title">{title}</h1>
                {lead && <p className="info-page__lead">{lead}</p>}
            </header>

            {document && <DocumentCard {...document} />}
            {facts && <KeyFacts facts={facts} />}
            {intro}

            {showToc && (
                <nav className="info-page__toc" aria-labelledby="toc-title">
                    <p className="info-page__toc-title" id="toc-title">Bu sayfada</p>
                    <ul>
                        {sections.map(section => (
                            <li key={section.id}>
                                <a href={`#${section.id}`}>{section.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}

            <div className="info-page__sections">
                {sections.map(section => (
                    <section className={`info-section ${section.className ?? ""}`} id={section.id} key={section.id}>
                        <h2 className="info-section__title">
                            <a href={`#${section.id}`}>{section.title}</a>
                        </h2>
                        <div className="prose">{section.content}</div>
                    </section>
                ))}
            </div>
        </article>
    );
};

export default InfoPage;
