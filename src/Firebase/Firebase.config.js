// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-VW5o0H7Z9yGPVB3qDIau64GNNBNmZT0",
  authDomain: "jute-and-timberzone.firebaseapp.com",
  projectId: "jute-and-timberzone",
  storageBucket: "jute-and-timberzone.appspot.com",
  messagingSenderId: "358357458575",
  appId: "1:358357458575:web:29674d2f80ca042f7a1afa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;