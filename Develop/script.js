// Assignment code here
var buttonEl = document.querySelector("#generate");
var passwordEl = document.querySelector("#password")
var passwordLength = window.prompt("How long do you want your password?")

// buttonEl.addEventListener("click", function() 
// { window.prompt();
// });

var promptPasswordLength = window.prompt("How long do you want your password?");




// given code below //
// given code below //
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
