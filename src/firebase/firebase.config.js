// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlCde9IfD-AcHdTkCv0enJLhAlWk_gzek",
  authDomain: "chef-recipe-hunter-clien-3c75a.firebaseapp.com",
  projectId: "chef-recipe-hunter-clien-3c75a",
  storageBucket: "chef-recipe-hunter-clien-3c75a.appspot.com",
  messagingSenderId: "446538568848",
  appId: "1:446538568848:web:0b280c865dc075fd6ab415"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;