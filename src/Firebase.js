// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYyK-w6Kfx0qSkex11AsADcqDK8udqODs",
  authDomain: "blog-project-aa9b9.firebaseapp.com",
  projectId: "blog-project-aa9b9",
  storageBucket: "blog-project-aa9b9.appspot.com",
  messagingSenderId: "1039833774056",
  appId: "1:1039833774056:web:8b34f4a476af4f94e5965d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()