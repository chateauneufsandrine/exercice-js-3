let monBouton = document.querySelector("button");
let inputPassword = document.querySelector("#password");
let inputConfirmPassword = document.querySelector("#confirmPassword");
// console.log(monBouton);
// console.log(inputPassword);
// console.log(inputConfirmPassword);

monBouton.addEventListener("click", handleClickVerification);



function handleClickVerification() {
  // console.log("hello world");

  if ( inputPassword.value  !== inputConfirmPassword.value ) {
    inputPassword.classList.remove("border-green");
    inputPassword.classList.add("border-red");
    
      inputConfirmPassword.classList.remove("border-green");
    inputConfirmPassword.classList.add("border-red");
  } else  {
      inputPassword.classList.remove("border-red");
      inputPassword.classList.add("border-green");

      inputConfirmPassword.classList.remove("border-red");
      inputConfirmPassword.classList.add("border-green");
    }
}
