import firebase from "firebase/compat/app";

import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCu69F-BVvuk-5QxJI4w7UuJIh9W53dZqM",
  authDomain: "redluna-firegram.firebaseapp.com",
  projectId: "redluna-firegram",
  storageBucket: "redluna-firegram.appspot.com",
  messagingSenderId: "572529394622",
  appId: "1:572529394622:web:95a8e2ea91c48807366fef"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export {projectStorage, projectFirestore, timestamp};