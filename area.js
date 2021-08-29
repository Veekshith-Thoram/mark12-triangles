const base = document.querySelector("#base");
const height = document.querySelector("#height");
const submit = document.querySelector("#submit");
const outputEl = document.querySelector("#output");

function calculateArea(){
    const area = (Number(base.value)*Number(height.value))/2;
    outputEl.innerText = "The area of the Triangle is " + area;
}

submit.addEventListener("click", calculateArea);