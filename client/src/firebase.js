// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-e7a4e.firebaseapp.com",
    projectId: "mern-blog-e7a4e",
    storageBucket: "mern-blog-e7a4e.firebasestorage.app",
    messagingSenderId: "954803111664",
    appId: "1:954803111664:web:8f309b9fea396725926435"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);