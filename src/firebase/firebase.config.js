// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeYeBnDORSNi07MGXFh7mOokikFN4dObE",
    authDomain: "skypearl-learning.firebaseapp.com",
    projectId: "skypearl-learning",
    storageBucket: "skypearl-learning.appspot.com",
    messagingSenderId: "685952343693",
    appId: "1:685952343693:web:915fc09af974a4fb468cc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;