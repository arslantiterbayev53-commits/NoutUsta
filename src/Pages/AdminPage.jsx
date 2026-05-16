import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, Navigate } from "react-router-dom";
import {
  LogOut,
  ShieldCheck,
  ArrowLeft,
  Plus,
  Pencil,
  Trash2,
  RotateCcw,
  CheckCircle2,
} from "lucide-react";
import { useAuth } from "../Context/AuthContext";
import { useCategories } from "../Context/CategoriesContext";
import ServiceIcon from "../Components/ServiceIcon";
import CategoryForm from "../Components/CategoryForm";
import { formatPrice } from "../utils/price";

const AdminPage = () => {
  const { t, i18n } = useTranslation();
  const { isAdmin, logout } = useAuth();
  const {
    categories,
    addCategory,
    updateCategory,
    deleteCategory,
    resetCategories,
  } = useCategories();

  const [editing, setEditing] = useState(null);
  const [formOpen, setFormOpen] = useState(false);

  const lang = (i18n.language || "uz").slice(0, 2);

  if (!isAdmin) return <Navigate to="/" replace />;

  const handleAdd = () => {
    setEditing(null);
    setFormOpen(true);
  };

  const handleEdit = (cat) => {
    setEditing(cat);
    setFormOpen(true);
  };

  const handleSave = (data) => {
    if (editing) {
      updateCategory(editing.slug, data);
    } else {
      addCategory(data);
    }
    setFormOpen(false);
    setEditing(null);
  };

  const handleDelete = (slug) => {
    if (window.confirm(t("admin.deleteCategoryConfirm"))) {
      deleteCategory(slug);
    }
  };

  const handleReset = () => {
    if (window.confirm(t("admin.resetCategoriesConfirm"))) {
      resetCategories();
    }
  };

  return (
    <div className="min-h-screen bg-[#020817] text-white px-5 md:px-14 py-12 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/15 blur-[160px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center">
              <ShieldCheck className="text-blue-400" size={26} />
            </div>
            <div>
              <h1 className="text-3xl font-bold">{t("admin.welcome")}</h1>
              <p className="text-gray-400 text-sm mt-1 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-green-400" />
                {t("admin.savedHint")}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Link
              to="/"
              className="px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition flex items-center gap-2 text-sm"
            >
              <ArrowLeft size={16} />
              {t("admin.backHome")}
            </Link>

            <button
              onClick={logout}
              className="px-4 py-2.5 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 hover:bg-red-500/25 transition flex items-center gap-2 text-sm cursor-pointer"
            >
              <LogOut size={16} />
              {t("admin.logout")}
            </button>
          </div>
        </div>

        {/* CATEGORIES SECTION */}
        <section className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h2 className="text-2xl font-bold">{t("admin.manageCategories")}</h2>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={handleReset}
                className="px-4 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-gray-300 transition flex items-center gap-2 text-sm cursor-pointer"
              >
                <RotateCcw size={15} />
                {t("admin.reset")}
              </button>

              <button
                onClick={handleAdd}
                className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition flex items-center gap-2 text-sm cursor-pointer"
              >
                <Plus size={16} />
                {t("admin.addCategory")}
              </button>
            </div>
          </div>

          {categories.length === 0 ? (
            <div className="py-16 text-center text-gray-500">
              {t("admin.noCategories")}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((cat) => {
                const tr =
                  cat.translations?.[lang] || cat.translations?.uz || {};
                return (
                  <div
                    key={cat.slug}
                    className="group bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-blue-500/30 transition flex flex-col"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                        <ServiceIcon
                          name={cat.icon}
                          className="text-blue-400"
                          size={22}
                        />
                      </div>

                      <div className="flex gap-1">
                        <button
                          onClick={() => handleEdit(cat)}
                          className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/40 text-gray-300 hover:text-blue-300 flex items-center justify-center transition cursor-pointer"
                          title={t("admin.edit")}
                        >
                          <Pencil size={15} />
                        </button>
                        <button
                          onClick={() => handleDelete(cat.slug)}
                          className="w-9 h-9 rounded-lg bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-500/40 text-gray-300 hover:text-red-300 flex items-center justify-center transition cursor-pointer"
                          title={t("admin.delete")}
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-2">{tr.title}</h3>
                    <p className="text-sm text-gray-400 leading-6 line-clamp-2">
                      {tr.description}
                    </p>

                    {Array.isArray(cat.items) && cat.items.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-1.5">
                        {cat.items.slice(0, 4).map((it) => (
                          <div
                            key={it.id}
                            className="flex justify-between gap-3 text-sm"
                          >
                            <span className="text-gray-300 truncate">
                              {it.translations?.[lang]?.name ||
                                it.translations?.uz?.name}
                            </span>
                            <span className="text-blue-300 font-medium whitespace-nowrap">
                              {formatPrice(it.price, lang)}
                            </span>
                          </div>
                        ))}
                        {cat.items.length > 4 && (
                          <span className="text-xs text-gray-500 mt-1">
                            +{cat.items.length - 4}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>

      <CategoryForm
        open={formOpen}
        initial={editing}
        onClose={() => {
          setFormOpen(false);
          setEditing(null);
        }}
        onSave={handleSave}
      />
    </div>
  );
};

export default AdminPage;
