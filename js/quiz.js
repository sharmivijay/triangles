var inputForm =  document.querySelector(".quiz-form");
var btnSubmit =  document.querySelector("#btn-submit-form");
var outputText =  document.querySelector("#output-text"); 

btnSubmit.addEventListener("click", calculateScore);

const correctAnswers = ["90°","right angled"];

function calculateScore(){
 hideOuputText();
    var score=0;
    var index= 0;
    var formData = new FormData(inputForm);
    for(var value of formData.values()){
        if(value === correctAnswers[index]){
            score = score+1;
        }
        index=index+1;
    }
    showOutputText("Your score: "+score);
    
}

function hideOuputText(){
    outputText.style.display = "none";
}

function showOutputText(message){
    outputText.style.display = "block";
    outputText.innerText=message;
}