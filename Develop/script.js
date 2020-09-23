// generate random password
function writePassword(){

  // Assignment Code
  var generateBtn = document.getElementById("#btn").value;
  
  // Write password to the #password input
  var values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*=-_";
  var password = "";
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

  
  //create for loop to choose password characters
  for(var i = 0; i <= generateBtn; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }
  return password;
  
  // add password to display area
  var password = Password();
  document.getElementById("textarea#password").value = password;
  
  }
  

  console.log("testing for progress")