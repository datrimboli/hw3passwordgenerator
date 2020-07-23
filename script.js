// Assignment Code
var generateBtn = document.querySelector("#generate");

let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
let special = ['+', '-', '&', '!', '(', ')', '{', '}', '[', ']', '^', '~', '*', '?', ':']

function generatePassword() {
    let length = prompt('how many characters would you like your password to be?')
    let upperChoice = confirm('Do you want any uppercase values?')
    let lowerChoice = confirm('Do you want any lower case values?')
    let numberChoice = confirm('Do you want any numbers included?')
    let specialChoice = confirm('Do you want any special characters included?')
    let password = ''

    if (upperChoice) {
        for (i = 0; i < length; i++) {
            password += upperCase[Math.floor(Math.random() * upperCase.length)] 
            console.log(i)
        }
    }
    else if (lowerChoice) {
        for (i = 0; i < length; i++) {
            password += lowerCase[Math.floor(Math.random() * lowerCase.length)] 
            console.log(i)
        }
    }
    else if (numberChoice) {
        for (i = 0; i < length; i++) {
            password += numbers[Math.floor(Math.random() * numbers.length)] 
            console.log(i)
        }
    }
    else if (specialChoice) {
        for (i = 0; i < length; i++) {
            password += special[Math.floor(Math.random() * special.length)]
            console.log(i)
        } 
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
