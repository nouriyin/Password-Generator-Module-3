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
  console.log("hello") 
  
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
