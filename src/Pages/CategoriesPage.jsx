import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ServiceIcon from "../Components/ServiceIcon";
import ServiceBlocksGrid from "../Components/ServiceBlocksGrid";
import { serviceBlocks } from "../data/serviceBlocks";
import { useCategories } from "../Context/CategoriesContext";

const CategoriesPage = () => {
  const { t, i18n } = useTranslation();
  const { categories } = useCategories();
  const lang = (i18n.language || "uz").slice(0, 2);

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out" });
  }, []);

  return (
    <div className="bg-[#020817] text-white min-h-screen overflow-hidden">
      <section className="relative px-5 md:px-14 pt-16 pb-12">
        <div className="absolute -top-20 left-1/3 w-96 h-96 bg-blue-600/15 blur-[120px] rounded-full" />
        <div className="relative" data-aos="fade-up">
          <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 mb-5">
            {t("categoriesPage.badge")}
          </span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              {t("categoriesPage.title")}
            </h1>
            <p className="text-gray-400 text-lg max-w-md">
              {t("categoriesPage.subtitle")}
            </p>
          </div>
        </div>
      </section>

      {/* CATEGORY CARDS */}
      <section className="px-5 md:px-14 pb-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, index) => {
            const tr = cat.translations?.[lang] || cat.translations?.uz || {};
            return (
              <Link
                key={cat.slug}
                to={`/categories/${cat.slug}`}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-blue-500/40 hover:bg-blue-500/5 transition flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center font-bold text-blue-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <ServiceIcon
                    name={cat.icon}
                    size={22}
                    className="text-gray-500 group-hover:text-blue-400 transition"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3">{tr.title}</h3>
                <p className="text-gray-400 text-sm leading-6 flex-1">
                  {tr.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-1 text-sm text-blue-400 opacity-0 group-hover:opacity-100 transition">
                  {t("categoriesPage.viewServices")}
                  <ChevronRight size={15} />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ALL SERVICE BLOCKS */}
      <section className="px-5 md:px-14 pb-24">
        <ServiceBlocksGrid blocks={serviceBlocks} />
      </section>
    </div>
  );
};

export default CategoriesPage;
