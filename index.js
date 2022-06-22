const characters =
["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPassword = ""
let secondPassword = ""
let passwordLength = 15
let firstPasswordEl = document.getElementById("first-password-el")
const secondPasswordEl = document.getElementById("second-password-el")
const passwordLengthEl = document.getElementById("password-lenght-el")


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

function copyOnclick(password) {
    password.onclick = function() {
        document.execCommand("copy");
      }
      
      password.addEventListener("copy", function(event) {
        event.preventDefault();
        if (event.clipboardData) {
          event.clipboardData.setData("text/plain", password.textContent);
          console.log(event.clipboardData.getData("text"))

        }
      });
}

function generatePasswords() {
    firstPassword = getRandomPassword()
    firstPasswordEl.textContent = firstPassword
    copyOnclick(firstPasswordEl)
    secondPassword = getRandomPassword()
    secondPasswordEl.textContent = secondPassword
    copyOnclick(secondPasswordEl)
}


