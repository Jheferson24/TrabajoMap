import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-auth.js';
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD4xDNZim4SSeXBjc8HPqrZ9TgW8zSO0PM",
  authDomain: "phrasal-lantern-328814.firebaseapp.com",
  projectId: "phrasal-lantern-328814",
  storageBucket: "phrasal-lantern-328814.appspot.com",
  messagingSenderId: "1051693165897",
  appId: "1:1051693165897:web:e87b821c97b1284272be98",
  measurementId: "G-680MQT7VW2"
};

const app = initializeApp(firebaseConfig); 
const auth = getAuth();
const db = getFirestore();

export const loginvalidation=(email,password)=>signInWithEmailAndPassword(auth,email,password)
export const registeruser=(email,password)=>createUserWithEmailAndPassword(auth,email,password)