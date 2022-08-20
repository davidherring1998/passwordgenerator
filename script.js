//setting shortcut for generate id 
var generateBtn = document.querySelector("#generate");

//setting event listener for button 
generateBtn.addEventListener('click', choices);

//making function to be called when button is pushed
function choices() {
                //making the prompt 
                let lengthChar = prompt('How many characters would you like?\nChoose between 8-128');
                let length = lengthChar;
                if (length != null) {

                //alert if number is not correct
        if (length < 8 || length > 128)  {
            alert("Please choose a number between 8 - 128");
            return;
        }
                //making comfim prompts 

                    const lowerCase = confirm('Do you want lowercase?')
                    const upperCaseChar = confirm("Do you want uppercase?")
                    const number = confirm("Do you want numbers?")
                    const symbols = confirm("Do you want special characters?")
                    
                // making the variations
                    if (upperCaseChar === true && number === true && symbols === true && lowerCase === true) {
                    const upperCase = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+';
                    let password = ""
                // creating random number to choose random characters
                    for (let i = 0; i < length; i++) {
                    let randomNum = Math.floor(Math.random() * upperCase.length);
                    password += upperCase.substring(randomNum, randomNum + 1);
                    document.getElementById('password').innerHTML = password;
}
                  } else if (upperCaseChar === true &&  lowerCase === true && number === true && symbols != true) {
                    const upperCase = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
                    let password = ""
                    for (let i = 0; i < length; i++) {
                    let randomNum = Math.floor(Math.random() * upperCase.length);
                    password += upperCase.substring(randomNum, randomNum + 1);
                    document.getElementById('password').innerHTML = password;
}       
                 }  else if (upperCaseChar === true && lowerCase === true && number != true && symbols != true) {
                    const upperCase = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
                    let password = ""
                    for (let i = 0; i < length; i++) {
                    let randomNum = Math.floor(Math.random() * upperCase.length);
                    password += upperCase.substring(randomNum, randomNum + 1);
                    document.getElementById('password').innerHTML = password;
}                 
                }  else if (upperCaseChar === true && lowerCase != true  && number != true && symbols != true) {
                    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                    let password = ""
                    for (let i = 0; i < length; i++) {
                    let randomNum = Math.floor(Math.random() * upperCase.length);
                    password += upperCase.substring(randomNum, randomNum + 1);
                    document.getElementById('password').innerHTML = password;


                }   }   else if (upperCaseChar === true && number != true && symbols === true){
                    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+';
                    let password = ""
                    for (let i = 0; i < length; i++) {
                    let randomNum = Math.floor(Math.random() * upperCase.length);
                    password += upperCase.substring(randomNum, randomNum + 1);
                    document.getElementById('password').innerHTML = password;

                }   }   else if (upperCaseChar === true && lowerCase != true &&  number === true && symbols != true){
                    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
                    let password = ""
                    for (let i = 0; i < length; i++) {
                    let randomNum = Math.floor(Math.random() * upperCase.length);
                    password += upperCase.substring(randomNum, randomNum + 1);
                    document.getElementById('password').innerHTML = password; 

           }   }    else if ( lowerCase === true && upperCaseChar != true &&  number != true && symbols != true){
                    const upperCase = 'abcdefghijklmnopqrstuvwxyz';
                    let password = ""
                    for (let i = 0; i < length; i++) {
                    let randomNum = Math.floor(Math.random() * upperCase.length);
                    password += upperCase.substring(randomNum, randomNum + 1);
                    document.getElementById('password').innerHTML = password;

            }   }   else if (upperCaseChar != true && lowerCase === true && number === true && symbols === true){
                    const upperCase = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
                    let password = ""
                    for (let i = 0; i < length; i++) {
                    let randomNum = Math.floor(Math.random() * upperCase.length);
                    password += upperCase.substring(randomNum, randomNum + 1);
                    document.getElementById('password').innerHTML = password;

            }   }   else if (upperCaseChar != true && number != true && lowerCase === true && symbols === true){
                    const upperCase = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+';
                    let password = ""
                    for (let i = 0; i < length; i++) {
                    let randomNum = Math.floor(Math.random() * upperCase.length);
                    password += upperCase.substring(randomNum, randomNum + 1);
                    document.getElementById('password').innerHTML = password;

                }   }   else if (upperCaseChar != true && lowerCase === true &&  number === true && symbols != true){
                    const upperCase = '0123456789';
                    let password = ""
                    for (let i = 0; i < length; i++) {
                    let randomNum = Math.floor(Math.random() * upperCase.length);
                    password += upperCase.substring(randomNum, randomNum + 1);
                    document.getElementById('password').innerHTML = password;

                }   }   else if (upperCaseChar != true && number != true && symbols === true){
                    const upperCase = '!@#$%^&*()_+';
                    let password = ""
                    for (let i = 0; i < length; i++) {
                    let randomNum = Math.floor(Math.random() * upperCase.length);
                    password += upperCase.substring(randomNum, randomNum + 1);
                    document.getElementById('password').innerHTML = password;

                }   }   else {
                    alert('please try again')
                }

 }
 }

