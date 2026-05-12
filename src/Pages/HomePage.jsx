import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
    Laptop,
    ShieldCheck,
    Clock3,
    Cpu,
    BatteryCharging,
    Droplets,
    Flame,
    Keyboard,
    Star,
    MessageCircle,
    Phone,
    ChevronRight,
    Send,
    CheckCircle2,
    Sparkles,
    Wrench,
    Award,
    MapPin,
} from "lucide-react";

const HomePage = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: "ease-out",
        });
    }, []);

    const reviews = [
        {
            name: "Alisher K.",
            text: "MacBook ekranini 1 kunda almashtirishdi. Juda sifatli ishlashdi.",
            role: "MacBook Pro",
        },
        {
            name: "Malika R.",
            text: "Suv tekkan laptopni tiklab berishdi. Hamma narsasi ishlayapti.",
            role: "HP Pavilion",
        },
        {
            name: "Jasur S.",
            text: "Uyga kelib ta'mirlashdi. Tez, professional va juda qulay.",
            role: "Lenovo",
        },
    ];

    const faq = [
        "Bepul diagnostika",
        "30–90 kun kafolat",
        "Original qismlar",
        "1 kunda tayyor",
        "Uyga chiqib xizmat",
        "Telegram orqali aloqa",
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
                            Toshkent • Haftada 7 kun • 10 daqiqa javob
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                            Noutbuk ta'miri <br />
                            Toshkentda - tez, <br />
                            halol va kafolatli.
                        </h1>

                        <p className="text-gray-400 text-lg leading-8 max-w-155 mb-8">
                            MacBook, Lenovo, HP, ASUS, Dell va boshqa barcha noutbuklarni
                            professional tarzda ta'mirlaymiz.
                        </p>

                        <div className="flex flex-wrap gap-3 mb-8">
                            {[
                                "Bepul diagnostika",
                                "Original qismlar",
                                "Kafolat",
                                "Tez xizmat",
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
                            <button className="px-7 clear-both cursor-pointer py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition font-semibold">
                                Ustaga yozish
                            </button>

                            <button className="px-7 clear-both cursor-pointer py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
                                Xizmatlarni ko'rish
                            </button>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative" data-aos="fade-left">
                        <div className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full"></div>

                        <div className="relative bg-white/5 border border-white/10 rounded-4xl p-8 backdrop-blur-xl">
                            <div className="flex justify-between items-center mb-8">
                                <div>
                                    <p className="text-sm text-gray-400">Servis holati</p>
                                    <div className="flex  items-center gap-5">
                                        <div className="w-5 h-5 mt-3 rounded-full bg-green-400 animate-pulse"></div>
                                        <h3 className="text-2xl font-bold mt-1">24/7 Ochiq</h3>
                                    </div>
                                </div>

                                <div className="w-14 h-14 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                                    <Laptop size={30} className="text-blue-400" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    ["5800+", "Ta'mirlangan"],
                                    ["8 yil", "Tajriba"],
                                    ["10 min", "Javob"],
                                    ["98%", "Mamnun"],
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
                        {
                            icon: ShieldCheck,
                            title: "Kafolat",
                            text: "30–90 kun",
                        },
                        {
                            icon: Clock3,
                            title: "Tez xizmat",
                            text: "1 kunda tayyor",
                        },
                        {
                            icon: Cpu,
                            title: "Original qismlar",
                            text: "Sifatli detallar",
                        },
                        {
                            icon: MapPin,
                            title: "Uyga chiqish",
                            text: "Toshkent bo'ylab",
                        },
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
                        Xizmatlar
                    </p>

                    <h2 className="text-4xl font-bold">
                        Eng mashhur ta'mirlash xizmatlari
                    </h2>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {[
                        {
                            icon: Laptop,
                            title: "Ekran almashtirish",
                        },
                        {
                            icon: BatteryCharging,
                            title: "Batareya",
                        },
                        {
                            icon: Droplets,
                            title: "Suv tegishi",
                        },
                        {
                            icon: Cpu,
                            title: "Motherboard",
                        },
                        {
                            icon: Flame,
                            title: "Qizib ketish"
                        },
                        {
                            icon: Keyboard,
                            title: "Klaviatura",
                        },
                    ].map((item, index) => (
                        <div
                            key={item.title}
                            data-aos="fade-up"
                            data-aos-delay={(index % 3) * 150}
                            className="group bg-white/5 border border-white/10 rounded-[30px] p-7 hover:border-blue-500/30 hover:bg-blue-500/3 transition"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
                                <item.icon className="text-blue-400" size={30} />
                            </div>

                            <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>

                            <p className="text-gray-400 leading-7 mb-7">
                                Professional va sifatli ta'mirlash xizmati.
                            </p>


                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ ICONS */}
            <section className="px-5 md:px-14 pb-20">
                <div className="mb-10" data-aos="fade-up">
                    <p className="text-cyan-300 uppercase tracking-[4px] text-sm mb-3">
                        Afzalliklar
                    </p>

                    <h2 className="text-4xl font-bold">
                        Nega aynan bizni tanlashadi?
                    </h2>
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

            {/* =========================================================================
    REVIEWS SECTION (Mijozlar tomonidan qoldirilgan samimiy sharhlar bo'limi)
    ========================================================================= */}
            <section className="px-5 md:px-14 pb-20">
                {/* Bo'lim sarlavhasi (AOS effekti bilan tepaga silliq ko'tariladi) */}
                <div className="mb-12" data-aos="fade-up">
                    <p className="text-cyan-300 uppercase tracking-[4px] text-sm mb-3">
                        Sharhlar
                    </p>
                    <h2 className="text-4xl font-bold">Mijozlar fikri</h2>
                </div>

                {/* Sharhlar panjarasi - Katta ekranlarda 3 ta, o'rta ekranlarda 2 ta, telefonda 1 ta ustun */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            name: "Alisher",
                            text: "Laptop umuman yoqilmay qolgandi, olib borib berishdi 1 kunda qilib berdi, yaxshi chiqdi.",
                            rating: 4.6,
                        },
                        {
                            name: "Malika",
                            text: "Suv to‘kilib ketgan edi, ishlayapti hozir, lekin biroz vaqt ketdi. baribir yaxshi.",
                            rating: 4.3,
                        },
                        {
                            name: "Jasur",
                            text: "Uyga kelib qilib berdi, tezda tugatdi. umuman kutmagan edim shunaqa tez bo‘lishini.",
                            rating: 4.8,
                        },
                        {
                            name: "Shahzod",
                            text: "Ekran almashtirishdi, rangi ozgina farq qilyapti lekin yaxshi.",
                            rating: 4.2,
                        },
                        {
                            name: "Dilshod",
                            text: "Qizib ketardi laptop, tozalab berdi endi yaxshi ishlayapti.",
                            rating: 4.7,
                        },
                        {
                            name: "Nodira",
                            text: "Klaviatura bosilmay qolgandi, tez qilib berishdi, rahmat.",
                            rating: 4.4,
                        },
                        {
                            name: "Farrux",
                            text: "MacBook batareyasini almashtirib berishdi. Haqiqiy original qo'yildi, quvvati juda yaxshi yetyapti.",
                            rating: 4.9,
                        },
                        {
                            name: "Zilola",
                            text: "Windows tizimini qayta o'rnatib, hamma kerakli dasturlarni sozlab berishdi. Ishlash tezligi ancha oshdi.",
                            rating: 4.5,
                        },
                        {
                            name: "Sardor",
                            text: "Kuleridan juda qattiq shovqin chiqayotgandi. Moylab, tozalab berishgach umuman ovozi chiqmay qoldi.",
                            rating: 4.7,
                        },
                    ].map((item, index) => (
                        <div
                            key={item.name}
                            // AOS orqali har bir karta ketma-ket (kaskad uslubida) silliq ko'tariladi
                            data-aos="fade-up"
                            data-aos-delay={(index % 3) * 100} // Bir xil ustundagi kartalar vaqt farqi bilan chiqadi
                            className="group relative overflow-hidden bg-linear-to-br from-[#0d1325] to-[#111b33] border border-white/10 rounded-4xl p-8 hover:border-blue-500/30 hover:bg-blue-500/2 transition-all duration-300"
                        >
                            {/* Orqa fondagi ko'k rangli premium neon nuri */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 blur-[80px] group-hover:bg-blue-500/20 transition-all duration-300"></div>

                            {/* STARS (Yulduzchalar va reyting raqami) */}
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

                            {/* Sharh matni */}
                            <p className="relative z-10 text-gray-300 leading-7 text-base mb-8 italic">
                                "{item.text}"
                            </p>

                            {/* Mijoz haqidagi ma'lumotlar bloki */}
                            <div className="relative z-10 flex items-center gap-4">
                                {/* Mijoz ismining birinchi harfidan iborat dumaloq avatar */}
                                <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center font-bold text-blue-300 border border-blue-500/10 group-hover:scale-105 transition-transform duration-300">
                                    {item.name[0]}
                                </div>

                                <div>
                                    <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                                        {item.name}
                                    </h4>
                                    <p className="text-gray-500 text-sm">Mijoz</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* GALLERY */}
            <section className="px-5 md:px-14 pb-24" data-aos="fade-up">
                {/* Bo'lim sarlavhasi (AOS effekti bilan tepaga silliq ko'tariladi) */}
                <div className="mb-12" data-aos="fade-up">
                    <p className="text-cyan-300 uppercase tracking-[4px] text-sm mb-3">
                        Jarayon
                    </p>
                    <h2 className="text-4xl font-bold">Ta'mirlash jarayonidan lavhalar</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[200px] gap-4">

                    {/* BIG CENTER IMAGE */}
                    <div className="col-span-2 row-span-2 rounded-3xl overflow-hidden" data-aos="zoom-in">
                        <img
                            src="https://www.ustabor.uz/upload/%D0%95%D0%A1%D0%A6%20%D0%BD%D0%BE%D0%B2%D0%B0%D1%8F/%D1%80%D0%B5%D0%BC%D0%BE%D0%BD%D1%82%20%D0%BA%D0%BE%D0%BC%D0%BF%D1%8C%D1%8E%D1%82%D0%B5%D1%80%D0%BE%D0%B2.jpg"
                            className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                    </div>

                    {/* SMALL */}
                    <div className="rounded-3xl overflow-hidden" data-aos="zoom-in" data-aos-delay="100">
                        <img
                            src="https://cdn.thewirecutter.com/wp-content/media/2020/12/cleaningdirtylaptop-2048px-0006-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp"
                            className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                    </div>

                    <div className="rounded-3xl overflow-hidden" data-aos="zoom-in" data-aos-delay="200">
                        <img
                            src="https://rrservice.ru/wp-content/uploads/2019/02/remont_laptops.jpg"
                            className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                    </div>

                    <div className="rounded-3xl overflow-hidden" data-aos="zoom-in" data-aos-delay="300">
                        <img
                            src="https://imageio.forbes.com/specials-images/imageserve/5f724c7ef0f450e48d989d5d/0x0.jpg?format=jpg&crop=6000,3375,x0,y304,safe&height=900&width=1600&fit=bounds"
                            className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                    </div>

                    <div className="rounded-3xl overflow-hidden" data-aos="zoom-in" data-aos-delay="400">
                        <img
                            src="https://кампутарная.бел/img/news/remont-akk.webp"
                            className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                    </div>

                    {/* MEDIUM ACCENT */}
                    <div className="col-span-2 rounded-3xl overflow-hidden" data-aos="zoom-in" data-aos-delay="150">
                        <img
                            src="https://nice-case.ru/upload/medialibrary/dda/xuzpxbkzmkowo4qn41f11ofp8m932fos.JPG"
                            className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                    </div>

                    <div className="rounded-3xl overflow-hidden" data-aos="zoom-in" data-aos-delay="250">
                        <img
                            src="https://freshit.ua/images/0000000206/zamena-zhestkogo-diska-v%20noutbuke-na-hdd-big.jpg"
                            className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
                    </div>

                    <div className="rounded-3xl overflow-hidden" data-aos="zoom-in" data-aos-delay="350">
                        <img
                            src="https://itg23.ru/wp-content/uploads/2019/07/bg14.jpg"
                            className="w-full h-full object-cover hover:scale-105 transition duration-500"
                        />
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
                            Usta hozir online
                        </div>

                        <h2 className="text-4xl font-bold leading-tight mb-6">
                            Noutbuk ishlamayaptimi?
                            <br />
                            Bugun hal qilamiz.
                        </h2>

                        <p className="text-gray-400 text-lg max-w-175 mx-auto leading-8 mb-10">
                            Telegram orqali yozing yoki qo'ng'iroq qiling — mutaxassis sizga
                            10 daqiqa ichida javob beradi.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4">

                            {/* TELEGRAM */}
                            <a
                                href="https://t.me/begaliyev1299"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <button className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 transition font-semibold flex items-center gap-2">
                                    <Send size={18} />
                                    Telegram
                                </button>
                            </a>

                            {/* CALL BUTTON (FIXED) */}
                            <a
                                href="tel:+998911771299"
                                className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center gap-2"
                            >
                                <Phone size={18} />
                                Qo'ng'iroq
                            </a>

                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default HomePage;