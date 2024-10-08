import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRpn55qSqj8t-OSFnDwyh437tWvpQBBJk",
  authDomain: "instaclone-2b7e0.firebaseapp.com",
  projectId: "instaclone-2b7e0",
  storageBucket: "instaclone-2b7e0.appspot.com",
  messagingSenderId: "989144430861",
  appId: "1:989144430861:web:59e8917b14d407d04ad844",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
