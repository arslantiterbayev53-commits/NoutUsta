import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { Phone, Send, MapPin, Clock3 } from "lucide-react";

const ContactPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out" });
  }, []);

  const cards = [
    {
      icon: Phone,
      label: t("contactPage.phone"),
      value: "+998 91 177 12 99",
      href: "tel:+998911771299",
    },
    {
      icon: Send,
      label: t("contactPage.telegram"),
      value: "@begaliyev1299",
      href: "https://t.me/begaliyev1299",
    },
    {
      icon: MapPin,
      label: t("contactPage.address"),
      value: "Toshkent shahri Malika bozori. Malika A14 do'kon",
    },
    {
      icon: Clock3,
      label: t("contactPage.workHours"),
      value: t("contactPage.workHoursValue"),
    },
  ];

  return (
    <div className="bg-[#020817] text-white min-h-screen overflow-hidden">
      <section className="relative px-5 md:px-14 pt-16 pb-12">
        <div className="absolute -top-20 right-1/4 w-96 h-96 bg-blue-600/15 blur-[120px] rounded-full" />
        <div className="relative" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 mb-5">
            {t("contactPage.badge")}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {t("contactPage.title")}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            {t("contactPage.subtitle")}
          </p>
        </div>
      </section>

      <section className="px-5 md:px-14 pb-24">
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">

          {/* LEFT: cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-5 lg:w-[420px] shrink-0">
            {cards.map((c, index) => {
              const Wrapper = c.href ? "a" : "div";
              return (
                <Wrapper
                  key={c.label}
                  {...(c.href
                    ? { href: c.href, target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="bg-white/5 border border-white/10 rounded-3xl p-7 flex items-center gap-5 hover:border-blue-500/30 transition"
                >
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <c.icon className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{c.label}</p>
                    <p className="text-lg font-semibold mt-1">{c.value}</p>
                  </div>
                </Wrapper>
              );
            })}
          </div>

          {/* RIGHT: map */}
          <div
            data-aos="fade-left"
            className="relative flex-1 min-h-[500px] rounded-[28px] overflow-hidden border border-white/10"
          >
            <div className="absolute -top-10 -right-10 w-60 h-60 bg-blue-500/20 blur-[80px] rounded-full pointer-events-none z-10" />

            <iframe
              title="Malika bozori xarita"
              src="https://yandex.uz/map-widget/v1/?ll=69.273100%2C41.337780&z=17&pt=69.273100,41.337780,pm2bll"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "invert(92%) hue-rotate(180deg) saturate(0.8) brightness(0.85)",
                display: "block",
              }}
              allowFullScreen
              loading="lazy"
            />

            <div className="absolute bottom-4 left-4 right-4 z-20 bg-[#020817]/80 backdrop-blur-md border border-blue-500/20 rounded-2xl px-5 py-4 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                <MapPin size={18} className="text-blue-400" />
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Bizning manzil</p>
                <p className="text-sm font-semibold">Toshkent shahri, Malika do'kon, A 14</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;