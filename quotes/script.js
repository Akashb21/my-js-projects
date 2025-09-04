const qoutes = [
    
        " Be yourself; everyone else is already taken.",
        "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        "Be the change that you wish to see in the world.",
]
const content =document.getElementById("para");

let currentindex = 0;

function nextfn(){
   if(currentindex < (qoutes.length-1)){
    currentindex++;
    content.innerHTML = `"${qoutes[currentindex]} "`;
   }
}

function backfn(){
    if(currentindex > 0){
        currentindex--;
        content.innerHTML = `"${qoutes[currentindex]} "`;
     }
 }
