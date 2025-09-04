let inputBox = document.getElementById("inBox");
 inputBox.max = new Date().toISOString().split("T")[0];
let p = document.getElementById("result");
function calculate(){
    let birthDate = new Date(inputBox.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth() + 1;
    let y1 = birthDate.getFullYear();

    let currentDate = new Date();
    let d2 = currentDate.getDate();
    let m2 = currentDate.getMonth() +1;
    let y2 = currentDate.getFullYear();

    let d3,m3,y3;
        y3 = y2-y1;
    if(m2 >= m1){
        m3 = m2 - m1;
    }
    else{
        y3--;
        m3 = 12 + (m2-m1);
    }
    if(d2 >= d1){
        d3 = d2-d1;
    }
    else{
       m3--;
       let totalDays = new Date(y1,m1,0).getDate();
       d3 = totalDays + (d2-d1);
       console.log(totalDays);
    }
    p.innerHTML = `you are <span>${y3}</span> years, <span> ${m3}</span> months and <span>${d3}</span> days old`;
}