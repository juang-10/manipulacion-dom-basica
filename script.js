const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult = document.querySelector("#result")


btn.addEventListener('click', sumarInputValue)

function sumarInputValue() {
  // event.preventDefault();
  // console.log({event});
  const firstInput = parseInt(input1.value);
  const secondInput = parseInt(input2.value);
  const sumaInputs = firstInput + secondInput;

  pResult.innerText = "Resultado: " + sumaInputs 
}

form.addEventListener("focus", function( event ) {
  event.target.style.background = "pink";
}, true);
form.addEventListener("blur", function( event ) {
  event.target.style.background = "";
}, true);
// form.addEventListener('submit', sumarInputValue)

// function sumarInputValue(event) {
//   event.preventDefault();
//   console.log({event});
//   const firstInput = parseInt(input1.value);
//   const secondInput = parseInt(input2.value);
//   const sumaInputs = firstInput + secondInput;

//   pResult.innerText = "Resultado: " + sumaInputs 
// }
