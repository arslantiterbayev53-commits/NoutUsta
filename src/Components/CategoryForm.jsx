import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { X, Check, Plus, Trash2 } from "lucide-react";
import ServiceIcon, { ICON_NAMES } from "./ServiceIcon";

const emptyForm = () => ({
  icon: "Laptop",
  translations: {
    uz: { title: "", description: "" },
    ru: { title: "", description: "" },
    en: { title: "", description: "" },
  },
  items: [],
});

const newItem = () => ({
  id: `item-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
  price: 0,
  translations: {
    uz: { name: "" },
    ru: { name: "" },
    en: { name: "" },
  },
});

const LANG_LABELS = { uz: "O'zbek", ru: "Русский", en: "English" };

const CategoryForm = ({ open, initial, onClose, onSave }) => {
  const { t } = useTranslation();
  const [form, setForm] = useState(emptyForm);
  const [activeLang, setActiveLang] = useState("uz");

  useEffect(() => {
    if (open) {
      const base = initial ? structuredClone(initial) : emptyForm();
      if (!Array.isArray(base.items)) base.items = [];
      setForm(base);
      setActiveLang("uz");
    }
  }, [open, initial]);

  if (!open) return null;

  const setLangField = (lang, field, value) => {
    setForm((f) => ({
      ...f,
      translations: {
        ...f.translations,
        [lang]: { ...f.translations[lang], [field]: value },
      },
    }));
  };

  const addItemRow = () => {
    setForm((f) => ({ ...f, items: [...f.items, newItem()] }));
  };

  const removeItemRow = (id) => {
    setForm((f) => ({ ...f, items: f.items.filter((it) => it.id !== id) }));
  };

  const setItemName = (id, lang, value) => {
    setForm((f) => ({
      ...f,
      items: f.items.map((it) =>
        it.id === id
          ? {
              ...it,
              translations: {
                ...it.translations,
                [lang]: { ...it.translations[lang], name: value },
              },
            }
          : it
      ),
    }));
  };

  const setItemPrice = (id, value) => {
    setForm((f) => ({
      ...f,
      items: f.items.map((it) =>
        it.id === id ? { ...it, price: value.replace(/[^\d]/g, "") } : it
      ),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleaned = {
      ...form,
      items: form.items
        .filter((it) =>
          ["uz", "ru", "en"].some((l) => it.translations[l].name.trim())
        )
        .map((it) => ({ ...it, price: Number(it.price) || 0 })),
    };
    onSave(cleaned);
  };

  const isValid = ["uz", "ru", "en"].every(
    (l) => form.translations[l].title.trim().length > 0
  );

  return (
    <div
      className="fixed inset-0 z-200 flex items-center justify-center px-4 py-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-2xl max-h-full overflow-y-auto bg-[#0b1426] border border-white/10 rounded-3xl p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition cursor-pointer"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold text-white mb-6">
          {initial ? t("admin.editCategoryTitle") : t("admin.newCategoryTitle")}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* ICON PICKER */}
          <div>
            <span className="text-xs text-gray-400 uppercase tracking-wider block mb-2">
              {t("admin.iconLabel")}
            </span>
            <div className="grid grid-cols-6 sm:grid-cols-10 gap-2">
              {ICON_NAMES.map((name) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => setForm((f) => ({ ...f, icon: name }))}
                  className={`aspect-square rounded-xl flex items-center justify-center border transition cursor-pointer ${
                    form.icon === name
                      ? "bg-blue-500/25 border-blue-500/60"
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                  }`}
                  title={name}
                >
                  <ServiceIcon
                    name={name}
                    size={18}
                    className={form.icon === name ? "text-blue-300" : "text-gray-400"}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* LANG TABS */}
          <div className="flex gap-2 border-b border-white/10">
            {["uz", "ru", "en"].map((lng) => (
              <button
                key={lng}
                type="button"
                onClick={() => setActiveLang(lng)}
                className={`px-4 py-2 text-sm rounded-t-lg transition cursor-pointer ${
                  activeLang === lng
                    ? "bg-white/10 text-white border-b-2 border-blue-500"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {LANG_LABELS[lng]}
              </button>
            ))}
          </div>

          {/* TITLE / DESC */}
          <div className="flex flex-col gap-4">
            <label className="block">
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                {t("admin.titleLabel")} ({activeLang.toUpperCase()})
              </span>
              <input
                type="text"
                value={form.translations[activeLang].title}
                onChange={(e) => setLangField(activeLang, "title", e.target.value)}
                className="mt-1.5 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 outline-none text-white text-sm transition"
                placeholder={t("admin.titleLabel")}
              />
            </label>

            <label className="block">
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                {t("admin.descLabel")} ({activeLang.toUpperCase()})
              </span>
              <textarea
                value={form.translations[activeLang].description}
                onChange={(e) =>
                  setLangField(activeLang, "description", e.target.value)
                }
                rows={2}
                className="mt-1.5 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 outline-none text-white text-sm resize-none transition"
                placeholder={t("admin.descLabel")}
              />
            </label>
          </div>

          {/* ITEMS + PRICE */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-white">
                {t("admin.items")}
              </span>
              <button
                type="button"
                onClick={addItemRow}
                className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-medium transition flex items-center gap-1.5 cursor-pointer"
              >
                <Plus size={14} />
                {t("admin.addItem")}
              </button>
            </div>

            {form.items.length === 0 ? (
              <p className="text-sm text-gray-500 py-4 text-center border border-dashed border-white/10 rounded-xl">
                {t("admin.noItems")}
              </p>
            ) : (
              <div className="flex flex-col gap-2">
                {form.items.map((it) => (
                  <div
                    key={it.id}
                    className="flex gap-2 items-center bg-white/5 border border-white/10 rounded-xl p-2"
                  >
                    <input
                      type="text"
                      value={it.translations[activeLang].name}
                      onChange={(e) =>
                        setItemName(it.id, activeLang, e.target.value)
                      }
                      placeholder={`${t("admin.itemName")} (${activeLang.toUpperCase()})`}
                      className="flex-1 min-w-0 px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500/50 outline-none text-white text-sm transition"
                    />
                    <div className="flex items-center gap-1 shrink-0">
                      <input
                        type="text"
                        inputMode="numeric"
                        value={it.price}
                        onChange={(e) => setItemPrice(it.id, e.target.value)}
                        placeholder={t("admin.price")}
                        className="w-28 px-3 py-2 rounded-lg bg-white/5 border border-white/10 focus:border-blue-500/50 outline-none text-white text-sm text-right transition"
                      />
                      <span className="text-xs text-gray-500 w-9">
                        {t("admin.currency")}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItemRow(it.id)}
                      className="w-9 h-9 shrink-0 rounded-lg bg-white/5 hover:bg-red-500/20 border border-white/10 hover:border-red-500/40 text-gray-300 hover:text-red-300 flex items-center justify-center transition cursor-pointer"
                      title={t("admin.delete")}
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-gray-200 text-sm font-medium transition cursor-pointer"
            >
              {t("admin.cancel")}
            </button>
            <button
              type="submit"
              disabled={!isValid}
              className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/40 disabled:cursor-not-allowed text-white text-sm font-semibold transition cursor-pointer flex items-center justify-center gap-2"
            >
              <Check size={16} />
              {t("admin.save")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryForm;
