import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyALwFKuqD3BMarhpBNT2ppghahrAj9p-Yk",
  authDomain: "quanlydatxe-b8e9a.firebaseapp.com",
  projectId: "quanlydatxe-b8e9a",
  storageBucket: "quanlydatxe-b8e9a.appspot.com",
  messagingSenderId: "459795689158",
  appId: "1:459795689158:web:8ad6a4cf0b91c8cc7131c7",
  measurementId: "G-FL55GH4HWR"
};

const firebase = initializeApp(firebaseConfig);

const projectAuth = getAuth(firebase);

const projectFileStore = getFirestore(firebase);

const projectStorage = getStorage(firebase);

export { firebase, projectAuth, projectFileStore, projectStorage };
