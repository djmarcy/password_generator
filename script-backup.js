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

    getPassword(
      password.numbers,
      password.upperCase,
      password.lowerCase,
      password.special,
      password.length
    );

    function getPassword(number, upper, lower, special, pwlength) {
      const ranNum = {
        number: getNumber,
        upper: getUpper,
        lower: getLower,
        special: getSpecial,
        pwlength: password.length,
      };

      // Generate Password
      let getPassword = "";
      const charTypes = number + upper + lower + special;

      // Show number of chosen character sets (character sets w/ values of "true")
      console.log("charType: " + charTypes);

      // return which character sets are "True", or to be included in password
      const charArray = [number, upper, lower, special].filter(Boolean);
      console.log("charArray: " + charArray);

      // if no character sets are selected, return blank
      if (charTypes === 0) {
        return "";
      }

      // include only valid characters in array
      let passChars = [""];
      if ((charTypes = number)) {
        passChars.concat();
      }

      // For loop, take selected charsets and use a for loop to generate a password
      for (let i = 0; i < pwlength; i += charTypes) {
        charArray.forEach((type) => {
          const ranChar = Object.keys(type)[0];
          getPassword += ranNum[ranChar];
        });
      }

      var finalPass = getPassword.slice(0, pwlength);

      return finalPass;
    }

    function getNumber() {
      const num = "1,2,3,4,5,6,7,8,9,0,";
      return num[Math.floor(Math.random() * num.length)];
    }
    function getUpper() {
      const upperC = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,";
      return upperC[Math.floor(Math.random() * upperC.length)];
    }
    function getLower() {
      const lowerC = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,";
      return lowerC[Math.floor(Math.random() * lowerC.length)];
    }
    function getSpecial() {
      const spec = "!,@,#,$,%,^,&,*,(,),<,>,?,{,},],[,:,;,";
      return spec[Math.floor(Math.random() * spec.length)];
    }

    // Get random variable of selected type
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
