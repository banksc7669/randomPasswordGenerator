// generate random password
function writePassword (){

// Assignment Code
var generateBtn = document.getElementById("Generate Password").value;

// Write password to the #password input
var values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*=-_";
var password = "";

//create for loop to choose password characters
for(var i = 0; i <= generateBtn; i++){
  password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
}
return password;

// add password to display area
var password = writePassword();
document.getElementById("#wrapper").value = password;

}





