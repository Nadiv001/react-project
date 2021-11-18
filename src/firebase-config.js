import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVdoPdgiMLqx-as10ILVYQ1ekUAvIKyPU",
  authDomain: "react-2021-2-nadiv-mejia.firebaseapp.com",
  databaseURL: "https://react-2021-2-nadiv-mejia-default-rtdb.firebaseio.com",
  projectId: "react-2021-2-nadiv-mejia",
  storageBucket: "react-2021-2-nadiv-mejia.appspot.com",
  messagingSenderId: "752172145346",
  appId: "1:752172145346:web:df0d2b5906ea7ada0eb95b",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
