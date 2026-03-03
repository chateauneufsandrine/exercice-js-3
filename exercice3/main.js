let maBaliseTexte = document.querySelector("#text");
let boutonRouge = document.querySelector(".red");
let boutonVert = document.querySelector(".green");
let boutonBleu = document.querySelector(".blue");

///BOUTON ROUGE//////////////////////////////////////////////////
boutonRouge.addEventListener("click", handleClickRed);

function handleClickRed() {
  maBaliseTexte.classList.remove("red", "green", "blue");
  maBaliseTexte.classList.add("red");
}
/////BOUTON BLEU /////////////////////////////////////////////////
boutonBleu.addEventListener("click", handleClickBlue);

function handleClickBlue() {
  maBaliseTexte.classList.remove("red", "green", "blue");
  maBaliseTexte.classList.add("blue");
}
/////BOUTON VERT//////////////////////////////////////////////////////////
boutonVert.addEventListener("click", handleClickGreen);

function handleClickGreen() {
  maBaliseTexte.classList.remove("red", "green", "blue");
  maBaliseTexte.classList.add("green");
}
