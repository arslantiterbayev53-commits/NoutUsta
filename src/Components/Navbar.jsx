import { useState } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AdminLoginModal from "./AdminLoginModal";
import { useAuth } from "../Context/AuthContext";
import { useCategories } from "../Context/CategoriesContext";

const LANGS = ["uz", "ru", "en"];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [adminOpen, setAdminOpen] = useState(false);

    const { t, i18n } = useTranslation();
    const { isAdmin } = useAuth();
    const { categories } = useCategories();

    const currentLang = (i18n.language || "uz").slice(0, 2);

    const changeLang = (lng) => {
        i18n.changeLanguage(lng);
    };

    const closeMobileMenu = () => {
        setMenuOpen(false);
        setDropdownOpen(false);
    };

    const openAdmin = () => {
        closeMobileMenu();
        if (isAdmin) {
            window.location.assign("/admin");
        } else {
            setAdminOpen(true);
        }
    };

    return (
        <nav className="nav">

            {/* LOGO */}
            <Link to="/" className="logo" onClick={closeMobileMenu}>
                <div className="dot"></div>
                <h2>Noutusta</h2>
            </Link>

            {/* LINKS */}
            <div className={`links ${menuOpen ? "show" : ""}`}>

                <Link onClick={closeMobileMenu} to="/">{t("nav.home")}</Link>

                <Link onClick={closeMobileMenu} to="/xizmatlar">{t("nav.services")}</Link>

                {/* DROPDOWN */}
                <div className="dropdown">
                    <Link
                        to="/kategoriya"
                        className="drop-title"
                        onClick={(e) => {
                            if (window.innerWidth <= 900) {
                                e.preventDefault();
                                setDropdownOpen(!dropdownOpen);
                            } else {
                                closeMobileMenu();
                            }
                        }}
                    >
                        {t("nav.category")} ▾
                    </Link>

                    <div className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}>
                        {categories.map((cat) => {
                            const tr = cat.translations?.[currentLang] || cat.translations?.uz || {};
                            return (
                                <Link
                                    key={cat.slug}
                                    onClick={closeMobileMenu}
                                    to={`/categories/${cat.slug}`}
                                >
                                    {tr.title}
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <Link onClick={closeMobileMenu} to="/aloqa">{t("nav.contact")}</Link>

                {/* LANGS (mobile) */}
                <div className="langs mobile-only">
                    {LANGS.map((lng) => (
                        <button
                            key={lng}
                            onClick={() => changeLang(lng)}
                            className={currentLang === lng ? "active" : ""}
                        >
                            {lng.toUpperCase()}
                        </button>
                    ))}
                </div>

                {/* ADMIN BUTTON (mobile) */}
                <button
                    type="button"
                    className="admin-btn mobile-only"
                    onClick={openAdmin}
                >
                    <ShieldCheck size={14} />
                    {t("nav.admin")}
                </button>
            </div>

            {/* RIGHT SIDE (desktop) */}
            <div className="right-actions desktop-only">
                <div className="langs">
                    {LANGS.map((lng) => (
                        <button
                            key={lng}
                            onClick={() => changeLang(lng)}
                            className={currentLang === lng ? "active" : ""}
                        >
                            {lng.toUpperCase()}
                        </button>
                    ))}
                </div>

                <button
                    type="button"
                    className="admin-btn"
                    onClick={openAdmin}
                >
                    <ShieldCheck size={14} />
                    {t("nav.admin")}
                </button>
            </div>

            {/* BURGER */}
            <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X /> : <Menu />}
            </div>

            <AdminLoginModal open={adminOpen} onClose={() => setAdminOpen(false)} />

            {/* STYLE */}
            <style>{`

                .nav{
                    width:100%;
                    padding:18px 40px;
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                    background:#020b18;
                    border-bottom:1px solid rgba(255,255,255,0.06);
                    position:sticky;
                    top:0;
                    z-index:100;
                }

                /* LOGO */
                .logo{
                    display:flex;
                    align-items:center;
                    gap:10px;
                    text-decoration:none;
                }

                .dot{
                    width:8px;
                    height:8px;
                    background:#2a82f5;
                    border-radius:50%;
                }

                .logo h2{
                    color:#fff;
                    font-size:18px;
                    font-weight:600;
                }

                /* LINKS */
                .links{
                    display:flex;
                    align-items:center;
                    gap:28px;
                }

                .links a,
                .drop-title{
                    color:rgba(255,255,255,0.65);
                    font-size:14px;
                    cursor:pointer;
                    text-decoration:none;
                    transition:0.25s ease;
                }

                .links a:hover,
                .drop-title:hover{
                    color:#fff;
                    transform:translateY(-1px);
                }

                /* DROPDOWN */
                .dropdown{
                    position:relative;
                }

                .dropdown-menu{
                    position:absolute;
                    top:calc(100% + 16px);
                    left:0;
                    background:#0b1426;
                    border:1px solid rgba(255,255,255,0.08);
                    border-radius:12px;
                    padding:8px;
                    min-width:180px;
                    opacity:0;
                    transform:translateY(10px);
                    pointer-events:none;
                    transition:0.25s ease;
                }

                .dropdown-menu.open{
                    opacity:1;
                    transform:translateY(0);
                    pointer-events:auto;
                }

                .dropdown-menu a{
                    display:block;
                    padding:9px 10px;
                    border-radius:8px;
                    color:rgba(255,255,255,0.7);
                    font-size:13px;
                    transition:0.2s;
                }

                .dropdown-menu a:hover{
                    background:rgba(42,130,245,0.15);
                    color:#fff;
                }

                /* RIGHT ACTIONS */
                .right-actions{
                    display:flex;
                    align-items:center;
                    gap:14px;
                }

                /* LANG */
                .langs{
                    display:flex;
                    gap:6px;
                }

                .langs button{
                    padding:5px 10px;
                    border-radius:6px;
                    border:1px solid rgba(255,255,255,0.12);
                    background:transparent;
                    color:rgba(255,255,255,0.6);
                    font-size:11px;
                    cursor:pointer;
                    transition:0.2s;
                }

                .langs button:hover{
                    background:rgba(42,130,245,0.15);
                    color:#fff;
                }

                .langs button.active{
                    background:rgba(42,130,245,0.2);
                    border-color:rgba(42,130,245,0.5);
                    color:#fff;
                }

                /* ADMIN BUTTON */
                .admin-btn{
                    display:inline-flex;
                    align-items:center;
                    gap:6px;
                    padding:7px 14px;
                    border-radius:8px;
                    border:1px solid rgba(42,130,245,0.4);
                    background:rgba(42,130,245,0.12);
                    color:#bcd5fa;
                    font-size:12px;
                    font-weight:600;
                    cursor:pointer;
                    transition:0.2s;
                    letter-spacing:0.3px;
                }

                .admin-btn:hover{
                    background:rgba(42,130,245,0.25);
                    color:#fff;
                    border-color:rgba(42,130,245,0.65);
                }

                /* BURGER */
                .burger{
                    display:none;
                    color:#fff;
                    cursor:pointer;
                }

                /* RESPONSIVE */
                @media(max-width:900px){

                    .burger{
                        display:block;
                    }

                    .links{
                        position:absolute;
                        top:70px;
                        left:0;
                        right:0;
                        background:#020b18;
                        flex-direction:column;
                        align-items:flex-start;
                        padding:20px;
                        display:none;
                        gap:18px;
                        border-bottom:1px solid rgba(255,255,255,0.06);
                    }

                    .links.show{
                        display:flex;
                    }

                    .desktop-only{
                        display:none;
                    }

                    .mobile-only{
                        display:flex;
                        margin-top:10px;
                    }

                    .dropdown-menu{
                        position:relative;
                        top:0;
                        margin-top:8px;
                    }
                }

                @media(min-width:901px){
                    .mobile-only{
                        display:none;
                    }

                    /* invisible bridge so the cursor can travel
                       from the title to the menu without losing hover */
                    .dropdown::after{
                        content:"";
                        position:absolute;
                        left:0;
                        top:100%;
                        width:100%;
                        height:24px;
                    }

                    .dropdown:hover .dropdown-menu,
                    .dropdown-menu:hover{
                        opacity:1;
                        transform:translateY(0);
                        pointer-events:auto;
                    }
                }

            `}</style>

        </nav>
    );
};

export default Navbar;
