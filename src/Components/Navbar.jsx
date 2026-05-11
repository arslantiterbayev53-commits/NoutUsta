import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const closeMobileMenu = () => {
        setMenuOpen(false);
        setDropdownOpen(false);
    };

    return (
        <nav className="nav">

            {/* LOGO */}
            <div className="logo">
                <div className="dot"></div>
                <h2>Noutusta</h2>
            </div>

            {/* LINKS */}
            <div className={`links ${menuOpen ? "show" : ""}`}>

                <Link onClick={closeMobileMenu} to="/">Bosh Sahifa</Link>

                <Link onClick={closeMobileMenu} to="/xizmatlar">Xizmatlar</Link>

                {/* DROPDOWN */}
                <div className="dropdown">
                    <span
                        className="drop-title"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                    >
                        Kategoriya ▾
                    </span>

                    <div className={`dropdown-menu ${dropdownOpen ? "open" : ""}`}>
                        <Link onClick={closeMobileMenu} to="/aksesuar">
                            Aksesuar
                        </Link>

                        <Link onClick={closeMobileMenu} to="/texnika">
                            Texnika
                        </Link>

                        <Link onClick={closeMobileMenu} to="/soft">
                            Soft
                        </Link>

                        <Link onClick={closeMobileMenu} to="/batareya">
                            Batareya
                        </Link>
                    </div>
                </div>

                <Link onClick={closeMobileMenu} to="/aloqa">Aloqa</Link>

                {/* LANGS (mobile ham bor) */}
                <div className="langs mobile-only">
                    <button>UZ</button>
                    <button>RU</button>
                    <button>EN</button>
                </div>
            </div>

            {/* LANGS (desktop) */}
            <div className="langs desktop-only">
                <button>UZ</button>
                <button>RU</button>
                <button>EN</button>
            </div>

            {/* BURGER */}
            <div className="burger" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X /> : <Menu />}
            </div>

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
                    top:35px;
                    left:0;
                    background:#0b1426;
                    border:1px solid rgba(255,255,255,0.08);
                    border-radius:12px;
                    padding:8px;
                    min-width:180px;

                    /* animation fix */
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

                /* LANG */
                .langs{
                    display:flex;
                    gap:8px;
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
                }

            `}</style>

        </nav>
    );
};

export default Navbar;