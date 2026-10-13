import { NavLink } from "react-router";
import { LuExternalLink, LuHouse } from "react-icons/lu";
import { externalLinks, navGroups } from "../../data/navigation";
import "./Sidebar.css";

const Sidebar = ({ isOpen, onNavigate }) => {
    return (
        <aside className="sidebar" id="sidebar" data-open={isOpen} aria-label="Konular">
            <nav className="sidebar__nav">
                <NavLink to="/" end className="sidebar__link" onClick={onNavigate}>
                    <LuHouse aria-hidden="true" />
                    <span>Ana Sayfa</span>
                </NavLink>

                {navGroups.map(group => (
                    <div className="sidebar__group" key={group.title}>
                        <p className="sidebar__group-title">{group.title}</p>
                        <ul>
                            {group.items.map(({ path, label, icon: Icon }) => (
                                <li key={path}>
                                    <NavLink to={path} className="sidebar__link" onClick={onNavigate}>
                                        <Icon aria-hidden="true" />
                                        <span>{label}</span>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

                <div className="sidebar__group">
                    <p className="sidebar__group-title">Bağlantılar</p>
                    <ul>
                        {externalLinks.map(({ href, label }) => (
                            <li key={href}>
                                <a href={href} target="_blank" rel="noopener noreferrer" className="sidebar__link">
                                    <LuExternalLink aria-hidden="true" />
                                    <span>{label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;
