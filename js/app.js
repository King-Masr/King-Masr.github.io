// $(document).ready(function () {
//   $("input#signup").click(function (e) {
//     e.preventDefault();
//     let name = $().val();
//     let name = $().val();
//     let name = $().val();
//     let name = $().val();
//   });
// });
/* window.onload = function () {
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.0/firebase-auth.js";
  let auth = getAuth();
  document.getElementById("signup").addEventListener("click", function (e) {
    e.preventDefault()
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
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
}; */
window.onload = function () {
  let signupBtn = document.getElementById("signup");
  signupBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
  });
}