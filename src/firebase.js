// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjQZ4XFijaWz4sKSliI2e-Bdif28kV3-4",
  authDomain: "ecommerce-53afd.firebaseapp.com",
  projectId: "ecommerce-53afd",
  storageBucket: "ecommerce-53afd.appspot.com",
  messagingSenderId: "186366077161",
  appId: "1:186366077161:web:4d40effc606bb4d7392878"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;