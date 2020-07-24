// Assignment Code
var generateBtn = document.querySelector("#generate");

let upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
let special = ['+', '-', '&', '!', '(', ')', '{', '}', '[', ']', '^', '~', '*', '?', ':']

// Assignment Code continued
function generatePassword() {
    let length = prompt('how many characters would you like your password to be (8-128 char?)')
    let upperChoice = confirm('Do you want any uppercase values?')
    let lowerChoice = confirm('Do you want any lower case values?')
    let numberChoice = confirm('Do you want any numbers included?')
    let specialChoice = confirm('Do you want any special characters included?')
    let userselections = []
    let password = ''

    //Uppercase add
    if (upperChoice) {
        userselections.push(upperCase)
        console.log(userselections[0])
    }
    // Lowercase add
    if (lowerChoice) {
        userselections.push(lowerCase)
        console.log(userselections)
    }
    // Numbers add
    if (numberChoice) {
        userselections.push(numbers)
        console.log(userselections)

    }
    // Special Characters add
    if (specialChoice) {
        userselections.push(special)
        console.log(userselections)
    }
    // Randomization selection
    for (i = 0; i < length; i++) {
        var firstindex = Math.floor(Math.random() * userselections.length)
        var secondindex = Math.floor(Math.random() * userselections[firstindex].length)
        console.log(userselections[firstindex][secondindex])
        password += userselections[firstindex][secondindex]
        // console.log(i)
    }
    // Return for visual 
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
