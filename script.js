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
     numbers: confirm("Would you like to include numbers?"),
     upperCase: confirm("Would you like to include uppercase letters?"),
     lowerCase: confirm("Would you like to include lowercase letters?"),
     special: confirm("Would you like to include special letters?"),
     length: acceptableLimit(parseInt(
       prompt("Choose a character count between 8 and 128 characters.")
       )),
     }

     function acceptableLimit(num) {
      if (7 < num && num < 128){
      return num
      } else {
        alert("Make a vaid selection.")
     }
    }

     if (password.numbers === false && password.upperCase === false && password.lowerCase === false && password.special === false) {
      alert("Please choose at least one character set.")
      }

    console.log (password.numbers);
    console.log(password.upperCase);
    console.log(password.lowerCase);
    console.log(password.special);
    console.log(
      "Your password is " + password.length + " characters in length"
    );

    // Generate Password


    // Loop to fill PW
    
    
    // function to ensure password is the appropriate length
    // while loop? Kept showing up as undefined, but it seemed like the right approach to force users into retrying until they input a valid charcount
  }
}

//get character set
function getNumber() {
  const number = "1234567890";
  return number[Math.floor(Math.random() * number.length)]
}
function getUpper() {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return upper[Math.floor(Math.random() * upper.length)]
}
function getLower() {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  return lower[Math.floor(Math.random() * lower.length)]
}
function getSpecial() {
  const special = "!@#$%^&*()<>?{}][:;";
  return special[Math.floor(Math.random() * special.length)]
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
