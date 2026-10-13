import { LuDownload, LuExternalLink, LuFileText } from "react-icons/lu";
import "./DocumentCard.css";

// Resmi PDF metni: tarayıcıda açma ve tek tıkla indirme.
const DocumentCard = ({ file, name, fileName }) => {
    return (
        <div className="document-card">
            <span className="document-card__icon" aria-hidden="true">
                <LuFileText />
            </span>
            <div className="document-card__body">
                <p className="document-card__label">Resmi metin · PDF</p>
                <p className="document-card__name">{name}</p>
            </div>
            <div className="document-card__actions">
                <a className="button button--ghost" href={file} target="_blank" rel="noopener noreferrer">
                    <LuExternalLink aria-hidden="true" />
                    Görüntüle
                </a>
                <a className="button" href={file} download={`${fileName}.pdf`}>
                    <LuDownload aria-hidden="true" />
                    İndir
                </a>
            </div>
        </div>
    );
};

export default DocumentCard;
