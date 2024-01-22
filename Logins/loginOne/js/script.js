/******************
Login One Script
*****************/

const viewBtn = document.querySelector("[data-password]");
const password_input = document.getElementById("password");
const pwdIcon = viewBtn.children[0];

viewBtn.addEventListener("click",function(e){
    pwdIcon.classList.toggle("fa-eye-slash");
    if (password_input.type === "password") {
      password_input.type = "text";
    } else if (password_input.type === "text") {
      password_input.type = "password";
    }
},false);
