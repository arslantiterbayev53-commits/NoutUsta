import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import {
    Laptop,
    ShieldCheck,
    Clock3,
    Cpu,
    Phone,
    Send,
    CheckCircle2,
    Wrench,
    MapPin,
} from "lucide-react";
import ServiceIcon from "../Components/ServiceIcon";
import { useServices } from "../Context/ServicesContext";

import rasm1 from "../assets/rasm1.jpg";
import rasm2 from "../assets/rasm2.jpg";
import rasm3 from "../assets/rasm3.jpg";
import rasm4 from "../assets/rasm4.jpg";
import rasm5 from "../assets/rasm5.jpg";
import rasm6 from "../assets/rasm6.jpg";

const HomePage = () => {
    const { t, i18n } = useTranslation();
    const { services } = useServices();
    const lang = (i18n.language || "uz").slice(0, 2);

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: "ease-out",
        });
    }, []);

    const faq = [
        t("advantages.a1"),
        t("advantages.a2"),
        t("advantages.a3"),
        t("advantages.a4"),
        t("advantages.a5"),
        t("advantages.a6"),
    ];

    return (
        <div className="bg-[#020817] text-white min-h-screen overflow-hidden">
            {/* HERO */}
            <section className="relative px-5 md:px-14 pt-16 pb-20">
                <div className="absolute -top-25 -left-25 w-100 h-100 bg-blue-600/20 blur-[120px] rounded-full"></div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* LEFT */}
                    <div data-aos="fade-right">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm mb-6">
                            <div className="w-2 h-2 rounded-full bg-red-900 animate-pulse"></div>
                            {t("hero.badge")}
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                            {t("hero.title1")} <br />
                            {t("hero.title2")} <br />
                            {t("hero.title3")}
                        </h1>

                        <p className="text-gray-400 text-lg leading-8 max-w-155 mb-8">
                            {t("hero.description")}
                        </p>

                        <div className="flex flex-wrap gap-3 mb-8">
                            {[
                                t("hero.tag1"),
                                t("hero.tag2"),
                                t("hero.tag3"),
                                t("hero.tag4"),
                            ].map((item, index) => (
                                <div
                                    key={item}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <a href="/aloqa">
                                <button className="px-7 clear-both cursor-pointer py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition font-semibold">
                                    {t("hero.ctaPrimary")}
                                </button>
                            </a>

                            <a href="/xizmatlar">
                                <button className="px-7 clear-both cursor-pointer py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
                                    {t("hero.ctaSecondary")}
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative" data-aos="fade-left">
                        <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full"></div>

                        <div className="relative bg-white/5 border border-white/10 rounded-4xl p-8 backdrop-blur-xl">
                            <div className="flex justify-between items-center mb-8">
                                <div>
                                    <p className="text-sm text-gray-400">{t("hero.status")}</p>
                                    <div className="flex items-center gap-5">
                                        <div className="w-5 h-5 mt-3 rounded-full bg-green-400 animate-pulse"></div>
                                        <h3 className="text-2xl font-bold mt-1">{t("hero.statusOpen")}</h3>
                                    </div>
                                </div>

                                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                                    <Laptop size={30} className="text-blue-400" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    ["5800+", t("hero.stat1")],
                                    ["8 yil", t("hero.stat2")],
                                    ["10 min", t("hero.stat3")],
                                    ["98%", t("hero.stat4")],
                                ].map((i, index) => (
                                    <div
                                        key={i[0]}
                                        data-aos="zoom-in"
                                        data-aos-delay={index * 100}
                                        className="bg-white/5 border border-white/10 rounded-2xl p-5"
                                    >
                                        <h2 className="text-3xl font-bold text-blue-400">
                                            {i[0]}
                                        </h2>
                                        <p className="text-sm text-gray-400 mt-1">{i[1]}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section className="px-5 md:px-14 pb-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {[
                        { icon: ShieldCheck, title: t("features.f1Title"), text: t("features.f1Text") },
                        { icon: Clock3, title: t("features.f2Title"), text: t("features.f2Text") },
                        { icon: Cpu, title: t("features.f3Title"), text: t("features.f3Text") },
                        { icon: MapPin, title: t("features.f4Title"), text: t("features.f4Text") },
                    ].map((item, index) => (
                        <div
                            key={item.title}
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                            className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-blue-500/40 transition"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-5">
                                <item.icon className="text-blue-400" />
                            </div>
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="text-gray-400 mt-2">{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* SERVICES */}
            <section className="px-5 md:px-14 pb-20">
                <div className="mb-10" data-aos="fade-up">
                    <p className="text-cyan-300 uppercase tracking-[4px] text-sm mb-3">
                        {t("services.label")}
                    </p>
                    <h2 className="text-4xl font-bold">{t("services.title")}</h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {services.map((item, index) => {
                        const tr = item.translations?.[lang] || item.translations?.uz || {};
                        return (
                            <div
                                key={item.id}
                                data-aos="fade-up"
                                data-aos-delay={(index % 3) * 150}
                                className="group bg-white/5 border border-white/10 rounded-[30px] p-7 hover:border-blue-500/30 hover:bg-blue-500/3 transition"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                                    <ServiceIcon name={item.icon} className="text-blue-400" size={30} />
                                </div>
                                <h3 className="text-2xl font-semibold mb-3">{tr.title}</h3>
                                <p className="text-gray-400 leading-7 mb-7">{tr.description}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* FAQ ICONS */}
            <section className="px-5 md:px-14 pb-20">
                <div className="mb-10" data-aos="fade-up">
                    <p className="text-cyan-300 uppercase tracking-[4px] text-sm mb-3">
                        {t("advantages.label")}
                    </p>
                    <h2 className="text-4xl font-bold">{t("advantages.title")}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {faq.map((item, index) => (
                        <div
                            key={item}
                            data-aos="zoom-in"
                            data-aos-delay={(index % 3) * 150}
                            className="bg-linear-to-br from-white/5 to-white/2 border border-white/10 rounded-[28px] p-7 flex items-center gap-4"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center">
                                <CheckCircle2 className="text-cyan-300" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">{item}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* REVIEWS */}
            <section className="px-5 md:px-14 pb-20">
                <div className="mb-12" data-aos="fade-up">
                    <p className="text-cyan-300 uppercase tracking-[4px] text-sm mb-3">
                        {t("reviews.label")}
                    </p>
                    <h2 className="text-4xl font-bold">{t("reviews.title")}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { name: "Alisher", text: "Laptop umuman yoqilmay qolgandi, olib borib berishdi 1 kunda qilib berdi, yaxshi chiqdi.", rating: 4.6 },
                        { name: "Malika", text: "Suv to'kilib ketgan edi, ishlayapti hozir, lekin biroz vaqt ketdi. baribir yaxshi.", rating: 4.3 },
                        { name: "Jasur", text: "Uyga kelib qilib berdi, tezda tugatdi. umuman kutmagan edim shunaqa tez bo'lishini.", rating: 4.8 },
                        { name: "Shahzod", text: "Ekran almashtirishdi, rangi ozgina farq qilyapti lekin yaxshi.", rating: 4.2 },
                        { name: "Dilshod", text: "Qizib ketardi laptop, tozalab berdi endi yaxshi ishlayapti.", rating: 4.7 },
                        { name: "Nodira", text: "Klaviatura bosilmay qolgandi, tez qilib berishdi, rahmat.", rating: 4.4 },
                        { name: "Farrux", text: "MacBook batareyasini almashtirib berishdi. Haqiqiy original qo'yildi, quvvati juda yaxshi yetyapti.", rating: 4.9 },
                        { name: "Zilola", text: "Windows tizimini qayta o'rnatib, hamma kerakli dasturlarni sozlab berishdi. Ishlash tezligi ancha oshdi.", rating: 4.5 },
                        { name: "Sardor", text: "Kuleridan juda qattiq shovqin chiqayotgandi. Moylab, tozalab berishgach umuman ovozi chiqmay qoldi.", rating: 4.7 },
                    ].map((item, index) => (
                        <div
                            key={item.name}
                            data-aos="fade-up"
                            data-aos-delay={(index % 3) * 100}
                            className="group relative overflow-hidden bg-linear-to-br from-[#0d1325] to-[#111b33] border border-white/10 rounded-4xl p-8 hover:border-blue-500/30 hover:bg-blue-500/2 transition-all duration-300"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 blur-[80px] group-hover:bg-blue-500/20 transition-all duration-300"></div>

                            <div className="relative z-10 flex items-center gap-2 mb-6">
                                <div className="flex text-yellow-400 text-lg tracking-xs">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <span key={i} className="transition-transform group-hover:scale-110 duration-300">
                                            {i <= Math.round(item.rating) ? "★" : "☆"}
                                        </span>
                                    ))}
                                </div>
                                <span className="text-gray-400 text-sm font-medium bg-white/5 px-2 py-0.5 rounded-lg border border-white/5">
                                    {item.rating}
                                </span>
                            </div>

                            <p className="relative z-10 text-gray-300 leading-7 text-base mb-8 italic">
                                "{item.text}"
                            </p>

                            <div className="relative z-10 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center font-bold text-blue-300 border border-blue-500/10 group-hover:scale-105 transition-transform duration-300">
                                    {item.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                                        {item.name}
                                    </h4>
                                    <p className="text-gray-500 text-sm">{t("reviews.role")}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* GALLERY */}
            <section className="px-5 md:px-14 pb-24" data-aos="fade-up">
                <div className="mb-12" data-aos="fade-up">
                    <p className="text-cyan-300 uppercase tracking-[4px] text-sm mb-3">
                        {t("gallery.label")}
                    </p>
                    <h2 className="text-4xl font-bold">{t("gallery.title")}</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] gap-4">
                    <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden" data-aos="zoom-in">
                        <img src={rasm1} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                    </div>
                    <div className="rounded-3xl overflow-hidden" data-aos="zoom-in" data-aos-delay="100">
                        <img src={rasm2} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                    </div>
                    <div className="rounded-3xl overflow-hidden" data-aos="zoom-in" data-aos-delay="200">
                        <img src={rasm3} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                    </div>
                    <div className="rounded-3xl overflow-hidden" data-aos="zoom-in" data-aos-delay="300">
                        <img src={rasm4} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                    </div>
                    <div className="rounded-3xl overflow-hidden" data-aos="zoom-in" data-aos-delay="400">
                        <img src={rasm5} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                    </div>
                    <div className="col-span-2 rounded-3xl overflow-hidden" data-aos="zoom-in" data-aos-delay="150">
                        <img src={rasm6} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                    </div>
                    <div className="rounded-3xl overflow-hidden" data-aos="zoom-in" data-aos-delay="250">
                        <img src={rasm1} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                    </div>
                    <div className="rounded-3xl overflow-hidden" data-aos="zoom-in" data-aos-delay="350">
                        <img src={rasm2} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="px-5 md:px-14 pb-24" data-aos="fade-up">
                <div className="relative overflow-hidden rounded-[40px] border border-blue-500/20 bg-linear-to-br from-[#07111f] to-[#0f1f3b] p-10 md:p-16 text-center">
                    <div className="absolute -top-25 left-1/2 -translate-x-1/2 w-125 h-75 bg-blue-500/20 blur-[120px]"></div>
                    <div className="relative">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 text-sm mb-6">
                            <Wrench size={16} />
                            {t("cta.badge")}
                        </div>
                        <h2 className="text-4xl font-bold leading-tight mb-6">
                            {t("cta.title1")}<br />{t("cta.title2")}
                        </h2>
                        <p className="text-gray-400 text-lg max-w-175 mx-auto leading-8 mb-10">
                            {t("cta.description")}
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="https://t.me/Noutustauz" target="_blank" rel="noopener noreferrer">
                                <button className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition font-semibold flex items-center gap-2">
                                    <Send size={18} />
                                    {t("cta.telegram")}
                                </button>
                            </a>
                            <a href="tel:+998911771299" className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center gap-2">
                                <Phone size={18} />
                                {t("cta.call")}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;