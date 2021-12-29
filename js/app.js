// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUA988gaa78nHtljW2Ht2v-QQWlcTrdKk",
  authDomain: "king-masr.firebaseapp.com",
  databaseURL: "https://king-masr-default-rtdb.firebaseio.com",
  projectId: "king-masr",
  storageBucket: "king-masr.appspot.com",
  messagingSenderId: "198779631066",
  appId: "1:198779631066:web:638e5f7685dee719f8fce3",
  measurementId: "G-2CXGG2Z0FJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const { initializeApp } = require("firebase/app");
const {
  initializeAppCheck,
  ReCaptchaV3Provider,
} = require("firebase/app-check");

// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
const appCheck = initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6Ldw2nAdAAAAABWKlnUxGkeDwysiQXqNDQytjk5q"),

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  isTokenAutoRefreshEnabled: true,
});
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    // ..
  });