var inputBreadth = document.querySelector("#input-breadth");
var inputHeight = document.querySelector("#input-height");
var btnCalculate = document.querySelector("#btn-calculate");
var outputValue = document.querySelector(".output-area");

btnCalculate.addEventListener("click", calculateArea);

function calculateArea(){
    var b =  Number(inputBreadth.value);
    var h =  Number(inputHeight.value);
    var area =  (0.5) * b * h;
    outputValue.innerText ="Area is "+ area+"cm";
}