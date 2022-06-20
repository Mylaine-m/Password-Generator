const characters =
["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPassword = ""
let secondPassword = ""
let passwordLength = 15
let firstPasswordEl = document.getElementById("first-password-el")
let secondPasswordEl = document.getElementById("second-password-el")
let passwordLengthEl = document.getElementById("password-lenght-el")


function getRandomCharacter() {
    let randomIndex = Math.floor ( Math.random() * characters.length)
    return characters[randomIndex]
}

function getRandomPassword() {
    let password = ""
    for (let i = 0; i < passwordLength; i++) {
        password += getRandomCharacter()
    }
    return password
}

function generatePasswords() {
    firstPassword = getRandomPassword()
    firstPasswordEl.textContent = firstPassword

    secondPassword = getRandomPassword()
    secondPasswordEl.textContent = secondPassword
}


