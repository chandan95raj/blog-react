import { initializeApp } from "firebase/app";
import {signInWithEmailAndPassword ,createUserWithEmailAndPassword ,GoogleAuthProvider,getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCK4IIfuOkwNTMYgA0Z-gHKUfLxejRlpek",
  authDomain: "blog-dc3a5.firebaseapp.com",
  projectId: "blog-dc3a5",
  storageBucket: "blog-dc3a5.appspot.com",
  messagingSenderId: "284326991844",
  appId: "1:284326991844:web:37271108516ea80f5019f1",
  measurementId: "G-XR4H702M9H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);

export {auth,signInWithEmailAndPassword,GoogleAuthProvider,createUserWithEmailAndPassword};