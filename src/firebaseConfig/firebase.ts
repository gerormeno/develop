import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6oT0vUc4ag07J0SxYngOKO5A7Suy0m_E",
  authDomain: "kiev-ingenieria-ecommerc-800f3.firebaseapp.com",
  projectId: "kiev-ingenieria-ecommerc-800f3",
  storageBucket: "kiev-ingenieria-ecommerc-800f3.appspot.com",
  messagingSenderId: "903265745820",
  appId: "1:903265745820:web:f95c4bffe4a0e6825a2659",
  measurementId: "G-G28BZPS09M"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);