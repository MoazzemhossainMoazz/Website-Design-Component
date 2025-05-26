//1st system

/*const showPassword = document.querySelector("#show-password");
const passwordField = document.querySelector("#password");

showPassword.addEventListener("click", function(){
    this.classList.toggle("fa-eye-slash");
    const type= passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
})*/

//2nd system

/*var a;
function pass(){
    if(a==1){
        document.getElementById('password').type='password';
        document.getElementBuId('pass-icon').src='eyeHide.png';
        a=0;
    }
    else{
        document.getElementById('password').type='text';
        document.getElementById('pass-icon').src='eyeOpen.png';
        a=1;
    }
}*/


//3rd system
$(document).ready(function() {
  $("#showPass").click(function() {
    if ($("#myPass").attr("type") == "password") {
      $("#myPass").attr("type", "text");
    } else {
      $("#myPass").attr("type", "password");
    }
  });
  $("#showPass").click(function() {
    $("#showPass i").toggle();
  });
});