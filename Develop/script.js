// Assignment code here
var passwordEl = document.querySelector("#password");
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

  //convert user's response to lowercase
  promptCharacters = promptCharacters.toLowerCase();

  if (promptCharacters === "no") {
    var specialChar = [""];
    //function to choose lowercase, uppercase, or both
    var askPasswordCase = function() {
      var promptCase = window.prompt('Would you like only lowercase letters, only uppercase letters, or both? Type "lower", "upper", or "both".');
    
      //if they don't enter valid answer
      if (promptCase === "" || promptCase === null) {
        window.alert('Please type "lower", "upper", or "both".');
        return askPasswordCase();
      }

      //convert user's response to lowercase
      promptCase = promptCase.toLowerCase();

      if (promptCase === "lower") {
        var passwordCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        console.log(passwordCase);
      }

      if (promptCase === "upper") {
        var passwordCase =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        console.log(passwordCase);
      }

      if (promptCase === "both") {
        var passwordCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        console.log(passwordCase);
      }
    }
  }
  
  if (promptCharacters === "yes") {
    var specialChar = ['!', '”', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '}', '|', '~' ];
        
    function shuffleArray(specialChar) {
      specialChar.sort(() => Math.random() - 0.5);
    }
    
    shuffleArray(specialChar);
    console.log(specialChar);

  }
};


//function to choose number of characters in password
  function chooseNumber() {
    var numberOfChar = window.prompt("How many characters do you want your password to be? Choose a number between 8 and 128.");

    //if they don't enter valid answer
    if (numberOfChar === "" || numberOfChar === null) {
      window.alert("Please choose a number between 8 and 128.");
      return chooseNumber();
    } 

    //if they type number below 8
    else if (count < 8) {
      window.alert("Please choose a number higher than 8.");
    }
    
    //if they type a number higher than 128
    else if (count > 128) {
      window.alert("Please choose a number lower than 128.");
    }

    //if they type number between 8-128
    if (count >= 8 && count <= 128) {
      var numberOfChar = console.log("your number is between 8 and 128 good job")
    }
  };





function generatePassword() {

}


//function to set


//function to generate password
// var password = {
//   passwordLength: getPasswordLength(),

// }




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
