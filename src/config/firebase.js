// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import  {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2CV51D_4Ntn8Xhj5L1qHyp2H63e9bt0k",
  authDomain: "vite-contact-dfec4.firebaseapp.com",
  projectId: "vite-contact-dfec4",
  storageBucket: "vite-contact-dfec4.appspot.com",
  messagingSenderId: "589066802101",
  appId: "1:589066802101:web:83d852e0be860100b67ffc"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);