import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCtV0_Ww_wp9YWTlJv5pyPqWjWzaQA4wD0",
  authDomain: "todoapp-8d732.firebaseapp.com",
  projectId: "todoapp-8d732",
  storageBucket: "todoapp-8d732.appspot.com",
  messagingSenderId: "790423796259",
  appId: "1:790423796259:web:ceabf6972e08a429fd8f96",
  measurementId: "G-7K7XLPEBF6"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };