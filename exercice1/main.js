// let maBaliseImage = document.querySelector("#image1");

// maBaliseImage.addEventListener("mouseenter", handleClickChangerpuce);
// maBaliseImage.addEventListener("mouseleave", handleLeaveChangerpuce);

// function handleClickChangerpuce() {
//   maBaliseImage.classList.add("border-red");
// }

// function handleLeaveChangerpuce() {
//   maBaliseImage.classList.remove("border-red");
// }

// VERSION AMELIOREE/////////////////////////////////////////////////////////////////

let maBaliseImage = document.querySelector("#image1");

maBaliseImage.addEventListener("mouseenter", handleHoverImg);
maBaliseImage.addEventListener("mouseleave", handleHoverImg);

function handleHoverImg() {
  maBaliseImage.classList.toggle("border-red");
}


