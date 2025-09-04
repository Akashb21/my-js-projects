const inputBox = document.getElementById("pass");

const len = 10;
const upperCase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const num = "1234567890";
const sym = "@#$%&*!'_-=^<>?/";
const allChar = upperCase + lowerCase + num + sym ;


function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * (upperCase.length))];
    password += lowerCase[Math.floor(Math.random() * (lowerCase.length) )];
    password += num[Math.floor(Math.random() * (num.length))];
    password += sym[Math.floor(Math.random() * (sym.length))];

    while(len > password.length){
        password += allChar[Math.floor(Math.random() * (allChar.length))];
    }
    inputBox.value = password;
}
function copyText(){
    inputBox.select();
    document.execCommand("copy");
}
