import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import ServiceIcon from "../Components/ServiceIcon";
import ServiceBlocksGrid from "../Components/ServiceBlocksGrid";
import { useServices } from "../Context/ServicesContext";
import { serviceBlocks } from "../data/serviceBlocks";

const ServicesPage = () => {
  const { t, i18n } = useTranslation();
  const { services } = useServices();
  const lang = (i18n.language || "uz").slice(0, 2);

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out" });
  }, []);

  return (
    <div className="bg-[#020817] text-white min-h-screen overflow-hidden">
      <section className="relative px-5 md:px-14 pt-16 pb-12">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-600/15 blur-[120px] rounded-full" />
        <div className="relative" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 mb-5">
            {t("servicesPage.badge")}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            {t("servicesPage.title")}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            {t("servicesPage.subtitle")}
          </p>
        </div>
      </section>

      {/* QUICK SERVICE CARDS (from admin-managed list) */}
      <section className="px-5 md:px-14 pb-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((item, index) => {
            const tr = item.translations?.[lang] || item.translations?.uz || {};
            return (
              <div
                key={item.id}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
                className="group bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-blue-500/30 transition"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-5">
                  <ServiceIcon name={item.icon} className="text-blue-400" size={26} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{tr.title}</h3>
                <p className="text-gray-400 leading-7 text-sm">{tr.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* DETAILED SERVICE BLOCKS */}
      <section className="px-5 md:px-14 pb-24">
        <ServiceBlocksGrid blocks={serviceBlocks} />
      </section>
    </div>
  );
};

export default ServicesPage;
