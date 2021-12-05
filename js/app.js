// $(document).ready(function () {
//   $("input#signup").click(function (e) {
//     e.preventDefault();
//     let name = $().val();
//   });
// });
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-analytics.js";
// Add Firebase products that you want to use
import { auth } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
  apiKey: "AIzaSyBUA988gaa78nHtljW2Ht2v-QQWlcTrdKk",
  authDomain: "king-masr.firebaseapp.com",
  projectId: "king-masr",
  storageBucket: "king-masr.appspot.com",
  messagingSenderId: "198779631066",
  appId: "1:198779631066:web:3ae309a5ba18b65ff8fce3",
  measurementId: "G-5041KQ05RX",
};

// Initialize Firebase
let app = initializeApp(firebaseConfig);
let analytics = getAnalytics(app);
// console.log(app);
window.onload = function () {
  document.getElementById("signup").addEventListener("click", function (e) {
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let password = document.getElementById("password").value;
      import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
      let auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          let user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          let errorCode = error.code;
          let errorMessage = error.message;
          console.log(errorMessage);
        });
    });
};