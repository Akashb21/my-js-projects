const card = document.getElementById("card");
const Btn = document.getElementById("btn");

function subBtn() {
  card.style.display = "block";

  Btn.style.display = "none";
}
function backFn() {
  card.style.display = "none";
  Btn.style.display = "block";
}
