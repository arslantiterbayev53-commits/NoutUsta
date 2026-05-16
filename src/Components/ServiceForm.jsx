import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { X, Check } from "lucide-react";
import ServiceIcon, { ICON_NAMES } from "./ServiceIcon";

const emptyForm = () => ({
  icon: "Laptop",
  translations: {
    uz: { title: "", description: "" },
    ru: { title: "", description: "" },
    en: { title: "", description: "" },
  },
});

const LANG_LABELS = { uz: "O'zbek", ru: "Русский", en: "English" };

const ServiceForm = ({
  open,
  initial,
  onClose,
  onSave,
  titleNewKey = "admin.newServiceTitle",
  titleEditKey = "admin.editServiceTitle",
}) => {
  const { t } = useTranslation();
  const [form, setForm] = useState(emptyForm);
  const [activeLang, setActiveLang] = useState("uz");

  useEffect(() => {
    if (open) {
      setForm(initial ? structuredClone(initial) : emptyForm());
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

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(form);
  };

  const isValid = ["uz", "ru", "en"].every(
    (l) => form.translations[l].title.trim().length > 0
  );

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center px-4 py-8"
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
          {initial ? t(titleEditKey) : t(titleNewKey)}
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
          <div>
            <div className="flex gap-2 mb-3 border-b border-white/10">
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

            <div className="flex flex-col gap-4">
              <label className="block">
                <span className="text-xs text-gray-400 uppercase tracking-wider">
                  {t("admin.titleLabel")} ({activeLang.toUpperCase()})
                </span>
                <input
                  type="text"
                  value={form.translations[activeLang].title}
                  onChange={(e) =>
                    setLangField(activeLang, "title", e.target.value)
                  }
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
                  rows={3}
                  className="mt-1.5 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500/50 outline-none text-white text-sm resize-none transition"
                  placeholder={t("admin.descLabel")}
                />
              </label>
            </div>
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

export default ServiceForm;
