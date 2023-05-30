import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBoO6SSCpGBKmlFur-3k9ky3odhKQdwMyQ",
  authDomain: "appointment-fb8f7.firebaseapp.com",
  projectId: "appointment-fb8f7",
  storageBucket: "appointment-fb8f7.appspot.com",
  messagingSenderId: "750421446749",
  appId: "1:750421446749:web:abcfaa96ebafc060093db4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
