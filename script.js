// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // function used to generate password
  function generatePassword() {
    // alert users about the parameters of the passwords they'll be generating
    alert("Please generate a password between 8 and 128 characters.");

    // generate key/pair objects for password variable
    var password = {
      upperCase: confirm("Would you like to include uppercase letters?"),
      lowerCase: confirm("Would you like to include lowercase letters?"),
      special: confirm("Would you like to include special letters?"),
      length: parseInt(
        prompt("Choose a character count between 8 and 129 characters.")
      ),
    };
    console.log(password.upperCase);
    console.log(password.lowerCase);
    console.log(password.special);
    console.log(
      "Your password is " + password.length + " characters in length"
    );

    // function to ensure password is the appropriate length
    passwordLength();
    // while loop? Kept showing up as undefined, but it seemed like the right approach to force users into retrying until they input a valid charcount
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
