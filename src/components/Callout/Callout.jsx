import { LuInfo, LuTriangleAlert } from "react-icons/lu";
import "./Callout.css";

const icons = {
    info: LuInfo,
    warning: LuTriangleAlert,
};

const Callout = ({ tone = "info", title, children }) => {
    const Icon = icons[tone];

    return (
        <div className={`callout callout--${tone}`}>
            <Icon className="callout__icon" aria-hidden="true" />
            <div className="callout__body">
                {title && <p className="callout__title">{title}</p>}
                <div className="prose">{children}</div>
            </div>
        </div>
    );
};

export default Callout;
