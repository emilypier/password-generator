// Assignment code here
var generateBtn = document.querySelector("#generate"); //from starter code
var passwordEl = document.querySelector("#password"); //will be finished password?

//declaring function to choose lowercase, uppercase, or both
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
    passwordCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    chooseNumber(); //calling chooseNumber function
  }

  if (promptCase === "upper") {
    passwordCase =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    chooseNumber(); //calling chooseNumber function
  }

  if (promptCase === "both") {
    passwordCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    chooseNumber(); //calling chooseNumber function
  }
};

//declaring function to choose number of characters in password
function chooseNumber() {
  var passwordLength = window.prompt("How many characters do you want your password to be? Choose a number between 8 and 128.");

  //if they type number between 8-128
  if (passwordLength >= 8 && passwordLength <= 128) {
    //passwordLength = number user entered
    passwordLength = passwordLength
    combineArray(); //calling the combineArray function
  }
  
  //if they don't enter valid answer
  if (passwordLength === "" || passwordLength === null) {
    window.alert("Please choose a number between 8 and 128.");
    return chooseNumber();
  } 

  //if they type number below 8
  else if (passwordLength < 8) {
    window.alert("Please choose a number higher than 8.");
    return chooseNumber();
  }
  
  //if they type a number higher than 128
  else if (passwordLength > 128) {
    window.alert("Please choose a number lower than 128.");
    return chooseNumber();
  }
};

// FIRST PROMPT
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
      specialChar = [""];
      askPasswordCase(); //calling passwordCase function
    }
  
    if (promptCharacters === "yes") {
      specialChar = ['!', '”', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '}', '|', '~' ];
      askPasswordCase(); //calling passwordCase function
    }
  };

  // combine all arrays to make one big array
  function combineArray() {
    var combinedArray = [].concat(specialChar, passwordCase);
  
    //declaring shuffleArray function
    function shuffleArray(arr) {
      arr.sort(() => Math.random() - 0.5);
    }
  
    //calling shuffleArray function to shuffle combinedArray
    var arr = combinedArray
    shuffleArray(arr);
    console.log(arr)
    // console.log("here is the new array?" + shuffleCombinedArray);
  }
  //slice array

function generatePassword() {}

//   return
// }


//function to generate password
// // var password = {
// //   passwordLength: getPasswordLength()
//    console.log("here's the password length")
// }


// function writePassword() {}


// // // Write password to the #password input

// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;} //