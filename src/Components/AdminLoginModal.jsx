import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { X, Lock, User, ShieldCheck } from "lucide-react";
import { useAuth } from "../Context/AuthContext";

const AdminLoginModal = ({ open, onClose }) => {
  const { t } = useTranslation();
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) {
      setUsername("");
      setPassword("");
      setError("");
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(username.trim(), password)) {
      onClose();
      navigate("/admin");
    } else {
      setError(t("admin.error"));
    }
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-md bg-[#0b1426] border border-white/10 rounded-3xl p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition cursor-pointer"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="w-14 h-14 rounded-2xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center mb-5">
          <ShieldCheck className="text-blue-400" size={26} />
        </div>

        <h2 className="text-2xl font-bold text-white mb-2">
          {t("admin.modalTitle")}
        </h2>
        <p className="text-sm text-gray-400 mb-6">
          {t("admin.modalSubtitle")}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="block">
            <span className="text-xs text-gray-400 uppercase tracking-wider">
              {t("admin.loginLabel")}
            </span>
            <div className="mt-1.5 flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus-within:border-blue-500/50 transition">
              <User size={16} className="text-gray-500" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder={t("admin.loginPlaceholder")}
                className="bg-transparent outline-none w-full text-white placeholder:text-gray-600 text-sm"
                autoFocus
                autoComplete="username"
              />
            </div>
          </label>

          <label className="block">
            <span className="text-xs text-gray-400 uppercase tracking-wider">
              {t("admin.passwordLabel")}
            </span>
            <div className="mt-1.5 flex items-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus-within:border-blue-500/50 transition">
              <Lock size={16} className="text-gray-500" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t("admin.passwordPlaceholder")}
                className="bg-transparent outline-none w-full text-white placeholder:text-gray-600 text-sm"
                autoComplete="current-password"
              />
            </div>
          </label>

          {error && (
            <div className="px-3 py-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-300 text-sm">
              {error}
            </div>
          )}

          <div className="flex gap-3 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-gray-200 text-sm font-medium transition cursor-pointer"
            >
              {t("admin.cancel")}
            </button>
            <button
              type="submit"
              className="flex-1 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition cursor-pointer"
            >
              {t("admin.submit")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginModal;
