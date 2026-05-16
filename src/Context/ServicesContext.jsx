import { createContext, useContext, useEffect, useState } from "react";
import { defaultServices } from "../data/defaultServices";
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

const ServicesContext = createContext(null);

export const ServicesProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const snapshot = await getDocs(collection(db, "services"));
        if (snapshot.empty) {
          for (const svc of defaultServices) {
            await setDoc(doc(db, "services", svc.id), svc);
          }
          setServices(defaultServices);
        } else {
          const data = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
          setServices(data);
        }
      } catch (err) {
        console.error(err);
        setServices(defaultServices);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  const addService = async (data) => {
    const ref = await addDoc(collection(db, "services"), data);
    const newSvc = { ...data, id: ref.id };
    setServices((prev) => [...prev, newSvc]);
    return newSvc;
  };

  const updateService = async (id, data) => {
    await updateDoc(doc(db, "services", id), data);
    setServices((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...data, id } : s))
    );
  };

  const deleteService = async (id) => {
    await deleteDoc(doc(db, "services", id));
    setServices((prev) => prev.filter((s) => s.id !== id));
  };

  const resetServices = async () => {
    for (const svc of defaultServices) {
      await setDoc(doc(db, "services", svc.id), svc);
    }
    setServices(defaultServices);
  };

  return (
    <ServicesContext.Provider
      value={{ services, loading, addService, updateService, deleteService, resetServices }}
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