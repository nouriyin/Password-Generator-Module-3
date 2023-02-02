// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Creating password object.
var pwdCriteria = {


//Property for length of password
  minLength: 8, 
  maxLength: 128,

}
var characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var numbers = ["0","1","2","3","4","5","6","7","8","9"]
var specialCharacters = [".","*","?","!"]
function generatePassword() {
  var password = ""
  var hasSpecialCharacter = false
  var passwordLength = window.prompt("How long is your password?")
  var includesLowercase = window.prompt("Do you want to include lowercase letters?")
  var includesUppercase = window.prompt("Do you want to include uppercase letters?")
  var includesNumbers = window.prompt("What about numbers?")
  var includesSpecialCharacters = window.prompt("Are you adding any special characters?")
for(var x = 0; x <= passwordLength; x++) {
password = password + characters[Math.floor(Math.random() * (26 - 0 + 1) + 0)]
console.log(password)
}
return password
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
