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
  //makes user's answer a variable
  var passwordLength = window.prompt("How many characters do you want your password to be? Choose a number between 8 and 128.");
  
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

  //if they type number between 8-128
  else (passwordLength >= 8 && passwordLength <= 128); {
    //combine all arrays to make one big array
    combinedArray();
    function combinedArray() {
      newArray = [].concat(specialChar, passwordCase);
      // generatePassword(); //calling generatePassword function
    }


    //function to generate password
    generatePassword();
    function generatePassword() {
      const newArray = [].concat(specialChar, numericChar, passwordCase);
      const chooseRandom = (newArray, num = 1) => {
        const res = [];
        for(let i = 0; i < num; ){
          const random = Math.floor(Math.random() * newArray.length);
          if(res.indexOf(newArray[random]) !== -1){
              continue;
          };
          res.push(newArray[random]);
          i++;
        };
        return res;
      };

      // Write generated password to the #password input
        writePassword();
        function writePassword() {
          //password = result of this function which picks passwordLength amount of characters from new array.
          var password = (chooseRandom(newArray, passwordLength));
          var passwordText = document.querySelector("#password");
          passwordText.value = password.join(""); //.join("") removes commas bw array
        }
    };
  };
};


  //SECOND PROMPT
  //function to say if they want numbers
  function askNumbers() {
    var promptNumbers = window.prompt("Do you want your password to include numbers?");
    
    //if they don't enter valid answer
    if (promptNumbers === "" || promptNumbers === null) {
      window.alert("Please provide a valid answer.");
      return askNumbers();
    }

    //convert user's response to lowercase
    promptNumbers = promptNumbers.toLowerCase();

    if (promptNumbers === "no") {
      numericChar = [""];
      askPasswordCase(); //calling passwordCase function
    }
  
    if (promptNumbers === "yes") {
      numericChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
      askPasswordCase(); //calling passwordCase function
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
      askNumbers(); //calling askNumbers function
    }
  
    if (promptCharacters === "yes") {
      specialChar = ['!', '”', '#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '{', '}', '|', '~' ];
      askNumbers(); //calling askNumbers function
    }
  };