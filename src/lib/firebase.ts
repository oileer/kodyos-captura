import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNYFIjoszS3kSDZ0nT1BetdB4mpnbe-qs",
  authDomain: "ativos-kody.firebaseapp.com",
  projectId: "ativos-kody",
  storageBucket: "ativos-kody.firebasestorage.app",
  messagingSenderId: "324110061726",
  appId: "1:324110061726:web:c6a95f328cb148a1d12b8f",
  measurementId: "G-D9K2BDC09Q",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
