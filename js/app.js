$(document).ready(function () {
  $("input#signup").click(function (e) {
    e.preventDefault();
    let name = $("input#name").val();
    let email = $("input#email").val();
    let password = $("input#password").val();
  });
  // import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  // const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
});
