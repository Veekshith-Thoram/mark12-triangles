const side = document.querySelectorAll(".side-input");
const submit = document.querySelector("#submit");
const outputEl = document.querySelector("#output");

function calculateHypotenuse(){
    const hypotenuse = Math.sqrt((Number(side[0].value)*Number(side[0].value))+(Number(side[1].value)*Number(side[1].value)));
    outputEl.innerText = "The length of Hypotenuse is " + hypotenuse;
}

submit.addEventListener("click", calculateHypotenuse);