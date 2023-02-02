// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Creating password object.
var pwdCriteria = {


//Property for length of password
  minLength: 8, 
  maxLength: 128,

}
function generatePassword() {
  var hasSpecialCharacter = false
  var passwordLength = window.prompt("How long is your password?")
  var includesLowercase = window.prompt("Do you want to include lowercase letters?")
  var includesUppercase = window.prompt("Do you want to include uppercase letters?")
  var includesNumbers = window.prompt("What about numbers?")
  var includesSpecialCharacters = window.prompt("Are you adding any special characters?")
for(var x = 0; x === passwordLength; x++) {
  
}
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
