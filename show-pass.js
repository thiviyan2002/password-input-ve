const passwordField = document.querySelector("#password_user");
const passwordrField = document.querySelector("#password_retype");
const eyeIcon= document.querySelector("#eye");

eye.addEventListener("click", function(){
  this.classList.toggle("fa-eye-slash");
  const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);

  passwordrField.setAttribute("type", type);
})


