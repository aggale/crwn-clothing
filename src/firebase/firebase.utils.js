import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBwAXr9VrPqYQ_5fz5Z62caZ8FtlY_T4LE",
  authDomain: "crwn-db-e42c1.firebaseapp.com",
  projectId: "crwn-db-e42c1",
  storageBucket: "crwn-db-e42c1.appspot.com",
  messagingSenderId: "62029113317",
  appId: "1:62029113317:web:196bcf788a0c1937fcf10c",
  measurementId: "G-LY0HPEJRSW",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
