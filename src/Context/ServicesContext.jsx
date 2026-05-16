import { createContext, useContext, useEffect, useState } from "react";
import { defaultServices } from "../data/defaultServices";

const STORAGE_KEY = "noutusta_services";

const ServicesContext = createContext(null);

const loadFromStorage = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultServices;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) return defaultServices;
    return parsed;
  } catch {
    return defaultServices;
  }
};

const genId = () => `svc-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;

export const ServicesProvider = ({ children }) => {
  const [services, setServices] = useState(loadFromStorage);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(services));
  }, [services]);

  const addService = (data) => {
    const newService = { ...data, id: genId() };
    setServices((prev) => [...prev, newService]);
    return newService;
  };

  const updateService = (id, data) => {
    setServices((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...data, id } : s))
    );
  };

  const deleteService = (id) => {
    setServices((prev) => prev.filter((s) => s.id !== id));
  };

  const resetServices = () => {
    setServices(defaultServices);
  };

  return (
    <ServicesContext.Provider
      value={{ services, addService, updateService, deleteService, resetServices }}
    >
      {children}
    </ServicesContext.Provider>
  );
};

export const useServices = () => {
  const ctx = useContext(ServicesContext);
  if (!ctx) throw new Error("useServices must be used within ServicesProvider");
  return ctx;
};
