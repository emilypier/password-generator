// Assignment code here
// var passwordEl = document.querySelector("#password");
var generateBtn = document.querySelector("#generate"); //from starter code

// buttonEl.addEventListener("click", function() 
// { window.prompt();
// });

generateBtn.addEventListener("click", specialOrReg);
  //function to say if they want special characters
  function specialOrReg() {
    var promptCharacters = window.prompt("Do you want your password to include special characters?");
    
    //if they don't enter valid answer
    if (promptCharacters === "" || promptCharacters === null) {
      window.alert("Please provide a valid answer.");
      return specialOrReg();
  }

  //convert their response to lowercase
  promptCharacters = promptCharacters.toLowerCase();

  if (promptCharacters === "no") {
    function generatePassword() {
    }
  }
  else if (promptCharacters === "yes") {
    var specialChar = ['!', '”', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '}', '|', '~' ];
        
    function shuffleArray(specialChar) {
      specialChar.sort(() => Math.random() - 0.5);
    }

    shuffleArray(specialChar);
    console.log(specialChar);
  }
};


  //function to set password length
  function getPasswordLength() {
      var passwordLength = window.prompt("How long do you want your password?"); 
  };



function generatePassword () {

}

  //   var length = "";
    
  //   while (length === "" || length === null) {
  //     length = prompt("How long do you want your password? Choose a number between 8 and 128");
  //   }
  //   return length;
  // };

//function to set


//function to generate password
// var password = {
//   passwordLength: getPasswordLength(),

// }



// generateBtn.addEventListener("click", function(promptPasswordLength) {
//   if (count < 8 || count > 128) {
//     window.alert("Please choose a number between 8 and 128.")
//   }

//   if (count > 8)


// function promptPasswordLength() {
//   if (count < 8 || count > 128) {
//     window.alert("Please choose a number between 8 and 128.")
// }

//   if (count > 8 && count < 128) {
//     return length;
//   }
// };

// function writePassword () {
  












// // given code below
// // // Get references to the #generate element
// // var generateBtn = document.querySelector("#generate");

// // // Write password to the #password input
// // function writePassword() {
// //   var password = generatePassword();
// //   var passwordText = document.querySelector("#password");

// //   passwordText.value = password;

// // }

// // // Add event listener to generate button
// // generateBtn.addEventListener("click", writePassword);
