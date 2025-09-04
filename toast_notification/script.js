
let toastBox = document.getElementById("info");

let success = ' <i class="fa-solid fa-circle-check"></i> successfully submited';
let error = '<i class="fa-solid fa-circle-xmark"></i> please fix the error!';
let invalid = '<i class="fa-solid fa-circle-exclamation"></i>Invalid input, Check again';

function shownot(msg){
    let toast = document.createElement("div");
    toast.classList.add("notif");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);
    if(msg === error){
        toast.classList.add("error");
    }
    if(msg === invalid){
        toast.classList.add("invalid");
    }
    setTimeout(() => {
        toast.remove();
    }, 6000);
}