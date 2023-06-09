// Assignment Code
var generateBtn = document.querySelector("#generate");

//Generate Password Function
function generatePassword() {
  //initialize variables
  var includedCharacters = [];
  var generatedPasswordArray = [];
  var generatedPassword = '';

  //prompt password length
  var len = prompt('How many characters do you need?');
  if (Number.isNaN(Number(len))) {
    alert('You must enter a number for the length of your password, please include only numbers between 8 and 128.');
    return '';
  } else if (len < 8) {
    alert('You must enter a number between 8 and 128');
    return ''
  } else if (len > 128) {
    alert('You must enter a number between 8 and 128');
    return ''
  }

  //prompt include special characters
  const specialChars = [' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~'];
  var includeSpecial = confirm('Do you want to include special characters');
  
  // if special characters included: add to array of selected options, push one for our final password & decrease len 
  if (includeSpecial) {
    includedCharacters = [...specialChars];
    generatedPasswordArray.push(specialChars[getRandomInt(specialChars.length)]);
    len--;
  }

  //prompt include numbers
  const numbersZeroToNine = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var includeNums = confirm('Do you want to include numbers?');

  // if numbers included: add to array of selected options, push one for our final password & decrease len
  if (includeNums) {
    includedCharacters.push(...numbersZeroToNine);
    generatedPasswordArray.push(numbersZeroToNine[getRandomInt(numbersZeroToNine.length)]);
    len--;
  }

  //prompt include lowercase
  const lowerCaseLetters = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
  var includeLowerCase = confirm('Do you want to include lowercase letters?');

  // if lowercase included: add to array of selected options, push one for our final password & decrease len
  if (includeLowerCase) {
    includedCharacters.push(...lowerCaseLetters);
    generatedPasswordArray.push(lowerCaseLetters[getRandomInt(lowerCaseLetters.length)]);
    len--;
  }

  //prompt include uppercase
  const upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var includeUowerCase = confirm('Do you want to include uppercase letters?');

  // if uppercase included: add to array of selected options, push one for our final password & decrease len
  if (includeUowerCase) {
    includedCharacters.push(...upperCaseLetters);
    generatedPasswordArray.push(upperCaseLetters[getRandomInt(upperCaseLetters.length)]);
    len--;
  }

  // if no criteria selected notify user
  if (!includeSpecial && !includeNums && !includeLowerCase && !includeUowerCase ) {
    alert('You must select at least one criteria for your password')
    return ''
  }

// generate the final random password

  // looping len times to select random included characters & pushing them into our password array
  for (var i=0; i<len; i++) {
    generatedPasswordArray.push(includedCharacters[getRandomInt(includedCharacters.length)])    
  }

  // joining password array into our final password string
  generatedPassword = generatedPasswordArray.join('')

  return generatedPassword;
}

// function that generates a random number
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);