import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBp1efUwJ1pEn35exeZkMAWwo5Jn2-O1jE",
  authDomain: "chat-926f9.firebaseapp.com",
  projectId: "chat-926f9",
  storageBucket: "chat-926f9.appspot.com",
  messagingSenderId: "592392296205",
  appId: "1:592392296205:web:5a27883d480a4f52524244"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()