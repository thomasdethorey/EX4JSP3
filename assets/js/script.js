function changementCouleur(){
var password = document.getElementById('password').value;
var confirmPassword = document.getElementById('confirmPassword').value;
if (password != confirmPassword){
document.getElementById("password").style.border = "3px solid red";
document.getElementById("confirmPassword").style.border = "3px solid red";
}else{
  document.getElementById("password").style.border = "3px solid lightgreen"
  document.getElementById("confirmPassword").style.border = "3px solid lightgreen"
}
}
