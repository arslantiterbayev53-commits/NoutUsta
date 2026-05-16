import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeq9VhgDFkuj4wX_8h9Wtgj7XHJO9vpcY",
  authDomain: "noutusta.firebaseapp.com",
  projectId: "noutusta",
  storageBucket: "noutusta.firebasestorage.app",
  messagingSenderId: "502064757704",
  appId: "1:502064757704:web:1a1993eee062fa93151efd"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);