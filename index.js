const characters =
["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPassword = ""
let secondPassword = ""
const lengthEl = document.getElementById("length-el")
const firstPasswordEl = document.getElementById("first-password-el")
const secondPasswordEl = document.getElementById("second-password-el")
const errorEl = document.getElementById("error-el")


function getRandomCharacter() {
    let randomIndex = Math.floor ( Math.random() * characters.length)
    return characters[randomIndex]
}

function getRandomPassword() {
    let password = ""
    let passwordLength = lengthEl.value
    let errorMessage = "Please choose a number between 6 and 20"

    if (passwordLength > 5 && passwordLength < 21 ) {
        
        for (let i = 0; i < passwordLength; i++) {
            password += getRandomCharacter()
        }
        return password
    } else {
        errorEl.textContent = errorMessage
    }
}

function generatePasswords() {
    firstPassword = getRandomPassword()
    firstPasswordEl.textContent = firstPassword
    copyOnclick(firstPasswordEl)

    secondPassword = getRandomPassword()
    secondPasswordEl.textContent = secondPassword
    copyOnclick(secondPasswordEl)
}

// copy password on click feature
function copyOnclick(password) {
    password.onclick = function() {
        document.execCommand("copy");
      }
      password.addEventListener("copy", function(event) {
        event.preventDefault()
        if (event.clipboardData) {
          event.clipboardData.setData("text/plain", password.textContent)
          console.log(event.clipboardData.getData("text"))

        }
      })
}

