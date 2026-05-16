import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import ServiceIcon from "../Components/ServiceIcon";
import ServiceBlocksGrid from "../Components/ServiceBlocksGrid";
import { getBlocksForCategory } from "../data/serviceBlocks";
import { useCategories } from "../Context/CategoriesContext";
import { formatPrice } from "../utils/price";

const CategoryDetailPage = () => {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const { getCategory } = useCategories();
  const lang = (i18n.language || "uz").slice(0, 2);

  const category = getCategory(slug);
  const blocks = getBlocksForCategory(slug);

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out" });
  }, [slug]);

  if (!category) {
    return (
      <div className="bg-[#020817] text-white min-h-screen flex flex-col items-center justify-center gap-5 px-5">
        <p className="text-2xl font-semibold">{t("categoriesPage.notFound")}</p>
        <Link
          to="/kategoriya"
          className="px-5 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center gap-2 text-sm"
        >
          <ArrowLeft size={16} />
          {t("categoriesPage.backToCategories")}
        </Link>
      </div>
    );
  }

  const tr = category.translations?.[lang] || category.translations?.uz || {};
  const items = Array.isArray(category.items) ? category.items : [];

  return (
    <div className="bg-[#020817] text-white min-h-screen overflow-hidden">
      <section className="relative px-5 md:px-14 pt-12 pb-12">
        <div className="absolute -top-20 left-1/4 w-96 h-96 bg-blue-600/15 blur-[120px] rounded-full" />

        <div className="relative">
          <Link
            to="/kategoriya"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition mb-8"
          >
            <ArrowLeft size={16} />
            {t("categoriesPage.backToCategories")}
          </Link>

          <div className="flex items-center gap-5" data-aos="fade-up">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center">
              <ServiceIcon name={category.icon} className="text-blue-400" size={30} />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold">{tr.title}</h1>
            </div>
          </div>

          <p className="text-gray-400 text-lg max-w-2xl mt-5" data-aos="fade-up">
            {tr.description}
          </p>
        </div>
      </section>

      {items.length > 0 && (
        <section className="px-5 md:px-14 pb-16">
          <h2 className="text-2xl font-bold mb-6" data-aos="fade-up">
            {t("categoriesPage.priceList")}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((it, index) => {
              const name =
                it.translations?.[lang]?.name ||
                it.translations?.uz?.name ||
                "";
              return (
                <div
                  key={it.id}
                  data-aos="fade-up"
                  data-aos-delay={(index % 3) * 80}
                  className="flex items-center justify-between gap-4 bg-white/5 border border-white/10 rounded-2xl px-5 py-4 hover:border-blue-500/30 transition"
                >
                  <span className="text-gray-200">{name}</span>
                  <span className="text-blue-300 font-semibold whitespace-nowrap">
                    {formatPrice(it.price, lang)}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {blocks.length > 0 && (
        <section className="px-5 md:px-14 pb-24">
          <h2 className="text-2xl font-bold mb-6" data-aos="fade-up">
            {t("categoriesPage.relatedServices")}
          </h2>
          <ServiceBlocksGrid blocks={blocks} />
        </section>
      )}
    </div>
  );
};

export default CategoryDetailPage;
