import { createContext, useContext, useEffect, useState } from "react";
import { categories as defaultCategories } from "../data/categories";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";

const CategoriesContext = createContext(null);

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const snapshot = await getDocs(collection(db, "categories"));
        if (snapshot.empty) {
          for (const cat of defaultCategories) {
            await setDoc(doc(db, "categories", cat.slug), cat);
          }
          setCategories(defaultCategories);
        } else {
          const data = snapshot.docs.map((d) => ({ ...d.data(), slug: d.id }));
          setCategories(data);
        }
      } catch (err) {
        console.error(err);
        setCategories(defaultCategories);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const addCategory = async (data) => {
    const slug = `cat-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
    const newCat = { ...data, slug };
    await setDoc(doc(db, "categories", slug), newCat);
    setCategories((prev) => [...prev, newCat]);
    return newCat;
  };

  const updateCategory = async (slug, data) => {
    await updateDoc(doc(db, "categories", slug), data);
    setCategories((prev) =>
      prev.map((c) => (c.slug === slug ? { ...c, ...data, slug } : c))
    );
  };

  const deleteCategory = async (slug) => {
    await deleteDoc(doc(db, "categories", slug));
    setCategories((prev) => prev.filter((c) => c.slug !== slug));
  };

  const resetCategories = async () => {
    for (const cat of defaultCategories) {
      await setDoc(doc(db, "categories", cat.slug), cat);
    }
    setCategories(defaultCategories);
  };

  const getCategory = (slug) =>
    categories.find((c) => c.slug === slug) || null;

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        loading,
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