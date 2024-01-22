/******************
Login One Script
*****************/

const viewBtn = document.querySelector("[data-password]");
const password_input = document.getElementById("password");

viewBtn.addEventListener("click",function(e){

    if (password_input.type === "password") {
    password_input.type = "text";
  } else if (password_input.type === "text") {
    password_input.type = "password";
  }

},false);
