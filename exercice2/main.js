let maBaliseTexte = document.querySelector("#text");
let maBaliseBoutonAfficher = document.querySelector("#Afficher");
let maBaliseBoutonMasquer = document.querySelector("#Masquer");

maBaliseBoutonAfficher.addEventListener("click", handleClickDisplay);
maBaliseBoutonMasquer.addEventListener("click", handleClickHide);

function handleClickDisplay() {
      maBaliseTexte.classList.remove("hidden");
      maBaliseTexte.classList.add("flex");     
}

function handleClickHide() {
      maBaliseTexte.classList.remove("flex");
      maBaliseTexte.classList.add("hidden");
}