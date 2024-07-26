// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoLChkGlqmMZQQkYVy0H6icaJr-XKG34Q",
  authDomain: "netflixgpt-bc476.firebaseapp.com",
  projectId: "netflixgpt-bc476",
  storageBucket: "netflixgpt-bc476.appspot.com",
  messagingSenderId: "83932623178",
  appId: "1:83932623178:web:767f4fffe11297c3c9d1b3",
  measurementId: "G-LKR49XN4HE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth= getAuth();