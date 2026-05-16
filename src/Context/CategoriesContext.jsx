import { createContext, useContext, useEffect, useState } from "react";
import { categories as defaultCategories } from "../data/categories";

const STORAGE_KEY = "noutusta_categories_v2";

const CategoriesContext = createContext(null);

const loadFromStorage = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultCategories;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) return defaultCategories;
    return parsed;
  } catch {
    return defaultCategories;
  }
};

const genSlug = () => `cat-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState(loadFromStorage);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(categories));
  }, [categories]);

  const addCategory = (data) => {
    const newCat = { ...data, slug: genSlug() };
    setCategories((prev) => [...prev, newCat]);
    return newCat;
  };

  const updateCategory = (slug, data) => {
    setCategories((prev) =>
      prev.map((c) => (c.slug === slug ? { ...c, ...data, slug } : c))
    );
  };

  const deleteCategory = (slug) => {
    setCategories((prev) => prev.filter((c) => c.slug !== slug));
  };

  const resetCategories = () => {
    setCategories(defaultCategories);
  };

  const getCategory = (slug) =>
    categories.find((c) => c.slug === slug) || null;

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        addCategory,
        updateCategory,
        deleteCategory,
        resetCategories,
        getCategory,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};

export const useCategories = () => {
  const ctx = useContext(CategoriesContext);
  if (!ctx) throw new Error("useCategories must be used within CategoriesProvider");
  return ctx;
};
