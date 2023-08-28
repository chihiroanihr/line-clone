import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAmeM-iBcBXyy9dwCgkNmUrAIMYHWANHuY",
  authDomain: "line-clone-c9886.firebaseapp.com",
  projectId: "line-clone-c9886",
  storageBucket: "line-clone-c9886.appspot.com",
  messagingSenderId: "819854246645",
  appId: "1:819854246645:web:182103990f50c23de27bbc",
  measurementId: "G-68H84Y33YX",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
