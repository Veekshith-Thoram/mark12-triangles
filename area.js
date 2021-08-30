const base = document.querySelector("#base");
const height = document.querySelector("#height");
const submit = document.querySelector("#submit");
const outputEl = document.querySelector("#output");

function calculateArea(){
    if(base.value && height.value != ""){
    const area = (Number(base.value)*Number(height.value))/2;
    outputEl.innerHTML = "<p>The area of the Triangle is " + area + "cm<sup>2</sup></p>";
    } else {
        outputEl.innerHTML = "please enter the base and height of the triangle";
    }
}

submit.addEventListener("click", calculateArea);