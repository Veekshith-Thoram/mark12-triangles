const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-ans-btn");
const outputEl = document.querySelector("#output");

const correctAnswers = ["90" , "right-angled"];
function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let entry of formResults.values()){
        if(entry === correctAnswers[index]){
            score = score+1;
        }
        index = index + 1;
    }
    outputEl.innerText = "Your score is " + score;
}
submitBtn.addEventListener("click", calculateScore)