  // Assignment Code
  var generateBtn = document.getElementById("generateBtn");

// generate random password
function writePassword(){
  console.log("testing for progress")

  // Write password to the #password input
  var values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*=-_";
  var password = "";
  

  function writePassword(){
    document.getElementById("generate").value = password;
  }

  //create for loop to choose password characters
  for(var i = 0; i <= 10; i++){
    password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
  }
 console.log(password)
  
  // add password to display area
  document.getElementById("password").value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);

  