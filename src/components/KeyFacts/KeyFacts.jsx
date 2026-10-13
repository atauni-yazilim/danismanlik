import { Link } from "react-router";
import "./KeyFacts.css";

// Yönetmelikteki akılda tutulması gereken sayılar.
// `to` verilirse kart ilgili sayfaya / bölüme bağlantı olur.
const KeyFacts = ({ facts }) => {
    return (
        <ul className="key-facts">
            {facts.map(({ value, label, to }) => {
                const content = (
                    <>
                        <span className="key-facts__value">{value}</span>
                        <span className="key-facts__label">{label}</span>
                    </>
                );

                return (
                    <li key={label}>
                        {to ? (
                            <Link to={to} className="key-facts__item key-facts__item--link">{content}</Link>
                        ) : (
                            <div className="key-facts__item">{content}</div>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};

export default KeyFacts;
