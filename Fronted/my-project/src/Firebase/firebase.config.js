// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDipqewhMDf2jeeuEmTH56rdE6_tVYVh8",
  authDomain: "mern-book-store-a9bd4.firebaseapp.com",
  projectId: "mern-book-store-a9bd4",
  storageBucket: "mern-book-store-a9bd4.appspot.com",
  messagingSenderId: "203010888160",
  appId: "1:203010888160:web:304de6f2b1f50910211b85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app