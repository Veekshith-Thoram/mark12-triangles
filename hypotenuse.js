const side = document.querySelectorAll(".side-input");
const submit = document.querySelector("#submit");
const outputEl = document.querySelector("#output");

function calculateHypotenuse(){
    if(side[0].value&&side[1].value != ""){
    const hypotenuse = Math.sqrt((Number(side[0].value)*Number(side[0].value))+(Number(side[1].value)*Number(side[1].value)));
    outputEl.innerText = "The length of Hypotenuse is " + hypotenuse;
    } else {
        outputEl.innerText = "Please enter the values of both sides";
    }
}

submit.addEventListener("click", calculateHypotenuse);