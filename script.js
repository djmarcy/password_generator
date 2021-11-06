// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // generate password
  function generatePassword() {
    // alert users about the parameters of the passwords they'll be generating
    alert("Please generate a password between 8 and 128 characters.");

    var password = {
      numbers: confirm("Would you like to include numbers?"),
      upperCase: confirm("Would you like to include uppercase letters?"),
      lowerCase: confirm("Would you like to include lowercase letters?"),
      special: confirm("Would you like to include special letters?"),
      length: acceptableLimit(
        parseInt(
          prompt("Choose a character count between 8 and 128 characters.")
        )
      ),
    };

    function acceptableLimit(num) {
      if (7 < num && num < 128) {
        return num;
      } else {
        alert("Make a vaid selection.");
      }
    }

    if (
      password.numbers === false &&
      password.upperCase === false &&
      password.lowerCase === false &&
      password.special === false
    ) {
      alert("Please choose at least one character set.");
    }

    console.log(password.numbers);
    console.log(password.upperCase);
    console.log(password.lowerCase);
    console.log(password.special);
    console.log(
      "Your password is " + password.length + " characters in length"
    );

    //Define charsets; added "," to end of array so, when combined,
    var numbers = "1,2,3,4,5,6,7,8,9,0,";
    var upperC = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,";
    var lowerC = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,";
    var special = "!,@,#,$,%,^,&,*,(,),<,>,?,{,},],[,:,;,";

    // filter charsets according to password key confirmation inputs
    let charSet = "";

    if (password.numbers === true) {
      charSet = charSet + numbers;
    }

    if (password.upperCase === true) {
      charSet = charSet + upperC;
    }

    if (password.lowerCase === true) {
      charSet = charSet + lowerC;
    }

    if (password.special === true) {
      charSet = charSet + special;
    }

    console.log(charSet);

    // split string into array & eliminate blank spaces within array
    finalCharset = charSet.split(",").filter((item) => item);

    console.log(finalCharset);

    // generate password of length equal to password.length
    for (let finalPass = 0; finalPass < password.length; finalPass++) {}
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
