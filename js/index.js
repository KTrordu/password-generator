const characters = ["A","B","C","D","E","F","G","H","I","J","K","L",
    "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b",
    "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
    "s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5",
    "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*",
    "(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passLengthEl = document.getElementById("input");
const defaultPassLength = 15;

function generatePass() {
    
    if (passLengthEl.value > 15) {
        alert("Your password length can be at most 15.");
        return;
    }
    
    let pass1 = "";
    let pass2 = "";

    
    let passLength = passLengthEl.value;
    let passHolder;
    let passCharacter;
    
    for (let i = 0; i < passLength; i++) {
        passCharacter = Math.floor(Math.random() * characters.length);
        passHolder = characters[passCharacter];

        pass1 += passHolder;
    }

    for (let i = 0; i < passLength; i++) {
        passCharacter = Math.floor(Math.random() * characters.length);
        passHolder = characters[passCharacter];

        pass2 += passHolder;
    }

    document.getElementById("pass1").innerHTML = pass1;
    document.getElementById("pass2").innerHTML = pass2;
}