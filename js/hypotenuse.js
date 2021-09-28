var inputSide1 = document.querySelector(".input-side1");
var inputSide2 = document.querySelector(".input-side2");
var btnCheck =  document.querySelector("#btn-check");
var outputText = document.querySelector("#output-msg");

btnCheck.addEventListener("click", calculateHypotenuse);

function calculateHypotenuse(){
   var hypotenuse = 0;
   var a = Number(inputSide1.value); 
   var b = Number(inputSide2.value);
   var sumOfSides = (a*a) + (b*b);
   outputText.innerText = "The length of the hypotenuse: "+Math.sqrt(sumOfSides);
}

