// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkHZO7wuwBo4lTsSEiEGzdQ3RuXfDh-CI",
  authDomain: "insta-clone-lord.firebaseapp.com",
  projectId: "insta-clone-lord",
  storageBucket: "insta-clone-lord.appspot.com",
  messagingSenderId: "934192633304",
  appId: "1:934192633304:web:89abcd0fcd9ab967344ead",
  measurementId: "G-26P6VN41NV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
const firestore=getFirestore(app);
const storage=getStorage(app);
export {app,auth,firestore,storage};