// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBozUjAUF9bMns00CgruBsmt6leJYzyzXA",
    authDomain: "impact-chain-6b58d.firebaseapp.com",
    projectId: "impact-chain-6b58d",
    storageBucket: "impact-chain-6b58d.firebasestorage.app",
    messagingSenderId: "122965503355",
    appId: "1:122965503355:web:207af1d6adc0b12684e1de",
    measurementId: "G-X7YPRTZ8VT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const analytics = getAnalytics(app);

export default app; 