// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCIQs2GTmdPa30Qq0qiMcCSzWLeQvks3-I",
  authDomain: "fir-authentication-again-f395c.firebaseapp.com",
  projectId: "fir-authentication-again-f395c",
  storageBucket: "fir-authentication-again-f395c.firebasestorage.app",
  messagingSenderId: "677069255662",
  appId: "1:677069255662:web:34d31216860dd3f60d54ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;