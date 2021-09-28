var angleInput = document.querySelectorAll(".input-angle");
var btnSubmit = document.querySelector("#btn-submit-angles");
var outputMessage = document.querySelector("#output-message");


btnSubmit.addEventListener("click", validateAngle);

function validateAngle() {
    hideMessage();
    if (!angleInput[0].value) {
        showMessage("Please enter the First one");
    } else {
        if (!angleInput[1].value) {
            showMessage("hey you missed to input the second angle");
        } else {
            if (!angleInput[2].value) {
                showMessage("hello .. please enter the third angle");
            }else{
                var sum =  calculateSum(Number(angleInput[0].value),Number(angleInput[1].vaue), Number(angleInput[2].value));
                if(isValidTriangle(sum)){
                    showMessage("Hey! its a triangle");
                }
                else{
                    showMessage("Ohh no... ohh noo..its not a triangle");
                }
            }
        }
    }

}


function showMessage(message) {
    outputMessage.style.display = "block";
    outputMessage.innerText = message;
}

function hideMessage() {
    outputMessage.style.dislay = "none";
}

function calculateSum(angle1, angle2,angle3){
    var output = angle1 + angle1 +angle3;
    return output;
}

function isValidTriangle(sumOfAngles){
    var isTriangle = false;
    if(sumOfAngles ===180){
        isTriangle =true;
    }  
    return isTriangle;   
}