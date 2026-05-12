import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#050b1a] text-white border-t border-white/10">

            <div className="max-w-6xl mx-auto px-6 md:px-14 py-12 flex flex-col md:flex-row justify-between gap-10">

                {/* LEFT */}
                <div>
                    <h2 className="text-2xl font-bold mb-3">Noutusta</h2>

                    <p className="text-gray-400 text-sm leading-6 max-w-sm">
                        Toshkentdagi noutbuk ta'mirlash markazi. <br /> Tez, sifatli va kafolatli xizmat.
                    </p>

                    <p className="text-gray-500 text-xs mt-4">
                        © 2026 Noutusta
                    </p>
                </div>

                {/* CENTER */}
                <div>
                    <a href="#"><h3 className="text-lg font-semibold mb-4">Xizmatlar</h3></a>

                    <div className="flex flex-col gap-2 text-gray-400 text-sm">
                        <span className="hover:text-white duration-400 "><a href="">Ekran almashtirish</a></span>
                        <span className="hover:text-white duration-400 "><a href="">Batareya</a></span>
                        <span className="hover:text-white duration-400 "><a href="">Motherboard</a></span>
                        <span className="hover:text-white duration-400 "><a href="">Klaviatura</a></span>
                    </div>
                </div>

                {/* RIGHT */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Aloqa</h3>

                    <p className="text-gray-400 text-sm mb-4">
                        +998 91 177 12 99
                    </p>

                    {/* SOCIAL ICONS (NO LIBRARY - SVG ONLY) */}
                    <div className="flex gap-3">

                        {/* Telegram */}
                        <a href="https://t.me/Noutustauz" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-blue-500/20 transition">
                            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" className="w-5 h-5" />
                        </a>

                        {/* Instagram */}
                        <a href="https://www.instagram.com/noutusta?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-pink-500/20 transition">
                            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" className="w-5 h-5" />
                        </a>

                        {/* YouTube */}
                        <a href="https://youtube.com/@noutusta?si=8RMxMhCEhIa3Heq-" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-red-500/20 transition">
                            <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" className="w-5 h-5" />
                        </a>

                    </div>
                </div>

            </div>



        </footer>
    );
};

export default Footer;
